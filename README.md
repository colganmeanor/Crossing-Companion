# Crossing Companion - by Colgan Meanor
Mod3 2108 FE

Deployed Link: [Click Here to Try Crossing Companion](https://colganmeanor.github.io/Crossing-Companion/#/)

<img width="1334" alt="Crossing Companion - Current Critters View" src="https://user-images.githubusercontent.com/87510749/150033905-20ba6bc1-7cd2-4ab9-8a31-aeac7be9dc3b.png">


## Table of Contents
  - [Install + Setup](#set-up)
  - [Project Specs](#project-specs)  
  - [Abstract](#abstract)
  - [Architecture](#architecture)
  - [Technologies](#technologies)
  - [Contributors](#contributors)
  - [Wins](#wins)
  - [Challenges + Improvements](#challenges-+-Improvements)
  

## Install + Setup
  - clone this repo: [here](https://github.com/colganmeanor/Crossing-Companion)
   - On the command line, type: **$ npm install**
   - On the command line, type: **$ npm start**
   - The app will run on port 3000.
   - Visit (http://localhost:3000/) in your browser. 

## Project Specs
   - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html)


## Abstract

  Crossing Companion is a tool designed for players of Nintendo's Animal Crossing New Horizons game, available only on Nintendo Switch. Players of Animal Crossing New Horizons (ACNH), are tasked with catching critters around their island for the purpose of donating them to Blather's Museum. Critters available in the game include Fish, Sea Creatures, and Bugs. The catch? Almost all of the critters have timed availability. For those unfamiliar, ACNH runs on REAL TIME. This means that the in game day/night time cycle reflects the exact same time that we observe in the real world. Most of the critters in ACNH are only available during certain months of the year, and then only during certain hours of the day. 
  
https://user-images.githubusercontent.com/87510749/150034859-f84fdbfe-4503-49f7-9cac-78e846af9866.mov


  Thus, the purpose of Crossing Companion is to provide a tool that uses the ACNH API to retrieve all information about the available critters in the game and to display to the user which critters are available at the time they are using the application. The user has the ability to click on a critter in the app once they have caught it, and then any time they see that critter represented in the app, it will retain a visual indicator to alert the user that they have already caught that particular critter, and can safely disregard searching for it. For easy critter management for the user, an All Critters page is supplied as well which lists all Fish, Sea Creatures, and Bugs available in the game. 
  
  **All Critters - Desktop View:** 
  
<img width="1212" alt="All Sea Creatures Desktop" src="https://user-images.githubusercontent.com/87510749/150034265-d65f8b55-e6cd-40d6-a973-549e913077ee.png">

  **All Critters - Mobile View:** 
  
  <img width="496" alt="All Sea Creatures - Mobile" src="https://user-images.githubusercontent.com/87510749/150034316-5ae354d0-a1a8-4e75-a2f2-7f5ea045d623.png">


  Full disclosure: the API used is very popular and there are a handful of other applications that already existed that do similar things. Mine is specific to showing the user exactly what is available at the exact time they are viewing the app. 

https://user-images.githubusercontent.com/87510749/150034742-8ba76be7-08b6-4d2a-bb0c-6ae94a12a64d.mov


## Architecture

  All data for Crossing Companion is retrieved from the public API - [acnhapi.com](http://acnhapi.com/). This API supplies Crossing Companion with the necessary data about all the Critters available in the game. On page load, the application performs a series of fetch calls to retrieve all necessary information, and then passes the data through a series of cleaning functions that organize the data into a workable format for the dev team. From here, all data is saved to state to be passed around the children components of the application as necessary. The All Critters page will simply display a grid and a series of cards for all critters in the game. 

  The Current Critters page will reference the current time saved in app state and compare all critter availability against whatever the current time is, so that it is able to refresh the current critters on it's own as the time passes by during the day. 

  This app was developed using the React Framework, along with Javascript, HTML, CSS, and tested via Cypress Testing Framework.    

## Technologies
  - React Framework
  - React Router
  - Cypress Testing Framework
  - Javascript
  - CSS HTML
  - VSCode
  - Git Version Control / GitHub
  - Google Chrome or Web Browser of User's Choice
  - Mac OS Terminal/Command Line


## Contributors
  - [Colgan Meanor](https://github.com/colganmeanor)


## Wins
  - Successfully conceptualized and designed the entire application from idea/planning stage to completion. 
  - Successfully built my first React application that only uses functional components - bye bye Class Based Components!
  - Smooth and simple layout that is responsive to all screen sizes.
  - Application meets the MVP functionality I originally set out to meet. 
  - Modular file layout, some of my cleanest and most organized code yet, with reused components and styles. 
  
  

## Challenges + Improvements
  - The whole process of designing an app from start to finish is a huge challenge. I'm thankful to have gotten to work on a project that is related to something I love dearly, which made it easy to push through the challenges along the way. 
  - I felt like I learned quite a lot about CSS Grid while working on this project. Grid auto-fill is a life saver!
  - Because of the nature of elements in the application being based on real time of the day, I had to get creative with my Cypress Testing. Luckily for me, there are some critters that are ALWAYS available regardless of time of day or month of year. So those were my go to critters when it came to testing the app via Cypress. 
  - I thought that organizing all of the data based on current time would be a lot more difficult than it turned out to be. I thought I would end up using the popular DayJS npm package, and really because of the way the data was laid out, and the way Javascript handles time and date with the Date object, I really had no issues at all. 
  - The most noteworthy challenge, is the one where you build an entire application from scratch in 5 days, and you start out WAY more ambitious than you ended up being. It's just not always possible to do every little thing you want to do. However, it gives me tons of ideas for the future when I am able to return to this project.
  
