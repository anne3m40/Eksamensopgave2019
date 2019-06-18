window.addEventListener("load", sidenVises);

function sidenVises(){
    console.log("sidenVises");

    //taleboblen vises
    document.querySelector(".taleboble_container").classList.remove("hide");

    //ja og nej vises
        document.querySelector(".ja_container").classList.remove("hide");
        document.querySelector(".nej_container").classList.remove("hide");

    //Gør ja klibar
    document.querySelector(".ja_container").addEventListener("click", danseKat);

    //Gør nej klikbar
        document.querySelector(".nej_container").addEventListener("click", slut);

}

function danseKat(){
    console.log("danseKat");

    //Skjuler taleboble
        document.querySelector(".taleboble_container").classList.add("hide");

    //Skjuler ja og nej knap
    document.querySelector(".ja_container").classList.add("hide");
    document.querySelector(".nej_container").classList.add("hide");

    //Kat kommer frem
            document.querySelector(".kat_container").classList.remove("hide");

    //Kat danser
    document.querySelector(".kat_container").classList.add("dans");

    //Timer til at kat forsvinder
    setTimeout(slut, 5000);
}

function slut(){
    console.log("slut");

    //Skjuler taleboble
        document.querySelector(".taleboble_container").classList.add("hide");

    //Skjuler ja og nej knap
    document.querySelector(".ja_container").classList.add("hide");
    document.querySelector(".nej_container").classList.add("hide");

    //Stopper dans
        document.querySelector(".kat_container").classList.remove("dans");

    //Skjuler kat
        document.querySelector(".kat_container").classList.add("hide");


}
