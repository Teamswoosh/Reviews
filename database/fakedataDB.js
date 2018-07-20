<<<<<<< HEAD
const db_connection = require('./db_connection.js')
var faker = require('faker');

const addData = () => {
  var array = [review.user_name, review.date, review.review, review.rating, review.upvote, review.downvote]
    db_connection.query('INSERT INTO user_reviews (name, review_date, review, stars, thumbs_up, thumbs_down) VALUES (?,?,?,?,?,?)', array, (err, data) => {
      if (err) {
        console.log('Error adding reviews to the database', err)
      return
      } 
        console.log('Succesfully added to the database')
      
      })
  }

const getData = (cb) => {
  db_connection.query('SELECT * FROM user_reviews', (err, data) => {
    if (err) {
      console.log('Error getting reviews from the database')
      return
    } else {
      console.log('Succesfully getting reviews from the database')
      cb(null, data)
    }
  })
}

//Function generating fake reviews using faker.js 

const generateFakeData = () => {
=======
var faker = require('faker');
const db_connection = require('./db_connection.js')

//Function generating fake reviews using faker.js 

>>>>>>> 2cc8e25c95e5b596c49222e062172515438cdbdc
for (var i=0; i<100; i++) {

var stars = faker.random.number({
  'min': 1,
  'max': 5
});

var review = {
  user_name: faker.name.findName(),
  date: faker.date.month(),
  review: faker.lorem.paragraph(),
  rating: stars,
  upvote: faker.random.number(),
  downvote: faker.random.number()
};

<<<<<<< HEAD
}
}

//addData();

module.exports = {
  addData,
  getData
};
=======

//Dynamically adding each generated review into the mySql database
const addData = () => {
var array = [review.user_name, review.date, review.review, review.rating, review.upvote, review.downvote]
  db_connection.query('INSERT INTO user_reviews (name, review_date, review, stars, thumbs_up, thumbs_down) VALUES (?,?,?,?,?,?)', array, (err, data) => {
    if (err) {
      console.log('Error adding reviews to the database', err)
  	return
    } else {
  	console.log('Succesfully added to the database')
    }
  })
}

addData();

};

>>>>>>> 2cc8e25c95e5b596c49222e062172515438cdbdc
