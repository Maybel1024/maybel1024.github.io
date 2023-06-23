// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify);
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  var rgbNumbers 
  var rgbString 
   for (var i = 0; i < image.length; i++){
      for (var j = 0; j < image[i].length; j++) {
        console.log(image[i][j])
        rgbString = image[i][j]
        rgbNumbers = rgbStringToArray(rgbString)
        console.log(rgbNumbers)
        filterFunction(rgbNumbers)
        rgbString = rgbArrayToString(rgbNumbers)
        image[i][j] = rgbString 
      }
    }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFliterNoBackground(){
  
  var rgbNumbers 
  var rgbString 
   for (var i = 0; i < image.length; i++){
      for (var j = 0; j < image[i].length; j++) {
        console.log(image[i][j])
        rgbString = image[i][j]
        rgbNumbers = rgbStringToArray(rgbString)
        console.log(rgbNumbers)
        rgbNumbers[0] = 255; 
        rgbString = rgbArrayToString(rgbNumbers)
        image[i][j] = rgbString 
      }
    }
}

// TODO 5: Create the keepInBounds function
function keepInBounds(num1){
  var x = 0;
  var y = 255; 
 return num1 < 0 ? Math.min(x, y): Math.max(x,y);
}

// TODO 3: Create reddify function
function reddify(arr){
  arr[0] = 200
}

// TODO 6: Create more filter functions
function decreaseBlue(arr2){
  arr2 = keepInBounds(arr2 - 50);
}
function increaseGreenByBlue(){

}

// CHALLENGE code goes below here
