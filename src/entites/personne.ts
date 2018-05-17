export class Personne {
    nom : string;
    prenom : string;
    email : string;

    public constructor(nom: string, prenom: string, email: string){
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
    }
}