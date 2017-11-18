import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react'
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps"
import VisualisationModal from './components/modals/VisualisationModal'
import { geoPath } from 'd3-geo'
import { geoTimes } from 'd3-geo-projection'

import 'semantic-ui-css/semantic.min.css'
import './App.css'

import worldMap from './static/world-50m'
import logo from './static/em-logo.png'

const clickableStyle = {
    default: {
      fill: "rgb(102, 22, 108)",
      stroke: "#ffffff",
      strokeWidth: 0.75,
      outline: "none",
    },
    hover: {
      fill: "rgb(129, 40, 150)",
      stroke: "#fff",
      strokeWidth: 0.75,
      outline: "none",
    },
    pressed: {
      fill: "#b8bab9",
      stroke: "#607D8B",
      strokeWidth: 0.75,
      outline: "none",
    },
};

const disabledStyle = {
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
      fill: "#b8bab9",
      stroke: "#607D8B",
      strokeWidth: 0.75,
      outline: "none",
    },
}

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            countries: '',
            countryVisualiser: false,
            geography: '',
            locX: 0,
            locY: 0
        }
    }


    openCountryVisualiser = (geography, e) => {
        //const path = geoPath().projection(this.projection())
        //const centroid = this.projection().invert(path.centroid(geography))

        this.setState({
            countryVisualiser: true,
            geography,
            locX: e.locX
        })
    }

    closeCountryVisualiser = () => this.setState({
        countryVisualiser: false,
        geography: '',
        locX: 0,
        locY: 0
    })


    randomf1() {
        // fetch countries from /countries
        alert("HEllo");

    }

    componentDidMount() {
        fetch('https://jp-17-harjot1singh.c9users.io:8081/api/countries')
            .then(res => res.json())
            .then(({ countries }) => this.setState({ countries }))
    }


    render() {

        console.log(this.state.countries)

        return (
            <div className="App" style={{background: '#1b1c1d'}}>
        <Menu fixed='top' inverted>
            <Menu.Item as='a' header style={{background: '#59bab2'}}>Equal Measures 2030</Menu.Item>
        </Menu>
    

          <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-11,0,0],
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "100%"
          }}
          >
          <ZoomableGroup center={[0,20]} disablePanning>
            <Geographies geographyUrl={worldMap}>
              {(geographies, projection) => geographies.map((geography, i) => {
                
                const clickable = this.state.countries.indexOf(geography.id) !== -1;
                
                return (
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      onClick={clickable && this.openCountryVisualiser}
                      style={clickable ? clickableStyle : disabledStyle }
                    />
                );
              }
            )}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>

        { this.state.countryVisualiser &&
        <VisualisationModal onHide={this.closeCountryVisualiser} geography={this.state.geography} countries={this.state.countries} />}
      </div>
        )
    }
}

export default App
