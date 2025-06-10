DROP TABLE IF EXISTS joueurs;
DROP TABLE IF EXISTS equipe;

CREATE TABLE equipe (
    id_equipe INT AUTO_INCREMENT PRIMARY KEY,
    nom_equipe VARCHAR(100) NOT NULL
);

CREATE TABLE joueurs (
    id_joueur INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    id_equipe INT,
    FOREIGN KEY (id_equipe) REFERENCES equipe(id_equipe)
);

INSERT INTO equipe (nom_equipe) VALUES
('Golden State Warriors'),
('Los Angeles Lakers'),
('San Antonio Spurs');

INSERT INTO joueurs (nom, id_equipe) VALUES
('Stephen Curry', 1),
('Jimmy Butler III', 1),
('Draymond Green', 1),
('Buddy Hield', 1),
('Moses Moody', 1),
('Brandin Podziemski', 1),
('Kevon Looney', 1),
('Jonathan Kuminga', 1),
('Trayce Jackson-Davis', 1),
('Quinten Post', 1),
('Gary Payton II', 1),
('Gui Santos', 1),
('Pat Spencer', 1),
('Kevin Knox II', 1),
('Braxton Key', 1),
('Taran Armstrong', 1),
('LeBron James', 2),
('Luka Dončić', 2),
('Austin Reaves', 2),
('Rui Hachimura', 2),
('Dorian Finney-Smith', 2),
('Jordan Goodwin', 2),
('Jaxson Hayes', 2),
('Max Christie', 2),
('Gabe Vincent', 2),
('Jarred Vanderbilt', 2),
('Christian Wood', 2),
('Cam Reddish', 2),
('Taurean Prince', 2),
('Maxwell Lewis', 2),
('Colin Castleton', 2),
('Scotty Pippen Jr.', 2),
('Dejounte Murray', 3),
('Keldon Johnson', 3),
('Jakob Poeltl', 3),
('Jeremy Sochan', 3),
('Josh Primo', 3),
('Tre Jones', 3),
('Doug McDermott', 3),
('Blake Wesley', 3),
('Evan Mobley', 3);
