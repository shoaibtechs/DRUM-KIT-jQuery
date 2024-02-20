// document.querySelector("button").addEventListener("click",function(){


//     alert("clicked");



// })




// Adding event for the CLick detection 
$(".drum").click(function(){

    let bottonInnerHTML = this.innerHTML; //The event of the button like, if we click on 'w', so 'w' will be writtened.
    console.log(bottonInnerHTML);            

   
   
    playSounnd(bottonInnerHTML);

    addAnimation(bottonInnerHTML);
       


});



//Adding Event for the KeyPress detection 


$(document).keypress(function(event){

    let key = event.key;
   
    playSounnd(key);

    addAnimation(key);


});
















function playSounnd(event){

    if(event == "w" || event=="W")
    {
        let tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();

    }


    else if(event == "a" || event=="A")
    {
        let tom2 = new Audio('sounds/tom-2.mp3')
        tom2.play();

    }


    else if(event == "s" || event=="S")
    {
        let tom3 = new Audio('sounds/tom-3.mp3')
        tom3.play();

    }


    else if(event == "d" || event=="D")
    {
        let tom4 = new Audio('sounds/tom-4.mp3')
        tom4.play();

    }


    else if(event == "j" || event=="J")
    {
        let snare = new Audio('sounds/snare.mp3')
        snare.play();

    }

    else if(event == "k" || event=="K")
    {
        let crash = new Audio('sounds/crash.mp3')
        crash.play();

    }


    else if(event == "l" || event=="L")
    {
        let kick = new Audio('sounds/kick-bass.mp3')
        kick.play();

    }





}


function addAnimation(event)
{
   
    // event = w,a,s,d,j,k,l So => . + w => .w 


    $('.' + event).addClass('pressed');


    setTimeout(function(){


        $('.' + event).removeClass('pressed');

    },100)


       








}