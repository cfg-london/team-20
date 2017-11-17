import React, { Component } from 'react';
import logo from './logo.svg'
import './App.css'
import { Button, Modal, Header, Image } from 'semantic-ui-react'

class App extends Component {
  state = { countryModal: false }
    
  open = () => this.setState({ countryModal: true })
  close = () => this.setState({ countryModal: false })

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button color='blue' onClick={this.open}>Modal</Button>
        
        <Modal open={this.state.countryModal} onClose={this.close}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
            <Modal.Description>
              <Header>Example</Header>
              <p>Example</p>
              <p>Example</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default App
