
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


// Gestion du formulaire de billetterie
const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {

    const typeBillet = document.getElementById("typeBillet");
    const quantite = document.getElementById("quantite");
    const total = document.getElementById("total");
    const message = document.getElementById("message");

    // Calcul automatique du prix
    function calculerTotal() {
        const prix = Number(typeBillet.value);
        const nombre = Number(quantite.value);

        total.textContent =
            "Montant total : " + (prix * nombre) + " DH";
    }

    typeBillet.addEventListener("change", calculerTotal);
    quantite.addEventListener("input", calculerTotal);

    // Soumission du formulaire
    reservationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nom = document.getElementById("nom").value;

        message.textContent =
            "Merci " + nom + " ! Votre demande de réservation a été enregistrée.";

        reservationForm.reset();
        calculerTotal();
    });
}

