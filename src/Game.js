import React from 'react'
import Board from './components/Board'
import { motion } from 'framer-motion';

const style = {
  main: "flex w-full h-screen py-10 m-auto bg-black text-white text-center justify-center",
  board: "justify-center items-center flex",
  statusAndTodo: "ml-5",
  orderedList: "pl-8"
}

// Calculate Winner fonksiyonu:
// Amaç: tüm kareleri kontrol ederek oyunun kazananını bulmak.
// Parametre: squares: karelerin dizisi.
// Potansiyel olarak kazanılan adımları keşfetmek istenmektedir.

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

// Game Class'ı:
// App.js gibi düşünülebilir.
// Component'lerin renderlandığı yer.

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
    }
  }

  //* handleClick(i) fonksiyonu:
  // Amaç: kareye tıklandığında o kareye X veya O karakteri yazılır.
  // Parametre: i: karelerin indexi.
  // if (calculateWinner(this.state.squares) || this.state.squares[i]) {
  //   return;
  // }
  // bu yukardaki if komutu, eğer işleme giren kare daha önce kullanılmışsa veya oyunun kazananı varsa kareye tıklanamaz.
  // değiştirilemez.
  // else altında kareye tıklanıldığında kareye X veya O karakteri yazılır. Sırada kim varsa.
  // Önemli!
  // Immutable önemli bir kavramdır. Array'in kendisinin değiştirilmesi tavsiye edilmez. 
  // Array'in kendisini değiştirmektense .slice() kullanılarak kopyalama yapılır.
  // const squares = this.state.squares.slice(); 'de olduğu gibi.
  // squares: squares diyerek kopyalanan dizide değişiklik yapılabilir ve ana diziye en son yapılan değişiklikler gönderilir.


  handleClick(i) {
    const history = this.state.history
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return;
    } else {
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        xIsNext: !this.state.xIsNext,
      })
    }
  }

  // Restart Fonksiyonu:
  // Aslında bu yoktu, içimden geldi.
  handleRestart() {
    this.setState({
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
    })
  }
  

  render() {
    // Motion Frame kullanılarak animasyonu yapıyoruz.
    const text = {
      hidden: { y: -150, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        }
      }
    }
    // Motion Frame bölmesi

    const history = this.state.history
    const current = history[history.length - 1]
    const winner = calculateWinner(current.squares)
    let status;
    if (winner) {
      status = "Winner: " + winner
    } else if (current.squares.every(square => square !== null)) {
      status = "No Winner"
    } else {
      status = "Next Player: " + (this.state.xIsNext ? 'X' : 'O')
    }

    
    return (
      <div className={style.main}>
        <div className={style.board}>
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={text}
              className="mb-2.5 hover:underline">{status}
            </motion.div>
            <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
          </div>
        </div>{/* Board div */}
        <div className={style.statusAndTodo}>
          <ol className={style.orderedList}>
            {/* TODO */}

          </ol>{/* Ordered List */}
        </div>{/* Status & Todo div */}
        {winner
        ? <button onClick={() => this.handleRestart()}>Restart</button> 
        : "Devamke"}
      </div>/* Main div */
    );
  }
}
export default Game