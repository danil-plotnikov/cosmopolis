new WOW().init();

$('.header-burger').click(function(e) {
    $('.nav').addClass('active');
});

$('.nav-close, .nav a').click(function(e) {
    $('.nav').removeClass('active');
});


$(document).mouseleave(function() {
    if (event.clientY < 0 || event.clientY < 3) {

        let leave = 1;
        if (+$.cookie('leave-popup')) {
            leave = 0;
        }
        if (leave) {
            $('.popup-leave').css('display', 'flex');
            $('body, html').css({ 'overflow': 'hidden', 'max-height': '100%' })
            $.cookie('leave-popup', 1, { expires: 7 });
        }

    }
});

$('.popup-order__open').click(function() {
    $('.popup-order').css('display', 'flex')
    $('body, html').css({ 'overflow': 'hidden', 'max-height': '100%' })
});

$('.popup-politic__open').click(function() {
    $('.popup-politic').css('display', 'flex')
    $('body, html').css({ 'overflow': 'hidden', 'max-height': '100%' })
});

$('.popup-bg, .popup-close').click(function() {
    $('.popup').hide()
    $('body, html').css({ 'overflow': 'visible', 'overflow-x': 'hidden', 'max-height': 'none' })
});

$('.phone').mask('+7(999)999-99-99')

let stepsSlider = $('.steps-slider');
stepsSlider.owlCarousel({
    dotsEach: true,
    items: 1,
    dots: true,
    responsive: {
        0: {
            items: 1,
            margin: 5,
            loop: true,
            autoHeight: true

        },
        600: {
            items: 4,
            margin: 120,
            rewind: true
        }
    }

});
$('.arrow-prev__steps').click(function() {
    stepsSlider.trigger('prev.owl.carousel');
})
$('.arrow-next__steps').click(function() {
    stepsSlider.trigger('next.owl.carousel');
})

stepsSlider.on('translated.owl.carousel', function() {
    brandSliderClasses()
})

brandSliderClasses();

function brandSliderClasses() {
    stepsSlider.each(function() {
        let total = $(this).find('.owl-item.active').length;
        $(this).find('.owl-item .steps-block__number').removeClass('hide-line');
        $(this).find('.owl-item.active').each(function(index) {
            if (index === total - 1 && total > 1) {
                $(this).find('.steps-block__number').addClass('hide-line')
            }
        })
    })
}

let reviewVideo = $('.review-video__slider');
reviewVideo.owlCarousel({
    loop: true,
    dots: true,
    dotsEach: true,
    items: 3,
    margin: 35,
    responsive: {
        0: {
            items: 1,
            margin: 5,
        },
        600: {
            items: 3,
            rewind: true
        }
    }
});
$('.arrow-prev__review').click(function() {
    reviewVideo.trigger('prev.owl.carousel');
})
$('.arrow-next__review').click(function() {
    reviewVideo.trigger('next.owl.carousel');
})

let professionalSliderBig = $('.professional-specialist__slider');
professionalSliderBig.owlCarousel({
    loop: true,
    dots: false,
    items: 1,
    margin: 5,
    mouseDrag: false,
    touchDrag: false
});

let professionalSlider = $('.professional-slider');
professionalSlider.owlCarousel({
    loop: true,
    dots: false,
    items: 3,
    margin: 50,
    responsive: {
        0: {
            items: 1,
            margin: 5,
            dots: true
        },
        600: {
            items: 3,
        }
    }
});
$('.arrow-prev__professional').click(function() {
    professionalSlider.trigger('prev.owl.carousel');
})
$('.arrow-next__professional').click(function() {
    professionalSlider.trigger('next.owl.carousel');
})

let sliderBigClone = $('.professional-slider').find('.owl-item.cloned')
sliderBigClone = sliderBigClone.length / 2


professionalSlider.on('changed.owl.carousel', function(e) {
    professionalSliderBig.trigger('to.owl.carousel', e.item.index - sliderBigClone);
});

professionalSlider.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index() - sliderBigClone;
    professionalSlider.data('owl.carousel').to(number);
});





$('.question-block').click(function() {
    if ($(this).find('.question-top__plus').text() == '+') {
        $(this).find('.question-top__plus').text('-');
    } else {
        $(this).find('.question-top__plus').text('+');
    }
    $(this).find('.question-top__plus').toggleClass('active');

    if ($(this).hasClass('active')) {
        $('.question-block.active').find('.question-answer').slideUp();
        $('.question-top__plus').text('+');
        $('.question-block').removeClass('active');
        $('.question-top__plus').removeClass('active');
    } else {
        $('.question-block.active').find('.question-answer').slideUp();
        $('.question-top__plus').text('+');
        $('.question-block').removeClass('active');
        $('.question-top__plus').removeClass('active');
        $(this).addClass('active');
        $(this).find('.question-answer').slideDown();
        $(this).find('.question-top__plus').text('-');
        $(this).find('.question-top__plus').addClass('active');
    }
});





let quizSlider = document.getElementById('quiz-question__slider');
noUiSlider.create(quizSlider, {
    start: [50],
    connect: 'lower',
    step: 1,
    range: {
        'min': 5,
        'max': 200
    }
});

quizSlider.noUiSlider.on('update', function(value, handle) {
    $('.quiz-question__slider-input input').val(Math.round(value));
});

quizSlider.noUiSlider.on('change', function() {
    $('.quiz-btn__next').removeAttr('disabled');
});

$('.quiz-question__slider-input input').change(function() {
    quizSlider.noUiSlider.set(this.value);
});

let select1 = new CustomSelect('#select-1');

$('#select-1 .select__option').click(function() {
    $('.quiz-btn__next').removeAttr('disabled');
    $('.quiz-question__select-input').val($(this).text());
});

let select2 = new CustomSelect('#select-2');
$('#select-2 .select__option').click(function() {
    let resultMessenger = $(this).text().toLowerCase()
    console.log(resultMessenger)
    $('.quiz-result__form-messenger').removeClass('active')
    $('.quiz-result__form-messenger-' + resultMessenger).addClass('active')
});





if ($(window).width() < 600) {
    $('.debts-wrap').addClass('owl-carousel');
    let debtsSlider = $('.debts-wrap');
    debtsSlider.owlCarousel({
        loop: true,
        dots: true,
        items: 1,
        margin: 10,
    });

    $('.safe-photo').addClass('owl-carousel');
    let safeSlider = $('.safe-photo');
    safeSlider.owlCarousel({
        loop: true,
        dots: true,
        items: 1,
        margin: 10,
    });



}

let btnScroll;

if ($(window).width() < 600) {
    btnScroll = $(".quiz").offset().top

} else {
    btnScroll = $(".quiz").offset().top - 80
}
$('.main-btn__scroll').click(function(e) {
    $('html, body').animate({
        scrollTop: btnScroll
    }, 0);
});


//quiz
let total = 0;


$('.quiz-question').each(function(indexInArray, valueOfElement) {
    let questionBlock = indexInArray + 1
    $(this).attr('data-q', questionBlock);
    $(this).find('input').attr('name', 'q-' + questionBlock)
    total = total + 1;
});

$('.quiz-line__total').text(total);

let lineStep = 100 / total;
let line;

let quizScroll;

if ($(window).width() < 600) {
    quizScroll = $(".quiz-wrap").offset().top

} else {
    quizScroll = $(".quiz-wrap").offset().top
}

let questionNumber = 1;
let inputNumber;

let elem = $('.quiz-form').find("input");


$('.quiz-form input[type="text"]').keydown(function() {
    $('.quiz-btn__next').removeAttr('disabled');
});

$('.quiz-form input[type="text"]').change(function() {
    $('.quiz-btn__next').removeAttr('disabled');
});


$(elem).on('change', function() {
    $('.quiz-btn__next').removeAttr('disabled');
});


let valid = {};

$('.quiz-btn__next, .quiz-question input[type="radio"]').click(function() {
    $('.quiz-hint').hide();
    $('.quiz-btn__prev').css('display', 'flex');

    if (questionNumber < total) {
        setTimeout(() => {
            questionNumber++;
            $('.quiz-btn__next').attr('disabled', 'true')
            validNumber = questionNumber - 1
            valid['quiestion-' + validNumber] = true;
            console.log(valid)
            if (valid['quiestion-' + questionNumber] == true) {
                $('.quiz-btn__next').removeAttr('disabled');
            }
            $('.quiz-question.active').hide();
            $('.quiz-question.active').removeClass('active');
            $('.quiz-question[data-q=' + questionNumber + ']').fadeIn('slow')
            $('.quiz-question[data-q=' + questionNumber + ']').addClass('active');
            $('html, body').animate({
                scrollTop: quizScroll
            }, 0);
            lineWidth()
        }, 500);

    } else {
        setTimeout(() => {
            $('html, body').animate({
                scrollTop: quizScroll
            }, 0);
            $('.quiz-wrap').hide();
            $('.quiz-result').show();
            $('.quiz-result').addClass('active');
            timer()

        }, 500);

    }
});


$('.quiz-btn__prev').click(function() {
    if (questionNumber > 2) {
        questionNumber--;
        if (valid['quiestion-' + questionNumber] == true) {
            $('.quiz-btn__next').removeAttr('disabled');
            console.log('valid')
        }
        // $('.quiz-btn__next').removeAttr('disabled');
        $('.quiz-question.active').hide();
        $('.quiz-question.active').removeClass('active');
        $('.quiz-question[data-q=' + questionNumber + ']').fadeIn('slow')
        $('.quiz-question[data-q=' + questionNumber + ']').addClass('active');

        $('html, body').animate({
            scrollTop: quizScroll
        }, 0);
    } else if (questionNumber == 2) {
        $('html, body').animate({
            scrollTop: quizScroll
        }, 0);
        questionNumber--;
        $('.quiz-btn__next').removeAttr('disabled');
        $('.quiz-question.active').hide();
        $('.quiz-question.active').removeClass('active');
        $('.quiz-question[data-q=' + questionNumber + ']').fadeIn('slow')
        $('.quiz-question[data-q=' + questionNumber + ']').addClass('active');
        $('.quiz-hint').css('display', 'flex');
        $('.quiz-btn__prev').hide();
    }
    lineWidth()
});


let lineCurrent;

function lineWidth() {
    $('.quiz-line__current').text(questionNumber);
    line = lineStep * (questionNumber);
    line = 'calc(' + line + '% - 10rem)';
    $('.quiz-line__bg').css('width', line)
}

let second = 60;
let mili = 60;

function timer() {
    setTimeout(function() {
        second--;

        $('.quiz-result__round p').text(second + ':00');

        if (second > 0) {
            timer();
        }
    }, 1000);
}