import React, { Component } from 'react'
import { Modal, Button, Icon } from 'semantic-ui-react'
//  import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps"

import './VisualisationModal.css'

// import worldMap from '../../static/world-50m'

class VisualisationModal extends Component {
    constructor(props) {
        super(props)

        this.state = { data: null }
    }


    componentDidMount() {
        const { geography } = this.props

        fetch(`https://jp-17-harjot1singh.c9users.io:8081/api/country/${geography.id}`)
            .then(response => response.json())
            .then(({ indicators }) => this.setState({ data: indicators }))

    }

    close = () => {
        this.props.onHide()
    }


    renderData() {
        const { data } = this.state

        console.log(data)

        const yearEntries = Object.entries(data)

        const indicators = Object.keys(yearEntries[0][1])


        const averages = indicators.reduce((acc, name) => ({ ...acc, name: 0 }), {})

        yearEntries.forEach(([year, indicatorGroup]) => {
            
            indicators.forEach(indicator => {
                const groups = indicatorGroup[indicator]
                
                console.log(groups)
                
                
            })
            
            
        } )


        Object.entries(data).forEach(([year, indicators]) => {

            // const average = Object.entries(indicators).reduce(([indicator, groups]) => {

            // }, 0)

            Object.entries(indicators).forEach(([indicator, groups]) => {

                const groupEntries = Object.entries(groups)
                    .filter(([group, value]) => group.indexOf('Total') === -1)

                const average = groupEntries.reduce((acc, [group, value]) => acc + value, 0) / groupEntries.length

                // console.log(groups, average)

                Object.entries(groups).forEach(([group, value]) => {

                })

            })
        })


        return null

    }

    render() {
        const { geography, show, countries } = this.props
        const { data } = this.state

        return (
            <Modal open={true} onClose={this.close} closeIcon>
                <Modal.Header>{geography.properties.name}</Modal.Header>
                <Modal.Content>
                    {data ? this.renderData() : <h2> Loading Data </h2>}
      
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
