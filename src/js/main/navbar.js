function dropmenu() {
    var x = document.getElementById("navbar__dropcontent");
    if (x.className === "navbar__dropcontent") {
      x.className += "--show";
    } else {
      x.className = "navbar__dropcontent";
    }
}

window.onclick = function(event) {
  if (event.target.id != "navbar__options") {
  var dropdown = document.getElementById("navbar__dropcontent");
    if (dropdown.className == "navbar__dropcontent--show") {
      dropdown.className = "navbar__dropcontent";
    }
  }
}