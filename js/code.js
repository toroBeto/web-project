function m_over(){  
    var sp = document.getElementById("sp_litchi");
    sp.innerHTML = "Litchi";
    sp.style.backgroundColor = "rgba(255, 99, 71, 0.4)";
}

function m_out(){
    var sp = document.getElementById("sp_litchi");
    sp.innerHTML = "";
    sp.style.backgroundColor = "transparent";
}

// function for manga
function m_over_manga(){  
    var m = document.getElementById("sp_mango");
    m.innerHTML = "Mangue";
    m.style.backgroundColor = "rgba(255, 99, 71, 0.4)";
}

function m_out_manga(){
    var m = document.getElementById("sp_mango");
    m.innerHTML = "";
    m.style.backgroundColor = "transparent";
}

// function for orange
function m_over_orange(){  
    var m = document.getElementById("sp_orange");
    m.innerHTML = "Orange";
    m.style.backgroundColor = "rgba(255, 99, 71, 0.4)";
}

function m_out_orange(){
    var m = document.getElementById("sp_orange");
    m.innerHTML = "";
    m.style.backgroundColor = "transparent";
}

// on click on vokatra
function click_vokatra(){

    var zanakazo = document.getElementById("id_zanakazo");
    zanakazo.style.backgroundColor = "transparent";
    zanakazo.style.color = "gray";

    var a_zanakazo = document.getElementById("a_zanakazo"); 
    a_zanakazo.style.color = "gray";

    var vokatra = document.getElementById("id_isiny");
    vokatra.style.backgroundColor = "#02461c";

    var a_vokatra = document.getElementById("a_vokatra"); 
    a_vokatra.style.color = "#fff";

    var idsarylitchi = document.getElementById("id_sary_litchi");
        idsarylitchi.src = "../images/litchi-isiny.png";
    var idsarymango = document.getElementById("id_sary_mango");
        idsarymango.src = "../images/manga isiny.png";
    var idsarymango = document.getElementById("id_sary_orange");
        idsarymango.src = "../images/vosary isiny.jpg";
}

// on click on hazo
function click_hazo(){
    var zanakazo = document.getElementById("id_zanakazo");
    zanakazo.style.backgroundColor = "#02461c";

    var a_zanakazo = document.getElementById("a_zanakazo"); 
    a_zanakazo.style.backgroundColor = "transparent";
    a_zanakazo.style.color = "#fff";

    var vokatra = document.getElementById("id_isiny");
    vokatra.style.backgroundColor = "transparent";
    vokatra.style.color = "gray";

    var a_vokatra = document.getElementById("a_vokatra"); 
    a_vokatra.style.color = "gray";

    var idsarylitchi = document.getElementById("id_sary_litchi");
        idsarylitchi.src = "../images/litchi tree.jpg";
    var idsarymango = document.getElementById("id_sary_mango");
        idsarymango.src = "../images/mango tree.jpg";
    var idsarymango = document.getElementById("id_sary_orange");
        idsarymango.src = "../images/orange tree.jpg";
}

// function hover fb
function turn_over(){
    var fb = document.getElementById("fb");
    var i_fb = document.getElementById("i_fb");
    i_fb.style.transform = "rotate(360deg)";
    i_fb.style.webkitTransform = "rotate(360deg)";
    i_fb.style.webkitTransition = "-webkit-transform 2s";
}
function turn_out(){
    var fb = document.getElementById("fb");
    var i_fb = document.getElementById("i_fb");
    i_fb.style.transform = "rotate(-360deg)";
    i_fb.style.webkitTransform = "rotate(-360deg)";
    i_fb.style.webkitTransition = "-webkit-transform 2s";
}

// function hover twitter
function turn_over_twitter(){
        var i_tw = document.getElementById("i_twitter");
    i_tw.style.transform = "rotate(360deg)";
    i_tw.style.webkitTransform = "rotate(360deg)";
    i_tw.style.webkitTransition = "-webkit-transform 2s";
}
function turn_out_twitter(){
    var i_tw = document.getElementById("i_twitter");
    i_tw.style.transform = "rotate(-360deg)";
    i_tw.style.webkitTransform = "rotate(-360deg)";
    i_tw.style.webkitTransition = "-webkit-transform 2s";
}

// function hover linkedIn
function turn_over_linkedin(){
    var i_lk = document.getElementById("i_linkedin");
i_lk.style.transform = "rotate(360deg)";
i_lk.style.webkitTransform = "rotate(360deg)";
i_lk.style.webkitTransition = "-webkit-transform 2s";
}
function turn_out_linkedin(){
var i_lk = document.getElementById("i_linkedin");
i_lk.style.transform = "rotate(-360deg)";
i_lk.style.webkitTransform = "rotate(-360deg)";
i_lk.style.webkitTransition = "-webkit-transform 2s";
}

// function hover github
function turn_over_git(){
    var i_g = document.getElementById("i_git");
i_g.style.transform = "rotate(360deg)";
i_g.style.webkitTransform = "rotate(360deg)";
i_g.style.webkitTransition = "-webkit-transform 2s";
}
function turn_out_git(){
var i_g = document.getElementById("i_git");
i_g.style.transform = "rotate(-360deg)";
i_g.style.webkitTransform = "rotate(-360deg)";
i_g.style.webkitTransition = "-webkit-transform 2s";
}