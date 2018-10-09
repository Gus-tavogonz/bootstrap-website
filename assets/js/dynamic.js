$(document).ready(function(){
    console.log("ready")


function showAll(){
    $(".cell-container").fadeIn();
    console.log("all")
}

function showIllustration(){
    if($(".cell-container").not(".illustration")){
        $(".cell-container").fadeOut();
    }
        $(".illustration").fadeIn();
        console.log("illustration")
        // console.log("illustration");
        // $(".design").fadeOut();
        // $(".3d").fadeOut();
        // $(".cDesign").fadeOut();
        // $(".animation").fadeOut(); 
}

function showDesign(){
    if($(".cell-container").not(".design")){
        $(".cell-container").fadeOut();
        $(".design").fadeIn();
    }
        
        console.log("design")
    
}

function showCDesign(){
    if($(".cell-container").not(".cdesign")){
        $(".cell-container").fadeOut();
    }
        $(".cdesign").fadeIn();
        console.log("character design")
    
}
function showAnimation(){
    if($(".cell-container").not(".animation")){
        $(".cell-container").fadeOut();
    }
        $(".animation").fadeIn();
        console.log("animation")
}
function showWeb(){
    if($(".cell-container").not(".web")){
        $(".cell-container").fadeOut();
    }
    $(".web").fadeIn();
    console.log("web")
}   


    $("#onClickAll").on("click", function(){
        event.preventDefault();
        showAll();
    })
    $("#onClickCDesign").on("click", function(){
    event.preventDefault();
    showCDesign();
    })


    $("#onClickIllustration").on("click", function(){
        event.preventDefault();
        showIllustration();
    })

    $("#onClickDesign").on("click", function(){
        event.preventDefault();
        showDesign();
    })

    $("#onClickAnimation").on("click", function(){
        event.preventDefault();
        showAnimation();
    })
    $("#onClickWeb").on("click", function(){
        event.preventDefault();
        showWeb();
    })


    //////MODAL VIMEO////////
    

    var videoSrc;  
    $('.video-btn').click(function() {
        videoSrc = $(this).data( "src" );
        console.log(videoSrc);
        $("#video").attr("src",videoSrc)
        })
    
    $(".close").on("click", function(){
        var blank = "";
        $("#video").attr("src", blank )
    })
   

})