
// Date de début du festival
const dateFestival = new Date("December 15, 2026 18:00:00").getTime();

// Fonction de mise à jour du compte à rebours
function updateCountdown() {

    const maintenant = new Date().getTime();

    const difference = dateFestival - maintenant;

    const affichage = document.getElementById("countdown");

    // Vérifier que l'élément existe
    if (!affichage) {
        return;
    }

    if (difference <= 0) {
        affichage.innerHTML = "Le festival a commencé !";
        return;
    }

    const jours = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const heures = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const secondes = Math.floor(
        (difference % (1000 * 60)) / 1000
    );

    affichage.innerHTML =
        jours + " jours : " +
        heures + " heures : " +
        minutes + " minutes : " +
        secondes + " secondes";
}

// Actualiser chaque seconde
updateCountdown();
setInterval(updateCountdown, 1000);

