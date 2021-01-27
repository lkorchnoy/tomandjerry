import React, { Component } from 'react';
class Game extends Component {
state = {
    gravity: 0.8,
    lift: -15,
    jerry: {
      x: 50,
      y: 100,
      velocity: 0,
      radius: 20
    }
}


    draw = () => {
    const ctx = this.refs.canvas.getContext("2d");
    ctx.fillStyle = "orange";
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, this.refs.canvas.width,   
        this.refs.canvas.height);      
        ctx.beginPath();
        ctx.arc(this.state.jerry.x, this.state.jerry.y,                        
                this.state.jerry.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    };
    
    update = () => {
        let newV = (this.state.jerry.velocity + this.state.gravity) * 0.9
    this.setState({
      jerry: {
        x: 50,
        y: Math.max(
          Math.min(
            this.state.jerry.y + newV,
            this.refs.canvas.height - this.state.jerry.radius
          ),
          0
        ),
        velocity: newV,
        radius: 20
      }
    });
    },
    componentDidMount() {
        setInterval(() => {
        this.update();
        this.draw();
    }, 1000 / 60);
    document.addEventListener("keydown", e =>
      e.keyCode === 32 ? this.setState({ 
        jerry: {
          x: 50,
          y: this.state.jerry.y,
          velocity: this.state.jerry.velocity + this.state.lift,
          radius: 20
          }
        }) : null
    );

    },


    render() {
        return (
            <div> 
              <canvas ref="canvas" width={450} height={650} />
           </div>
        );
    }
}
export default Game;