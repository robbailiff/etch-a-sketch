# Etch-A-Sketch
## Introduction

For this project, the assignment was to make a browser based Etch-A-Sketch application by creating a grid of squares, which change colour when a mouse passes over them to effectively draw an image. It should also allow the user to choose the grid size and clear the current sketch.

Check out my attempt: https://robbailiff.github.io/etch-a-sketch/

The assignment is part of **The Odin Project** curriculum, which is free and open source and uses on freely available resources in each of the modules. The ethos of the project is learning by building things, with the added bonus of creating projects that can be showcased in a portfolio.

Check out The Odin Project [here](https://www.theodinproject.com/).

## Learning


One of the big problems I faced was getting the grid to reset or resize and then function correctly. I created these functions to work by essentially removing all the grid elements and re-adding them but then found that this process also removed the event listeners for the grid. The event listeners were originally just a block elsewhere in the code meaning they worked and ran when the page loaded the first time, but didn't run again once the new grid was created. I solved this by adding the event listener inside the grid creation function so that it runs each time a grid is created.