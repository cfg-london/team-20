import React, { Component } from 'react';
import { Container, Header, Menu, Modal, Button } from 'semantic-ui-react'
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps"

import './App.css'

import worldMap from './static/world-50m'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { countryModal: false }
  }
  
  open = () => this.setState({ countryModal: true })
  close = () => this.setState({ countryModal: false })

  handleMove(geography, evt) {
    console.log(geography.id)
  }

  render() {
    const { countryModal } = this.state
    
    return (
      <div className="App">
        <Menu fixed='top' inverted>
            <Menu.Item as='a' header>Equal Measures 2030</Menu.Item>
        </Menu>
    
        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Title</Header>
          <Button color='blue' onClick={this.open}>Modal</Button>
          <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-11,0,0],
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[0,20]} disablePanning>
            <Geographies geographyUrl={worldMap}>
              {(geographies, projection) => geographies.map((geography, i) => geography.id !== 'ATA' && (
                <Geography
                  key={i}
                  geography={geography}
                  projection={projection}
                  onMouseMove={this.handleMove}
                  style={{
                    default: {
                      fill: "#55bab2",
                      stroke: "#ffffff",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "#ffffff",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#FF5722",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                  }}
                />
              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        </Container>
        <Modal open={countryModal} onClose={this.close}>
          <Modal.Header>COUNTRYNAME</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>Line 1</Header>
              <p>Line 2</p>
              <p>Line 3</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default App
