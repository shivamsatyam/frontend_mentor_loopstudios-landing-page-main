
  
  
  
  
  
  
  

let data = [
	{
		photo:"image-deep-earth.jpg",
		text:"Deep earth",
	},
	{
		photo:"image-night-arcade.jpg",
		text:"Night arcade",
	},
	{
		photo:"image-soccer-team.jpg",
		text:"Soccer team VR",
	},
	{
		photo:"image-grid.jpg",
		text:"The grid",
	},
	{
		photo:"image-from-above.jpg",
		text:"From up above VR",
	},
	{
		photo:"image-pocket-borealis.jpg",
		text:"Pocket borealis",
	},
	{
		photo:"image-curiosity.jpg",
		text:"The curiosity",
	},
	{
		photo:"image-fisheye.jpg",
		text:"Make it fisheye",
	},
	
]

let photo = document.querySelector(".photo")

let str = ""
data.forEach( function(element, index) {
	str+=`<div class="photo_box" style="background-image: url('./images/desktop/${element.photo}')">
     
  
     <h1>${element.text}</h1>
   </div>`
});


photo.innerHTML = str
