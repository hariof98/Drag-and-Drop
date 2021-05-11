const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.contain')

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
    contain.addEventListener('dragover', e => {
        e.preventDefault()
        //console.log('Drag Over')
        const afterElement = getdragAfterElement(contain, e.clientY)
        //console.log(afterElement)
        const draggable = document.querySelector('.dragging')
        if(afterElement == null)
        {
            contain.appendChild(draggable)
        }
        else{
            contain.insertBefore(draggable, afterElement)
        }
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

