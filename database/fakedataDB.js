const db_connection = require('./db_connection.js');
var faker = require('faker');
const fs = require('fs');

const generateFakeData = () => {

  var dataArray = [];
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

    dataArray.push(review)
  }


}
  
generateFakeData()

module.exports = {
  // add
};
