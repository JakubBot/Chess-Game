<img align="center" width="140" height="140" src="https://user-images.githubusercontent.com/64312840/110952685-cc17e700-8346-11eb-8e9d-f363e6da104d.png">

# Chess Game

<!-- https://user-images.githubusercontent.com/64312840/110952685-cc17e700-8346-11eb-8e9d-f363e6da104d.png -->

This Project was cretated for users which are bored and wanna play some chess games!
Game is simple and I'm sure you'll like it. Good luck!

## Online Version

Online Version
- [https://jakubbot.github.io/Chess-Game](https://jakubbot.github.io/Chess-Game)

## Features

- login with: 
  - google, facebook
  - email, password (my own firebase authentication)
- real time user updates
- easy and simple ranking system
- local chat for each game with other user
- global chat to speak with everyone
- regain users informations after refresh page
- uses local storage if user is signed in with form(email, password) to cash user data 
- games (realtime updates board position, time, points)
  - local - against 800 points bot and save informations to firebase to prevent cheating
  - online - against your friend and save it to firebase to prevent cheating
- config board and shows last moves in game

## Getting Started

```sh
# install dependencies
$ npm i

# Run the project
$ npm start
```

With the commands above, you have everything to start.

## Technologies

Project is created with:

- React, react router
- Redux,redux-thunk
- SCSS
- Git, npm
- Firebase, firebase hooks
- Chess.js, chessboard.js, jQuery
- PropTypes

## Code Standards

This project uses Airbnb coding style

## License

MIT License