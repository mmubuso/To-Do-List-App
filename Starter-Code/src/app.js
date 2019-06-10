// Your jQuery Logic will go here
$(document).ready(function () {
// let deleteItem = $('.delete')
// console.log(deleteItem)
    //Variables
    let toDoArray = {}
    let submit = $('button').eq(0)
    let completeItem = $('.complete')
    

    // Event Listeners
    //listen for click on submit button
    submit.on('click',function(){
        let toDoItem = $('input').val()
        if((toDoItem.length) > 0){
            $('ul').prepend(`<li class="list-item">${toDoItem}<i class="fas fa-plus-square"></i><i class="delete fas fa-trash-alt"></i></li>`)
        }

    })  

    //Remove the to do it tem
    $('ul').on('click',function(event){
        console.log(event)
        if(event.target.className === "delete fas fa-trash-alt"){
            event.target.parentNode.remove()
            console.log(event)
        }else if(event.target.className === "fas fa-plus-square"){
            event.target.parentNode.classList.toggle('complete')
        }else{

        }
     })

   


})
