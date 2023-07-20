$(document).ready(function() {
    $(".mobile-menu-button").on('click', function() {
        $("ul.menu").slideToggle();
    });

    $(".bio-section .btn a").on('click', function() {
        $(".bio-list").slideToggle();

        if($(".bio-section").hasClass("pb-0")) {
            $(".bio-section").removeClass("pb-0")
        } else {
            $(".bio-section").addClass("pb-0")
        }
    });

    $('.product-images-list').flickity();
    $('.product-thumbnails').flickity({
        asNavFor: '.product-images-list',
        contain: true,
        pageDots: false
    });


    $('.reviews-section').flickity({ 
        cellAlign: 'left',
        wrapAround:true,
        autoPlay: 5500,
        pauseAutoPlayOnHover: false,
        pageDots: false,
    });

    $('.sizes-list .single-item').on('click', function() {
        var _this = $(this);
        $('.sizes-list .single-item').removeClass('active');

        _this.addClass('active');
    })

    $(".chooe-btn .choose-now").on("click", function() {
        $(".upload-section").show();
        $(".text-input-field a.upload-btn").show(); 
    })

    $(".chooe-btn .choose-later").on("click", function() {
        $(".upload-section").hide(); 
        $(".text-input-field a.upload-btn").hide(); 
    })

    $(".text-input-field .btn-section a").on("click", function() {
        var _this = $(this);
        $(".text-input-field .btn-section a").removeClass("active");
        _this.addClass("active");

        console.log(_this.attr("data-overlay"))

        console.log(_this[0].attributes)
        console.log(_this[0].attributes.customFamily)

        $("#custom-textarea").css("font-family", _this.attr("data-family"))
    })

    $(".right-btn a").on("click", function() {
        $(".right-btn a").removeClass("active");
        var _this = $(this);

        _this.addClass("active");

        var _target_element = $(".text-input-field");

        if(_this.attr("data-edit") === "true") {
            _target_element.show();
        } else {
            console.log('going to hide')
            _target_element.hide();
        }

        console.log(_this)
        console.log(_this.attr("data-edit"))
    })
})

$(function() {
    $('.zoom').zoom({
        magnify: 2
    });
});
 // $(document).ready(function(e) {
 //        $(document).on('scroll',function()
 //                      {
 //                           if(window.pageYOffset>500)
 //                           {
 //                               $('.product-slider').css({'top':'0px'});
 //                           }else
 //                           {
 //                                $('.product-slider').css({'top':'40px'});
 //                           }
 //                      });
 //    });
 
