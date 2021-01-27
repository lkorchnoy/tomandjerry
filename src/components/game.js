import React, { Component } from 'react';
class Game extends Component {
    ...
state = {
        mouse: {
            x: 50,
            y: this.refs.canvas.height/2,
            radius: 20
        }
    }
...
    render() {
        return (
            <div> 
              <canvas ref="canvas" width={450} height={650} />
           </div>
        );
    }
}
export default Game;