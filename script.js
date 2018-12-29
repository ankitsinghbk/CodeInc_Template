
new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    slidesToScroll: 5,
    draggable: true,
    dots: '#dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    responsive: [
        {
            // screens greater than >= 375px
            breakpoint: 345,
            settings: {
                slidesToShow: '1',
                slidesToScroll: 'auto',
                draggable: true,
                itemWidth: 100,
                duration: 0.25
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                draggable: true,
                itemWidth: 100,
                duration: 0.25
            }
        }
    ]
});     