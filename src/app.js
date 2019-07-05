// Your jQuery Logic will go here
$(document).ready(function () {

    //Variables
    let toDoArray = {}
    let submit = $('button').eq(0)
    let completeItem = $('.complete')
    

    // Event Listeners
    //listen for click on submit button
    submit.on('click',function(){
        event.preventDefault()

        let toDoItem = $('input').val()
        if((toDoItem.length) > 0){
            $('ul').prepend(`<li class="list-item">${toDoItem}<i class="fas fa-plus-square"></i><i class="delete fas fa-trash-alt"></i></li>`)
            $('input').val('')
        }
        
    })  

    // If enter key is pressed down
    $(document).eq(0).on( "keypress",function(){
        let toDoItem = $('input').val()
        if((toDoItem.length) > 0 && event.keyCode == 13){
            event.preventDefault()
            $('ul').prepend(`<li class="list-item">${toDoItem}<i class="fas fa-plus-square"></i><i class="delete fas fa-trash-alt"></i></li>`)
            $('input').val('')
        }
        
    })  

    //Remove the to do it tem
    $('ul').on('click',function(){
    
        if(event.target.className === "delete fas fa-trash-alt"){
            event.target.parentNode.remove()
        
        }else if(event.target.className === "fas fa-plus-square"){
            event.target.parentNode.classList.toggle('complete')
        }else{
            return
        }
     })

   


})
