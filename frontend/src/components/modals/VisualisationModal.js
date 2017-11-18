import React, { Component } from 'react'
import { Modal, Button, Icon, Dropdown, Table } from 'semantic-ui-react'
import { VictoryChart, VictoryLine } from 'victory'

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

        const indicators = Object.keys(data)

        return (
            <div>
            {selectedIndicators.length === 0 &&
                <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Getting Better</Table.HeaderCell>
        <Table.HeaderCell>Getting Worse</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell positive>Demand for family planning satisfied by modern methods</Table.Cell>
        <Table.Cell negative>Women giving birth by age 18</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell positive>Women who decide themselves how their earnings are used</Table.Cell>
        <Table.Cell negative>Women who are literate</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell positive>Women with secondary or higher education</Table.Cell>
        <Table.Cell negative>Women giving birth by age 15</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
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
                const y = {};
                
                for (var g in year) {
                    y[year[g]] = g;
                }

                newFilter[yearName] = y;
            }
            newData[index] = newFilter;
        }
        console.log(newData)

        return (
            <div key={indicator}> 
            
                <p>{indicator}</p>    
                
                <VictoryChart domain={{y:[0, 100]}} height={200}>
            
                    <VictoryLine />
                    <VictoryLine />
                
                </VictoryChart>
            </div>
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
