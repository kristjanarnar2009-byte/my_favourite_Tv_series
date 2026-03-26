CREATE TABLE IF NOT EXISTS characters(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255),
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

TRUNCATE TABLE characters RESTART IDENTITY;

INSERT INTO characters (name, type) VALUES
('Twilight sparkle', 'Alicorn'),
('Pinkie pie', 'Earth pony'),
('Rarity', 'Unicorn'),
('Rainbow Dash', 'Pegasus'),
('Applejack', 'Earth pony'),
('Fluttershy', 'Pegasus');