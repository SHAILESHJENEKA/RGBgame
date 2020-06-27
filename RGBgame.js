

window.onload=function(){


var squares = document.querySelectorAll(".square");
var displaycolor=document.getElementById("displaycolor");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var button = document.getElementById("button");
var hardbutton = document.getElementById("hardbutton");
var easybutton = document.getElementById("easybutton");
var numsquares = 6;

var color = generaterandom(numsquares);

 var pickedcolor = pickcolor();

easybutton.addEventListener("click",function()
{
  easybutton.classList.add("selected");
  hardbutton.classList.remove("selected");
  numsquares = 3;
  color = generaterandom(3);
  
  pickedcolor = pickcolor();
  displaycolor.textContent = pickedcolor;
  
	for(var i=0;i<squares.length;i++)
 	{
 		if(color[i])
 		{
 	    squares[i].style.background = color[i];
 	    }
 	    else
 	    {
 	    squares[i].style.background = "none";	
 	    }
 	}



})

hardbutton.addEventListener("click",function()
{
   
   hardbutton.classList.add("selected");
   easybutton.classList.remove("selected");
   numsquares = 6;
   color = generaterandom(numsquares);

 	pickedcolor = pickcolor();

 	displaycolor.textContent = pickedcolor;

 	for(var i=0;i<squares.length;i++)
 	{
 	    squares[i].style.background = color[i];
 	}

})


 button.addEventListener("click",function()
 {

 	color = generaterandom(numsquares);

 	pickedcolor = pickcolor();

 	displaycolor.textContent = pickedcolor;

 	for(var i=0;i<squares.length;i++)
 	{
 	    squares[i].style.background = color[i];
 	}

 	h1.style.background = "black";

 })


for(var i=0;i<squares.length ; i++)
{
	squares[i].style.background = color[i];

	squares[i].addEventListener("click",function(){
		var clickedcolor = this.style.background;
		if(clickedcolor === pickedcolor)
		{
           
			 message.textContent = "CORRECT!!";
			 changecolor(clickedcolor);
			 h1.style.background = clickedcolor;
			 button.textContent = "Try Again";

		}
		else
		{
			this.style.background = "black";
			message.textContent="WRONG!!";
		}
	})
}             

displaycolor.textContent=pickedcolor;

function changecolor(color)
{
	for(var i=0; i<squares.length;i++)
	{
		squares[i].style.background = color;
	}
}

function pickcolor()
{  
	var random= Math.floor(Math.random() * color.length);
	return color[random];
}

function generaterandom(num)
{
	var arr =[];
	for(var i=0;i<num;i++)
	{
        arr.push(randomcolor());
	}
	return arr;
}

function randomcolor()
{
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+ r +", "+ g +", "+ b +")";
}




}