import React, { Component } from 'react';
import Column from "./Column";
import './App.css';

const MOVE_LEFT = -1;
const MOVE_RIGHT = 1;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          name: "Line1",
          cards: [{ name: "Card A"}]
        },

        {
          name: "Line2",
          cards: [{ name: "Card B"}]
        },
        {
          name: "Line3",
          cards: [{ name: "Card C"}]
        },
      ],
      textInput: ''
    }

    this.handleAddCard = this.handleAddCard.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }



 onChangeText = e => {
 this.setState({ textInput: e.target.value})
  
 }

handleAddCard = () => {
  let newValue = { name: this.state.textInput}
  console.log(newValue)
  this.setState(prevState => {
    const {columns} = prevState
    columns[0].cards.push(newValue);
    return {columns}
  })
}


handleMoveCard = (columnIndex, cardIndex, direction) => {
  this.setState(prevState => {
    const {columns} = prevState
    const [card] = columns[columnIndex].cards.splice(cardIndex, 1)
    columns[columnIndex + direction].cards.push(card)
    return {columns}
  })

}


render() {
  return (
    <div className="App">
      <div className="header">
        <input className="card-input" placeholder="My Name Card" value={this.state.textInput} onChange={this.onChangeText}/> 
        <span className="card-btn" onClick={this.handleAddCard}>Add Card</span>
      </div>
      <div className="flex-container">
       {this.state.columns.map((column, columnIndex) =>
      ( 
        <Column 
        column = {column}
        columnIndex = {columnIndex}
        key = {columnIndex}
        onMoveLeft = { cardIndex => this.handleMoveCard(columnIndex, cardIndex, MOVE_LEFT)}
        onMoveRight = {cardIndex => this.handleMoveCard(columnIndex, cardIndex, MOVE_RIGHT)}
        />
      ))}
    </div>
    </div>
  )}
}

export default App;
