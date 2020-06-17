import Plotly from 'plotly.js-dist'
import '../components/search-bar.js'
const moment = require('moment');

class PieChart extends HTMLElement {
    constructor() {
        super();
    }

    renderPie(dataDeaths) {
        const date = moment(dataDeaths.lastUpdate).format('MMMM Do YYYY, h:mm:ss a');

        this.innerHTML = "";
        this.innerHTML = `
        <style>
        h3.date {
            position: relative;
            left: 20%;
            margin: 20px 0 0 0;
            font-family: 'Abel', sans-serif;
            letter-spacing: 2px;
        }
        .pie-chart-box {
            width: 100%;
            margin: 30px 0 20px 0;
            box-sizing: content-box;
            display: block;
            position: relative;
            left: 20%;
        }

        @media screen and (max-width: 550px){
            h3.date {
                position: relative;
                left: 9%;
                margin: 20px 0 0 0;
                font-family: 'Abel', sans-serif;
                letter-spacing: 1px;
                font-size: 18px;
            }
            .pie-chart-box {
                width: 88%;
                margin: 10px 0 10px 0;
                box-sizing: content-box;
                display: inline-block;
                position: relative;
                left: 8%;
            }
        }
        </style>

        <div>
            <h3 class="date">Last Update : ${date}</h3>
        </div>
        <div class="pie-chart-box" id="pieChartDiv"></div>
        `
        const pieData = [{
            values: [dataDeaths[0].deaths, dataDeaths[0].active, dataDeaths[0].recovered],
            labels: ['Deaths', 'Active', 'Recovered'],
            type: 'pie',
            marker: {
                colors: ['#ED1C24', '#F1D302', '#A1C349']
            },
            textinfo: "label+percent",
            insidetextorientation: "radial",
            automargin: true
        }];
          
        const layout = {
            title: `Total Cases for ${dataDeaths[0].countryRegion}`,
            height: 325,
            width: 250,
            margin: {"t": 10, "b": 10, "l": 20, "r": 20},
            padding: {"t": 10, "b": 10, "l": 20, "r": 20},
            showlegend: false
        };

        Plotly.newPlot('pieChartDiv', pieData, layout, {displayModeBar: false});
    }
}

customElements.define('pie-chart', PieChart)