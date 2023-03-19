import { Component, useState, useEffect } from 'react';
import './App.css';

var flag = true

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


function CountNew({ label }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('My callback function')
  },[])

  useEffect(() => {
    console.log("Count changed")
  }, [ count ])


  function ButtonClicked() {
    if (flag) {
      if (count < 20) {
        setCount(count + 1)
      }
      else {flag=false}
    }
    else {
      if (count > 1) {
        setCount(count - 1)
      }
      else {
        flag = true
      }
    }
  }

  return (
    <div>
      <Button label='Click' onClick={ButtonClicked}/>
      <p>
        { label }: {count}
      </p>
    </div>
  )

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
      <CountNew label="Clicks"/>
    </div>
  );
}

export default App;
