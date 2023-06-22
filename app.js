var editor;

window.onload = function() {
    editor = CodeMirror.fromTextArea(document.getElementById('boilerplateContainer'), {
        lineNumbers: true,
        mode: 'xml',
        htmlMode: true, 
        theme: 'default',
        autoCloseTags: true,
        autoRefresh:true
    });

    updateBoilerplate();
};

function updateBoilerplate() {
    let language = document.getElementById("language");
    let pageTitle = document.getElementById("pageTitle");
    let favicons = document.getElementById("favicons");
    let manifest = document.getElementById("manifest");
    let externalCSS = document.getElementById("externalCSS");
    let externalJS = document.getElementById("externalJS");
    let bootstrap = document.getElementById("bootstrapCSS");
    let jquery = document.getElementById("jQuery");
    let topmenu = document.getElementById("topmenu");
    let copyright = document.getElementById("copyright");

    let boilerplate = `<!DOCTYPE html>
<html lang="${language.value}">
<head>
    <meta charset="UTF-8"/>
    <title>${pageTitle.value}</title>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <meta name="description" content=""/>`;
if (favicons.checked) {
    boilerplate += `
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
    <link rel="appe-touch-icon" type="image/png" sizes="180x180" href="apple-touch-icon.png"/>
    <link rel="icon" type="image/svg+xml" href="favicon.png"/>`;
} else {
    boilerplate += `
    <link rel="icon" href="favicon.png"/>`;
}
if (manifest.checked) {
    boilerplate += `
    <link rel="manifest" href="manifest.webmanifest"/>`;
}
if (externalCSS.checked) {
    boilerplate += `
    <link rel="stylesheet" type="text/css" href="style.css"/>`;
}
if (bootstrap.checked) {
    boilerplate += `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>`;
}
if (jquery.checked) {
    boilerplate += `
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>`;
}
if (topmenu.checked) {
    boilerplate += `
    
    <style>
        .nav {
            overflow: hidden;
        }
        .nav a {
            float: left;
            margin: 10px;
            display: block;
        }
        .nav #menu-toggle {
            display: none;
        }
        @media screen and (max-width: 600px) {
            .nav a:not(:first-child) {
                display: none;
            }
            .nav a#menu-toggle {
                float: right;
                display: block;
            }
        }
        @media screen and (max-width: 600px) {
            .nav.nav--open {
                position: relative;
            }
            .nav.nav--open #menu-toggle {
                position: absolute;
                right: 0;
                top: 0;
            }
            .nav.nav--open a {
                float: none;
                display: block;
                text-align: left;
            }
        }
        .menu-toggle__bar1, .menu-toggle__bar2, .menu-toggle__bar3 {
            width: 21px;
            height: 3px;
            background-color: #000000;
            margin: 4px 0;
            transition: 0.3s;
        }
        .menu-toggle--open .menu-toggle__bar1 {
            transform: translate(0, 7px) rotate(-45deg);
        }
        .menu-toggle--open .menu-toggle__bar2 {
            opacity: 0;
        }
        .menu-toggle--open .menu-toggle__bar3 {
            transform: translate(0, -7px) rotate(45deg);
        }
    </style>
    `;
}
boilerplate += `
</head>
<body>`;
if (topmenu.checked) {
    boilerplate += `
    <nav class="nav" id="nav">
        <a href="#home">Logo</a>
        <a href="#menu-item-1">Menu Item 1</a>
        <a href="#menu-item-2">Menu Item 2</a>
        <a href="#menu-item-3">Menu Item 3</a>
        <a href="javascript:void(0);" id="menu-toggle" onclick="togglemenu()">
            <div class="menu-toggle__bar1"></div>
            <div class="menu-toggle__bar2"></div>
            <div class="menu-toggle__bar3"></div>
        </a>
    </nav>`;
}

if (copyright.checked) {
    boilerplate += `
    <footer>
        <small>© <script>document.write(new Date().getFullYear())</script> Your Company Name. All Rights Reserved.</small>
    </footer>`;
}

if (topmenu.checked) {
    boilerplate += `
    
    <script>
        function togglemenu() {
            var x = document.getElementById("nav");
            if (x.className === "nav") {
                x.className += " nav--open";
            } else {
                x.className = "nav";
            }
            var element = document.getElementById("menu-toggle");
            element.classList.toggle("menu-toggle--open");
        }
    </script>
    `;
}

if (externalJS.checked) {
    boilerplate += `
    
    <script src="app.js"></script>`;
}
boilerplate += `
</body>
</html>`;

    document.getElementById("boilerplateContainer").textContent = boilerplate;

    editor.setValue(boilerplate);
}