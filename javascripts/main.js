var $grid = $('.grid').masonry({
  // disable initial layout
  isInitLayout: false,
  //...
});
// bind event
$grid.masonry( 'on', 'layoutComplete', function() {
  console.log('layout is complete');
});
// manually trigger initial layout
$grid.masonry();

