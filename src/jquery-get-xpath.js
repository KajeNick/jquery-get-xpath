(function( $ ) {
    $.fn.jGetXpath = function() {
        let path = '';

        function checkId(that) {

            if (undefined !== that.attr('id')) {
                if(1 === $('#' + that.attr('id')).length) {
                    let path = that.prop("tagName") + '#' + that.attr('id');

                    return path.toLowerCase();
                }
            }

            return null;
        }

        function checkClass(that) {

            if (undefined !== that.attr('class') 
                && undefined !== that[0] 
                && 0 < that[0].classList.length) {
                
                for (let i = 0; i < that[0].classList.length; i++) {
                    if (isUniqueClass(that[0].classList[i])) {
                        let path = that.prop("tagName") + '.' + that[0].classList[i];

                        return path.toLowerCase();
                    }
                }
            }

            return null;
        }
        
        function isUniqueClass(className) {

            return 1 === $('.' + className).length;
        }

        function checkFullPath(that) {

            return null;
        }

        path = checkId(this);

        if (!path) {
            path = checkClass(this);
        }

        if (!path) {
            path = checkFullPath(this);
        }

        return path;
    };
})(jQuery);