import React from 'react';
import Square from './Square';

class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }
  
    render() {
      const status = "Next player: X";
  
      return (
        <div >
          <div className="mb-2.5">{status}</div>
          <div className="after:content-[''] table-auto clear-both rounded-lg ">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="table-auto after:content-[''] clear-both">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="table-auto after:content-[''] clear-both">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
export default Board;
