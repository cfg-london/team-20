import React, { Component } from 'react'
import { Modal, Button, Icon, Dropdown } from 'semantic-ui-react'
//  import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps"

import './VisualisationModal.css'

// import worldMap from '../../static/world-50m'

class VisualisationModal extends Component {
    constructor(props) {
        super(props)

        this.state = { data: null, selectedIndicators: [] }
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
        const { data, selectedIndicators } = this.state

        console.log(data)

        const yearEntries = Object.entries(data)

        const indicators = Object.keys(yearEntries[0][1])


        const averages = indicators.reduce((acc, name) => ({ ...acc, name: 0 }), {})

        yearEntries.forEach(([year, indicatorGroup]) => {

            Object.entries(indicatorGroup).forEach(([indicator, groups]) => {

                const groupEntries = Object.entries(groups)

                let total
                if (groupEntries.every(([name, value]) => name.indexOf('Total') > -1)) {
                    total = groupEntries.reduce((acc, [name, value]) => acc + value, 0) / groupEntries.length
                } else {
                    total = groupEntries
                        .filter(([name, value]) => name.indexOf('Total') > -1)
                        .reduce((acc, [name, value]) => acc + value, 0)
                }

                averages[indicators]

            })



        })

        console.log(selectedIndicators)


        return (
            <div>
            {selectedIndicators.length === 0 &&
                <p> show summary changes </p>
            }
            
            {selectedIndicators.length > 0 &&
                selectedIndicators.map(indicator => this.renderGraph(indicator))
            }
            
                <Dropdown onChange={(e, {value}) => this.setState({selectedIndicators: value})} placeholder='Indicators' fluid multiple selection options={indicators.map(e => ({key:e, text:e, value:e}))}></Dropdown>
            </div>
        )
        
    }

    renderGraph(indicator) {
        const { data, selectedIndicators } = this.state

        const filteredData = Object.values(Object.keys(data)
            .filter(key => key === indicator)
            .reduce((obj, key) => {
                obj[key] = data[key];
                return obj;
            }, {}))



        // const x = Object.entries(filteredData).reduce((acc, [year, vals]) => {

        // }, )

        // console.log(filteredData)
        const newData = [];
        for (var index in filteredData) {
            const filter = filteredData[index];
            const newFilter = {}
            for (var yearName in filter) {
                const year = filter[yearName];
                const y = {   };
                
                for (var g in year) {
                    y[year[g]] = g;
                }

                newFilter[yearName] = y;
            }
            newData[index] = newFilter;
        }
        // console.log(newData)

        return (
        <p>{indicator}</p>    
            
        )
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
