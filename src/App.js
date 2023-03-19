import { Component } from 'react';
import './App.css';

class Count extends Component {
  constructor() {
    super()
    this.state = { count: 0}
    this.countButton = this.countButton.bind(this)
  }

  countButton(){
    if (this.state.count < 20) {
      this.setState({count: this.state.count + 1})
    }
  }

  render() {

    const { label } = this.props;    
    const { count } = this.state

    return (
      <div>
        <Button label='Click' onClick={this.countButton}/>
        <p>
          { label }: {count}
        </p>
      </div>
    )
  }

}

function Button({ label, onClick, className='button--primary'}) {
  return (
    <button className={`button ${className}`} onClick={onClick}>{label}</button>
  )
}

function App() {
  function UserRegistred() {
    console.log("User Registred")
  }

  function UserLogged() {
    console.log("User Logged")
  }


  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Button label="Sing Up" onClick={UserRegistred} className='button--primary' />
      <Button label="Sing In" onClick={UserLogged} className='button--secondary' />
      <Count label="Clicks"/>
    </div>
  );
}

export default App;
