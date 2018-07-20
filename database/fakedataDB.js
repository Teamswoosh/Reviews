const db_connection = require('./db_connection.js');
var faker = require('faker');
const fs = require('fs');


// const addData = (review) => {
//   var array = [review.user_name, review.date, review.review, review.rating, review.upvote, review.downvote]
//   db_connection.query('INSERT INTO user_reviews (name, review_date, review, stars, thumbs_up, thumbs_down) VALUES (?,?,?,?,?,?)', array, (err, data) => {
//     if (err) {
//       console.log('Error adding reviews to the database', err)
//       return
//     }
//       console.log('Succesfully added to the database')  
//   })
// }

// const getData = (cb) => {
//   db_connection.query('SELECT * FROM user_reviews', (err, data) => {
//     if (err) {
//       console.log('Error getting reviews from the database')
//       return
//     } else {
//       console.log('Succesfully getting reviews from the database')
//       cb(null, data)
//     }
//   })
// }

// Function translating array of objects into CSV

function CSV(array) {
  var keys = Object.keys(array[0]);
  var result = keys.join("\t") + "\n";

  array.forEach(function(obj){
    keys.forEach(function(k, ix){
      if (ix) result += "\t";
        result += obj[k];
      });
    result += "\n";
  });

//Function to add the fake data into a file

  fs.writeFile('fakeData.js', result , (err) => {
    if (err) {
      console.log('Error writing data into exampleFakeData')
    } else {
      console.log('FakeData saved!')
    }
  })

}


//Function generating an array of fake reviews objects using faker.js 

const generateFakeData = () => {

var arr = [];
for (var i=0; i<10; i++) {

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

  arr.push(review)
}

  CSV(arr)
}

generateFakeData()

module.exports = {
  // add
};
