$(() => {
    const $siteContainer = $('.site-container')

    // Carousel Code Start
    const $carouselContainer = $('<div>').addClass('carousel-container')
    $siteContainer.append($carouselContainer)

    const $previous = $('<div>').addClass('carousel-button').addClass('previous')
    $carouselContainer.append($previous)

    const $carouselImages = $('<div>').addClass('carousel-images')
    $carouselContainer.append($carouselImages)

    const $firstImage = $('<img>').attr('src', 'https://i.imgur.com/f7blZMv.jpg').attr('alt', 'miyazaki with cat')
    $carouselImages.append($firstImage)

    const $secondImage = $('<img>').attr('src', 'https://i.imgur.com/jT4KfgY.jpeg').attr('alt', 'miyazaki with totoro stuffed animal')
    $carouselImages.append($secondImage)

    const $thirdImage = $('<img>').attr('src', 'https://i.imgur.com/OSVWxBU.jpg').attr('alt', 'miyazaki with drawings')
    $carouselImages.append($thirdImage)

    const $fourthImage = $('<img>').attr('src', 'https://i.imgur.com/wuUTQGB.jpg').attr('alt', 'miyazaki smoking a cigarette and smiling')
    $carouselImages.append($fourthImage)

    const $fifthImage = $('<img>').attr('src', 'https://i.imgur.com/PzILz8Q.jpeg').attr('alt', 'miyazaki with oscar statue')
    $carouselImages.append($fifthImage)

    const $next = $('<div>').addClass('carousel-button').addClass('next')
    $carouselContainer.append($next)


    let currentImgIndex = 0;
    let numOfImages = $('.carousel-images').children().length - 1

    $('.next').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
        if (currentImgIndex < numOfImages) {
            currentImgIndex++
        } else {
            currentImgIndex = 0
        }
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
    })
    $('.previous').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
        if (currentImgIndex > 0) {
          currentImgIndex--
        } else {
          currentImgIndex = numOfImages
        }
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
    })
        // Carousel End



        // Movie Info Start
    const $moviesContainer = $('<div>').addClass('movies-container')
    $siteContainer.append($moviesContainer)

    const movieArray = ["lupin", "nausicaa", "laputa", "totoro", "kikis", "porco", "mononoke", "spirited", "howls", "ponyo", "wind"]

    const movieTitles = ["Lupin the Third", "Nausicaa of the Valley of the Wind", "Laputa: Castle in the Sky", "My Neighbor Totoro", "Kiki's Delivery Service", "Porco Rosso", "Princess Mononoke", "Spirited Away", "Howl's Moving Castle", "Ponyo", "The Wind Rises"]

    const movieCode = ["lupin-iii-cagliostro-no-shiro", "nausicaa-of-the-valley-of-the-wind", "laputa-castle-in-the-sky", "my-neighbor-totoro", "kiki-s-delivery-service", "porco-rosso", "princess-mononoke", "spirited-away", "howl-s-moving-castle", "ponyo-on-the-cliff", "the-wind-rises"]


    for (let i=0; i<11; i++) {

        let movieBtn = $('<button>').text(movieTitles[i])

        let movieDiv = $('<div>').addClass('movie').addClass(movieArray[i])

        $siteContainer.append(movieBtn)
        $siteContainer.append(movieDiv)

        movieBtn.on('click', (event)=>{
            movieDiv.empty()

            let movieHide = $('<button>').text('Hide').addClass('hide')
            movieHide.on('click', event => {
                movieDiv.empty()
            })
            movieDiv.append(movieHide)

            $.ajax({

                url:'https://kitsu.io/api/edge/anime?filter[slug]=' + movieCode[i]

            }).then(
                (data)=>{
                    const $title = $('<h3>')
                    movieDiv.append($title)
                    $title.html(data.data[0].attributes.titles.en)

                    const $year = $('<h3>')
                    movieDiv.append($year)
                    $year.html(data.data[0].attributes.startDate.substring(0, 4));

                    const $rating = $('<h3>')
                    movieDiv.append($rating)
                    $rating.html(data.data[0].attributes.ageRating)

                    const $synopsis = $('<p>')
                    movieDiv.append($synopsis)
                    $synopsis.html(data.data[0].attributes.synopsis)

                    const $newImg = $('<img>').attr('src', data.data[0].attributes.posterImage.small);
                    movieDiv.append($newImg)
                },
                ()=>{
                    console.log('bad request');
                }
            );
        })
    }
})
