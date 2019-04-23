$( document ).ready(function() {
    $('.list-item').on('mouseover', function() {
        var target = $(this).attr('data-target');

        console.log(target, $(target));
        $(target).addClass('hover');

    }).on('mouseout', function() {
        var target = $(this).attr('data-target');

        $(target).removeClass('hover');
    });
});

$(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
  });
