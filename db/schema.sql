CREATE TABLE IF NOT EXISTS characters(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255),
<<<<<<< HEAD
    description VARCHAR(255),
=======
    image_url VARCHAR(255),
>>>>>>> d9907aaf630977688a00973df420c7b6ada57267
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

TRUNCATE TABLE characters RESTART IDENTITY;

<<<<<<< HEAD
INSERT INTO characters (name, type, description) VALUES
('Twilight sparkle', 'Alicorn', 'A princess that has allot to learn.'),
('Pinkie pie', 'Earth pony', 'A energetic friend.'),
('Rarity', 'Unicorn', 'Really into fashion.'),
('Rainbow Dash', 'Pegasus', 'Likes competition.'),
('Applejack', 'Earth pony', 'Very strong.'),
('Fluttershy', 'Pegasus', 'A shy and timid friend that likes animals.');
=======
INSERT INTO characters (name, type) VALUES
('Twilight sparkle', 'Alicorn'),
('Pinkie pie', 'Earth pony'),
('Rarity', 'Unicorn'),
('Rainbow Dash', 'Pegasus'),
('Applejack', 'Earth pony'),
('Fluttershy', 'Pegasus');
>>>>>>> d9907aaf630977688a00973df420c7b6ada57267
