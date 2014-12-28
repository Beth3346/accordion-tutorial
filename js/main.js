(function() {
    var $ = jQuery,
        accordion = $('.accordion');

    accordion.find('.accordion-content').hide();
    accordion.find('.accordion-content[data-state=expanded]').show();

    accordion.on('click', '.accordion-label', function() {
        var that = $(this);
        
        that.closest('.accordion').find('.accordion-content:visible').slideUp();
        that.next('.accordion-content').slideToggle();
    });
})();