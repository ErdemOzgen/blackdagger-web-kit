/* Author: ErdemOzgen */

export class bptk_controller_install {

    async init() {
        return browser.runtime.sendMessage({ channel: "bptk_popup2background_settings", type: "get_settings" })
            .then(function (response) {
                return response
            }).catch(e => e)
    }

    async save() {
        return browser.runtime.sendMessage({ channel: "bptk_popup2background_tabs", type: "clear" })
            .then(response => {
                return response
            }).catch(e => e)
    }
    
}
