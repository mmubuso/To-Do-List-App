// Your jQuery Logic will go here
$(document).ready(function () {

    //Variables
    
    let toDoArray = {}
    let submit = $('button').eq(0)

    // Event Listeners
    //listen for click on submit button
    submit.on('click',function(){
        let toDoItem = $('input').eq(0)[0].value
        if((toDoItem.length) > 0){
            $().prepend()
        }
    
    })



})
