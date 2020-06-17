import DataSource from '../data/data-source.js'
import Plotly from 'plotly.js-dist'

class GraphBoard extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback(){
        try{
            const dailydata = await DataSource.dailyCases();
            this.renderGraph(dailydata);
                
        } catch(error) {
            console.log(error)
        } 
    }

    renderGraph(dailydata) {
        this.innerHTML = `
        <style>
        .graph-box {
            width: 90%;
            margin: 50px 0 20px 0;
            box-sizing: content-box;
            display: inline-block;
            position: relative;
            left: 3%;
        }
        </style>

        <div class="graph-box" id="graphDiv">
        </div>
        `

        const graphData1 = {
            x: [],
            y: [],
            type: 'scatters',
            mode: 'line',
            name: 'Mainland China',
            textposition: 'auto',
            opacity: 0.5,
            line: {
                color: 'rgb(219, 64, 82)',
                width: 3
            },
        }
        dailydata.forEach( item => {
            if (item.reportDate) {
                graphData1.x.push(item.reportDate)
                graphData1.y.push(item.mainlandChina)
            }
        });

        const graphData2 = {
            x: [],
            y: [],
            type: 'scatters',
            mode: 'line',
            name: 'Other Locations',
            textposition: 'auto',
            line: {
                color: 'rgb(128, 0, 128)',
                width: 2
            },
        }

        dailydata.forEach( item => {
            if (item.reportDate) {
                graphData2.x.push(item.reportDate)
                graphData2.y.push(item.otherLocations)
            }
        })

        const graphData3 = {
            x: [],
            y: [],
            type: 'scatters',
            mode: 'line',
            name: 'Total Confirmed',
            textposition: 'auto',
            line: {
                color: '#FF7700',
                width: 3
            },
        }

        dailydata.forEach( item => {
            if (item.reportDate) {
                graphData3.x.push(item.reportDate)
                graphData3.y.push(item.totalConfirmed)
            }
        });

        const layout = {
            title: 'Daily Global Cases of Covid-19',
            xaxis: {
              title: 'per day',
              showgrid: false,
              zeroline: false
            },
            yaxis: {
              title: 'total cases',
              showline: false
            }
        };
        const groupdata = [graphData1, graphData2, graphData3];
        const config = {responsive: true};
        
        if(dailydata) {
            Plotly.newPlot('graphDiv', groupdata, layout, config)
        } else {
            console.log('daily data was not found')
        }


    }
}

customElements.define('graph-board', GraphBoard)
