const mydisplay= document.getElementById("myinput");


function appendToDisplay(input){
    myinput.value+=input;
}

function clearDisplay(){
    myinput.value="";
}

function calculate(){
    try{
        myinput.value=eval(myinput.value);
    }
    catch(error){
       myinput.value="Error";
    }
}
