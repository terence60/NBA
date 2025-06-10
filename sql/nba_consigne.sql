-- 00 Ajouter vous en tant que joueurs
INSERT INTO joueurs (nom, id_equipe)
VALUES ('Francis', NULL)

-- 1 Afficher tous les joueurs dont le nom commence par "S".
SELECT * 
FROM joueurs 
WHERE nom LIKE 's%';

-- 2 Compter le nombre total de joueurs.
-- COUNT(*) : Est une fonction d'agrégation. Elle compte le nombre total de lignes dans la table.
-- Une agrégation, c’est comme résumer un ensemble de lignes par une valeur globale (ex : total, moyenne, nombre).

-- SELECT SUM(montant) FROM ventes; 👉 Résultat : 30
-- SELECT COUNT(*) FROM ventes; 👉 Résultat : 3
-- SELECT AVG(montant) FROM ventes; 👉 Résultat : 10

-- 👉 Chacune de ces fonctions agrège plusieurs lignes en une seule valeur.

SELECT COUNT(*) AS nb_joueurs
FROM joueurs

-- 3 Afficher tous les joueurs triés par ordre alphabétique décroissant.

SELECT * 
FROM joueurs
ORDER BY nom DESC; 

-- 4 Modifier le nom d’un joueur (ex : "Kevon Loony" en "Kevon Looney").

UPDATE joueurs
SET nom = 'toto'
WHERE nom = 'Kevon Lonny'

UPDATE joueurs
SET nom = 'toto'
WHERE id_joueurs = 12

-- 5 Supprimer un joueur fictif ajouté par erreur (ex : "Pat Spencer").

DELETE FROM joueurs
WHERE nom = 'Pat Spencer' 

-- 6 Afficher la liste de tous les joueurs avec le nom de leur équipe.

SELECT joueurs.nom AS nom_joueurs, equipe.nom_equipe
FROM joueurs
JOIN equipe ON joueurs.id_equipe = equipe.id_equipe;

-- 7 Afficher tous les joueurs appartenant aux "Golden State Warriors".

SELECT joueurs.nom
FROM joueurs , equipe
WHERE joueurs.id_equipe = equipe.id_equipe
AND equipe.nom_equipe = 'Golden State Warriors';

SELECT joueurs.nom , equipe.nom_equipe
FROM joueurs
JOIN equipe ON joueurs.id_equipe = equipe.id_equipe
WHERE equipe.nom_equipe = 'Golden State Warriors';

-- 8 Compter le nombre de joueurs par équipe.

-- GROUP BY e.nom_equipe
-- Regroupe les résultats par nom d’équipe.
-- Ca permet d'appliquer le COUNT(*) pour chaque groupe (chaque équipe).
-- Donc en gros la clause GROUP BY en SQL sert à regrouper des lignes qui ont des valeurs communes dans une ou plusieurs colonnes, afin d’effectuer des calculs d’agrégation

SELECT equipe.nom_equipe, COUNT(*) AS nombre_joueurs
FROM joueurs
JOIN equipe ON joueurs.id_equipe = equipe.id_equipe
GROUP BY equipe.nom_equipe

-- 9 Trouver le nom des équipes qui ont plus de 10 joueurs.

SELECT equipe.nom_equipe, COUNT(*) AS nb_joueurs
FROM joueurs 
JOIN equipe ON equipe.id_equipe = joueurs.id_equipe
GROUP BY equipe.nom_equipe
HAVING COUNT(*) > 10;

-- Le Having permet de mettre en place une condition apres L'utilisation d'un GROUP BY, on ne peut pas utiliser le WHERE

-- 10 Lister les joueurs sans équipe (dans le cas où certains ont id_equipe = NULL )

SELECT * 
FROM joueurs
WHERE id_equipe IS NULL
