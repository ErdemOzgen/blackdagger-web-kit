
if (!document.getElementById('bptk_recording_control') && !window.opener) {

    browser.storage.local.get([
        'bptk_recording',
        'bptk_replay',
        'bptk_recording_items',
        'bptk_replay_step',
        'bptk_recording_log',
        'bptk_recording_confirm_required',
        'bptk_path_to_icons'
    ]).then(function (result) {
        let iconPath = result.bptk_path_to_icons
        if (result.bptk_recording_confirm_required) {

            browser.storage.local.remove(["bptk_recording_confirm_required"])
            let msg = "You are now recording a macro/traffic sequence"
            if (result.bptk_replay) {
                msg = "You are now starting a macro replay"
            }
            alert(msg)
        }

        let popupHtml = document.getElementById('bptk_recording_control')

        let icon = browser.runtime.getURL(iconPath + '/icon_rec.png')
        let icons_replay = '';
        let msg = result.bptk_recording_log ? result.bptk_recording_log : "Recording"
        if (result.bptk_replay?.mode == 'replay') {
            msg = result.bptk_recording_log ? result.bptk_recording_log : "Starting replay"
            icon = browser.runtime.getURL(iconPath + '/icon_play.png')
            icons_replay = `
            <div id="bptk_recording_control_icon_pause" title="Pause"></div>
            <div id="bptk_recording_control_icon_forward" title="Next step"></div>
            `
        }

        popupHtml = document.createElement('div')
        popupHtml.id = 'bptk_recording_control';
        popupHtml.innerHTML = `
        <style>
        #bptk_recording_control {
            position: fixed;
            top: 10px;
            left: 10px;
            min-width: 250px;
            min-height: 98px;
            border-radius: 15px;
            z-index: 10000;
            background: rgb(214, 201, 201);
            display: flex;
            resize: both;
            overflow:hidden;

        }

        #bptk_recording_control_icons {
            width: 100%;
            cursor: move;
            height: 34px;
            position: absolute;
            background: black;
            opacity: 0.2;
            z-index: 1;
        }

        #bptk_recording_control_icon {
            width: 90px;
            height: 30px;
            border-radius: 25px;
            z-index: 0;
            animation: 3s blinker linear infinite;
            -webkit-animation: 3s blinker linear infinite;
            -moz-animation: 3s blinker linear infinite;
            background-image: url('${icon}');
            background-color: gray;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 75px 25px;
            text-align: center;
            position: absolute;
            top: 2px;
            right: 2px;
        }


        #bptk_recording_control_icon_stop {
            border-radius: 25px;
            background-image: url('${browser.runtime.getURL(iconPath + '/stop.png')}');
            background-position: center;
            background-repeat: no-repeat;
            background-size: 30px 30px;
            position: absolute;
            width: 30px;
            height: 30px;
            top: 2px;
            left: 2px;
            cursor: pointer;
            background-color: gray;
            z-index: 10;
        }

        #bptk_recording_control_icon_pause {
            border-radius: 25px;
            background-image: url('${browser.runtime.getURL(iconPath + '/pause.png')}');
            background-position: center;
            background-repeat: no-repeat;
            background-size: 30px 30px;
            position: absolute;
            width: 30px;
            height: 30px;
            top: 2px;
            left: 36px;
            cursor: pointer;
            background-color: gray;
            z-index: 10;
        }

        #bptk_recording_control_icon_forward {
            border-radius: 25px;
            background-image: url('${browser.runtime.getURL(iconPath + '/forward.png')}');
            background-position: center;
            background-repeat: no-repeat;
            background-size: 30px 30px;
            position: absolute;
            width: 30px;
            height: 30px;
            top: 2px;
            left: 70px;
            cursor: pointer;
            background-color: gray;
            z-index: 10;
        }

        #bptk_recording_wrapper{
            min-width: 250px;
            max-height: 100%;
            overflow: scroll;
            padding-left: 7px;
            position: relative;
            z-index: 0;
            top: 45px;
            scrollbar-width: none;
        }

        #bptk_recording_message {
            display: block;
            font-size: 13px;
            font-family: monospace;
            width: 95%;
            position: absolute;
            padding-bottom: 55px;
            line-height: 15px;
        }

        #bptk_recording_wrapper::-webkit-scrollbar {
            width: 0px;   
        }


        @-moz-keyframes blinker {
            0% {
                opacity: 1.0;
            }

            50% {
                opacity: 0.0;
            }

            100% {
                opacity: 1.0;
            }
        }

        @-webkit-keyframes blinker {
            0% {
                opacity: 1.0;
            }

            50% {
                opacity: 0.0;
            }

            100% {
                opacity: 1.0;
            }
        }

        @keyframes blinker {
            0% {
                opacity: 1.0;
            }

            50% {
                opacity: 0.0;
            }

            100% {
                opacity: 1.0;
            }
        }
    </style>

        <div id="bptk_recording_control_icons"></div>
        <div id="bptk_recording_control_icon_stop" title="Stop"></div>
        ${icons_replay}
        <div id="bptk_recording_control_icon"></div>
        <div id="bptk_recording_wrapper">
            <div id="bptk_recording_message">${msg}</div>
        </div>
        `;

        (document.documentElement).appendChild(popupHtml)
        showMessage(msg)

        document.getElementById("bptk_recording_control_icon_stop").addEventListener('click', function (e) {
            browser.runtime.sendMessage({
                channel: "bptk_popup2background_recorder",
                type: "stop_recording"
            }).catch(e => e)
        })

        document.getElementById("bptk_recording_control_icon_forward")?.addEventListener('click', function (e) {
            window.bptk_replayer.stepForward()
        })

        document.getElementById("bptk_recording_control_icon_pause")?.addEventListener('click', function (e) {
            if (window.bptk_replayer.paused) {
                window.bptk_replayer.run()
                if (window.bptk_replayer.step == -1) {
                    forceClosing()
                }

                document.getElementById("bptk_recording_control_icon_forward").style.display = 'block'
                document.getElementById("bptk_recording_control_icon_pause").style.backgroundImage = "url('" + browser.runtime.getURL(iconPath + '/pause.png') + "')"
                document.getElementById("bptk_recording_control_icon_pause").title = 'Pause'
            } else {
                if (window.bptk_recording_timer) clearTimeout(window.bptk_recording_timer)
                if (window.bptk_recording_interval) clearInterval(window.bptk_recording_interval)
                window.bptk_replayer.pause()
                document.getElementById("bptk_recording_control_icon_forward").style.display = 'none'
                document.getElementById("bptk_recording_control_icon_pause").style.backgroundImage = "url('" + browser.runtime.getURL(iconPath + '/play.png') + "')"
                document.getElementById("bptk_recording_control_icon_pause").title = 'Play'
            }
        })


        function showMessage(text) {
            let el = document.getElementById('bptk_recording_message')
            el.innerHTML = text
            document.getElementById('bptk_recording_wrapper').scrollTop = document.getElementById('bptk_recording_wrapper').scrollHeight
        }

        function forceClosing() {
            browser.storage.local.get(['bptk_recording_log']).then(function (result) {
                clearTimeout(window.bptk_recording_timer)
                clearInterval(window.bptk_recording_interval)
                showMessage(result.bptk_recording_log + 'Closing in: <span id="bptk_recording_timer">10</span>')
                window.bptk_recording_interval = setInterval(function () {

                    var timer = document.getElementById('bptk_recording_timer')
                    var val = parseInt(timer.innerText)
                    timer.innerText = val - 1
                }, 1000)
                window.bptk_recording_timer = setTimeout(function () {
                    browser.runtime.sendMessage({
                        channel: "bptk_popup2background_recorder",
                        type: "stop_replay"
                    }).catch(e => e)
                }, 10000)
            })
        }

        window.bptk_recording_timer = null
        window.bptk_recording_interval = null

        browser.storage.onChanged.addListener(function (changes, namespace) {
            if (changes['bptk_recording_log']) {
                showMessage(changes['bptk_recording_log'].newValue)
            }

            if (changes['bptk_replay_step']) {
                let changedValue = changes['bptk_replay_step'].newValue
                if (changedValue == -1) {
                    forceClosing()
                }
            }
        })
    })

}