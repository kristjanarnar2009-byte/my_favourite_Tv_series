CREATE TABLE IF NOT EXISTS characters(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255),
    description VARCHAR(255)
);

TRUNCATE TABLE characters RESTART IDENTITY;

INSERT INTO characters (name, type, description) VALUES
('Twilight sparkle', 'Alicorn', 'A princess that has allot to learn.'),
('Pinkie pie', 'Earth pony', 'A energetic friend.'),
('Rarity', 'Unicorn', 'Really into fashion.'),
('Rainbow Dash', 'Pegasus', 'Likes competition.'),
('Applejack', 'Earth pony', 'Very strong.'),
('Fluttershy', 'Pegasus', 'A shy and timid friend that likes animals.');