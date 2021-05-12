/* Events fired on the drag target */
document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("demo").innerHTML = "Started to drag the p element.";
  });
  
  document.addEventListener("dragend", function(event) {
    document.getElementById("demo").innerHTML = "Finished dragging the p element.";
  });
  
  /* Events fired on the drop target */
  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  
  document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
      var data = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById(data));
    }
  });