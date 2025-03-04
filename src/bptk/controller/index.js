/* Author: ErdemOzgen */

export class bptk_controller_index {

    init() {
        let self = this
        return browser.runtime.sendMessage({ channel: "bptk_popup2background_dashboard", type: "init" })
            .then(function (result) {
                Object.assign(self, result)
                return self
            }).catch(e => e)
    }

    async complete(wappalyzer) {
        let self = this
        browser.runtime.sendMessage({ channel: "bptk_popup2background_dashboard", type: "analyze", info: wappalyzer }).catch(e => e)
        return Promise.resolve()
    }

    async get() {
        let self = this
        return browser.runtime.sendMessage({ channel: "bptk_popup2background_dashboard", type: "get" })
            .then(function (result) {
                Object.assign(self, result)
                return self
            }).catch(e => e)
    }

    async save(items) {
        return browser.runtime.sendMessage({ channel: "bptk_popup2background_dashboard", type: "save", items: items }).catch(e => e)
    }

}
