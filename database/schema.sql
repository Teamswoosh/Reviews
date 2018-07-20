DROP DATABASE IF EXISTS user_reviews;
CREATE DATABASE user_reviews;
USE user_reviews;

CREATE TABLE user_reviews (
  id int (10) NOT NULL AUTO_INCREMENT,
  name VARCHAR (50) NOT NULL,
  review_date VARCHAR (10) NOT NULL,
  review VARCHAR (500) NOT NULL,
  stars INT (5) NOT NULL,
  thumbs_up INT (10) NOT NULL,
  thumbs_down INT (10) NOT NULL,
  PRIMARY KEY (id)
)

