import React from 'react'
import Board from './components/Board'

// Game Class'ı:
// App.js gibi düşünülebilir.
// Component'lerin renderlandığı yer.

class Game extends React.Component {
  render() {
    return (
      <div className="flex w-full h-screen py-10 m-auto bg-black text-white text-center justify-center">
        <div>
          <Board />
        </div>{/* Board div */}
        <div className="ml-5">
          <div>
            {/* status */}
          </div>{/* Status Wrapper */}
          <ol className='pl-8'>
            {/* TODO */}
          </ol>{/* Ordered List */}
        </div>{/* Status & Todo div */}
      </div>/* Main div */
    );
  }
}
export default Game