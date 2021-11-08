$(function() {
    
    $('li').mouseover(function(){
        $(this).css('cursor', 'pointer');
    });

    // make list items dragable
    $( "#draggable li" ).draggable({helper: 'clone'});

    // put text from list item into input field
    $("input").droppable({
        drop: function(ev, ui) {
            $(ui.draggable).hide()
            $(this).val(ui.draggable.text())
        }
    })
});