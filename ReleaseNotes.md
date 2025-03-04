```markdown

## [Chromium 1.0.0 / Firefox 8.9.2] (May 2024)
### Changes
 - R-Attacker is now DAST
 - Cheat sheets added for XSS and SQL
 - Bug fixes

## [Chromium 8.8.3 / Firefox 8.8.2] (February 2024)
### Changes
 - R-Builder with cURL support
 - R-Builder export/import functionality
 - Bug fixes

## [Chromium 8.7.3 / Firefox 8.7.2] (January 2024)
### Changes
 - JWT attacks added
 - Bug fixes

## [Chromium 8.6.3 / Firefox 8.6.2] (December 2023)
### Changes
 - Json Web Token Inspector
 - Bug fixes

## [Chromium 8.3.3 / Firefox 8.3.2] (February 2023)
### Changes
 - Request builder with DAST scan feature.
 - More passive attacks according OWASP Secure Headers project.
 - Attacks improvements.
 - UI improvements
 - Bug fixes

## [Chromium 8.2.3 / Firefox 8.2.2] (September 2022)
### Changes
 - Request builder with declarativeNetRequest support for Chome/Edge browsers.
 - Macro and traffic recording feature is back again.
 - Reload extension functionality added. There are a lot of changes related to manifest V3 and due to worker may be inactive after 5 minutes, sometims you may need to reload the BPTK
 - UI improvements
 - Bug fixes

## [Chromium 8.1.3 / Firefox 8.1.2] (August 2022)
### Changes
 - Cookie editor allows to manage cookies, eg add, edit or remove cookies. Rules to block or protect cookies. Import and export.
 - Bug fixes

## [8.0.3] (June 2022)
### Changes
 - Manifest 3 support for chromium based browsers
 - R-Attacker, R-Builder and Encoder/Decoder data saved in local storage, so you won't miss your data even after restarting
 - Macro and Traffic recording no longer supported
 - Bug fixes

## [7.5.3] (February 2022)
### Changes
 - Improved R-Attacker module to support attacks for every parameter separately
 - Added R-Attacker external integration to support Selenium tests
 - Bug fixes

## [7.5.2] (December 2021)
### Changes
 - New stored XSS attack with window.postMessage payload!
 - Wappalyzer module updated to the latest version
 - Bug fixes

## [7.5.1] (November 2021)
### Changes
 - New! Reporting feature has been added, so you can generate a report in one click.
 - Wappalyzer and Retire NPM module updated to the latest version
 - Privacy policy is now in place, please check it out
 - Bug fixes

## [7.4.0] (September 2021)
### Changes
 - Retire.js NPM module added to identify known vulnerbailities (CVE)
 - Wappalyzer NPM module updated to the latest version
 - Bug fixes

## [7.3.0] (August 2021)
### Changes 
 - Tabs monitoring functionality improvements
 - Bug fixes

## [7.1.0 / 7.2.0] (June 2021)
### Changes  
 - Recording authentication is now starting with incognito mode when allowed (not supported in Firefox)
 - Fixed an issue with recording events on iframes in a new popup window
 - R-Builder can now store requests
 - Added a blacklist for R-Attacker to exclude .css and .js files from attacking
 - Added a new attack - JWT None algorithm
 - Added a disclaimer

## [7.0.0] (April 2021)
### Changes  
 - Added encode and decode features
 - Fixed an issue with \ and ` characters in macro recording

## [6.2.5] (April 2021)
### Changes 
 - Added double click support for macro recording
 - Added an option to generate additional delays when export a macro for better SPA support
 - Removed HAR viewer due to problem with PerfCascade NPM module
 - Bug fixes

## [6.2.1] (March 2021)
### Changes  
 - Improved dashboard performance and detection
 - Added ability to execute requests and export a HAR file with recorded output
 - Bug fixes

## [6.2.0] (March 2021)
### Changes  
 - New R-Attacker functionality - scan in runtime and get a report once completed
 - New Proxy tab to monitor requests for selected tab
 - Dashborad - Web Application Firewall detection card
 - Dashborad - Storage/Authentication card (with auto decoding JWT tokens)
 - Incognito mode is now separated, no shared resources between normal and private windows (not supported in Firefox)
 - NPM package release - 1.0.2
 - Bug fixes

## [6.0.0] (December 2020)
### Changes  
 - ES6 standart support
 - NPM modules support
 - Cross-browser support including incognito mode on Firefox browsers
 - Added R-Attacker to allow attacks execution on any request

## [5.0.0] (October 2020)
### Changes  
 - Cross-browser support

## [4.1.0] (September 2020)
### Changes  
 - Export a list of URLs discovered during browsing an application
 - Export a list of FQDNs discovered during browsing an application
 - Added SQL Injection attacks against POST requests

## [4.0.0] (May 2020)
### Changes  
 - New Dashboard view
 - Request builder executes a request based on simple url
 - New macro event type added to support Javascript. When selected the exported macro will contain javascript code to help simplify playback on most of the modern SPA apps like ReactJS/Angular
 - Added recording import to support conversion from Selenium .side and .html recording to javascript macro
 - Real time events tracking during recording/playback on the floating window. Tracker window is draggable and resizable
iFrames support added for recording/playback
 - Added HAR viewer for traffic recording
 - Improved performance by limiting number of tracking tabs

## [3.1.9] (March 2020)
### Changes  
 - Export macro recording using Driver events by default
 - Issue with validate functionality fixed
 - Bug fixes

## [3.1.5] (February 2020)
### Changes  
 - UI changes to improve user experience
 - Macro auto export and auto save features have been added
 - Bug fixes

## [3.1.1] (December 2019)
### Changes 
 - Swagger YAML to JSON convertor has been added
 - Issue where 'Host' header was missed in recorded traffic

## [3.1.0] (October 2019)
### Changes 
 - Incognito mode support for traffic/macro recording
 - Macro replay notifications added
 - Improved display HTML response in request builder
 - Added traffic analysis for authentication

## [2.2.11] (May 2019)
### Changes
 - Added onChange event support for macro recording and replay
 - Fixed an issue with traffic recording
 - Fixed an issue with delete event during macro recording
 - Fixed an issue with backspace event during macro recording
 - Added functionality to validate HTML using a regex after macro replay
 - Fixed an issue when request builder used wrong header
 - Added functionality to display a response as HTML


## [2.2.7] (April 2019)
### Changes
- Fixed an issue with Access-Control-Allow-Origin response header
- Added local file support for swagger utility
- AS Pro / AS Enterprise support disabled by default
- Minor fix for messages passing
- Added support for AS Pro / AS Enterprise validate functionality
- Fixed issues with export/download macro
- Fixed issue with validate functionality
- Request builder now supports 2xx, 3xx, 4xx, 5xx response statuses. Added support for Referer and User-Agent request headers
- Replay macro functionaly has been added
- Validate functionality for AppSpider Pro reports


```