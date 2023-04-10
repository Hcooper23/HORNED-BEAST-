## Overview
By the end of this module, you will create an application that displays images and information of horned animals. This application will allow you to filter the images by number of horns and chose your favorite image.

For this class we will just be focusing on the component structure of the application. You will create a new React application using create-react-app and fill it with components. Refer to ‘Feature Tasks’ to see exactly which components to build and where to display them.

## Configuration

*Your repository must include the following config files:* 

- README.md - provided by create-react-app, but edited by you to include an overview of the project for a new visitor to your repo. Name all collaborators

- .gitignore - provided by create-react-app

## Feature Tasks

- Complete the following steps to setup your repository:

1. Create a React application using create-react-app as demonstrated in class.
    - Use the command npx create-react-app <repo-name>.

2. Create a new repository on GitHub WITHOUT a README.md. We will import an “existing” repository with its own README

3. Follow the instructions given by GitHub to “push an existing repository from the command line”
    - be sure to select HTTPS or SSH, whichever is relevant for you

4. Create a Branch and begin your work. As always, ACP often

- Your App component should render a Header, Footer and Main component, each of which is defined in their own files.

- Your Header component needs to have an <h1> with a title.

- Your Footer component needs to contain your name as the author.

- The Main component needs to render at least two copies of a component called HornedBeast.

- The Main component needs to pass title, imageUrl, and description into each HornedBeast component. For the purpose of this lab, you can pass whatever title, url and description that you want into each HornedBeast component.

- The HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.

**NOTE: Rendering an image in React is a little tricky. Try to figure out how to do this on your own and we will go over it in the next code review**

## Stretch Goal

- Given the following array, loop over the data to display three HornedBeast components:

## Submission Instructions

  - Complete your Feature Tasks for the day.
  - Create a Pull Request (PR) back to the main branch of your repository.
  - Submit your assignment as a link to your PR, and a comment describing how much time you spent on the lab.
