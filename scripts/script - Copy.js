/* Here we don't use jquery
 * Just vanilla JavaScript.
 * The first wrapping function is equivalent to jQuerys
 * $(document).ready(function() {
 */


document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM is ready');


  $( document ).on( "click", function( event ) {
    $( event.target ).closest( ".column" ).toggleClass( "is-expanded );
  });

}
  var columns = document.getElementsByClassName('column');
  console.log('columns: ', columns);

  // looping over all columns (inside of HTML collection)
  // Using ECMAScript 6, older browsers need other solutions
  for (var column of columns) {
    closest(column).addEventListener('click', function(event) {
      // remove is-expanded class from all elements
      // to do so, we loop over each item again
      for (var col of columns) {
        col.classList.remove('is-expanded');
      }
      // the event.target referts to the clicked item
      console.log('event.target: ', event.target);
      event.target.classList.add('is-expanded');
    });
    }

var compButton = document.getElementsByClassName('comparison');
console.log(compButton);
for (var compButton of compButton) {
compButton.addEventListener('click', function(event) {
  //var columns = document.getElementsByClassName('column');
  for (var col of columns) {
    col.classList.remove('is-expanded');
    console.log("click");
    };
});
}

});
