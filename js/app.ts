window.onload=function()
{
    let btnAcm=<HTMLElement>document.getElementById("btnAcm");
    let btnAcmUC=<HTMLElement>document.getElementById("btnAcmUC");

    let acm=<HTMLElement>document.getElementById("about-ACM");
    let acmuc=<HTMLElement>document.getElementById("about-ACMUC");

    acmuc.classList.add("ocultar");

    btnAcm.addEventListener("click",ACM);
    btnAcmUC.addEventListener("click",ACMUC);

    function ACM()
    {
        acm.classList.remove("ocultar");
        acm.classList.add("mostrar");
        acmuc.classList.remove("mostrar");
        acmuc.classList.add("ocultar");
    }

    function ACMUC()
    {
        acm.classList.add("ocultar");
        acmuc.classList.remove("ocultar");
        acmuc.classList.add("mostrar");
    }
}