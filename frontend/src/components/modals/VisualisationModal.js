import React, { Component } from 'react'
import { Modal, Button, Icon } from 'semantic-ui-react'
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps"

import './VisualisationModal.css'

import worldMap from '../../static/world-50m'

class VisualisationModal extends Component {
    close = () => {
        this.props.onHide()
    }

    render() {
        const { geography, show, countries } = this.props
        
        
        return (
            <Modal open={true} onClose={this.close} closeIcon>
                <Modal.Header>{geography.properties.name}</Modal.Header>
                <Modal.Content>
                    <p>{JSON.stringify(countries.indexOf(geography.id) !== -1)}</p>
      
                </Modal.Content>
                <Modal.Actions>
                  <Button color='green' onClick={this.handleCompare}><Icon name='tasks' /> Compare</Button>
                  <Button color='yellow'><Icon name='dashboard' /> Indicators</Button>
                  <Button color='blue' onClick={this.close}><Icon name='close' /> Close</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default VisualisationModal
