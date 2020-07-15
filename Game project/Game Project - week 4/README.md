### The Game Project 4 – Side scrolling

#### Week 6

Download the Game Project 4 [template](https://www.doc.gold.ac.uk/tutorials/thegameproject/gp4.zip).

1. Inspect the code.

2. Add your game character to the sketch. As previously, use the
   `gameChar_x` and `gameChar_y` variables to control the position of
   the character on the canvas. You only need to use your
   facing-forward character in this task.
   - Check your character moves left and right when the corresponding
     keys are pressed.

3. Create the following global variables.
   - `clouds`
   - `mountains`
   - `trees`
   - `houseXs`

4. In `setup`, initialise the `houseXs` variable with an array of
   numbers. Each number should represent the x-position at which a
   house will be drawn on the canvas.

5. In the `draw` function draw your houses using a `for` loop.
   - The `for` loop should iterate over every number in your `houseXs`
     array and draw a house at the corresponding location.
   - Hint: you need to use `houseXs.length` to make sure you loop over
     every number in the array.
   - [2 marks]

6. In `setup`, initialise the `clouds` variable with an array
   containing some cloud objects (e.g. at least 3). Each object should
   contain a `pos_x` and `pos_y` property representing the position of
   the cloud on the canvas.

7. In the `draw` function draw your clouds using a `for` loop.
   - The `for` loop should iterate over every object in your `clouds`
     array.
   - A cloud should be drawn corresponding to the `pos_x` and `pos_y`
     properties of each object.
   - [2 marks]

8. In `setup`, initialise the `mountains` variable with an array
   containing many mountain objects (e.g. at least 8). Each object
   should contain a `pos_x` and `height` property representing the
   position and height of the mountain on the canvas.

9. In the `draw` function draw your mountains using a `for` loop.
   - [2 marks]

10. Draw some trees in the same way as you have drawn the mountains.

11. Next we need to make the background scenery scroll when the
    character moves towards the left and right edges of the canvas. We
    can achieve this straightforwardly using p5’s `translate`
    function, in conjunction with `push` and `pop`. Read the
    documentation for `push`, `pop`, and `translate` and make sure you
    understand what these functions do.
    - [`push`](https://p5js.org/reference/#/p5/push)
    - [`pop`](https://p5js.org/reference/#/p5/pop)
    - [`translate`](https://p5js.org/reference/#/p5/translate)

12. To scroll your clouds by `scrollPos` amount, call `push()`, and
    then `translate(scrollPos, 0)` *before* your clouds `for`
    loop. You must then call `pop()` *after* the `for` loop to reset
    the drawing setting to their previous (default) state.
    - When your character moves towards the left or right edge of the
      canvas your clouds should begin to scroll in the *opposite*
      direction, creating the illusion of movement. However, this
      illusions is currently not very good because the other scenery
      items are static!

13. Translate each of your other scenery item (mountains, trees, and
    houses) using `push`, `translate` and `pop` as above.
    - When your character moves towards the left or right edge of the
      canvas your entire background should scroll creating a
      reasonable illusion of movement.
    - [2 marks]

14. We can further improve the illusion of movement by making objects
    further in the distance scroll *slower* than closer objects
    (simulating the concept
    [parallax](https://en.wikipedia.org/wiki/Parallax)).
    - For each kind of scenery, experiment with multiplying the value
      of `scrollPos` used in the corresponding `translate` function by
      some small amount to vary the speed at which the items scroll.
    - For full marks, items further in the distance should scroll more
      slowly than items in the foreground.
    - [2 marks]

15. Add more items to your scenery arrays to create “off screen”
    items, and start to build up the beginnings of a game level that
    can be explored by your character.
