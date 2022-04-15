/*jshint esversion: 6 */

window.onload = function () {
    var formTask = document.querySelector("form");
    var listeTaches = document.querySelector("#listeTaches");
    console.log("form element : ", formTask);
    formTask.addEventListener("submit", createTask);

    function createTask(event) {
        // event.preventDefault() empeche l'actualisation 
        event.preventDefault();
        console.log("yes");
        console.log("Formulaire : ", event);
        // const reponse001 = window.prompt("Votre Tache");
        // console.log("réponse : ",reponse001);

    }

    function newTask(
        couleurTache,
        titreTache,
        dateTache,
        tache01,
        tache02,
        tache03
    ) {
        console.log("nb argts : ", arguments.length);

        var tache = document.createElement("div");
        tache.classList += "tache";
        tache.innerHTML = `     <h3>${titreTache}</h3>
                                <em>${dateTache}</em>
                                <ul>
                                    <li>${tache01}</li>
                                    <li>${tache02}</li>
                                    <li>${tache03}</li>
                                </ul>
                                <p class="done">Done</p>`;

        console.log("Liste : " + listeTaches);

        listeTaches.appendChild(tache);

        console.log(tache.querySelector(".tache h3"));

        if (couleurTache) {
            tache.classList.add("tache");
            tache.style.backgroundColor = couleurTache;
            tache.querySelector(".tache h3").style.color = couleurTache;
        } else {
            alert("Pas de couleur définie");
        }
    }

    // TODO : Remplacer A faire par une incrémentation

    newTask("lightblue", "Note JS 1", "2019-08-13", "Apprendre JS");
    newTask("lightgreen", "Note JS 2", "2019-08-13", "Apprendre PHP", "Apprendre SQL");
    newTask("orange", "Note JS 3", "2019-08-13", "Apprendre Python", "Apprendre Jango");
    newTask("violet", "Note JS 4", "2019-08-13", "Apprendre Node.js");
    newTask("lightblue", "Note JS 5", "2019-08-13", "Apprendre JS");
    newTask("lightgreen", "Note JS 6", "2019-08-13", "Apprendre PHP", "Apprendre SQL");
    newTask("orange", "Note JS 7", "2019-08-13", "Apprendre Python", "Apprendre Jango");
    newTask("violet", "Note JS 8", "2019-08-13", "Apprendre Node.js");

    // Script pour cocher

    var selection = document.querySelectorAll(".tache");

    for (let index = 0; index < selection.length; index++) {
        const taskToCheck = selection[index];
        console.log("nb de taches : ", selection.length);

        taskToCheck.addEventListener("click", toCheck);

        function toCheck() {
            taskToCheck.classList.toggle("check");
        }
    }

    var toto = document.getElementsByTagName(".tache");
    console.log(toto);

    // Script pour cocher

    // var selection = document.querySelectorAll(".tache li");

    // for (let index = 0; index < selection.length; index++) {
    //     const taskToCheck2 = selection[index];
    //     console.log("nb de taches : ", selection.length);

    //     taskToCheck2.addEventListener("click", toCheck2);

    //     function toCheck2() {
    //         taskToCheck2.classList.toggle("ok");
    //     }
    // }

    // var toto = document.getElementsByTagName(".tache li");
    // console.log(toto);





    // var totoArray= Array.from(toto);
    // console.log(totoArray);

    // totoArray.forEach(element => {
    //     console.log(element);
    //     element.style.backgroundColor="red";
    // });

    //HTML Collection VS Nodelist

    // var toto = document.querySelectorAll(".tache");
    // console.log(toto);

    // toto.forEach(element => {
    //     console.log(element);
    //     element.style.backgroundColor="red";
    // });



};

// ANGULAR

