import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedhandler = (ev) => {
    this.setState({userInput: ev.target.value})
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) =>{
      return <Char 
        character={ch}
        clicked={() => this.deleteCharHandler(index)}/>
    });

    return (
      <div className="App">
        <input 
        type="text" 
        onChange={this.inputChangedhandler}
        value={this.state.userInput}/>
        <p>{this.state.userInput.length}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
