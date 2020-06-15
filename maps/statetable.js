import React, { Component, useEffect } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { csv } from 'd3-fetch';
import fetch from 'isomorphic-unfetch';
import results from './results.json';

// console.log(results);

const columns = [
  {
    name: 'State',
    selector: 'name',
    sortable: true,
    center: true,
  },
  {
    name: 'EC Votes',
    selector: 'ec',
    sortable: true,
    center: true,
    grow: 0.75,
  },
  {
    name: 'Democrat',
    selector: 'democrat',
    sortable: true,
    center: true,
    grow: 0.5,
    conditionalCellStyles: [
      {
        when: row => row.winner === "D",
        style: {
          backgroundColor: '#3981F5',
          color: 'white',
      },
    },
    ],
  },
  {
    name: 'Republican',
    selector: 'republican',
    sortable: true,
    center: true,
    grow: 0.5,
    conditionalCellStyles: [
      {
        when: row => row.winner === "R",
        style: {
          backgroundColor: '#F53939',
          color: 'white',
      },
    },
    ],
  },
  {
    name: '3rd Party',
    selector: 'third',
    sortable: true,
    center: true,
    grow: 0.75,
  },
  {
    name: 'Margin',
    selector: 'margin',
    sortable: true,
    center: true,
    conditionalCellStyles: [
      {
        when: row => row.winner === "D",
        style: {
          color: '#3981F5',
          fontWeight: 700,
        },
      },
      {
        when: row => row.winner === "R",
        style: {
          color: '#F53939',
          fontWeight: 700,
        },
      },
    ],
  },
  {
    name: 'Winner',
    selector: 'winner',
    omit: true,
  },
];

const customStyles = {
    headCells: {
        style: {
            paddingLeft: '1rem',
            fontSize: '17.5px',
            fontFamily: 'Roboto Mono',
            textAlign: 'left',
            fontWeight: '500',
        },
    },
    cells: {
        style: {
            paddingLeft: '1rem',
            fontSize: '15.4px',
            fontFamily: 'Roboto Mono'
        }
    }
};

createTheme('solarized', {
    text: {
      primary: '#222222',
      secondary: '#707070',
    },
    background: {
      default: '#FFFFFF',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
});


class StateTable extends React.Component {
    render () {
        return (
        <DataTable
            columns={columns}
            data={results}
            theme="solarized"
            customStyles={customStyles}
            noHeader={true}
        />
        );
    }
}

export default StateTable;