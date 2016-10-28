$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $(".nav-tabs>li").on("mouseenter",function () {
     var title= $(this).children("a").data("title");
        $(".tab-title").text(title);
    })




    $(window).on("resize", resize).trigger("resize");
    function resize() {
        var windowWidth = $(window).width();
        var $item = $("#main-carousel .item");

        function isSmScreen(windowWidth) {
            return windowWidth < 768 ? true : false;
        }

        if (isSmScreen(windowWidth)) {
            $item.each(function (i, element) {
                var $element = $(element);
                $element.css("background-image", '');
                $element.html('<img src="'+$element.attr("data-img")+'" alet="">')

            })
        }
        else {
            $item.each(function (i, element) {
                var $element = $(element);
                $element.css("background-image", 'url("' + $element.attr("data-bgimg") + '")');
                $element.empty();
            })
        }
    }

})
