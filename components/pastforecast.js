import React from 'react';
import {Line} from 'react-chartjs-2';

class Pastforecast extends React.Component {
    render() {
        const data = {
            labels: ['Mar.', '', 'Apr.', '', 'May', '', 'Jun.', '', 'Jul.', '', 'Aug.', '', 'Sept.', ''],
            datasets: [
              {
                label: 'Democrat',
                fill: false,
                lineTension: 0,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: '#3981F5',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#3981F5',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#3981F5',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [268, 268, 257, 253, 253, 253, 253, 298, 357, 357, 360, 279]
              },
              {
                label: 'Republican',
                fill: false,
                lineTension: 0,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: '#F53939',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#F53939',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#F53939',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [270, 270, 281, 285, 285, 285, 285, 240, 181, 181, 178, 259]
              }
          
            ]
          
          };
          
              const options = {
                aspectRatio: .75,
                maintainAspectRatio: false,
                tooltips: {
                  enabled: true,
                  mode: 'index'
                },
                title: {
                    display: true,
                    text: 'Forecast History',
                    fontFamily: 'Roboto Mono',
                    fontSize: 18,
                    fontColor: '#222',
                },
                layout: {
                  padding: {
                      left: 0,
                      right: 0,
                      top: 20,
                      bottom: 30
                  }
                },
                legend: {
                    rotation: 90,
                    position: 'bottom',
                    display: true,
                    labels: {
                      boxWidth: 25,
                      fontFamily: "'Roboto Mono', monospace",
                      fontColor: '#707070'
                    }
                },
                  scales: {
                      xAxes: [{
                        ticks: {
                          fontFamily: "'Roboto Mono', monospace",
                          fontColor: '#707070',
                        },
                      }],
                      yAxes: [{
                          ticks: {
                            min: 150,
                            max: 400,
                            stepSize: 50,
                            fontFamily: "'Roboto Mono', monospace",
                            fontColor: '#707070',
                          },
                          gridLines: {
                            display: false,
                          }
                      }],
          
                  },
          
              }

    return (
            <Line data={data} options={options} height={null} width={null} />
        );
    }
}
 
export default Pastforecast;