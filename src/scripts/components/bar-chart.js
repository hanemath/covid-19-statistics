import DataSource from '../data/data-source.js'
import Plotly from 'plotly.js-dist'

class BarChart extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        try{
            const recoveredData = await DataSource.recoveredCases();
            const deathData = await DataSource.deathCases();
            this.renderChart(recoveredData, deathData);
        } catch(error) {
            console.log(error)
        }
    }

    renderChart(recoveredData, deathData) {
        this.innerHTML = `
        <style>
        .chart-box {
            width: 90%;
            margin: 50px 0 100px 0;
            box-sizing: content-box;
            display: inline-block;
            position: relative;
            left: 3%;
        }
        </style>

        <div class="chart-box" id="barDiv">
        </div>
        `
        const data1 = {
            x: [],
            y: [],
            type: 'bar',
            name: 'recovered'
        };
        recoveredData.forEach( item => {
            if (item.countryRegion) {
                data1.x.push(item.countryRegion)
                data1.y.push(item.recovered)
            }
        })

        const data2 = {
            x: [],
            y: [],
            type: 'bar',
            name: 'deaths'
        };
        deathData.forEach(item => {
            if (item.countryRegion) {
                data2.x.push(item.countryRegion)
                data2.y.push(item.deaths)
            }
        })

        const groupdata = [data2, data1];
        const layout = {
            barmode: 'group',
            title: 'Recovered & Deaths per Country',
            font:{
                family: 'Raleway, sans-serif',
                size: 15,
            },
        };
        const config = {responsive: true};

        if(recoveredData) {
            Plotly.newPlot('barDiv', groupdata, layout, config, {scrollZoom: true}, {displaylogo: false});
        } else {
            console.log('daily data was not found')
        }
        
    }
}

customElements.define('bar-chart', BarChart)