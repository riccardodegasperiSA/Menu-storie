function disegna(lista){
    var cercato = window.location.search.replace("?cerca=","").toLocaleLowerCase();
    for (var i=lista.length-1;i>=0;i--){
        if (lista[i].title.toLowerCase().includes(cercato)){
            const link = document.createElement("div");
            link.classList.add("card");
            link.innerHTML = `<div class="card__${lista[i].genre}">

            <a href="./lettura.html?=${lista[i].file}"><h3 class="titolo">${lista[i].title}</h3></a>
            <br/><br/>
            <span class="genere">${lista[i].genre}</span>
            

            </div>`;
            document.getElementById("linkarea").appendChild(link);
            //<a href="./lettura.html?=${lista[i].file}"></a>>
        }
    }
}

function caricalink(){
    const uri = "elencostorie";
    var elenco = fetch("./assets/json/"+uri+".json")
    .then(function(response){
        response.json().then(function (storia){
            disegna(storia);
        })
    });
    
}

function ricercalocale(){
    var input, filter, divLink, card, a, i;
    input = document.getElementById("ricerca");
    filter = input.value.toLowerCase();
    divLink = document.getElementById("linkarea");
    card = document.getElementsByClassName("card");
    console.log(filter);

    for (i=0;i<card.length;i++){
        a = card[i].getElementsByClassName("titolo")[0];
        if (a.innerHTML.toLowerCase().indexOf(filter)>-1) {
            card[i].style.display = "";
        } else {
            a = card[i].getElementsByTagName("span")[0];
            if (a.innerHTML.toLowerCase().indexOf(filter)>-1) {
                card[i].style.display = "";
            } else {
                card[i].style.display = "none";
            }
        }
    }
}

//download
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    content = content;
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}