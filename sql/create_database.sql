DROP DATABASE IF EXISTS bibliotheque ;
CREATE DATABASE bibliotheque;
USE bibliotheque;

CREATE TABLE auteurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL
);
    CREATE TABLE adherents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    date_inscription DATE
);
    CREATE TABLE livres (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    annee INT,
    auteur_id INT,
    FOREIGN KEY (auteur_id) REFERENCES auteurs(id)
);
CREATE TABLE emprunts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    livre_id INT,
    adherent_id INT,
    date_emprunt DATE NOT NULL,
    date_retour DATE,
    FOREIGN KEY (livre_id) REFERENCES livres(id),
    FOREIGN KEY (adherent_id) REFERENCES adherents(id)
);

-- Insertion des auteurs
INSERT INTO auteurs (nom) VALUES ('Victor Hugo');
INSERT INTO auteurs (nom) VALUES ('Albert Camus');
INSERT INTO auteurs (nom) VALUES ('Simone de Beauvoir');
INSERT INTO auteurs (nom) VALUES ('Marcel Proust');

-- Insertion des livres (avec leurs auteurs correspondants)
INSERT INTO livres (titre, annee, auteur_id) VALUES ('Les Misérables', 1862, 1);
INSERT INTO livres (titre, annee, auteur_id) VALUES ('L''Étranger', 1942, 2);
INSERT INTO livres (titre, annee, auteur_id) VALUES ('Le Deuxième Sexe', 1949, 3);
INSERT INTO livres (titre, annee, auteur_id) VALUES ('À la recherche du temps perdu', 1913, 4);

-- Insertion des adhérents
INSERT INTO adherents (nom, prenom, email, date_inscription) VALUES ('Dupont', 'Marie', 'marie.d@mail.fr', '2023-03-15');
INSERT INTO adherents (nom, prenom, email, date_inscription) VALUES ('Martin', 'Thomas', 't.martin@mail.fr', '2023-07-22');
INSERT INTO adherents (nom, prenom, email, date_inscription) VALUES ('Lefebvre', 'Sophie', 'sophie.l@mail.fr', '2023-11-08');
INSERT INTO adherents (nom, prenom, email, date_inscription) VALUES ('Bernard', 'Lucas', 'lucas.b@mail.fr', '2023-04-30');

-- Insertion des emprunts
INSERT INTO emprunts (adherent_id, livre_id, date_emprunt) VALUES (1, 1, '2023-05-10');
INSERT INTO emprunts (adherent_id, livre_id, date_emprunt) VALUES (2, 2, '2023-05-15');
INSERT INTO emprunts (adherent_id, livre_id, date_emprunt) VALUES (3, 3, '2023-05-05');
INSERT INTO emprunts (adherent_id, livre_id, date_emprunt) VALUES (4, 4, '2023-05-20');