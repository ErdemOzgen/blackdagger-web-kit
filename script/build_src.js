import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const fs = require('fs-extra')
const request = require('request')

//lodash-es
if (!fs.existsSync('src/bptk/packages/lodash-es')) {
    fs.mkdirSync('src/bptk/packages/lodash-es', { recursive: true });
}
fs.copySync('./node_modules/lodash-es', 'src/bptk/packages/lodash-es', { recursive: true })

//browser-polyfill
if (!fs.existsSync('src/bptk/packages/browser-polyfill')) {
    fs.mkdirSync('src/bptk/packages/browser-polyfill', { recursive: true });
}
fs.copyFile('node_modules/webextension-polyfill/dist/browser-polyfill.min.js', 'src/bptk/packages/browser-polyfill/browser-polyfill.min.js', (err) => {
    if (err) throw err;
});
fs.copyFile('./node_modules/webextension-polyfill/dist/browser-polyfill.min.js.map', 'src/bptk/packages/browser-polyfill/browser-polyfill.min.js.map', (err) => {
    if (err) throw err;
});


//wappalyzer
// if (!fs.existsSync('src/bptk/packages/wappalyzer')) {
//     fs.mkdirSync('src/bptk/packages/wappalyzer', { recursive: true });
// }
// fs.copyFileSync('node_modules/wappalyzer/wappalyzer.js', 'src/bptk/packages/wappalyzer/wappalyzer.js');
// fs.appendFile('src/bptk/packages/wappalyzer/wappalyzer.js', 'export { Wappalyzer }', function (err) {
//     if (err) throw err;
// });


//jquery
if (!fs.existsSync('src/bptk/packages/jquery')) {
    fs.mkdirSync('src/bptk/packages/jquery', { recursive: true });
}
fs.copyFile('./node_modules/jquery/dist/jquery.min.js', 'src/bptk/packages/jquery/jquery.min.js', (err) => {
    if (err) throw err;
});
fs.copyFile('./node_modules/jquery/dist/jquery.min.map', 'src/bptk/packages/jquery/jquery.min.map', (err) => {
    if (err) throw err;
});
// fs.copyFile('./node_modules/datatables.net/js/jquery.dataTables.min.js', 'src/bptk/packages/jquery/jquery.dataTables.min.js', (err) => {
//     if (err) throw err;
// });


//semantic-ui / fomantic-ui
if (!fs.existsSync('src/bptk/packages/semantic-ui')) {
    fs.mkdirSync('src/bptk/packages/semantic-ui', { recursive: true });
}
fs.copyFile('./node_modules/fomantic-ui/dist/semantic.min.js', 'src/bptk/packages/semantic-ui/semantic.min.js', (err) => {
    if (err) throw err;
});
fs.copyFile('./node_modules/fomantic-ui/dist/semantic.min.css', 'src/bptk/packages/semantic-ui/semantic.min.css', (err) => {
    if (err) throw err;
});

if (!fs.existsSync('src/bptk/packages/semantic-ui/themes/default')) {
    fs.mkdirSync('src/bptk/packages/semantic-ui/themes/default', { recursive: true });
}
fs.copySync('./node_modules/fomantic-ui/dist/themes/default', 'src/bptk/packages/semantic-ui/themes/default', { recursive: true })


//codemirror
if (!fs.existsSync('src/bptk/packages/codemirror')) {
    fs.mkdirSync('src/bptk/packages/codemirror', { recursive: true });
}
fs.copyFileSync('./node_modules/codemirror-minified/lib/codemirror.js', 'src/bptk/packages/codemirror/codemirror.js');
fs.copyFileSync('./node_modules/codemirror-minified/lib/codemirror.css', 'src/bptk/packages/codemirror/codemirror.css');
fs.copyFileSync('./node_modules/codemirror-minified/lib/codemirror.css', 'src/bptk/packages/codemirror/codemirror.css');
if (!fs.existsSync('src/bptk/packages/codemirror/addon/fold/')) {
    fs.mkdirSync('src/bptk/packages/codemirror/addon/fold/', { recursive: true });
    fs.mkdirSync('src/bptk/packages/codemirror/addon/search/', { recursive: true });
    fs.mkdirSync('src/bptk/packages/codemirror/addon/selection/', { recursive: true });
    fs.mkdirSync('src/bptk/packages/codemirror/mode/xml/', { recursive: true });
    fs.mkdirSync('src/bptk/packages/codemirror/mode/javascript/', { recursive: true });
    fs.mkdirSync('src/bptk/packages/codemirror/mode/http/', { recursive: true });
    fs.mkdirSync('src/bptk/packages/codemirror/mode/htmlmixed/', { recursive: true });
    fs.mkdirSync('src/bptk/packages/codemirror/mode/css/', { recursive: true });
}
fs.copySync('./node_modules/codemirror-minified/addon/fold', 'src/bptk/packages/codemirror/addon/fold', { recursive: true })
fs.copySync('./node_modules/codemirror-minified/addon/search', 'src/bptk/packages/codemirror/addon/search', { recursive: true })
fs.copySync('./node_modules/codemirror-minified/addon/selection', 'src/bptk/packages/codemirror/addon/selection', { recursive: true })
fs.copySync('./node_modules/codemirror-minified/mode/xml', 'src/bptk/packages/codemirror/mode/xml', { recursive: true })
fs.copySync('./node_modules/codemirror-minified/mode/javascript', 'src/bptk/packages/codemirror/mode/javascript', { recursive: true })
fs.copySync('./node_modules/codemirror-minified/mode/http', 'src/bptk/packages/codemirror/mode/http', { recursive: true })
fs.copySync('./node_modules/codemirror-minified/mode/htmlmixed', 'src/bptk/packages/codemirror/mode/htmlmixed', { recursive: true })
fs.copySync('./node_modules/codemirror-minified/mode/css', 'src/bptk/packages/codemirror/mode/css', { recursive: true })


//mermaid
if (!fs.existsSync('src/bptk/packages/mermaid')) {
    fs.mkdirSync('src/bptk/packages/mermaid', { recursive: true });
}
fs.copyFile('./node_modules/mermaid/dist/mermaid.min.js', 'src/bptk/packages/mermaid/mermaid.min.js', (err) => {
    if (err) throw err;
});


//swagger-editor
if (!fs.existsSync('src/bptk/packages/swagger-editor')) {
    fs.mkdirSync('src/bptk/packages/swagger-editor', { recursive: true });
}
fs.copyFile('./node_modules/swagger-editor/dist/swagger-editor.css', 'src/bptk/packages/swagger-editor/swagger-editor.css', (err) => {
    if (err) throw err;
});
fs.copyFile('./node_modules/swagger-editor/dist/swagger-editor-bundle.js', 'src/bptk/packages/swagger-editor/swagger-editor-bundle.js', (err) => {
    if (err) throw err;
});
request('https://raw.githubusercontent.com/swagger-api/swagger-editor/master/dist/swagger-editor-standalone-preset.js').pipe(fs.createWriteStream('src/bptk/packages/swagger-editor/swagger-editor-standalone-preset.js'))



//crypto-es
if (!fs.existsSync('src/bptk/packages/crypto-es')) {
    fs.mkdirSync('src/bptk/packages/crypto-es', { recursive: true });
}
fs.copySync('./node_modules/crypto-es/lib', 'src/bptk/packages/crypto-es', { recursive: true })


//jose
if (!fs.existsSync('src/bptk/packages/jose')) {
    fs.mkdirSync('src/bptk/packages/jose', { recursive: true });
}
fs.copySync('./node_modules/jose/dist/types', 'src/bptk/packages/jose/types', { recursive: true })
fs.copySync('./node_modules/jose/dist/webapi', 'src/bptk/packages/jose/webapi', { recursive: true })

//retire
if (!fs.existsSync('src/bptk/packages/retire')) {
    fs.mkdirSync('src/bptk/packages/retire', { recursive: true });
}
fs.removeSync('./misc/tmp/')

const download = require('clone-git-repo/index')
await download('RetireJS/retire.js', './misc/tmp/retire', function (err) {
    console.log(err ? 'Error' + err : 'Success')

    fs.copyFileSync('misc/tmp/retire/node/lib/retire.js', 'src/bptk/packages/retire/retire.js');
    fs.copyFile('misc/tmp/retire/repository/jsrepository.json', 'src/bptk/packages/retire/jsrepository.json', (err) => {
        if (err) throw err;
    });
    fs.appendFile('src/bptk/packages/retire/retire.js', 'export { exports as default }', function (err) {
        if (err) throw err;
    });
    fs.removeSync('./misc/tmp/retire')
})




// const clone = require('git-clone/promise')
// await clone("https://github.com/RetireJS/retire.js.git", "./misc/tmp/retire");
// fs.copyFileSync('misc/tmp/retire/node/lib/retire.js', 'src/bptk/packages/retire/retire.js');
// fs.copyFile('misc/tmp/retire/repository/jsrepository.json', 'src/bptk/packages/retire/jsrepository.json', (err) => {
//     if (err) throw err;
// });
// fs.appendFile('src/bptk/packages/retire/retire.js', 'export { exports as default }', function (err) {
//     if (err) throw err;
// });
// fs.removeSync('./misc/tmp/')
console.log('packages updated')
