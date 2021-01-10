import React from 'react'

function Cell(props) {
  return (
    <div>
      <p>cell: {this.props.value}</p>
    </div>
  )
}

// class Cell extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>cell</p>
//       </div>
//     )
//   }
// }

export default Cell