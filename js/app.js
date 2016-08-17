$(document).foundation();
new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'trigger' ) )

  var owl = $("#slider");

  owl.owlCarousel({
    navigation : true,
    slideSpeed :300,
    paginationSpeed :400,
    singleItem : true,
    transitionStyle : "fade"
  });

});
