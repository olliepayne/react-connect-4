import React from 'react'
import ReactDOM from 'react-dom'
import Cell from './Cell'

class Board extends React.Component {
  constructor() {
    super()
    this.state = {
      rows: 6,
      columns: 7,
      boardMatrix: []
    }
  }

  generateBoardMatrix() {
    console.log('test')

    for(let y = 0; y < this.rows; y++) {
      let newRow = []
  
      for(let x = 0; x < this.columns; x++) {
        newRow.push('x')
      }
  
      this.boardMatrix.push(newRow)
    }
  }

  render() {
    this.generateBoardMatrix()
    
    return (
      <div className="board">
        {this.boardMatrix.map((value, index) => {
          return (
            <Cell 
              key={index}
              value={value}
            />
          )
        })}
      </div>
    )
  }
}

class Game extends React.Component {
  render() {
    return (
      <div id="game">
        <Board />
      </div>
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)