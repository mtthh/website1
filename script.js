function loadContent(event, url) {
    event.preventDefault(); // Verhindert, dass die Seite neu geladen wird
    

    
    // Absolute Pfade für den Vergleich normalisieren
    const absoluteUrl = new URL(url, window.location.origin).pathname;
    const currentPath = window.location.pathname;
    console.log("Aktuelle URL:", currentPath);
    console.log("Neue URL:", absoluteUrl);

    // Prüfen, ob die URL bereits die aktuelle ist
    if (currentPath.endsWith(absoluteUrl)) {
        return; // Falls ja, nichts tun
    }

    fetch(window.location.origin + "/" + url) 
        .then(response => response.text()) // Inhalt als Text abrufen
        .then(data => {
            document.querySelector("article").innerHTML = data; // Inhalt in <article> setzen
            //history.replaceState(null, "", window.location.origin + "/" + url)
            history.pushState(null, "", window.location.origin + "/" + url); // URL aktualisieren (optional)
    
        })
        .catch(error => console.error("Fehler beim Laden des Inhalts:", error));
}

window.addEventListener("nav", function () {
    loadContent(new Event('nav'), window.location.pathname);
});

window.addEventListener("header", function () {
    loadContent(new Event('header'), window.location.pathname);
});


//Load Nav and Header
function loadNavuHeader() {
    fetch('/Website/nav.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('nav').innerHTML = data; // oder wähle einen anderen Container
            document.querySelector('nav').style.display = "block";
            initNav();
        })
        .catch(error => console.error('Fehler beim Laden der Navigation:', error));

        fetch('/Website/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data; // oder wähle einen anderen Container
            document.querySelector('header').style.display = "block";
            initHeader();
        })
        .catch(error => console.error('Fehler beim Laden der Navigation:', error));
}


//Navigation Script
function initNav(){
    var coll = document.getElementsByClassName("collapsible");
var coll2 = document.getElementsByClassName("collapsible2");
var coll3 = document.getElementsByClassName("collapsible3");
var i;
var j;
var k;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
}

for (j = 0; j < coll2.length; j++) {
  coll2[j].addEventListener("click", function() {
    this.classList.toggle("active2");
    var content2 = this.nextElementSibling;
    if (content2.style.display === "flex") {
      content2.style.display = "none";
    } else {
      content2.style.display = "flex";
    }
  });
}

for (k = 0; k < coll3.length; k++) {
  coll3[j].addEventListener("click", function() {
    this.classList.toggle("active3");
    var content3 = this.nextElementSibling;
    if (content3.style.display === "block") {
      content3.style.display = "none";
    } else {
      content3.style.display = "block";
    }
  });
}
}