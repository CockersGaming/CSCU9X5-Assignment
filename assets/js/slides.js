$(function() {

    /**
     * Slide Navigation
     */

    let slide // keep track of what slide you are on

    // check previous location
    if (window.localStorage.getItem('slide') === null) {
        slide = 1
    } else {
        slide = window.localStorage.getItem('slide')
    }

    $('#slide-' + slide).css("display","block")
    updateProgressBar(slide)
    buttonVisability(slide)


    // start button
    $('#start').on('click', function() {
        $('#slide-1').css("display","none")
        slide++
        buttonVisability(slide)
        updateProgressBar(slide)
        if(slide <= 5) {
            $('#slide-' + slide).css("display", "block")
            window.localStorage.setItem('slide', slide)
        }
    })

    // go to next slide
    $('#next').on('click', function() {
        $('#slide-' + slide).css("display","none")
        slide++
        buttonVisability(slide)
        updateProgressBar(slide)
        if(slide <= 5) {
            $('#slide-' + slide).css("display", "block")
            window.localStorage.setItem('slide', slide)
        }
    })


    // goto previous slide
    $('#previous').on('click', function() {
        
        $('#slide-' + slide).css("display","none")
        slide--
        buttonVisability(slide)
        updateProgressBar(slide)
        if(slide >= 1) {
            $('#slide-' + slide).css("display", "block")
            window.localStorage.setItem('slide', slide)
        }
    })

    // function to increment/decrement progress bar
    function updateProgressBar(s) {
        let value = 0
        let currentSlide = "" + s + ""

        switch(currentSlide) {
            case "1":
                value = 0
                break
            
            case "2":
                value = 25
                break
            
            case "3":
                value = 50
                break
            
            case "4":
                value = 75
                break

            case "5":
                value = 100
                break

            default:
                value = 0
                break
        }

        $('.progress-bar').css('width', value + '%').attr('aria-valuenow', value);
    }

    // function to change the usability of next and previous buttons
    function buttonVisability(sl) {
        if(sl >= 1 && sl <= 5) {
            if(sl == 1) {
                $('#next').prop('hidden', true)
                $('#previous').prop('hidden', true)
                $('#save1').prop('hidden', true)
            } else if(sl > 1 && sl < 5) {
                $('#next').prop('disabled', false)
                $('#previous').prop('disabled', false)
                $('#next').prop('hidden', false)
                $('#previous').prop('hidden', false)
                $('#save').prop('hidden', false)
            } else if(sl == 5) {
                $('#next').prop('disabled', true)
                $('#next').prop('hidden', true)
                $('#save1').prop('hidden', true)
                $('#previous').prop('disabled', false)
            }
        }
    }

    /**
     * Save and Quit
     */

    function saveExit() {
        let currentSlide = slide
        window.localStorage.setItem('slide', currentSlide)
        window.location.href='../courses.html#courses'
    }

    $('#save1').on('click', function() {
        saveExit()
    })
    $('#save2').on('click', function() {
        saveExit()
    })

    /**
     * Challange
     */

    $('#challange').on('click', function() {
        window.location.href='c-var.html'
    })
})