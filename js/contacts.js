class Contact {
	constructor(nom, prenom) {
		this.nom = nom;
		this.prenom = prenom;
	}
	afficher() {
		return `Nom : ${this.nom}, prénom : ${this.prenom}`;
	}
}

const caroleLevisse = new Contact("Lévisse", "Carole");
const melodieNelsonne = new Contact("Nelsonne", "Mélodie");

const tableauContacts = [caroleLevisse, melodieNelsonne];

console.log("Bienvenue dans le gestionnaire des contacts !");

let continuer = true;

while (continuer) {
	console.log("1 : Lister les contacts");
	console.log("2 : Ajouter un contact");
	console.log("0 : Quitter");
	const choix = prompt("Choisissez une option :");

	if (choix === "1") {
		console.log("Voici la liste de tous vos contacts :");
		for (contact of tableauContacts) {
			console.log(contact.afficher());
		}
	}

	if (choix === "2") {
		const nouveauNom = prompt("Entrez le nom du nouveau contact :");
		const nouveauPrenom = prompt("Entrez le prénom du nouveau contact :");
		const nouveauContact = new Contact(nouveauNom, nouveauPrenom);
		tableauContacts.push(nouveauContact);
		console.log("Le nouveau contact a été ajouté");
	}

	if (choix === "0") {
		continuer = false;
		console.log("\nAu revoir !");
	}
	console.log();
}
