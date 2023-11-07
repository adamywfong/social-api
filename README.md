# Social Media API

## Description

This project was designed as a social media back end where users are able to publish text based thoughts, react to existing thoughts, and curate friend lists of other users.  It was a made as a way to practice using the MongoDB database structure and creating API requests via Mongoose.  This application uses the Express and Mongoose packages.  

[![Video Demonstration of Application](./examples/social-api.gif)](https://drive.google.com/file/d/1G3KFu4Cx88y31nH8sw1oerslHr4laAii/view)

## Installation and Usage

Install with `npm install` while in the application folder. Seed user data using `npm run seed`.  To start the application, use `npm run start`. 

**Available API requests:** 

  `/api/users`: 

    GET: view all users

    POST: create new user

  `/api/users/:userId`:

    GET: view single user, including the user's thoughts and friends list

    PUT: edit existing user data

    DELETE: delete existing user

  `api/users/:userId/friends`

    POST: add to user's friend list

  `api/users/:userId/friends/:friendId`

    DELETE: Delete from user's friend list

  `/api/thoughts`:

    GET: view all thoughts

    POST: create new thought

  `/api/thoughts/:thoughtId`:

    GET: view single thought

    PUT: edit existing thought
    
    DELETE: delete existing thought
  
  `/api/thoughts/:thoughtId/reactions`:
  
    POST: create new reaction
  
  `/api/thoughts/:thoughtId/reactions/:reactionId`:
  
    Delete: delete existing reaction

```json
// example user data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}

// example thought data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

## Acknowledgements

The adjective list in `utils/data.js` is from [https://github.com/rgbkrk/adjectives](https://github.com/rgbkrk/adjectives)