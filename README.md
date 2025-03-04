# Blackdagger Penetration Testing Kit (BPTK)

The Blackdagger Penetration Testing Kit (BPTK) browser extension is your all-in-one solution for streamlining your daily tasks in the realm of application security. Whether you're a penetration tester, a member of a Red Team, or an application security practitioner, this extension is designed to enhance your efficiency and provide valuable insights.

Key Features:

In-Browser Runtime Scanning: BPTK offers Dynamic Application Security Testing (DAST) and Software Composition Analysis (SCA) scanning right within your browser. Detect SQL Injections, Command Line Injections, Stored and Reflected Cross-Site Scripting (XSS) vulnerabilities, and more. It even identifies complex threats like SQL Authentication Bypass, XPath injections, and JWT attacks.

JWT Inspector: We've added a crucial new feature – JWT Inspector. It empowers you to analyze JSON Web Tokens (JWT), build new tokens, and generate public and private keys for JWT signing.

Insightful Information: Get a one-click access to insightful information about the target application, including its technology stack, Web Application Firewalls (WAFs), security headers, crawled links, and authentication flow.

Proxy with Traffic Log: BPTK includes a proxy with a detailed traffic log. This log allows you to repeat any request in the R-Builder or send it to the DAST scanner (former R-Attacker). You can automate the execution of Cross-Site Scripting (XSS), SQL injection, or OS Command injections.

R-Builder for Request Tampering and Request Smuggling:
The extension includes R-Builder, a powerful tool that allows you to craft and manipulate HTTP requests with precision. Use R-Builder to modify and tamper with requests, enabling you to test the robustness of the application's security. R-Builder empowers you to execute complex maneuvers, including HTTP request smuggling attacks, for a comprehensive assessment of application vulnerabilities.

Cookie Management: The extension includes a cookie editor, allowing you to manage cookies efficiently. Add, edit, remove, block, protect, export, and import cookies with ease.
Decoder/Encoder Utility: The integrated utility helps you manage encoding and decoding from and to various formats, including UTF-8, Base64, MD5, and more.
Swagger.IO Integration: We've integrated Swagger.IO to enhance your understanding of API documentation. Easily create requests to interact with API endpoints.

Selenium Integration: With Selenium integration, BPTK aids in identifying security risks at the early stages of the development cycle, ensuring robust security from the outset.

Enhance your application security practices with BPTK, the browser extension that makes your browser smarter. Whether you need to uncover vulnerabilities, analyze JWT tokens, or optimize your security workflow, BPTK has got you covered. Try it today and take your application security to the next level.

## Development
```
git clone git@github.com:DenisPodgurskii/pentestkit.git
cd pentestkit
npm install
npm run build
```
Chrome/Edge/Brave -> Extensions -> Load unpacked -> select pentestkit/src directory

Or run 
```
npm run build_pkg
```
This will create zip arhives in pentestkit/dist folder

On Windows build it's a chance you can expect an error during build process. In this case try to execute the following command first.
```
npm install --ignore-scripts fomantic-ui
```

## Installation

[Firefox](https://addons.mozilla.org/en-US/firefox/addon/penetration-testing-kit/) 

[Chrome](https://chrome.google.com/webstore/detail/penetration-testing-kit/ojkchikaholjmcnefhjlbohackpeeknd) 

[MS Edge](https://microsoftedge.microsoft.com/addons/detail/penetration-testing-kit/knjnghhnhcpcglfdjppffbpfndeebkdm) 


## Documentation / How To




## Youtube channel

[Youtube channel](https://www.youtube.com/channel/UCbEcTounPkV1aitE1egXfqw) 




