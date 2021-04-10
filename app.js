$(() => {
    const $body = $('body')

    // Carousel Code Start
    const $carouselContainer = $('<div>').addClass('carousel-container')
    $body.append($carouselContainer)

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
    $body.append($moviesContainer)

    const $spiritedAwayBtn = $('<button>').text('Spirited Away')
    const $spiritedAwayDiv = $('<div>').addClass('movie').addClass('spiritedAway')
    $body.append($spiritedAwayBtn)
    $body.append($spiritedAwayDiv)

    $spiritedAwayBtn.on('click', (event)=>{
        const $spiritedAwayHide = $('<button>').text('Hide').addClass('hide')
        $spiritedAwayHide.on('click', event => {
            $spiritedAwayDiv.empty()
        })
        $spiritedAwayDiv.append($spiritedAwayHide)

        $.ajax({

            url:'https://kitsu.io/api/edge/anime?filter[slug]=spirited-away'

        }).then(
            (data)=>{
                const $title = $('<h3>')
                $spiritedAwayDiv.append($title)
                $title.html(data.data[0].attributes.titles.en)

                const $year = $('<h3>')
                $spiritedAwayDiv.append($year)
                $year.html(data.data[0].attributes.startDate.substring(0, 4));
                const $newImg = $('<img>').attr('src', data.data[0].attributes.posterImage.small);
                $spiritedAwayDiv.append($newImg)
            },
            ()=>{
                console.log('bad request');
            }
        );
    })
})
