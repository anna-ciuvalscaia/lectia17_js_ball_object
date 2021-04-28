// creat a literal object

function randInt(from, to) {
    return Math.round(from + Math.random()*(to-from))
}


function newBall(sizeB,color) {
  return  {
    // properties
    sizeB: sizeB,
    color: color,
    x: randInt(0, innerWidth-100),
    y: randInt(0, innerHeight-100),
    speedX: randInt(-15, 15),
    speedY: randInt(-15, 15),

    render: function () {
        return `
        <div style="
        width: ${this.sizeB}px;
        height: ${this.sizeB}px;
        border-radius: ${this.sizeB}px;
        background-color: ${this.color};
        position: absolute;
        left: ${this.x}px;
        top: ${this.y}px;
        opacity: 0.05;
        ">
        </div>
        `
    },

   renderInside: function ( container ) {
        container.innerHTML += this.render()
    },

    move: function() {
        if(this.x + this.sizeB >= innerWidth
            ||
            this.x <= 0
            ) {
            this.speedX *= -0.95 // reflect this speed
        }
        this.x += this.speedX

        if(this.y + this.sizeB >= innerHeight) {
            this.speedY *= -0.3
        }
         if(this.y <= 0) {
            this.speedY *= -0.9
         }

             // reflect this speed
        
        this.y += this.speedY
    },

    animate: function() {
        let thisObject = this
        setInterval( function () {
            thisObject.move()
            thisObject.renderInside( container )
        }  , 50)
    }

  } 
}

for(let i=0; i<10; i++) {
    let color = "#" + randInt(125, 935)
    let ball = newBall( i * 50, color)
    ball.animate()
}

 

