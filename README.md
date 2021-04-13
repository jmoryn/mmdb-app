# mmdb-app
<h1>Miyazaki Movie Database</h1>

The Miyazaki Movie Database holds information on the 11 feature films created by Japanese animator Hayao Miyazaki. Sometimes called "the Walt Disney of Japan," Miyazaki's films have inspired and delighted people around the world for more than 40 years. With loveable characters, rich storylines, and many relatable themes, it's no wonder his films continue to be relevant long after their release. The MMDb aims to be a catalogue of these films, where users can see information such as release dates, ratings, synopses and more.

<h2>Menu</h2>
The menu in the top right has two sort options. The first is the default which is oldest to newest - by clicking this option, it actually just reloads the page. The second option sorts by newest to oldest and calls a function that reorders all the divs by class. First it detaches the divs, then it prepends them to the moviesContainer so that they all end up in reverse order. I tried to loop through an array to grab the classes in order in my function but I couldn't figure out a syntax that works so I ended up hardcoding it.

<h2>Carousel Creation</h2>
For the carousel, I used links from imgur to real life photos of Hayao Miyazaki. One issue I ran into initially is that because the photos are different sizes and dimensions, they displayed quite weirdly in the carousel. Even worse, when clicking to a new image, the whole carousel container would resize and move the buttons up or down to adjust to the new image size.

Instead of downloading and manually resizing/cropping the images, I opted instead to change their display to flex then align them in the center with overflow hidden. This served its purpose in allowing the user to cycle through photos with the carousel in the same place, although some of the images are cut off a bit due to the different aspect ratios. To remedy this, I set progressively larger max heights to media queries as the screen width increases, ensuring the larger photos have enough space to display.



<h2>Movie Buttons</h2>
For the movie buttons, I looped through various arrays to populate the information I needed. My AJAX call takes the movie name from the movieCode array to access the correct movie, then it pulls from Kitsu API to fill the informational divs for each movie. A call is performed when a user clicks one of the movie buttons.

I ran into some trouble while trying to set the background images of the buttons to the coverImage property from Kitsu API. At first, I tried to put the movieBtn creation into its own AJAX call to change the css property to the coverImage, but ran into issues when they all populated with only the last image in the loop. This was because I was running it on the class of all the buttons, so they all updated to the same image as the loop progressed. I wasn't sure how to run it on classes from an array, so I scrapped the idea. I also had some scoping issues here between the movie buttons and the movie divs.

Next, I tried storing the img urls taken from the AJAX call into a new blank array, then add the css property of the buttons while looping through the array. For some reason, it was doing something weird with how it populated the array and it wasn't actually pushing them in, so I kept getting a lot of undefined errors and such. After a lot of tweaking, I still couldn't quite figure it out, so I ended up taking the easy way out and hardcoded the img urls into their own array to get the same effect without an AJAX call.
