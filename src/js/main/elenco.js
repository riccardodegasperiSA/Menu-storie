function convertiElenco() {
    var genere = document.getElementById("genere");
    var titolo = document.getElementById("titolo");
    var riferimento = {
        genre : genere.value,
        title : titolo.value,
        file : ""
    };
    riferimento.file = titolo.value.replace(/\s/g,"")+".json";
    var json = JSON.stringify(riferimento);
    //alert(json);
    download(json, "frammento.json");
    //alert(storiaSalvata.author);
}