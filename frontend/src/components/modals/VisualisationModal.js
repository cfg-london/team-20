import React, { Component } from 'react'
import { Modal, Button, Icon } from 'semantic-ui-react'
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps"

import './VisualisationModal.css'

import worldMap from '../../static/world-50m'

class VisualisationModal extends Component {
    
    
    close = () => this.props.onHide()

    componentDidMount() {
        const { geography } = this.props
        
    }

    render() {
        const { geography, show } = this.props
        
        
        return (
            <Modal open={show} onClose={this.close} closeIcon>
                <Modal.Header>{geography.properties.name}</Modal.Header>
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
                    <ZoomableGroup center={[20, 0]} zoom={0.2} disablePanning>
                    <Geographies geographyUrl={worldMap}>
                        {(geographies, projection) =>
                        geographies.map((geography, i) =>
                        [this.props.geography.id].indexOf(geography.id) !== -1 && (
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
                <Modal.Actions>
                  <Button color='red'>
                    <Icon name='remove' /> No
                  </Button>
                  <Button color='blue'>
                    <Icon name='checkmark' /> Close
                  </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default VisualisationModal
