$(window).on("load", sidenErLoadet);


function sidenErLoadet() {
    console.log("klar");
    $("#knapSub").on("click", stopknap);
    $("#knapSub2").on("click", stopknap);
    frontpageEffect();

}


function stopknap (){
    console.log("knap");

    $("#Sub").removeClass("SubPos1");
    $("#Sub").addClass("SubPos2");
    $("#knapSub2").off("click", stopknap);
     $("#knapSub").off("click", stopknap);
}


$("#frontpage").mouseover(
function frontpageEffect() {
     console.log("lel");



    $("#frontpagebox").removeClass("color5");

    $("#textSwim").removeClass("SwimStart");
     $("#textSwim").addClass("SwimEnd");

    $("#Sub").on("animationend", showOm)

}
    );

function showOm () {

    $("#SeaWeed").removeClass("seaWeedHidden")
    $("#SeaWeed").addClass("seaWeed")
    $("#IdOmTextBox").removeClass("OmHide");
    $("#IdOmTextBox").addClass("OmShow");
    $("#IdOmImgBox").removeClass("OmHide");
    $("#IdOmImgBox").addClass("OmShow");
}
