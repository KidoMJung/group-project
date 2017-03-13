$(document).ready(function(){
    console.log("doc loaded")
    $(".menu-collapsed").click(function() {
        $(this).toggleClass("menu-expanded");
    });    
});
