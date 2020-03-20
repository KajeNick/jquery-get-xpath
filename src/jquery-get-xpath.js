(function ($) {
    $.fn.jGetXpath = function (shortPath = false) {

        function checkId(that) {

            if (undefined !== that.attr('id')) {
                if (isUniqueId(that.attr('id'))) {
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

        function checkFullPath(that) {

            let lastParent = that,
                path = '';

            while (0 !== lastParent.length) {
                path = checkIndex(lastParent) + path;
                lastParent = lastParent.parent();
            }

            return path.toLowerCase();
        }

        function checkIndex(elem) {

            let tag = elem.prop("tagName");

            if (undefined === tag) {

                return '';
            }

            let neighbours = elem.parent().children(tag),
                path = '/' + tag;

            if (1 < neighbours.length) {
                let index = neighbours.index(elem) + 1;

                path = path + '[' + index + ']';
            }

            return path;
        }

        function isUniqueId(id) {

            return 1 === $('#' + id).length;
        }

        function isUniqueClass(className) {

            return 1 === $('.' + className).length;
        }

        let path = checkId(this);

        if (!path) {
            path = checkClass(this);
        }

        if (!path) {
            path = checkFullPath(this);
        }

        return path;
    };

    String.prototype.prepareForDomXPath = function () {

        let domXPath = '';



        return domXPath.toLowerCase();
    };

})(jQuery);