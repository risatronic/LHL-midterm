
-- SELECT listings.id as listing_id, categories.name as category, listings.title as title
-- FROM listings
--   JOIN users ON listings.user_id = users.id
--   JOIN categories ON category_id = categories.id
-- WHERE users.id = 3
-- ORDER BY time_posted DESC;

-- SELECT images.id as id, listing_id as listing_id, image_url
-- FROM images
-- ORDER BY listing_id;

-- SELECT *
-- FROM listings
--   JOIN categories ON category_id = categories.id
-- JOIN images ON listing_id = listings.id
-- WHERE city = 'Calgary';

-- SELECT *
-- FROM listings;

SELECT listing_id
FROM favourites
WHERE user_id = 1;

-- SELECT listings.*, listings.id as listing_id, categories.name as category
-- FROM listings
--   JOIN categories ON category_id = categories.id
-- WHERE categories.name = 'Toys'
-- ORDER BY listings.time_posted DESC;
-- LIMIT 10;
