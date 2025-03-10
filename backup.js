
       
       let breadcrumb = [];
       let breadcrumbIds = [];

       let subs = false;
       var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
            content.style.display = "none";
            } else {
            content.style.display = "block";
            }
        });
        }

       /*function collapse(){
            var coll = document.getElementsByClassName("collapsible");
            var i;

            for (i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
                } else {
                content.style.display = "block";
                }
            });
            }
       }*/


       function showSubMenu(menuId, categoryName, isMainCategory) {
            //breadcrubs kürzen
           idbreadcrubs(menuId, categoryName, isMainCategory);

            /*document.querySelectorAll('.column').forEach(menu => {
                if (!menu.classList.contains('main-column')) menu.style.display = 'none';
            });*/

           if(subs == true){
            document.querySelectorAll('.column').forEach(menu => {
                if (!menu.classList.contains('main-column')) menu.style.display = 'none';
            });
            subs = false;
           }

            
            if(document.getElementById(menuId+ "-1").classList.contains('sub-column1')) {
                subs = true;
                document.getElementById(menuId + "-1").style.display = 'flex';

            }
            else document.getElementById(menuId + "-1").style.display = 'flex';
           

            
            updateBreadcrumb();
        }


        function openBilder(menuId, categoryName, isMainCategory) {
            document.querySelectorAll('.bilder').forEach(bilder => {
                bilder.style.display = 'none';
            });
            document.getElementById(menuId).style.display = 'block';
            idbreadcrubs(menuId, categoryName, isMainCategory);
            updateBreadcrumb();
        }

        function idbreadcrubs(menuId, categoryName, isMainCategory) {


            if (isMainCategory == 'main') {
                breadcrumb = [categoryName];
                breadcrumbIds = [menuId];
            } 

            else {
                let existingIndex = breadcrumb.indexOf(categoryName);
                if (existingIndex !== -1) {
                    breadcrumb = breadcrumb.slice(0, existingIndex + 1);
                    breadcrumbIds = breadcrumbIds.slice(0, existingIndex + 1);
                } else {
                    breadcrumb.push(categoryName);
                    breadcrumbIds.push(menuId);
                }

            }
        }

        function updateBreadcrumb() {
            let breadcrumbDiv = document.getElementById('breadcrumb');
            breadcrumbDiv.innerHTML = '<span onclick="resetMenu()">Home</span>';
            
            breadcrumb.forEach((name) => {
                breadcrumbDiv.innerHTML += ` > <span >${name}</span>`;
            });
        }

        /*function resetMenu() {
            document.querySelectorAll('.column').forEach(menu => {
                menu.style.display = 'none';
            });
            document.getElementById('mainMenu').style.display = 'flex';
            breadcrumb = [];
            breadcrumbIds = [];

            
            updateBreadcrumb();
        }*/

        function navigateTo(index) {
            document.querySelectorAll('.column').forEach(menu => {
                menu.style.display = 'none';
            });
            
            let menuElement = document.getElementById(breadcrumbIds[index]);
            if (menuElement) {
                menuElement.style.display = 'flex';
            } else {
                document.getElementById('mainMenu').style.display = 'flex';
            }
            
            breadcrumb = breadcrumb.slice(0, index + 1);
            breadcrumbIds = breadcrumbIds.slice(0, index + 1);
            updateBreadcrumb();
        }