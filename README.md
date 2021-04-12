# mmdb-app
Miyazaki Movie Database

Intro Here

For the carousel, I used links from imgur to real life photos of Hayao Miyazaki. One issue I ran into initially is that because the photos are different sizes and dimensions, they displayed quite weirdly in the carousel. Even worse, they would resize the whole carousel container and move the buttons up or down to adjust to the new image size.

Instead of downloading and manually resizing/cropping the images, I opted instead to change their display to flex then align them in the center with overflow hidden. This served its purpose in allowing the user to cycle through photos with the carousel in the same place, although some of the images are cut off a bit due to the different aspect ratios. To remedy this, I set progressively larger max heights to media queries as the screen width increases, ensuring the larger photos have enough space to display.

Movie Buttons
For the movie buttons, I looped through various arrays to populate the information I needed. My AJAX call takes the specific movie name from a separate array to access the correct movie, then it pulls from Kitsu API to fill the informational divs for each movie. These calls are performed when a user clicks one of the movie buttons. 
