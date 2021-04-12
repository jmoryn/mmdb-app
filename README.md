# mmdb-app
Miyazaki Movie Database

Intro Here

For the carousel, I used links from imgur to real life photos of Hayao Miyazaki. One issue I ran into initially is that because the photos are different sizes and dimensions, they displayed quite weirdly in the carousel. Even worse, they would resize the whole carousel container and move the buttons up or down to adjust to the new image size.

Instead of downloading and manually resizing/cropping the images like a responsible web dev, I opted instead to change their display to flex then align them in the center with overflow hidden. This served its purpose in allowing the user to cycle through photos with the carousel in the same place, although some of the images are cut off a bit due to the different aspect ratios.
