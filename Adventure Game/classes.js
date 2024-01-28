var randomX = Math.floor(Math.random() * canvas.width)

class Wall {
	constructor({
		position,
		velocity,
		width,
		height, 
		}) {
		this.position = position
		this.width = width
		this.height = height
		this.color = color
		this.velocity = velocity
		holeWidth = 100
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

