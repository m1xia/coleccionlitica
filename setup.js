(function ($) {
    $(document).ready(function() {
       
        $('.xzoom10, .xzoom-gallery10').xzoom({tint: '#000000', Xoffset: 20});
        $('.xzoom9, .xzoom-gallery9').xzoom({tint: '#000000', Xoffset: 20});
        $('.xzoom8, .xzoom-gallery8').xzoom({tint: '#000000', Xoffset: 20});
        $('.xzoom7, .xzoom-gallery7').xzoom({tint: '#000000', Xoffset: 20});
        $('.xzoom6, .xzoom-gallery6').xzoom({tint: '#000000', Xoffset: 20});
        $('.xzoom5, .xzoom-gallery5').xzoom({tint: '#000000', Xoffset: 20});
        $('.xzoom4, .xzoom-gallery4').xzoom({tint: '#000000', Xoffset: 20});
        $('.xzoom3, .xzoom-gallery3').xzoom({tint: '#000000', Xoffset: 20});
        $('.xzoom2, .xzoom-gallery2').xzoom({tint: '#000000', Xoffset: 20});
        $('.xzoom1, .xzoom-gallery1').xzoom({tint: '#000000', Xoffset: 20});

        //Integration with hammer.js
        var isTouchSupported = 'ontouchstart' in window;

        if (isTouchSupported) {
            //If touch device
            $('.xzoom, .xzoom2, .xzoom3, .xzoom4, .xzoom5').each(function(){
                var xzoom = $(this).data('xzoom');
                xzoom.eventunbind();
            });
            
            $('.xzoom, .xzoom2, .xzoom3').each(function() {
                var xzoom = $(this).data('xzoom');
                $(this).hammer().on("tap", function(event) {
                    event.pageX = event.gesture.center.pageX;
                    event.pageY = event.gesture.center.pageY;
                    var s = 1, ls;
    
                    xzoom.eventmove = function(element) {
                        element.hammer().on('drag', function(event) {
                            event.pageX = event.gesture.center.pageX;
                            event.pageY = event.gesture.center.pageY;
                            xzoom.movezoom(event);
                            event.gesture.preventDefault();
                        });
                    }
    
                    xzoom.eventleave = function(element) {
                        element.hammer().on('tap', function(event) {
                            xzoom.closezoom();
                        });
                    }
                    xzoom.openzoom(event);
                });
            });

      
        
        $('.xzoom1, .xzoom2, .xzoom3, .xzoom4, .xzoom5, .xzoom6, .xzoom7, .xzoom8, .xzoom9, .xzoom10').each(function() {
            var xzoom = $(this).data('xzoom');
            $(this).hammer().on("tap", function(event) {
                event.pageX = event.gesture.center.pageX;
                event.pageY = event.gesture.center.pageY;
                var s = 1, ls;

                xzoom.eventmove = function(element) {
                    element.hammer().on('drag', function(event) {
                        event.pageX = event.gesture.center.pageX;
                        event.pageY = event.gesture.center.pageY;
                        xzoom.movezoom(event);
                        event.gesture.preventDefault();
                    });
                }

                var counter = 0;
                xzoom.eventclick = function(element) {
                    element.hammer().on('tap', function() {
                        counter++;
                        if (counter == 1) setTimeout(openmagnific,300);
                        event.gesture.preventDefault();
                    });
                }

                function openmagnific() {
                    if (counter == 6) {
                        xzoom.closezoom();
                        var gallery = xzoom.gallery().cgallery;
                        var i, images = new Array();
                        for (i in gallery) {
                            images[i] = {src: gallery[i]};
                        }
                        $.magnificPopup.open({items: images, type:'image', gallery: {enabled: true}});
                    } else {
                        xzoom.closezoom();
                    }
                    counter = 0;
                }
                xzoom.openzoom(event);
            });
        });

        } else {
            //If not touch device

                      
            //Integration with magnific popup plugin
            $('#xzoom-magnific1 , #xzoom-magnific2, #xzoom-magnific3, #xzoom-magnific4, #xzoom-magnific5, #xzoom-magnific6, #xzoom-magnific7, #xzoom-magnific8, #xzoom-magnific9, #xzoom-magnific10').bind('click', function(event) {
                var xzoom = $(this).data('xzoom');
                xzoom.closezoom();
                var gallery = xzoom.gallery().cgallery;
                var i, images = new Array();
                for (i in gallery) {
                    images[i] = {src: gallery[i]};
                }
                $.magnificPopup.open({items: images, type:'image', gallery: {enabled: true}});
                event.preventDefault();
            });

            
        }
    });
})(jQuery);