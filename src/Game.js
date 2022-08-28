import React from 'react'
import Board from './components/Board'


class Game extends React.Component {
    render() {
      return (
        <div className="flex w-full h-screen py-10 m-auto bg-black text-white text-center justify-center">
          <div className="">
            <Board />
          </div>
          <div className="ml-5">
            <div>{/* status */}</div>
            <ol className='pl-8'>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  export default Game