import React from 'react';
import Square from './Square';
import { motion } from 'framer-motion';


/* 
  Square içerisine state eklemektense 
  Board içerisine bir state eklenip o state üzerinden işlemleri
  gerçekleştirmek daha mantıklıdır.

  Bu sayede square'ın artık bir class olmasına gerek kalmaz.
  Fonksiyon olarak bir komponent haline dönüştürüp props ile
  veri göndermeyi sağlayabiliriz.

*/

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

// Board Class'ı:
// constructor()'ı olan bir sınıf super(props) almak zorunda.
// this.state ile karelerin durumunu tutan bir state tanımlanır.
// squares : 9 karelik bir dizi oluşturulur ve her kare için 'null' değerini tutar.
// xIsNext : X karakteri ilk oynanacak.(true dönmüş) / false olsaydı O karakteri ilk oynanacaktı.

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  // handleClick(i) fonksiyonu:
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
    const squares = this.state.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return;
    } else {
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      })
    }
  }


  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }

  /*
    const winner = calculateWinner(this.state.squares)
    winner adında bir değişken oluşturdum. Bu değişkenimi,
    calculateWinner fonksiyonunun döndürdüğü değere eşitliyorum.
    this.state.squares benim kutularımı temsil ediyor.
    yukarda çalışan fonksiyon squares değerlerini kontrol ediyor.
    Eğer bu değerler birbirine eşitse, winner değişkeni o değerini
    döndürüyor.
    .every() ile squares değerlerini kontrol ediyor.
    Boş kalan bir değer yoksa ve kazanan yoksa No winner döndürüyor.
    Else zaten görüldüğü gibi, boş kalan varsa kimin oynayacağını söylüyor.
  
  */
  render() {
    const winner = calculateWinner(this.state.squares)
    let status;
    if (winner) {
      status = "Winner: " + winner
    } else if (this.state.squares.every(square => square !== null)) {
      status = "No Winner"
    } else {
      status = "Next Player: " + (this.state.xIsNext ? 'X' : 'O')
    }


    // Framer Motion Part
    // Açılış kısmındaki animasyon.
    const item = {
      hidden: { y: 40, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
        }
      }
    };
    // Framer Motion Part
    const item2 = {
      hidden: { y: 60, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
        }
      }
    }
    const item3 = {
      hidden: { y: 80, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        }
      }
    }
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


    return (
      <div
        // Başlangıçta Hidden, sonra visible.
        // initial="hidden"
        // animate="visible"
        // variants={item}
      >
        <motion.div 
        initial="hidden"
        animate="visible"
        variants={text}
        className="mb-2.5 hover:underline">{status}
        </motion.div>{/* Status Div */}

        <motion.div 
        initial="hidden"
        animate="visible"
        variants={item}
        className="after:content-[''] table-auto clear-both">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </motion.div>{/* 1th div */}

        <motion.div 
        initial="hidden"
        animate="visible"
        variants={item2}
        className="table-auto after:content-[''] clear-both">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </motion.div>{/* 2th div */}

        <motion.div
        initial="hidden"
        animate="visible"
        variants={item3}
         className="table-auto after:content-[''] clear-both">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </motion.div>{/* 3th div */}
      </div>/* Wrapper */
    );
  }
}
export default Board;
