import React, { Component } from 'react';
class Game extends Component {
state = {
    gravity: 0.8,
    jerry: {
      x: 50,
      y: 100,
      velocity: 0,
      radius: 20
    }


draw = () => {
    const ctx = this.refs.canvas.getContext("2d");
    ctx.fillStyle = "orange";
        ctx.beginPath();
        ctx.arc(this.state.bird.x, this.state.bird.y,                        
                this.state.bird.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
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
    }
    componentDidMount() {
        setInterval(() => {
        this.update();
        this.draw();
    }, 1000 / 60);
    }


    render() {
        return (
            <div> 
              <canvas ref="canvas" width={450} height={650} />
           </div>
        );
    }
}
export default Game;