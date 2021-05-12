var draggables = document.querySelectorAll('.draggable')
var containers = document.querySelectorAll('.contain')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        //console.log('Drag Start')
        draggable.classList.add('dragging')
    })
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
})

containers.forEach(contain => {
    contain.addEventListener('dragend', e => {
        e.preventDefault()
        //console.log('Drag Over')
        console.log(e.getdragAfterElement)
      //  var afterElement = getdragAfterElement(contain, e.clientY)
      var afterElement = e.target.id
      afterElement = document.getElementById(afterElement)
        console.log(afterElement)
        var draggable = getdragAfterElement(contain, e.clientY)

        console.log(draggable)
         //console.log(contain)
       /* if(afterElement == null)
        {
            contain.appendChild(draggable)
        }
        else{
            contain.insertBefore(draggable, afterElement)
        }*/
      /*  if(e.target.classList.contain(draggable.className))
        {
            return ;
        }*/
        contain.removeChild(afterElement)
        //dragged.parentNode.removeChild(dragged)
        contain.appendChild(draggable)
      //  contain.removeChild(afterElement)
        //  contain.appendChild(draggable)
    })
})

function getdragAfterElement(contain, y)
{
  const draggableElements =  [...contain.querySelectorAll('.draggable:not(.dragging)')]

 return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()  //function for rectangle
    const offset = y - box.top - box.height / 2
    //console.log(offset)
    if(offset < 0 && offset > closest.offset)
    {
        return{ offset: offset, element: child }
    }
    else{
      return closest 
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element

}

