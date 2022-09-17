CREATE SCHEMA `instagram`;

CREATE TABLE `instagram`.`user` (
  `user_id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255),
  `user_name` varchar(255),
  `email` varchar(255),
  `created_at` timestamp,
  `password` varchar(255),
  `dob` datetime
);

CREATE TABLE `instagram`.`profile` (
  `profile_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `website` varchar(255),
  `bio` varchar(255),
  `profilePic` varchar(255)
);

CREATE TABLE `instagram`.`following` (
  `following_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `following_user_id` int,
  `following_user_name` varchar(255),
  `following_full_name` varchar(255),
  `following_profilePic` varchar(255),
  `followed_back` boolean DEFAULT false
);

CREATE TABLE `instagram`.`stories` (
  `story_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `story_photo` varchar(255),
  `no_of_views` int
);

CREATE TABLE `instagram`.`post` (
  `post_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `post_photo` varchar(255),
  `caption` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `instagram`.`comments` (
  `comment_id` int PRIMARY KEY AUTO_INCREMENT,
  `post_id` int,
  `user_id` int,
  `text` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `instagram`.`likes` (
  `like_id` int PRIMARY KEY AUTO_INCREMENT,
  `post_id` int,
  `user_id` int,
  `isLiked` boolean DEFAULT false
);

CREATE TABLE `instagram`.`chat` (
  `chat_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `second_user_id` int,
  `second_profile_id` int
);

CREATE TABLE `instagram`.`messages` (
  `message_id` int PRIMARY KEY AUTO_INCREMENT,
  `chat_id` int,
  `isUser` boolean,
  `text` varchar(255)
);

ALTER TABLE `instagram`.`profile` ADD FOREIGN KEY (`user_id`) REFERENCES `instagram`.`user` (`user_id`);

ALTER TABLE `instagram`.`following` ADD FOREIGN KEY (`user_id`) REFERENCES `instagram`.`user` (`user_id`);

ALTER TABLE `instagram`.`stories` ADD FOREIGN KEY (`user_id`) REFERENCES `instagram`.`user` (`user_id`);

ALTER TABLE `instagram`.`post` ADD FOREIGN KEY (`user_id`) REFERENCES `instagram`.`user` (`user_id`);

ALTER TABLE `instagram`.`comments` ADD FOREIGN KEY (`post_id`) REFERENCES `instagram`.`post` (`post_id`);

ALTER TABLE `instagram`.`likes` ADD FOREIGN KEY (`post_id`) REFERENCES `instagram`.`post` (`post_id`);

ALTER TABLE `instagram`.`chat` ADD FOREIGN KEY (`user_id`) REFERENCES `instagram`.`user` (`user_id`);

ALTER TABLE `instagram`.`messages` ADD FOREIGN KEY (`chat_id`) REFERENCES `instagram`.`chat` (`chat_id`);
