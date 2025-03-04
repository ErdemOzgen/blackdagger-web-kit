
//if (!document.getElementById('bptk_recording_control') && !window.opener) {

    (function () {
        let moving = false
        let SCROLL_WIDTH = 24,
            offset = { x: 0, y: 0 }
        let bptk_recording_control = document.getElementById("bptk_recording_control")
        let bptk_recording_control_icons = document.getElementById("bptk_recording_control_icons")

        bptk_recording_control_icons.addEventListener('mousedown', mouseDown, false)
        window.addEventListener('mouseup', mouseUp, false)

        function mouseUp() {
            moving = false
            window.removeEventListener('mousemove', popupMove, true)
        }

        function mouseDown(e) {
            moving = true
            offset.x = e.clientX - bptk_recording_control.offsetLeft
            offset.y = e.clientY - bptk_recording_control.offsetTop
            window.addEventListener('mousemove', popupMove, true)
        }

        function popupMove(e) {
            bptk_recording_control.style.position = 'fixed'
            let top = e.clientY - offset.y,
                left = e.clientX - offset.x
            bptk_recording_control.style.top = top + 'px'
            bptk_recording_control.style.left = left + 'px'
        }
    }())

//}