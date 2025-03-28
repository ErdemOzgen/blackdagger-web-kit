/* Author: ErdemOzgen */
import { bptk_exporter } from "../background/exporter.js"

export class bptk_controller_rbuilder {

    async init() {
        return browser.runtime.sendMessage({
            channel: "bptk_popup2background_request",
            type: "init"
        }).then(response => {
            return response
        }).catch(e => e)
    }

    async clear(index) {
        return browser.runtime.sendMessage({
            channel: "bptk_popup2background_request",
            type: "clear", 
            index: index
        }).then(response => {
            return response
        }).catch(e => e)
    }

    async resetAll() {
        return browser.runtime.sendMessage({
            channel: "bptk_popup2background_request",
            type: "reset_all"
        }).then(response => {
            return response
        }).catch(e => e)
    }


    async sendRequest(schema, formId) {
        return browser.runtime.sendMessage({
            channel: "bptk_popup2background_request",
            type: "send_request",
            schema: schema,
            formId: formId
        }).then(response => {
            return response
        })
    }

    async scanRequest(schema, formId) {
        return browser.runtime.sendMessage({
            channel: "bptk_popup2background_request",
            type: "scan_request",
            schema: schema,
            formId: formId
        }).then(response => {
            return response
        }).catch(e => e)
    }


    async parseRawRequest(raw, opts, formId) {
        return browser.runtime.sendMessage({
            channel: "bptk_popup2background_request",
            type: "parse_request",
            raw: raw, 
            opts: opts, 
            formId: formId
        }).then(response => {
            return response
        })
    }

    async updateRawRequest(schema, params, opts, formId) {
        return browser.runtime.sendMessage({
            channel: "bptk_popup2background_request",
            type: "update_request",
            schema: JSON.parse(JSON.stringify(schema)),
            params: params,
            opts: opts,
            formId: formId
        })
    }

    async deleteSavedRequest(formId) {
        return browser.runtime.sendMessage({
            channel: "bptk_popup2background_request",
            type: "delete_request",
            formId: formId
        }).then(response => {
            return response
        }).catch(e => e)
    }

    async export() {
        return browser.runtime.sendMessage({
            channel: "bptk_popup2background_request",
            type: "get_recording"
        }).then(response => {
            let exporter = new bptk_exporter(response, { format: "har" })
            let output = exporter.render()
            return output
        }).catch(e => e)
    }



    async syncStorage(storage) {
        return browser.runtime.sendMessage({
            channel: "bptk_popup2background_request",
            type: "sync_storage",
            storage: JSON.parse(JSON.stringify(storage))
        })
    }

}