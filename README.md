# stylattr

[![GitHub](https://img.shields.io/github/license/itsabgr/stylattr)](https://github.com/itsabgr/stylattr/blob/master/LICENSE)
[![CDN](https://img.shields.io/badge/CDN-jsdelivr-orange)](https://cdn.jsdelivr.net/gh/itsabgr/stylattr@v1/stylattr.js)

_style elements by their attributes_

It's a utility for web designers to quickly style any HTML element by their attributes begin with a “-”

[CHECK IT WORKS](https://itsabgr.github.io/stylattr/)

```HTML
<html>
    <head>
        <!-- include below script at top of your header --> 
        <script type="application/javascript" src="https://cdn.jsdelivr.net/gh/itsabgr/stylattr@v1/stylattr.js"></script> 
    </head>
    <body style="background: white; color: white">
        <!-- -property="value" -->
        <h3 -color="black" >
            It Works! <br> Just include in top of your HTML and style any element like this one
        </h3>
    </body>
</html>
```
---
**TODO**

- [ ] A tool to extract static stylesheet rules from style attributes
- [ ] Impl auto autocompletion feature for IDEs

_need contributions!️_
