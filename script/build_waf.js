import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const fs = require('fs-extra')
const request = require('request')


//wappalyzer
let categories = {}

request.get(`https://raw.githubusercontent.com/dochne/wappalyzer/main/src/categories.json`, function (error, response, body) {
    categories = JSON.parse(body)
})
await new Promise(resolve => { setTimeout(resolve, 100) })

let technologies = {}

for (const index of Array(27).keys()) {
    const character = index ? String.fromCharCode(index + 96) : '_'
    request.get(`https://raw.githubusercontent.com/dochne/wappalyzer/main/src/technologies/${character}.json`, function (error, response, body) {
        technologies = {
            ...technologies,
            ...JSON.parse(body)
        }
    })
    await new Promise(resolve => { setTimeout(resolve, 300) })
}

fs.writeFileSync('./src/bptk/packages/wappalyzer/technologies.json', JSON.stringify({ categories: categories, technologies: technologies }, null, 4))
console.log('wappalyzer source updated')


//wafw00f
// fs.removeSync('./misc/tmp/')
// const clone = require('git-clone/promise')
// await clone("https://github.com/EnableSecurity/wafw00f.git", "./misc/tmp/wafw00f");


const download = require('clone-git-repo/index')
await download('EnableSecurity/wafw00f', './misc/tmp/wafw00f', function (err) {
    console.log(err ? 'Error' + err : 'Success')
    var data =
    {
        "categories": {
            "100": {
                "name": "WAF",
                "priority": 1
            }
        },
        "technologies": {}
    }

    function readFiles(dirname, onFileContent, onError) {
        var fs = require('fs'),
            files = fs.readdirSync(dirname)

        files.forEach(function (file) {
            var content = fs.readFileSync(dirname + file, 'utf8');
            let [name, item] = createItem(content)
            if (name) {
                data.technologies[name] = item

            }
        });

        fs.writeFile('./src/bptk/packages/wappalyzer/waf.json', JSON.stringify(data, null, 4), function (err) {
            if (err) console.log(err);
        })
        console.log('waf source updated')

    }



    function createItem(content) {

        var nameRegex = /NAME\s?=\s?'(.+)'/,
            headerRegex = /self\.matchHeader\(\((.+),(.+)\)\)/g,
            htmlRegex = /self\.matchContent\(r?'(.+)'\)/g,
            cookieRegex = /self\.matchCookie\(r?'(.+)'\)/g

        if (nameRegex.test(content)) {
            let item = { "cats": [100] }


            let n = nameRegex.exec(content), name = n[1]

            if (headerRegex.test(content)) {
                item["headers"] = {}
                let m = null, re = new RegExp(headerRegex)
                while (m = re.exec(content)) {
                    item.headers[m[1].replace(/'/g, "")] = m[2].replace(" r'", '').replace("'", '')
                }
            }

            if (htmlRegex.test(content)) {
                item["html"] = []
                let m = null, re = new RegExp(htmlRegex)
                while (m = re.exec(content)) {
                    item.html.push(m[1])
                }
            }

            if (cookieRegex.test(content)) {
                item["cookies"] = {}
                let m = null, re = new RegExp(cookieRegex)
                while (m = re.exec(content)) {
                    item.cookies[m[1]] = ""
                }
            }
            return [name, item]
        }
        return [null, null]
    }


    readFiles("./misc/tmp/wafw00f/wafw00f/plugins/")
    fs.removeSync('./misc/tmp/wafw00f')

})

