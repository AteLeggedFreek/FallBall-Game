
//These elements are global variables used to define our context and canvas space.
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')

canvas.width = 800
canvas.height = 800

c.fillStyle = 'black'
c.fillRect(0,0,canvas.width,canvas.height)

const gravity = 0.5


var counter = 0


//This variable defines a random X position for the hole in the obstacle.
var randomX = Math.floor(Math.random() * canvas.width)

//This class defines the obstacles that spawn.
class Wall {
	constructor({
		position,
		velocity, 
		}) {
		this.position = position
		this.width = 800
		this.height = 20
		this.velocity = velocity
		this.holeWidth = 100
	}

	drawWall() {
		c.fillStyle = 'white'
		c.fillRect(this.position.x,this.position.y,this.width,this.height)
	}
	drawHole() {
		c.fillStyle = 'black'
		c.fillRect(randomX,this.position.y,this.holeWidth,this.height)
	}
	update() {
		this.drawWall()
		this.drawHole()

			
		

		// Allows for walls to move up
		
		this.position.y += this.velocity.y;

		
	}
}


//This class defines the player character.
class Player {
	constructor({
		position,
		velocity,
		width,
		height, 
		color}) {
		this.position = position
		this.width = width
		this.height = height
		this.color = color
		this.velocity = velocity
	}

	draw() {
		c.fillStyle = this.color
		c.fillRect(this.position.x,this.position.y,this.width,this.height)
	}
	update() {
		this.draw()

		// Prevents Movement off the canvas
		if (this.position.x < 0) {
			this.position.x = 0
		} 
		if (this.position.x + this.width > canvas.width) {
			this.position.x = canvas.width - this.width
		}
		
		 if (this.position.y < 0) {
			this.position.y = 0
		}
		 if (this.position.y + this.height >  canvas.height){
			this.position.y = canvas.height - this.height
		}

		

		// Allows for sprites to move
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;

		//Creates Gravity
		if (this.position.y +this.height  + this.velocity.y >= canvas.height)
			{this.velocity.y = 0}
		else		{
			this.velocity.y += gravity
		}
	}
}



const player = new Player({
	position: {
		x: 375,
		y: 0
	},
	velocity: {
		x: 0,
		y:0
	},
	width: 50,
	height: 50,
	color: 'white'
})


const wallArray = []
//let lastWall = wallArray[wallArray.length]
//var lastWallPosition = wallArray[x]

for (let i = 0;i < (Math.floor(canvas.height / 100)); i++) {
	wallArray.push(new Wall({
		position: {
			x: 0,
			y: wallArray.indexOf(i) * 100
		},
		velocity: {
			x: 0,
			y: -5
		},
	}))
	counter++
}
console.log(wallArray)
/* const wall = new Sprite({
	position: {
		x: 0,
		y: 100
	},
	width: canvas.width,
	height: 20,
	color: 'white'
 });

const hole = new Sprite({
	position: {
		x: random,
		y: wall.position.y
	},
	width: 100,
	height: 20,
	color: 'black',

});*/



var mouseX
var mouseY

 

function animate(mouseX) {
	window.requestAnimationFrame(animate)
	c.clearRect(0,0,canvas.width,canvas.height)
c.fillStyle = 'black'
c.fillRect(0,0,canvas.width,canvas.height)

player.update(canvas)
wallArray[].update()


// Prevents Player from passing through the walls
		//if (player.position.y + player.height <= )

canvas.addEventListener('mousemove', e => {
	player.position.x = e.pageX - (player.width / 2)
	 mouseY=e.pageY 
})
}

animate()





	



