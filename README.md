# mmdb-app
<h1>Miyazaki Movie Database</h1>

The Miyazaki Movie Database holds information on the 11 feature films created by Japanese animator Hayao Miyazaki. Sometimes called "the Walt Disney of Japan," Miyazaki's films have inspired and delighted people around the world for more than 40 years. With loveable characters, rich storylines, and many relatable themes, it's no wonder his films continue to be relevant long after their release. The MMDb aims to be a catalogue of these films, where users can see information such as release dates, ratings, synopses and more.

<h2>Basic Site Info</h2>
The site was created using a combination of HTML, CSS, JS and jQuery. For the color palette, I found it at https://uxdesign.cc/dark-mode-ui-design-the-definitive-guide-part-1-color-53dcfaea5129. Since I knew I wanted to design the site with a dark mode as the default, I searched around on google until I found something appealing, then made variables at the top of my css for each color.

<h2>Menu</h2>
The menu in the top right has three sort options. The first is the default which is oldest to newest - by clicking this option, it actually just reloads the page. The second option sorts by newest to oldest and calls a function that reorders all the divs by class. First it detaches the divs, then it prepends them to the moviesContainer so that they all end up in reverse order. I tried to loop through an array to grab the classes in order in my function but I couldn't figure out a syntax that works so I ended up hardcoding it. The final sort (IMDb rating) is another hardcoded function that reorders the divs when you click it.

<h2>Carousel Creation</h2>
The carousel is made using jQuery. For the images, I used links from imgur to real life photos of Hayao Miyazaki. One issue I ran into initially is that because the photos are different sizes and dimensions, they displayed quite weirdly in the carousel. Even worse, when clicking to a new image, the whole carousel container would resize and move the buttons up or down to adjust to the new image size.

Instead of downloading and manually resizing/cropping the images, I opted instead to change their display to flex then align them in the center with overflow hidden. This served its purpose in allowing the user to cycle through photos with the carousel in the same place, although some of the images are cut off a bit due to the different aspect ratios. To remedy this, I set progressively larger max heights to media queries as the screen width increases, ensuring the larger photos have enough space to display.

To create an autoscroll feature, I simply nested the "next button" event into its own function called scroll, then added a setInterval function to it. I then made it so it also calls the scroll function on next button click.

I tried to make it so the autoscroll would stop when you hovered over a carousel image, but I couldn't quite get it to work so I scrapped it.

<h2>Movie Buttons</h2>
For the movie buttons, I looped through various arrays to populate the information I needed. My AJAX call takes the movie name from the movieCode array to access the correct movie in Kitsu API, then it fills the movie div with the info I grab. A call is performed when a user clicks one of the movie buttons.

I ran into some trouble while trying to set the background images of the buttons to the coverImage property from Kitsu API. At first, I tried to put the movieBtn creation into its own AJAX call to change the css property to the coverImage, but ran into issues when they all populated with only the last image in the loop. This was because I was running it on the class of all the buttons, so they all updated to the same image as the loop progressed. I wasn't sure how to run it on class names from an array, so I scrapped the idea. I also had some scoping issues here between the movie buttons and the movie divs.

Next, I tried storing the img urls taken from the AJAX call into a new blank array, then add the css property of the buttons while looping through that array. For some reason, it was doing something weird with how it populated the array and it wasn't actually pushing them in, so I kept getting a lot of undefined errors and such. After a lot of tweaking, I still couldn't quite figure it out, so I ended up taking the easy way out and hardcoded the img urls into their own array to get the same effect without an AJAX call.

I also had some trouble with being able to see the title text over the colorful backgrounds. I looked into adding a black stroke to my white text but found that CSS for some reason doesn't inherently have a property for this, but it turns out you can get the same effect with a font shadow (black if you have white text, and vice versa).

The buttons also have a small animation where they move up a few pixels when you hover over them, and move back to their place when you hover off them. This is easy to do with a translateY animation. You make it move however many pixels on hover, negative five to go up in this case, and put that same translateY animation as a property of just the regular button but with the opposite number. So 5. If you don't add the opposite property to the regular button, it will harshly jump back to its place rather than smoothly. There's also a transition property of .3 seconds on the animations to provide the smooth movement.

<h2>Responsive Design</h2>
For responsive design, I basically started with messing around with the carousel. After a bunch of trial and error, I found that having it grow horizontally with the screen and setting various widths through media queries worked the best. It also has a max width so it doesn't get huge.

I also set a max width on the site container so it caps at 1000px wide no matter how big you make the screen. I don't have a ton of content in this page, so I didn't want it to be spread far apart.

The movie buttons have a set height since I'm using the background images in them, but the width scales with the screen.

For the movie content, I have one layout for smaller devices where everything more or less displays in a column. Once you get to a certain width, the written content squeezes to the left using percent width, the hide button comes to the right using float, and the movie poster moves up and to the right next to the written content by floating right and giving a negative y position. I'm sure there's a better way to do it, but this works, so oh well.
