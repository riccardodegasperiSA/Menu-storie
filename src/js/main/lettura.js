function carica(){
    const uri = window.location.search.replace("?=","");
     fetch("./assets/json/"+uri)
    .then(function( response) {
        if (!response.ok) {
            document.getElementById("areatitolo").innerHTML="STORIA NON TROVATA";
                document.getElementById("areastoria").innerHTML="OPS";
                document.getElementById("titolo").innerHTML="404";
        }else{
            response.json().then(function (storia) {
                document.getElementById("areatitolo").className+=`--${storia.genre}`;
                document.getElementById("areatitolo").innerHTML=`<h1>${storia.title}</h1>`;
                document.getElementById("areastoria").innerHTML=storia.text;
            });
        }
    })
    
}