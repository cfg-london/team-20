import React, { Component } from 'react';
import { Container, Menu, Modal, Button } from 'semantic-ui-react'
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps"

import 'semantic-ui-css/semantic.min.css'
import './App.css'

import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryArea, VictoryLine } from 'victory';

const data2015 = [
  {agegroup: '15-19', percentage: 64.4},
  {agegroup: '20-29', percentage: 77.4},
  {agegroup: '30-39', percentage: 85.2},
  {agegroup: '40-49', percentage: 82.1}
];

const data2010 = [
  {agegroup: '15-19', percentage: 60.5},
  {agegroup: '20-29', percentage: 75.6},
  {agegroup: '30-39', percentage: 83.2},
  {agegroup: '40-49', percentage: 80.5}
];

const data2005 = [
  {agegroup: '15-19', percentage: 57.2},
  {agegroup: '20-29', percentage: 75.2},
  {agegroup: '30-39', percentage: 82.9},
  {agegroup: '40-49', percentage: 79.1}
];

const data2000 = [
  {agegroup: '15-19', percentage: 57.2},
  {agegroup: '20-29', percentage: 73.7},
  {agegroup: '30-39', percentage: 82.0},
  {agegroup: '40-49', percentage: 77.7}
];

class Main extends React.Component {
  render() {
    return (
      <div style={{display:"flex",flexWrap:"wrap"}}>
        <VictoryChart style={{ parent: {maxWidth:"50%"}}}
          domainPadding={40}
          theme={VictoryTheme.material}
        >
        <VictoryAxis
          tickvalues={[1,2,3,4]}
          tickFormat={['15-19', '20-29', '30-39', '40-49']}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={[""]}
        />
        <VictoryStack
          colorScale={"warm"}
          >
          <VictoryLine
            style={{data:{width:30}}}
            data={data2000}
            animate={{
              onEnter:{
              }
                }}
            x="agegroup"
            y="percentage"
          />
          <VictoryLine
            style={{data:{width:30}}}
            data={data2005}
            animate={{
              onEnter:{
              }
                }}
            x="agegroup"
            y="percentage"
          />
          <VictoryLine
            style={{data:{width:30}}}
            data={data2010}
            animate={{
              onEnter:{
              }
                }}
            x="agegroup"
            y="percentage"
          />
          <VictoryLine
            style={{data:{width:30}}}
            data={data2015}
            animate={{
              onEnter:{
              }
                }}
            x="agegroup"
            y="percentage"
          />
        </VictoryStack>
      </VictoryChart>
      </div>
    );
  }
}

const app = document.getElementById('app');

export default Main