const {
  getAllListingsByMostRecent,
  getAllListingsByUserID,
  getAllListingsByCity,
  getAllListingsByCategory,
  getAllListingsUserFavourited,
  getMostFavouritedListings,
  getAllListingsByFilters,
  getListingByListingID,
  getAllFavouritesByUserID
} = require('./listing-queries');

getAllFavouritesByUserID(1).then(res => console.log(res));

const {
  getAllMessagesByListingID,
  getAllMessagesByUserID,
  getAllMessagesForUserByListingID,
  getMessagesAndSellerUsernameWithListingIDAndBuyerID,
  getMessagesAndBuyerUsernameWithListingIDAndSellerID,
  getAllMessagesWithUsersListings
} = require('./messages-queries');

const {
  getUserByID,
  getUserByUsername,
} = require('./users-queries');

const {
  addListingWithImgs,
  actuallyDeleteListingByID,
  addFavouriteToListing
} = require('./listings-mod');

// addFavouriteToListing(30, ).then(res => console.log(res));

// addListingWithImgs({
//   title: 'safgsddgbdsv',
//   price: 0,
//   category_id: 7,
//   city: 'Calgary',
//   condition: 'BNIB',
//   time_posted: 'now()',
//   description: 'dafegsdfbsddagafsfah',
//   user_id: 1
// },
//   ['eafgdggdfasd']);

// actuallyDeleteListingByID(10).then(res => console.log(res));

// getAllListingsUserFavourited(2).then(res => console.log(res));
// getAllMessagesByListingID(1).then(res => console.log(res));
// getMessagesAndSellerUsernameWithListingIDAndBuyerID(1, 2).then(res => console.log(res));
// getMessagesAndBuyerUsernameWithListingIDAndSellerID(1, 1).then(res => console.log(res));
// getAllMessagesForUserByListingID(2, 1).then(res => console.log(res));
// getMostFavouritedListings().then(res => console.log(res));
// getAllListingsByFilters({
//   title: 'a',
//   category: 'Plushies',
//   max_price: 6000,
//   min_price: 10
// }).then(res => console.log(res));
// getAllListingsByUserID(2).then(res => console.log(res));
// getAllListingsByMostRecent().then(res => console.log(res))
// getAllListingsByCategory('Toys').then(res => console.log(res));
// getAllListingsByCity('Vancouver').then(res => console.log(res));
// object.then(res => console.log(res));

// getUserByID(10);
// getUserByUsername('mdaniely9');

// getListingByListingID(1).then(res => console.log(res));
// getAllMessagesWithUsersListings(1).then(res => console.log(res));
