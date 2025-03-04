/* Author: ErdemOzgen */
'use strict'


import "./bptk/packages/browser-polyfill/browser-polyfill.min.js"

import { bptk_settings } from "./bptk/background/settings.js"
import { bptk_proxy } from "./bptk/background/proxy.js"
import { bptk_dashboard } from "./bptk/background/dashboard.js"
import { bptk_rattacker } from "./bptk/background/rattacker.js"
import { bptk_request_manager } from "./bptk/background/rbuilder.js"
import { bptk_decoder_manager } from "./bptk/background/decoder.js"
import { bptk_sca } from "./bptk/background/sca.js"
import { bptk_session } from "./bptk/background/session.js"
import { bptk_recorder } from "./bptk/background/recorder.js"
import { bptk_ruleManager } from "./bptk/background/utils.js"

import { bptk_portscanner } from "./bptk/background/portscanner.js"
import { bptk_jwt } from "./bptk/background/jwt.js"


const worker = self
worker.isFirefox = browser.runtime.getBrowserInfo ? true : false

export class bptk_app {
    constructor(settings) {

        this.settings = new bptk_settings(settings)

        browser.storage.local.get('pentestkit8_settings').then(function (result) {

            if (result.pentestkit8_settings) {
                this.settings.mergeSettings(result.pentestkit8_settings)
            } else {
                this.settings.resetSettings()
            }

            this.proxy = new bptk_proxy(this.settings.proxy)

            this.request_manager = new bptk_request_manager(this.settings.rbuilder)
            bptk_ruleManager.resetSession()

            this.rattacker = new bptk_rattacker(this.settings.rattacker)

            this.decoder_manager = new bptk_decoder_manager()

            this.sca = new bptk_sca()

            this.session = new bptk_session()

            this.dashboard = new bptk_dashboard()

            this.portscanner = new bptk_portscanner()

            this.jwt = new bptk_jwt()

            this.recorder = new bptk_recorder(settings.recorder)
            this.recorder.addMessageListeners()

            this.addMessageListeners()
        }.bind(this))
    }


    addMessageListeners() {
        browser.runtime.onMessage.addListener(function (message, sender, sendResponse) {
            if (message.channel == "bptk_popup2background_app") {
                if (message.type == "on_updated_settings") {
                    if (this.proxy) {
                        this.proxy.maxTabsCount = this.settings.proxy.max_tabs
                        this.proxy.maxRequestsPerTab = this.settings.proxy.max_requests_per_tab
                    }
                    if (this.rattacker) {
                        this.rattacker.loadProModules()
                    }
                }

                if (message.type == "reloadbptk") {
                    browser.runtime.reload()
                }

                if (message.type == "history") {
                    this.settings.updateSettings("history", { route: message.route, hash: message.hash })
                }

                if (message.type == "ping") {
                    return "pong"
                }
            }
        }.bind(this))
    }
}



browser.runtime.onInstalled.addListener(function (details) {
    // if (details.reason == "install") {
    //     browser.tabs.create({ url: browser.runtime.getURL('bptk/browser/oninstalled.html') })
    // }
    // else if (details.reason == "update") {
    //     browser.tabs.create({ url: browser.runtime.getURL('bptk/browser/onupdated.html') })
    // }
})

// Start BPTK app
fetch(browser.runtime.getURL('bptk/settings.json'))
    .then(response => response.json())
    .then(settings => {
        worker.bptk_app = new bptk_app(settings)
    })




