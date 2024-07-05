
    const time=new Date().getHours();
    let greeting;
    if(time < 12)
    {
        greeting="Good Morning!";
    }
     else if(time < 16)
     {
        greeting="Good Afternoon!";

    }
    else if(time < 20){
        greeting="Good Evening!";

    }
    else{
        greeting="Good Night!";

    }
    document.getElementById("wishes").innerHTML = greeting;
console.log("greeting");