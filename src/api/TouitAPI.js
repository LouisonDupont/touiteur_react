// RECUPERER TOUIT

function getTouit(lastTimestamp, success, error) {
    const request = new XMLHttpRequest();
    request.open("GET", "http://touiteur.cefim-formation.org/list?ts=" + lastTimestamp, true);
    request.addEventListener("readystatechange", function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            // On a reçu toute la réponse
            if (request.status === 200) {
                // La requête a fonctionnée
                const reponse = JSON.parse(request.responseText);
                console.log(reponse);
                success(reponse); // Correspond à resp *
            } else {
                error(status);
            }
        }
    });
    request.send();
}