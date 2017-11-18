import React, { Component } from 'react';
import { Container, Header, Menu, Modal, Button } from 'semantic-ui-react'
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps"

import 'semantic-ui-css/semantic.min.css'
import './App.css'

import worldMap from './static/world-50m'

const include = [
  "MAR","DZA", "ZAF", "MUS", "TUN", "CPV", "ETH", "SYC", "NGA", "MDG",
  "COD", "LBY", "GMB", "KEN", "GHA", "TZA", "MLI", "SDN", "SOM", "CIV",
  "ZWE", "SEN", "CMR", "ERI", "UGA", "NAM", "REU", "MOZ", "AGO", "GAB",
  "BFA", "RWA", "GIN", "TCD", "SSD", "MRT", "BWA", "NER", "DJI", "ZMB",
  "SLE", "MWI", "LBR", "TGO", "BEN", "BDI", "SWZ", "COG", "LSO", "GNQ",
  "STP", "EGY", "SOM", "CAF", "SOL", "ESH", "GNB"
]

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
        <p>lololol</p>
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
          <Modal.Content>
            <ComposableMap
              projectionConfig={{ scale: 1200 }}
              width={1400}
              height={1400}
              style={{
                width: "100%",
                height: "auto",
              }}
              >
              <ZoomableGroup center={[ 20, 0 ]} disablePanning>
                <Geographies geographyUrl={worldMap}>
                  {(geographies, projection) =>
                    geographies.map((geography, i) =>
                      include.indexOf(geography.id) !== -1 && (
                        <Geography
                          key={i}
                            geography={geography}
                            projection={projection}
                            style={{
                              default: {
                                fill: "#ECEFF1",
                                stroke: "#607D8B",
                                strokeWidth: 0.75,
                                outline: "none",
                              },
                              hover: {
                                fill: "#CFD8DC",
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
                    ))
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default App
