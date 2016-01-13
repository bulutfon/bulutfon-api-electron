// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

// Use new ES6 modules syntax for everything.
import os from 'os'; // native node.js module
import { remote } from 'electron'; // native electron module
import jetpack from 'fs-jetpack'; // module loaded from npm
import { greet } from './hello_world/hello_world'; // code authored by you in this project
import env from './env';

var app = remote.app;
var appDir = jetpack.cwd(app.getAppPath());

onload = function() {
    var webview = document.getElementById("webview-bulutfon");
    var webviewFrame = document.querySelector(".js-webview-frame");
    var webviewLoading = document.querySelector(".js-webview-loading");

    var loadstart = function() {
    }
    var loadstop = function() {
        webviewFrame.classList.remove('hide');
        webviewLoading.classList.add('hide');
    }
    webview.addEventListener("did-start-loading", loadstart);
    webview.addEventListener("did-stop-loading", loadstop);
}
