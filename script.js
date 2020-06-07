


$( ".slider" ).on("click ", function() {
    if( $( "body" ).hasClass( "dark" )) {
        $( "body" ).removeClass( "dark" );
        $(".social").removeClass("dark-section")
        $(".items").removeClass("items-dark")
        $(".slider" ).removeClass("tt");
      } else {
        $( "body" ).addClass( "dark" );
        $(".social").addClass("dark-section")
        $(".items").addClass("items-dark")
        $( ".slider" ).addClass("tt");
      }
});
