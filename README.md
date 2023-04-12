## Overview

By the end of this module, you will create an application that displays images and information of horned animals. This application will allow you to filter the images by number of horns and chose your favorite image.

In this class, your goal is to use the JSON file provided to display the title, image and description of each horned beast in your application.

## Feature Tasks

## Feature #1: Display Images

- As a user, I want to view the images on the page so that I can browse the photo collection.

## What are we going to implement?

Given that a user opens the application in the browser
When the user navigates to the home page
Then the photo gallery should display all of the beasts' images in the gallery.

## How are we implementing it?

- The Main component should pass props for the title, image and description to each HornedBeast component. You will find this information in the provided JSON file.

  - Estimate of time needed to complete: 1 Hour

  - Start time: 6:30PM Eastern Standard Time Zone

  - Finish time: 7:15PM Eastern Standard Time Zone

  - Actual time needed to complete: 45 Mins

## Feature #2: Allow Users to Favorite Individual Beasts

## Why are we implementing this feature?

- As a user, I want to be able to interact with the site and favorite beasts.

## What are we going to implement?

Given that a user opens the application in the browser
When a user clicks on an image of a beast
Then the number of "Favorites" displayed on that beast will increase by one.

## How are we implementing it?

- Create state inside of the HornedBeast component that keeps track of the number of times each beast has been favorited.

- Put a heart in each HornedBeast component with the number of “Favorites” next to it.

Estimate of time needed to complete: 1 Hour

Start time: 7:45PM Eastern Standard Time

Finish time: 8:50PM Eastern Standard Time

Actual time needed to complete: 1 Hour and 5 Minutes

## Feature 3: Bootstrap

## Why are we implementing this feature?

- As a user, I want to see a visually pleasing application that is also reponsive when I view this application on different screen sizes.

## What are we going to implement?

Given that a user opens the application in the browser
When the images are displayed on the screen
Then each image should be rendered in a visually pleasing way: in columns, as screen width allows.

## How are we implementing it?

- Bring in the react-bootstrap library and use it to style your application making sure that it is responsive.

Estimate of time needed to complete: 2 hours

Start time: 9:30PM Eastern Standard Time

Finish time: 11:40PM Eastern Standard Time

Actual time needed to complete: 2 Hour 10 Minutes

## Submission Instructions

- Complete your Feature Tasks for the day
- Create a Pull Request (PR) back to the main branch of your repository
- On Canvas, submit a link to your PR and a link to your deployed application on Netlify. Add a comment in your Canvas assignment which includes the following:
  - A question within the context of the lab assignment
  - An observation about the lab assignment, or related ‘Ah-hah!’ moment
  - How long you spent working on this assignment
