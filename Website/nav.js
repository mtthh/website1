

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
