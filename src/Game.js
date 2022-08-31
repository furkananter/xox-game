import React from 'react'
import Board from './components/Board'


const style = {
  main: "flex w-full h-screen py-10 m-auto bg-black text-white text-center justify-center",
  board: "justify-center items-center flex",
  statusAndTodo: "ml-5",
  orderedList:"pl-8"
}
// Game Class'ı:
// App.js gibi düşünülebilir.
// Component'lerin renderlandığı yer.

class Game extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <div className={style.board}>
          <Board />
        </div>{/* Board div */}
        <div className={style.statusAndTodo}>
          <div>
            {/* status */}
          </div>{/* Status Wrapper */}
          <ol className={style.orderedList}>
            {/* TODO */}
          </ol>{/* Ordered List */}
        </div>{/* Status & Todo div */}
      </div>/* Main div */
    );
  }
}
export default Game