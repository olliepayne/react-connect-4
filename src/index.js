import React from 'react'
import ReactDOM from 'react-dom'

let boardMatrix = []
const rows = 6
const columns = 7

function Cell() {
  return (
    <div>
      <p>cell</p>
    </div>
  )
}

class Game extends React.Component {
  componentDidMount() {
    generateBoardMatrix()
    console.log(boardMatrix)
  }

  render() {
    return (
      <div id="game">
        
      </div>
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)

function generateBoardMatrix() {
  for(let y = 0; y < rows; y++) {
    let newRow = []
    for(let x = 0; x < columns; x++) {
      newRow.push(null)
    }
    boardMatrix.push(newRow)
  }
}