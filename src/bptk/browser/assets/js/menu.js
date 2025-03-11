/* Author: ErdemOzgen */


const dashboardText = `Reload the tab to activate tracking &nbsp;<i class="exclamation red circle icon" style="font-size: 1em; margin-bottom: 1px;"></i>`

function bindTable(id, params) {
    params.paging = false
    params.ordering = false
    params.info = false
    params.searching = params.searching ? params.searching : false
    params.sorting = false
    params.dom = 'frtip'
    //params.buttons = [ 'copyHtml5', 'excelHtml5', 'pdfHtml5', 'csvHtml5' ]


    let table
    if ($.fn.dataTable.isDataTable(id)) {
        table = $(id).DataTable()
        table.clear().rows.add(params.data).draw()
    } else {
        table = $(id).DataTable(params)
        // if (params.buttons) {
        //     table.buttons().container()
        //         .appendTo($('.col-sm-6:eq(0)', table.table().container()));
        // }
    }
    return table
}

jQuery(function () {


    // $('.ui.sidebar')
    //     .sidebar('toggle')
    //     ;

    setInterval(function () {
        browser.runtime.sendMessage({
            channel: "bptk_popup2background_app",
            type: "ping"
        })
    }, 1000);

    let version = browser.runtime.getManifest().version
    //Main menu
//Main menu
$('#mainMenuWrapper').prepend(
    `<div class="ui small inverted borderless menu" style="height: auto;">
        <img src="assets/images/hacker_w1.png" id="bptkicon" title="Blackdagger Penetration Testing Kit">
        <div class="ui container" id="mainMenu">
            <a class="item" href="index.html" data-history="index">Dashboard</a>
            <a class="item" href="rattacker.html" data-history="rattacker">DAST</a>
            <a class="item" href="blackdagger.html" data-history="rattacker">Blackdagger</a>
            <a class="item" href="sca.html" data-history="sca">SCA</a>
            <a class="item" href="proxy.html" data-history="proxy">Proxy</a>
            <a class="item" href="rbuilder.html" data-history="rbuilder">R-Builder</a>
            <a class="item" href="session.html" data-history="session">Cookies</a>
            <a class="item" href="jwt.html" data-history="jwt">JWT Insp.</a>
            <a class="item" href="decoder.html" data-history="decoder">Decoder</a>

            <div class="ui top left pointing dropdown item" style="margin-right: 0px !important;">Cheats<i class="dropdown icon"></i>
                <div class="menu" style="width: 120px;top: 25px;">
                    <a class="item" href="xss.html" data-history="xss">XSS</a>
                    <a class="item" href="sql.html" data-history="sql">SQL</a>
                </div>
            </div>

            <div class="ui top left pointing dropdown item">Tools<i class="dropdown icon"></i>
                <div class="menu" style="width: 120px;top: 25px;">
                    <a class="item" href="recording.html" data-history="recording">Macro</a>
                    <a class="item" href="swagger-editor.html" data-history="swagger-editor">Swagger</a>
                    <a class="item" href="portscanner.html" data-history="portscanner">Port Scanner</a>
                </div>
            </div>
            
            <!--
            <div class="ui dropdown item" style="position: absolute;width: 30px;height: 30px;right: 34px;top: 3px;padding: 0px;">
                <i title="Profile" id="profile"></i>
            </div>
            -->
            <div class="ui dropdown item notifications" style="position: absolute;width: 30px;height: 30px;right: 34px;top: 3px;padding: 0px; display:none">
                <div><i title="Notifications" class="red exclamation triangle big icon"></i></div>
                <div class="menu">
                    <div class="ui error message" style="margin-top: 0px !important;">
                        <div class="header">Error</div>
                        <p>Cookie and storage access is disabled. Reinstall the extension or enable cookie/storage on the "Settings" page.</p>
                    </div>
                </div>
            </div>

            <!--
            <div class="ui dropdown item" style="position: absolute;width: 30px;height: 30px;right: 34px;top: 3px;padding: 0px;">
                <div><i title="Open in new window" class="external square alternate big icon" id="opennewwindow"></i></div>
            </div>
            -->

            <div class="ui dropdown item" style="position: absolute;width: 30px;height: 30px;right: 3px;top: 3px;padding: 0px;">
                <div><i title="More" class="question circle outline big icon"></i></div>
                <div class="menu top_right_icon" style="margin-top: 0px !important; min-height: 90px;top: 34px;">
                    <div class="ui fitted divider" style="margin-top: 0px;"></div>
                    <a class="item" href="#" id="opensettings">Settings</a>
                    <div class="ui fitted divider"></div>
                    <a class="item" href="#" id="reloadextension">Reload BPTK</a>
                    <div class="ui fitted divider"></div>
                    <a class="item" href="https://github.com/ErdemOzgen/howto.html" target="_blank">
                        How to<i class="external square right floated icon"></i>
                    </a>
                    <a class="item" href="https://github.com/ErdemOzgen/release_notes.html" target="_blank">
                        Release notes<i class="external square right floated icon"></i>
                    </a>
                    <div class="ui fitted divider"></div>
                    <a class="item" href="#" id="credits">Credits</a>
                    <a class="item" href="#" id="disclaimer">Disclaimer</a>
                    <a class="item" href="#" id="privacy">Privacy Policy</a>
                    <a class="item" href="#" id="contactus">Contact Us</a>
                    <div class="ui fitted divider"></div>
                    <a class="item disabled" href="#">Version: #${version}</a>
                </div>
            </div>
        </div>
    </div>
    <div id="bptk_popup_dialog" class="ui fullscreen modal">
        <i class="close icon" style="right: 2px;top: 2px;"></i>
        <iframe style="width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>
    </div>
    `
);

$('#footer_menu').prepend(
    `
    <!--
    <div class="ui mini message" style="height: 25px;padding-top: 4px;position: fixed; bottom: -11px; left:130px; z-index:1">
        <a href="mailto:m.erdemozgen@gmail.com">m.erdemozgen@gmail.com</a>
    </div>
    <div class="ui mini message" style="height: 25px;padding-top: 4px;position: fixed; bottom: -11px; left:130px; z-index:1">
        <a href="mailto:m.erdemozgen@gmail.com">m.erdemozgen@gmail.com</a>
    </div>
    -->
    <div class="ui mini orange message" style="height: 25px;padding-top: 4px;position: fixed; bottom: -11px; left:269px; z-index:1">
        <i class="exclamation circle icon"></i>
        <a target="_blank" href="https://www.true-positives.com/bptk-community">
            Please help us improve the BPTK
        </a>
    </div>
    `
);




    if (window.opener) {
        $('#opennewwindow').hide()
    }

    $('#mainMenu a.item').each(function (i, obj) {
        if (window.location.pathname.indexOf($(obj).attr('href')) > 0)
            $(obj).addClass('active').siblings().removeClass('active')
    });

    $('#mainMenu a.item').on('click', function () {
        let route = $(this).attr('data-history')
        if (route) {
            browser.runtime.sendMessage({
                channel: "bptk_popup2background_app",
                type: "history",
                route: route,
                hash: ""
            })
        }
    })

    //Submenu all pages
    $('.ui.menu a.item').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
        let forItem = $(this).attr('forItem')
        $('.ui.menu a.item').each(function (i, obj) {
            let f = $(obj).attr('forItem')
            if (f != forItem) $('#' + f).hide()
        })
        $('#' + forItem).fadeIn("slow")
    })

    //Settings page
    $('#opensettings').on('click', function () {
        $('#bptk_popup_dialog iframe').attr('src', 'settings.html')
        $('#bptk_popup_dialog').modal('show')
    })

    //Privacy page
    $('#privacy').on('click', function () {
        $('#bptk_popup_dialog iframe').attr('src', 'privacy.html')
        $('#bptk_popup_dialog').modal('show')
    })

    //Contact page
    $('#contactus').on('click', function () {
        $('#bptk_popup_dialog iframe').attr('src', 'contact.html')
        $('#bptk_popup_dialog').modal('show')
    })

    //Disclaimer page
    $('#disclaimer').on('click', function () {
        $('#bptk_popup_dialog iframe').attr('src', 'disclaimer.html')
        $('#bptk_popup_dialog').modal('show')
    })

    //Credits page
    $('#credits').on('click', function () {
        $('#bptk_popup_dialog iframe').attr('src', 'credits.html')
        $('#bptk_popup_dialog').modal('show')
    })

    //Credits page
    $('#profile').on('click', function () {
        $('#bptk_popup_dialog iframe').attr('src', 'profile.html')
        $('#bptk_popup_dialog').modal('show')
    })

    //New window
    $('#opennewwindow').on('click', function () {
        browser.windows.create({ url: window.location.href, type: "popup", width: 900, height: 650 })
        window.close();
    });

    //Reload
    $('#reloadextension').on('click', function () {
        browser.runtime.sendMessage({
            channel: "bptk_popup2background_app",
            type: "reloadbptk"
        }).catch(e => e)
    });

    //Semantic UI 
    $('.ui.dropdown').dropdown({ on: 'click' })
    $('.ui.checkbox').checkbox()
    $('.dropdown.allowAdditions')
        .dropdown({
            allowAdditions: true
        })

})