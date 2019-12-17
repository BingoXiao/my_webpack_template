import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import "./index.scss";
// let tabUI = require("../../js/tab");

(function ($, window) {
    $("#nav li").click(function () {
        let index = $(this).index();
        // $(this).addClass("active");
    });
})(jQuery, window);