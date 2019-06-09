


document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM is ready');

  $('right').scroll(function() {
  if ($('right').html().length) {
    scroll_l = $('right').scrollLeft();
    scroll_t = $('right').scrollTop();
console.log(scroll_t);
  }
});




  var columns = document.getElementsByClassName('column');
  console.log('columns: ', columns);





$( document ).on( 'click', function( event ) {
  for (var col of columns) {
    col.classList.remove('is-expanded');
    console.log("click");
    };
  $( event.target ).closest( '.column' ).toggleClass( "is-expanded" );
  $('right').load('right', function() {
    console.log("load");
    $('right').scrollLeft(scroll_l);
    $('right').scrollTop(scroll_t);
  console.log(scroll_t);
  });
});

var compButton = document.getElementsByClassName('comparison');
console.log(compButton);
for (var compButton of compButton) {
    compButton.addEventListener('click', function(event) {
    for (var col of columns) {
    col.classList.remove('is-expanded');
    console.log("click");
    };
});
}
var scroll_l = $('right').scrollLeft();
var scroll_t = $('right').scrollTop();
console.log(scroll_t);



});
