let panier = [];
let total = 0;

function ajouter(nom, prix) {
    panier.push({nom, prix});
    total += prix;

    afficher();
}

function afficher() {
    let liste = document.getElementById("liste");
    liste.innerHTML = "";

    panier.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = item.nom + " - " + item.prix + " DH <button onclick='supprimer("+index+")'>❌</button>";
        liste.appendChild(li);
    });

    document.getElementById("total").innerText = total;
    document.getElementById("panier-btn").innerText = "🛒 " + panier.length;
}

function supprimer(index) {
    total -= panier[index].prix;
    panier.splice(index, 1);
    afficher();
}

function vider() {
    panier = [];
    total = 0;
    afficher();
}

function togglePanier() {
    document.getElementById("panier").classList.toggle("active");
}

function envoyer(e) {
    e.preventDefault();
    alert("Message envoyé !");
}