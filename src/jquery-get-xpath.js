(function( $ ) {
    $.fn.jGetXpath = function() {
        let path = '';

        if (undefined !== this.attr('id')) {
            if(1 === $('#' + this.attr('id')).length) {
                return this.prop("tagName") + '#' + this.attr('id');
            }
        }
    };
})(jQuery);