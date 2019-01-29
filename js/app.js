"use strict";
window.onload = function () {
    var btnAcm = document.getElementById("btnAcm");
    var btnAcmUC = document.getElementById("btnAcmUC");
    var acm = document.getElementById("about-ACM");
    var acmuc = document.getElementById("about-ACMUC");
    acmuc.classList.add("ocultar");
    btnAcm.addEventListener("click", ACM);
    btnAcmUC.addEventListener("click", ACMUC);
    function ACM() {
        acm.classList.remove("ocultar");
        acm.classList.add("mostrar");
        acmuc.classList.remove("mostrar");
        acmuc.classList.add("ocultar");
    }
    function ACMUC() {
        acm.classList.add("ocultar");
        acmuc.classList.remove("ocultar");
        acmuc.classList.add("mostrar");
    }
};
