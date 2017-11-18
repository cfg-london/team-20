import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react'
import { ComposableMap, ZoomableGroup, Geographies, Geography, Markers, Marker } from "react-simple-maps"
import VisualisationModal from './components/modals/VisualisationModal'
// import { geoPath } from 'd3-geo'
// import { geoTimes } from 'd3-geo-projection'

import 'semantic-ui-css/semantic.min.css'
import './App.css'

import worldMap from './static/world-50m'
import logo from './static/em-logo.png'
const markers = [
  { markerOffset: 15, name: "Indonesia", coordinates: [108.8236, -2.3931] },
  { markerOffset: 15, name: "India", coordinates: [77.7029722, 20.7674828] },
  { markerOffset: 15, name: "Kenya", coordinates: [37.4001329, 0.1650934] },
  { markerOffset: 15, name: "Senegal", coordinates: [-14.767983, 14.4736107] },
  { markerOffset: 15, name: "Columbia", coordinates: [-74.8499796, 4.6420107] },
]

const clickableStyle = {
    default: {
      fill: "rgb(102, 22, 108)",
      stroke: "#00000",
      strokeWidth: 0.75,
      outline: "none",
    },
    hover: {
      fill: "rgb(129, 40, 150)",
      stroke: "#000000",
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
      stroke: "#000000",
      strokeWidth: 0.75,
      outline: "none",
    },
    hover: {
      fill: "#55bab2",
      stroke: "#000000",
      strokeWidth: 0.75,
      outline: "none",
    },
    pressed: {
      fill: "#55bab2",
      stroke: "#000000",
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
            geography: ''
        }
    }


    openCountryVisualiser = (geography, e) => {
        //const path = geoPath().projection(this.projection())
        //const centroid = this.projection().invert(path.centroid(geography))
        this.setState({
            countryVisualiser: true,
            geography
        })
    }

    closeCountryVisualiser = () => this.setState({
        countryVisualiser: false,
        geography: ''
    })


    componentDidMount() {
        fetch('https://jp-17-harjot1singh.c9users.io:8081/api/countries')
            .then(res => res.json())
            .then(({ countries }) => this.setState({ countries }))
    }


    render() {

        return (
            <div className="App" style={{background: '#1b1c1d'}}>
        <Menu fixed='top' inverted>
            <Menu.Item  as='a' header style={{background: '#59bab2', padding: 0}}><Image src={logo} className='logo' /></Menu.Item>
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
                      style={clickable ? clickableStyle : disabledStyle}
                    />
                );
              }
            )}
            </Geographies>
            <Markers>
              {markers.map((marker, i) => (
                <Marker
                  key={i}
                  marker={marker}
                  style={{
                    default: { stroke: "#fff" },
                    hover: { stroke: "#fff" },
                    pressed: { stroke: "#fff" },
                  }}
                  >
                  <g transform="translate(-12, -24)">
                    <path
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeMiterlimit="10"
                      strokeLinejoin="miter"
                      d="M20,9c0,4.9-8,13-8,13S4,13.9,4,9c0-5.1,4.1-8,8-8S20,3.9,20,9z"
                    />
                    <circle
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeMiterlimit="10"
                      strokeLinejoin="miter"
                      cx="12"
                      cy="9"
                      r="3"
                    />
                  </g>
                  <text
                    textAnchor="middle"
                    y={marker.markerOffset}
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fill: "#fff",
                      stroke: "none",
                    }}
                    >
                    {marker.name}
                  </text>
                </Marker>
              ))}
            </Markers>
          </ZoomableGroup>
        </ComposableMap>

        { this.state.countryVisualiser &&
        <VisualisationModal onHide={this.closeCountryVisualiser} geography={this.state.geography} countries={this.state.countries} />}
      </div>
        )
    }
}

export default App
