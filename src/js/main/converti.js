function convertiStoria() {
    var genere = document.getElementById("genere");
    var titolo = document.getElementById("titolo");
    var testo = document.getElementById("testo");
    var storia = {
        genre : genere.value,
        title : titolo.value,
        text : testo.value.replace(/\n/g,"<br/>")
    };
    var json = JSON.stringify(storia);
    //alert(json);
    download(json, storia.title.replace(/\s/g,"") + ".json");
    //alert(storiaSalvata.author);
}