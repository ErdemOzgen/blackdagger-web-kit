/* Author: ErdemOzgen */

import { bptk_exporter } from "../background/exporter.js"
import { bptk_importer } from "../background/importer.js"

export class bptk_controller_macro {
    constructor() {
        this.settings = {}
        this.recording = null
    }

    getSettings() {
        let self = this
        return browser.runtime.sendMessage({
            channel: "bptk_popup2background_settings",
            type: "get_settings",
            path: "macro"
        }).then(function (response) {
            Object.assign(self.settings, response)
            return response.settings
        })
    }

    updateSettings() {
        let self = this
        return browser.runtime.sendMessage({
            channel: "bptk_popup2background_settings",
            type: "update_settings",
            path: "macro",
            value: this.settings
        }).then(function (response) {
            return response.settings
        })
    }


    init() {
        let self = this
        return browser.runtime.sendMessage({ channel: "bptk_popup2background_recorder", type: "init" })
            .then(response => {
                Object.assign(self, response)
                return response
            })
    }

    save(macro) {
        return browser.runtime.sendMessage({ channel: "bptk_popup2background_recorder", type: "save_macro", macro: macro })
            .then(response => {
                return response
            })
    }

    reset() {
        return browser.runtime.sendMessage({ channel: "bptk_popup2background_recorder", type: "reset_recording" })
            .then(response => {
                return response
            })
    }

    start(clean_cookie, url) {
        return browser.runtime.sendMessage({
            channel: "bptk_popup2background_recorder",
            type: "start_recording",
            clean_cookie: clean_cookie,
            url: url
        }).then(response => {
            return response
        })
    }

    export() {
        if (this.recording) {
            let exporter = new bptk_exporter(this.recording, this.settings)
            return exporter.render()
        }
    }

    import(macro) {
        let importer = new bptk_importer(this.settings)
        return importer.parse(macro)
    }

    replay(clean_cookie, url, events, validate_regex) {
        return browser.runtime.sendMessage({
            channel: "bptk_popup2background_recorder",
            type: "replay",
            clean_cookie: clean_cookie,
            url: url,
            events: events,
            validate_regex: validate_regex
        }).then(response => {
            return response
        })
    }

    side2macro(macro) {
        let importer = new bptk_importer({ format: 'side' })
        return importer.parse(macro)
    }

}

