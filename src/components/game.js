import React, { Component } from 'react';
class Game extends Component {
state = {
        jerry: {
            x: 50,
            y: this.refs.canvas.height/2,
            radius: 20
        }
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
    componentDidMount() {
        this.draw()
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