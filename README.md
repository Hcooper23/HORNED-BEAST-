## Overview

By the end of this module, you will create an application that displays images and information of horned animals. This application will allow you to filter the images by number of horns and chose your favorite image.

In this class, your goal is to use the JSON file provided to display the title, image and description of each horned beast in your application.

## Feature Tasks

## Feature #1: Display a Modal

- Why are we implementing this feature?

  -As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image.

## What are we going to implement?

- Given that a user wants to view the details of the image
- When the user clicks on an individual image
- Then the image should render larger on the screen with the description displayed
  
## How are we implementing it?

- Import the data.json file into your App component and send that data into the Main component
- Map over the JSON data in your Main component to render each beast
- Send a function into your Main component that allows the user to update state in the App
- Create a SelectedBeast component and include it in your App
- Use the state in the App to render an individual beast in a Modal in the SelectedBeast component using React Bootstrap

Estimate of time needed to complete: 3 Hours

Start time: 3:00PM Eastern Standard Time

Finish time: 6:30PM Eastern Standard Time

Actual time needed to complete: 3 Hours and 30 Minutes

## Submission Instructions

- Complete your Feature Tasks for the day
- Create a Pull Request (PR) back to the main branch of your repository
- On Canvas, submit a link to your PR and a link to your deployed application on Netlify.
- Add a comment in your Canvas assignment which includes the following:
  - A question within the context of this lab assignment
  - An observation about the lab assignment, or related ‘Ah-hah!’ moment
  - How long you spent working on this assignment
