class ViewVideo {
    renderVideo(choix1, choix2, choix3) {
        this.createButtons(choix1, choix2, choix3)
    }

    createButtons(choix1, choix2, choix3) {
        let video = document.getElementById("video")

        video.addEventListener("ended", function () {
            [choix1, choix2, choix3].map((choice, key) => {
              let btn = document.getElementById(`bouton${key + 1}`);
              btn.innerHTML = choice;
              btn.setAttribute('value', choice);
              if (choice) {
                btn.classList.replace('inactive', 'active');
                this.interactWithButtons(btn);
              } else {
                btn.classList.replace('active', 'inactive');
              }
            });
          }.bind(this));
        console.log(video);
    }

    interactWithButtons(bouton) {
        bouton.addEventListener("click", function() {
            let bouton1 = document.getElementById("bouton1")
            let bouton2 = document.getElementById("bouton2")
            let bouton3 = document.getElementById("bouton3")

            bouton1.classList.replace("active", "inactive")

            bouton2.classList.replace("active", "inactive")

            bouton3.classList.replace("active", "inactive")

            this.renderNextVideo(bouton)
        }.bind(this))
    }

    renderNextVideo(bouton) {
        console.log(bouton);
        let video = document.getElementById("video")

        if(bouton.value == "Je suis prêt") {
            video.setAttribute("src", "Videos/video2.mp4")
            let choix1 = "Se réveiller"
            let choix2 = "Se rendormir"
            let choix3 = ""

            this.createButtons(choix1, choix2, choix3)
        }

        if(bouton.value == "Se réveiller") {
            video.setAttribute("src", "Videos/video3.mp4")
            let choix1 = "Griller une clope"
            let choix2 = "Prendre un bon petit déjeuner"
            let choix3 = ""

            this.createButtons(choix1, choix2, choix3)
        }

        if(bouton.value == "Se rendormir") {
            video.setAttribute("src", "Videos/video4.mp4")
            let choix1 = ""
            let choix2 = ""
            let choix3 = "Décider autrement"

            this.createButtons(choix1, choix2, choix3)
        }

        if(bouton.value == "Décider autrement") {
            video.setAttribute("src", "Videos/video2.mp4")
            let choix1 = ""
            let choix2 = ""
            let choix3 = "Se réveiller"

            this.createButtons(choix1, choix2, choix3)
        }

        if(bouton.value == "Griller une clope") {
            video.setAttribute("src", "Videos/video5.mp4")
            let choix1 = ""
            let choix2 = ""
            let choix3 = "Suivre les conseils du Dr. Tartine"

            this.createButtons(choix1, choix2, choix3)
        }

        if(bouton.value == "Suivre les conseils du Dr. Tartine") {
            video.setAttribute("src", "Videos/video6.mp4")
            let choix1 = "Petit déj équilibré"
            let choix2 = "Petit déj gourmand"
            let choix3 = ""

            this.createButtons(choix1, choix2, choix3)
        }

        if(bouton.value == "Prendre un bon petit déjeuner") {
            video.setAttribute("src", "Videos/video6.mp4")
            let choix1 = "Petit déj équilibré"
            let choix2 = "Petit déj gourmand"
            let choix3 = ""

            this.createButtons(choix1, choix2, choix3)
        }

        if(bouton.value == "Petit déj équilibré") {
            video.setAttribute("src", "Videos/video7.mp4")
            let choix1 = "Allez le foot"
            let choix2 = "Chicha d'anniversaire"
            let choix3 = ""

            this.createButtons(choix1, choix2, choix3)
        }
        
        if(bouton.value == "Allez le foot") {
            video.setAttribute("src", "Videos/video8.mp4")
            let choix1 = "Bob Cochonou"
            let choix2 = "Casquette"
            let choix3 = ""

            this.createButtons(choix1, choix2, choix3)
        }

        if(bouton.value == "Bob Cochonou") {
            video.setAttribute("src", "Videos/video9.mp4")
            let choix1 = ""
            let choix2 = ""
            let choix3 = "Éviter le coup d'courge"

            this.createButtons(choix1, choix2, choix3)
        }

        if(bouton.value == "Éviter le coup d'courge") {
            video.setAttribute("src", "Videos/video10.mp4")
            let choix1 = "Seventeen Loaded"
            let choix2 = "Passer en mode R9"
            let choix3 = ""

            this.createButtons(choix1, choix2, choix3)
        }

        if(bouton.value == "Casquette") {
            video.setAttribute("src", "Videos/video10.mp4")
            let choix1 = "Seventeen Loaded"
            let choix2 = "Passer en mode R9"
            let choix3 = ""

            this.createButtons(choix1, choix2, choix3)
        }
    }
}