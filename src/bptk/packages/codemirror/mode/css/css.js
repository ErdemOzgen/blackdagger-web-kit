(function(l){"object"==typeof exports&&"object"==typeof module?l(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],l):l(CodeMirror)})(function(l){function m(d){for(var e={},f=0;f<d.length;++f)e[d[f].toLowerCase()]=!0;return e}function q(d,e){for(var f=!1,u;null!=(u=d.next());){if(f&&"/"==u){e.tokenize=null;break}f="*"==u}return["comment","comment"]}l.defineMode("css",function(d,e){function f(a,c){v=c;return a}function u(a,c){var b=a.next();if(G[b]){var k=
G[b](a,c);if(!1!==k)return k}if("@"==b)return a.eatWhile(/[\w\\\-]/),f("def",a.current());if("="==b||("~"==b||"|"==b)&&a.eat("="))return f(null,"compare");if('"'==b||"'"==b)return c.tokenize=H(b),c.tokenize(a,c);if("#"==b)return a.eatWhile(/[\w\\\-]/),f("atom","hash");if("!"==b)return a.match(/^\s*\w*/),f("keyword","important");if(/\d/.test(b)||"."==b&&a.eat(/\d/))return a.eatWhile(/[\w.%]/),f("number","unit");if("-"===b){if(/[\d.]/.test(a.peek()))return a.eatWhile(/[\w.%]/),f("number","unit");if(a.match(/^-[\w\\\-]*/))return a.eatWhile(/[\w\\\-]/),
a.match(/^\s*:/,!1)?f("variable-2","variable-definition"):f("variable-2","variable");if(a.match(/^\w+-/))return f("meta","meta")}else return/[,+>*\/]/.test(b)?f(null,"select-op"):"."==b&&a.match(/^-?[_a-z][_a-z0-9-]*/i)?f("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(b)?f(null,b):a.match(/^[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/i.test(a.current())&&(c.tokenize=aa),f("variable callee","variable")):/[\w\\\-]/.test(b)?(a.eatWhile(/[\w\\\-]/),f("property","word")):f(null,null)}function H(a){return function(c,
b){for(var k=!1,w;null!=(w=c.next());){if(w==a&&!k){")"==a&&c.backUp(1);break}k=!k&&"\\"==w}if(w==a||!k&&")"!=a)b.tokenize=null;return f("string","string")}}function aa(a,c){a.next();a.match(/^\s*["')]/,!1)?c.tokenize=null:c.tokenize=H(")");return f(null,"(")}function I(a,c,b){this.type=a;this.indent=c;this.prev=b}function h(a,c,b,k){a.context=new I(b,c.indentation()+(!1===k?0:J),a.context);return b}function n(a){a.context.prev&&(a.context=a.context.prev);return a.context.type}function r(a,c,b,k){for(k=
k||1;0<k;k--)b.context=b.context.prev;return p[b.context.type](a,c,b)}function K(a){a=a.current().toLowerCase();g=L.hasOwnProperty(a)?"atom":M.hasOwnProperty(a)?"keyword":"variable"}var N=e.inline;e.propertyKeywords||(e=l.resolveMode("text/css"));var J=d.indentUnit,G=e.tokenHooks,ba=e.documentTypes||{},ca=e.mediaTypes||{},da=e.mediaFeatures||{},ea=e.mediaValueKeywords||{},O=e.propertyKeywords||{},P=e.nonStandardPropertyKeywords||{},fa=e.fontProperties||{},ha=e.counterDescriptors||{},M=e.colorKeywords||
{},L=e.valueKeywords||{},t=e.allowNested,ia=!0===e.supportsAtComponent,Q=!1!==d.highlightNonStandardPropertyKeywords,v,g,p={top:function(a,c,b){if("{"==a)return h(b,c,"block");if("}"==a&&b.context.prev)return n(b);if(ia&&/@component/i.test(a))return h(b,c,"atComponentBlock");if(/^@(-moz-)?document$/i.test(a))return h(b,c,"documentTypes");if(/^@(media|supports|(-moz-)?document|import)$/i.test(a))return h(b,c,"atBlock");if(/^@(font-face|counter-style)/i.test(a))return b.stateArg=a,"restricted_atBlock_before";
if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(a))return"keyframes";if(a&&"@"==a.charAt(0))return h(b,c,"at");if("hash"==a)g="builtin";else if("word"==a)g="tag";else{if("variable-definition"==a)return"maybeprop";if("interpolation"==a)return h(b,c,"interpolation");if(":"==a)return"pseudo";if(t&&"("==a)return h(b,c,"parens")}return b.context.type},block:function(a,c,b){if("word"==a){a=c.current().toLowerCase();if(O.hasOwnProperty(a))return g="property","maybeprop";if(P.hasOwnProperty(a))return g=Q?"string-2":
"property","maybeprop";if(t)return g=c.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block";g+=" error";return"maybeprop"}if("meta"==a)return"block";if(t||"hash"!=a&&"qualifier"!=a)return p.top(a,c,b);g="error";return"block"},maybeprop:function(a,c,b){return":"==a?h(b,c,"prop"):p[b.context.type](a,c,b)},prop:function(a,c,b){if(";"==a)return n(b);if("{"==a&&t)return h(b,c,"propBlock");if("}"==a||"{"==a)return r(a,c,b);if("("==a)return h(b,c,"parens");if("hash"==a&&!/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(c.current()))g+=
" error";else if("word"==a)K(c);else if("interpolation"==a)return h(b,c,"interpolation");return"prop"},propBlock:function(a,c,b){return"}"==a?n(b):"word"==a?(g="property","maybeprop"):b.context.type},parens:function(a,c,b){if("{"==a||"}"==a)return r(a,c,b);if(")"==a)return n(b);if("("==a)return h(b,c,"parens");if("interpolation"==a)return h(b,c,"interpolation");"word"==a&&K(c);return"parens"},pseudo:function(a,c,b){return"meta"==a?"pseudo":"word"==a?(g="variable-3",b.context.type):p[b.context.type](a,
c,b)},documentTypes:function(a,c,b){return"word"==a&&ba.hasOwnProperty(c.current())?(g="tag",b.context.type):p.atBlock(a,c,b)},atBlock:function(a,c,b){if("("==a)return h(b,c,"atBlock_parens");if("}"==a||";"==a)return r(a,c,b);if("{"==a)return n(b)&&h(b,c,t?"block":"top");if("interpolation"==a)return h(b,c,"interpolation");"word"==a&&(a=c.current().toLowerCase(),g="only"==a||"not"==a||"and"==a||"or"==a?"keyword":ca.hasOwnProperty(a)?"attribute":da.hasOwnProperty(a)?"property":ea.hasOwnProperty(a)?
"keyword":O.hasOwnProperty(a)?"property":P.hasOwnProperty(a)?Q?"string-2":"property":L.hasOwnProperty(a)?"atom":M.hasOwnProperty(a)?"keyword":"error");return b.context.type},atComponentBlock:function(a,c,b){if("}"==a)return r(a,c,b);if("{"==a)return n(b)&&h(b,c,t?"block":"top",!1);"word"==a&&(g="error");return b.context.type},atBlock_parens:function(a,c,b){return")"==a?n(b):"{"==a||"}"==a?r(a,c,b,2):p.atBlock(a,c,b)},restricted_atBlock_before:function(a,c,b){return"{"==a?h(b,c,"restricted_atBlock"):
"word"==a&&"@counter-style"==b.stateArg?(g="variable","restricted_atBlock_before"):p[b.context.type](a,c,b)},restricted_atBlock:function(a,c,b){return"}"==a?(b.stateArg=null,n(b)):"word"==a?(g="@font-face"==b.stateArg&&!fa.hasOwnProperty(c.current().toLowerCase())||"@counter-style"==b.stateArg&&!ha.hasOwnProperty(c.current().toLowerCase())?"error":"property","maybeprop"):"restricted_atBlock"},keyframes:function(a,c,b){return"word"==a?(g="variable","keyframes"):"{"==a?h(b,c,"top"):p[b.context.type](a,
c,b)},at:function(a,c,b){if(";"==a)return n(b);if("{"==a||"}"==a)return r(a,c,b);"word"==a?g="tag":"hash"==a&&(g="builtin");return"at"},interpolation:function(a,c,b){if("}"==a)return n(b);if("{"==a||";"==a)return r(a,c,b);"word"==a?g="variable":"variable"!=a&&"("!=a&&")"!=a&&(g="error");return"interpolation"}};return{startState:function(a){return{tokenize:null,state:N?"block":"top",stateArg:null,context:new I(N?"block":"top",a||0,null)}},token:function(a,c){if(!c.tokenize&&a.eatSpace())return null;
var b=(c.tokenize||u)(a,c);b&&"object"==typeof b&&(v=b[1],b=b[0]);g=b;"comment"!=v&&(c.state=p[c.state](v,a,c));return g},indent:function(a,c){a=a.context;c=c&&c.charAt(0);var b=a.indent;"prop"!=a.type||"}"!=c&&")"!=c||(a=a.prev);if(a.prev)if("}"==c&&("block"==a.type||"top"==a.type||"interpolation"==a.type||"restricted_atBlock"==a.type))a=a.prev,b=a.indent;else if(")"==c&&("parens"==a.type||"atBlock_parens"==a.type)||"{"==c&&("at"==a.type||"atBlock"==a.type))b=Math.max(0,a.indent-J);return b},electricChars:"}",
blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:e.lineComment,fold:"brace"}});var x=["domain","regexp","url","url-prefix"],R=m(x),S="all aural braille handheld print projection screen tty tv embossed".split(" "),y=m(S),T="width min-width max-width height min-height max-height device-width min-device-width max-device-width device-height min-device-height max-device-height aspect-ratio min-aspect-ratio max-aspect-ratio device-aspect-ratio min-device-aspect-ratio max-device-aspect-ratio color min-color max-color color-index min-color-index max-color-index monochrome min-monochrome max-monochrome resolution min-resolution max-resolution scan grid orientation device-pixel-ratio min-device-pixel-ratio max-device-pixel-ratio pointer any-pointer hover any-hover prefers-color-scheme dynamic-range video-dynamic-range".split(" "),
z=m(T),U="landscape portrait none coarse fine on-demand hover interlace progressive dark light standard high".split(" "),F=m(U),V="align-content align-items align-self alignment-adjust alignment-baseline all anchor-point animation animation-delay animation-direction animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-timing-function appearance azimuth backdrop-filter backface-visibility background background-attachment background-blend-mode background-clip background-color background-image background-origin background-position background-position-x background-position-y background-repeat background-size baseline-shift binding bleed block-size bookmark-label bookmark-level bookmark-state bookmark-target border border-bottom border-bottom-color border-bottom-left-radius border-bottom-right-radius border-bottom-style border-bottom-width border-collapse border-color border-image border-image-outset border-image-repeat border-image-slice border-image-source border-image-width border-left border-left-color border-left-style border-left-width border-radius border-right border-right-color border-right-style border-right-width border-spacing border-style border-top border-top-color border-top-left-radius border-top-right-radius border-top-style border-top-width border-width bottom box-decoration-break box-shadow box-sizing break-after break-before break-inside caption-side caret-color clear clip color color-profile column-count column-fill column-gap column-rule column-rule-color column-rule-style column-rule-width column-span column-width columns contain content counter-increment counter-reset crop cue cue-after cue-before cursor direction display dominant-baseline drop-initial-after-adjust drop-initial-after-align drop-initial-before-adjust drop-initial-before-align drop-initial-size drop-initial-value elevation empty-cells fit fit-content fit-position flex flex-basis flex-direction flex-flow flex-grow flex-shrink flex-wrap float float-offset flow-from flow-into font font-family font-feature-settings font-kerning font-language-override font-optical-sizing font-size font-size-adjust font-stretch font-style font-synthesis font-variant font-variant-alternates font-variant-caps font-variant-east-asian font-variant-ligatures font-variant-numeric font-variant-position font-variation-settings font-weight gap grid grid-area grid-auto-columns grid-auto-flow grid-auto-rows grid-column grid-column-end grid-column-gap grid-column-start grid-gap grid-row grid-row-end grid-row-gap grid-row-start grid-template grid-template-areas grid-template-columns grid-template-rows hanging-punctuation height hyphens icon image-orientation image-rendering image-resolution inline-box-align inset inset-block inset-block-end inset-block-start inset-inline inset-inline-end inset-inline-start isolation justify-content justify-items justify-self left letter-spacing line-break line-height line-height-step line-stacking line-stacking-ruby line-stacking-shift line-stacking-strategy list-style list-style-image list-style-position list-style-type margin margin-bottom margin-left margin-right margin-top marks marquee-direction marquee-loop marquee-play-count marquee-speed marquee-style mask-clip mask-composite mask-image mask-mode mask-origin mask-position mask-repeat mask-size mask-type max-block-size max-height max-inline-size max-width min-block-size min-height min-inline-size min-width mix-blend-mode move-to nav-down nav-index nav-left nav-right nav-up object-fit object-position offset offset-anchor offset-distance offset-path offset-position offset-rotate opacity order orphans outline outline-color outline-offset outline-style outline-width overflow overflow-style overflow-wrap overflow-x overflow-y padding padding-bottom padding-left padding-right padding-top page page-break-after page-break-before page-break-inside page-policy pause pause-after pause-before perspective perspective-origin pitch pitch-range place-content place-items place-self play-during position presentation-level punctuation-trim quotes region-break-after region-break-before region-break-inside region-fragment rendering-intent resize rest rest-after rest-before richness right rotate rotation rotation-point row-gap ruby-align ruby-overhang ruby-position ruby-span scale scroll-behavior scroll-margin scroll-margin-block scroll-margin-block-end scroll-margin-block-start scroll-margin-bottom scroll-margin-inline scroll-margin-inline-end scroll-margin-inline-start scroll-margin-left scroll-margin-right scroll-margin-top scroll-padding scroll-padding-block scroll-padding-block-end scroll-padding-block-start scroll-padding-bottom scroll-padding-inline scroll-padding-inline-end scroll-padding-inline-start scroll-padding-left scroll-padding-right scroll-padding-top scroll-snap-align scroll-snap-type shape-image-threshold shape-inside shape-margin shape-outside size speak speak-as speak-header speak-numeral speak-punctuation speech-rate stress string-set tab-size table-layout target target-name target-new target-position text-align text-align-last text-combine-upright text-decoration text-decoration-color text-decoration-line text-decoration-skip text-decoration-skip-ink text-decoration-style text-emphasis text-emphasis-color text-emphasis-position text-emphasis-style text-height text-indent text-justify text-orientation text-outline text-overflow text-rendering text-shadow text-size-adjust text-space-collapse text-transform text-underline-position text-wrap top touch-action transform transform-origin transform-style transition transition-delay transition-duration transition-property transition-timing-function translate unicode-bidi user-select vertical-align visibility voice-balance voice-duration voice-family voice-pitch voice-range voice-rate voice-stress voice-volume volume white-space widows width will-change word-break word-spacing word-wrap writing-mode z-index clip-path clip-rule mask enable-background filter flood-color flood-opacity lighting-color stop-color stop-opacity pointer-events color-interpolation color-interpolation-filters color-rendering fill fill-opacity fill-rule image-rendering marker marker-end marker-mid marker-start paint-order shape-rendering stroke stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-rendering baseline-shift dominant-baseline glyph-orientation-horizontal glyph-orientation-vertical text-anchor writing-mode".split(" "),
A=m(V),W="accent-color aspect-ratio border-block border-block-color border-block-end border-block-end-color border-block-end-style border-block-end-width border-block-start border-block-start-color border-block-start-style border-block-start-width border-block-style border-block-width border-inline border-inline-color border-inline-end border-inline-end-color border-inline-end-style border-inline-end-width border-inline-start border-inline-start-color border-inline-start-style border-inline-start-width border-inline-style border-inline-width content-visibility margin-block margin-block-end margin-block-start margin-inline margin-inline-end margin-inline-start overflow-anchor overscroll-behavior padding-block padding-block-end padding-block-start padding-inline padding-inline-end padding-inline-start scroll-snap-stop scrollbar-3d-light-color scrollbar-arrow-color scrollbar-base-color scrollbar-dark-shadow-color scrollbar-face-color scrollbar-highlight-color scrollbar-shadow-color scrollbar-track-color searchfield-cancel-button searchfield-decoration searchfield-results-button searchfield-results-decoration shape-inside zoom".split(" "),
B=m(W),C=m("font-display font-family src unicode-range font-variant font-feature-settings font-stretch font-weight font-style".split(" ")),X=m("additive-symbols fallback negative pad prefix range speak-as suffix symbols system".split(" ")),Y="aliceblue antiquewhite aqua aquamarine azure beige bisque black blanchedalmond blue blueviolet brown burlywood cadetblue chartreuse chocolate coral cornflowerblue cornsilk crimson cyan darkblue darkcyan darkgoldenrod darkgray darkgreen darkgrey darkkhaki darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen darkslateblue darkslategray darkslategrey darkturquoise darkviolet deeppink deepskyblue dimgray dimgrey dodgerblue firebrick floralwhite forestgreen fuchsia gainsboro ghostwhite gold goldenrod gray grey green greenyellow honeydew hotpink indianred indigo ivory khaki lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan lightgoldenrodyellow lightgray lightgreen lightgrey lightpink lightsalmon lightseagreen lightskyblue lightslategray lightslategrey lightsteelblue lightyellow lime limegreen linen magenta maroon mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen mediumslateblue mediumspringgreen mediumturquoise mediumvioletred midnightblue mintcream mistyrose moccasin navajowhite navy oldlace olive olivedrab orange orangered orchid palegoldenrod palegreen paleturquoise palevioletred papayawhip peachpuff peru pink plum powderblue purple rebeccapurple red rosybrown royalblue saddlebrown salmon sandybrown seagreen seashell sienna silver skyblue slateblue slategray slategrey snow springgreen steelblue tan teal thistle tomato turquoise violet wheat white whitesmoke yellow yellowgreen".split(" "),
D=m(Y),Z="above absolute activeborder additive activecaption afar after-white-space ahead alias all all-scroll alphabetic alternate always amharic amharic-abegede antialiased appworkspace arabic-indic armenian asterisks attr auto auto-flow avoid avoid-column avoid-page avoid-region axis-pan background backwards baseline below bidi-override binary bengali blink block block-axis blur bold bolder border border-box both bottom break break-all break-word brightness bullets button buttonface buttonhighlight buttonshadow buttontext calc cambodian capitalize caps-lock-indicator caption captiontext caret cell center checkbox circle cjk-decimal cjk-earthly-branch cjk-heavenly-stem cjk-ideographic clear clip close-quote col-resize collapse color color-burn color-dodge column column-reverse compact condensed conic-gradient contain content contents content-box context-menu continuous contrast copy counter counters cover crop cross crosshair cubic-bezier currentcolor cursive cyclic darken dashed decimal decimal-leading-zero default default-button dense destination-atop destination-in destination-out destination-over devanagari difference disc discard disclosure-closed disclosure-open document dot-dash dot-dot-dash dotted double down drop-shadow e-resize ease ease-in ease-in-out ease-out element ellipse ellipsis embed end ethiopic ethiopic-abegede ethiopic-abegede-am-et ethiopic-abegede-gez ethiopic-abegede-ti-er ethiopic-abegede-ti-et ethiopic-halehame-aa-er ethiopic-halehame-aa-et ethiopic-halehame-am-et ethiopic-halehame-gez ethiopic-halehame-om-et ethiopic-halehame-sid-et ethiopic-halehame-so-et ethiopic-halehame-ti-er ethiopic-halehame-ti-et ethiopic-halehame-tig ethiopic-numeric ew-resize exclusion expanded extends extra-condensed extra-expanded fantasy fast fill fill-box fixed flat flex flex-end flex-start footnotes forwards from geometricPrecision georgian grayscale graytext grid groove gujarati gurmukhi hand hangul hangul-consonant hard-light hebrew help hidden hide higher highlight highlighttext hiragana hiragana-iroha horizontal hsl hsla hue hue-rotate icon ignore inactiveborder inactivecaption inactivecaptiontext infinite infobackground infotext inherit initial inline inline-axis inline-block inline-flex inline-grid inline-table inset inside intrinsic invert italic japanese-formal japanese-informal justify kannada katakana katakana-iroha keep-all khmer korean-hangul-formal korean-hanja-formal korean-hanja-informal landscape lao large larger left level lighter lighten line-through linear linear-gradient lines list-item listbox listitem local logical loud lower lower-alpha lower-armenian lower-greek lower-hexadecimal lower-latin lower-norwegian lower-roman lowercase ltr luminosity malayalam manipulation match matrix matrix3d media-play-button media-slider media-sliderthumb media-volume-slider media-volume-sliderthumb medium menu menulist menulist-button menutext message-box middle min-intrinsic mix mongolian monospace move multiple multiple_mask_images multiply myanmar n-resize narrower ne-resize nesw-resize no-close-quote no-drop no-open-quote no-repeat none normal not-allowed nowrap ns-resize numbers numeric nw-resize nwse-resize oblique octal opacity open-quote optimizeLegibility optimizeSpeed oriya oromo outset outside outside-shape overlay overline padding padding-box painted page paused persian perspective pinch-zoom plus-darker plus-lighter pointer polygon portrait pre pre-line pre-wrap preserve-3d progress push-button radial-gradient radio read-only read-write read-write-plaintext-only rectangle region relative repeat repeating-linear-gradient repeating-radial-gradient repeating-conic-gradient repeat-x repeat-y reset reverse rgb rgba ridge right rotate rotate3d rotateX rotateY rotateZ round row row-resize row-reverse rtl run-in running s-resize sans-serif saturate saturation scale scale3d scaleX scaleY scaleZ screen scroll scrollbar scroll-position se-resize searchfield searchfield-cancel-button searchfield-decoration searchfield-results-button searchfield-results-decoration self-start self-end semi-condensed semi-expanded separate sepia serif show sidama simp-chinese-formal simp-chinese-informal single skew skewX skewY skip-white-space slide slider-horizontal slider-vertical sliderthumb-horizontal sliderthumb-vertical slow small small-caps small-caption smaller soft-light solid somali source-atop source-in source-out source-over space space-around space-between space-evenly spell-out square square-button start static status-bar stretch stroke stroke-box sub subpixel-antialiased svg_masks super sw-resize symbolic symbols system-ui table table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group tamil telugu text text-bottom text-top textarea textfield thai thick thin threeddarkshadow threedface threedhighlight threedlightshadow threedshadow tibetan tigre tigrinya-er tigrinya-er-abegede tigrinya-et tigrinya-et-abegede to top trad-chinese-formal trad-chinese-informal transform translate translate3d translateX translateY translateZ transparent ultra-condensed ultra-expanded underline unidirectional-pan unset up upper-alpha upper-armenian upper-greek upper-hexadecimal upper-latin upper-norwegian upper-roman uppercase urdu url var vertical vertical-text view-box visible visibleFill visiblePainted visibleStroke visual w-resize wait wave wider window windowframe windowtext words wrap wrap-reverse x-large x-small xor xx-large xx-small".split(" "),
E=m(Z);x=x.concat(S).concat(T).concat(U).concat(V).concat(W).concat(Y).concat(Z);l.registerHelper("hintWords","css",x);l.defineMIME("text/css",{documentTypes:R,mediaTypes:y,mediaFeatures:z,mediaValueKeywords:F,propertyKeywords:A,nonStandardPropertyKeywords:B,fontProperties:C,counterDescriptors:X,colorKeywords:D,valueKeywords:E,tokenHooks:{"/":function(d,e){if(!d.eat("*"))return!1;e.tokenize=q;return q(d,e)}},name:"css"});l.defineMIME("text/x-scss",{mediaTypes:y,mediaFeatures:z,mediaValueKeywords:F,
propertyKeywords:A,nonStandardPropertyKeywords:B,colorKeywords:D,valueKeywords:E,fontProperties:C,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(d,e){return d.eat("/")?(d.skipToEnd(),["comment","comment"]):d.eat("*")?(e.tokenize=q,q(d,e)):["operator","operator"]},":":function(d){return d.match(/^\s*\{/,!1)?[null,null]:!1},$:function(d){d.match(/^[\w-]+/);return d.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(d){return d.eat("{")?[null,"interpolation"]:
!1}},name:"css",helperType:"scss"});l.defineMIME("text/x-less",{mediaTypes:y,mediaFeatures:z,mediaValueKeywords:F,propertyKeywords:A,nonStandardPropertyKeywords:B,colorKeywords:D,valueKeywords:E,fontProperties:C,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(d,e){return d.eat("/")?(d.skipToEnd(),["comment","comment"]):d.eat("*")?(e.tokenize=q,q(d,e)):["operator","operator"]},"@":function(d){if(d.eat("{"))return[null,"interpolation"];if(d.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,
!1))return!1;d.eatWhile(/[\w\\\-]/);return d.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"});l.defineMIME("text/x-gss",{documentTypes:R,mediaTypes:y,mediaFeatures:z,propertyKeywords:A,nonStandardPropertyKeywords:B,fontProperties:C,counterDescriptors:X,colorKeywords:D,valueKeywords:E,supportsAtComponent:!0,tokenHooks:{"/":function(d,e){if(!d.eat("*"))return!1;e.tokenize=q;return q(d,e)}},name:"css",
helperType:"gss"})});
