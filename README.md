# Etch-A-Sketch
## Introduction

For this project, the assignment was to make a browser based Etch-A-Sketch application by creating a grid of squares, which change colour when a mouse passes over them to effectively draw an image. It should also allow the user to choose the grid size and clear the current sketch.

Check out my attempt: https://robbailiff.github.io/etch-a-sketch/

The assignment is part of **The Odin Project** curriculum, which is free and open source and uses on freely available resources in each of the modules. The ethos of the project is learning by building things, with the added bonus of creating projects that can be showcased in a portfolio.

Check out The Odin Project [here](https://www.theodinproject.com/).

## Learning

The biggest time sink intially was working out how to design the grid and then add its functionality. I took this as an opportunity to learn and use CSS Grid, which I'd only briefly used on **freecodecamp**. I liked it and it seems really useful but it has a lot of syntax to learn and understand and I still feel I need to practice with it more to properly grasp it. One of the big problems I faced was getting the grid to reset or resize and then function correctly. I created the functions for these operations to work by essentially removing all the grid elements and re-adding them, but then found that this process also removed the event listeners for the grid. The event listeners were originally just a block elsewhere in the code, meaning they worked and ran when the page loaded the first time, but didn't run again once the new grid was created. I solved this by adding the event listener inside the grid creation function so that it runs each time a grid is created.

I found the rest of the logic fairly simple to implement and I think I'm getting better at organising my code because I didn't spend much time cleaning or refactoring it. I enjoyed the CSS styling a lot and probably spent more time playing around with neon effects and element sizing than I did on the JavaScript logic. The time I've had to spend on the project has been sporadic so it's difficult to estimate how long I've put into it. I would estimate about 20 - 25 hours with about 25% of that time spent working on the grid.