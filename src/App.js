import React, { Component } from 'react'
import {Header, Menu, Footer} from './partials/'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        statusLogin: false,
        setButton: false
    }
  }
  login = (page) => {
    this.setState({ statusLogin: page })
  }
  button = (status) => {
    this.setState({ setButton: status })
  }
  render() {
    let page = null
    if (this.state.statusLogin === true) {
      page = <Menu login={this.login} button={this.state.setButton}/>
    }
    else {
      page = "Kosong"
    }    
    return(
      <div>
        <Header login={this.login} button={this.button}/>
        <div className="container">
            {page}
        </div>
        {/* <Footer/>  */}
      </div>
    )
  }
}

export default App;
