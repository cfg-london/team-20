import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react'
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps"
import VisualisationModal from './components/modals/VisualisationModal'

import 'semantic-ui-css/semantic.min.css'
import './App.css'

import worldMap from './static/world-50m'

class App extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            countryVisualiser: false,
            geography: '',
            locX: 0,
            locY: 0
        }
    }

    openCountryVisualiser = (geography, e) => this.setState({
        countryVisualiser: true,
        geography,
        locX: e.clientX,
        locY: e.clientY + window.pageYOffset
    })
    
    closeCountryVisualiser = () => this.setState({
        countryVisualiser: false,
        geography: '',
        locX: 0,
        locY: 0
    })

    
    componentDidMount() {
        // fetch countries from /countries
        
        
    }
    

    render() {
        
        
        
        return (
            <div className="App">
        <Menu fixed='top' inverted>
            <Menu.Item as='a' header>Equal Measures 2030</Menu.Item>
        </Menu>
    
        <Container text style={{ marginTop: '7em' }}>
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
                  onClick={this.openCountryVisualiser}
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
        <VisualisationModal show={this.state.countryVisualiser} onHide={this.closeCountryVisualiser} geography={this.state.geography} locX={this.state.locX} locY={this.state.locY} />
      </div>
        )
    }
}

export default App
