import DataSource from '../data/data-source.js'
const moment = require('moment');

class TotalBoard extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    async connectedCallback(){
        const totaldata = await DataSource.loadCases();
        const date = moment(totaldata.lastUpdate).format('MMMM Do YYYY, h:mm:ss a');
        this.render(totaldata, date)
    }

    render(totaldata, date) {
        this.shadowDOM.innerHTML = `
        <style>
        .container {
            width: 80%;
            left: 10%;
            padding: 0;
            margin: 0 0 50px 0;
            position: relative;
            text-align: right;
        }
        h3.date {
            font-family: 'Abel', sans-serif;
            letter-spacing: 2px;
        }
        h2.title {
            font-family: 'Abel', sans-serif;
            letter-spacing: 2px;
            text-align: center;
            margin: 40px 0 0 0;
        }
        span {
            display: block;
            font-size: 17px;
        }
        .total {
            width: 80%;
            padding: 0 0 16px 0;
            margin: 10px 0 0 0;
            display: inline-block;
            position: relative;
            left: 10%;
        }
        .column-3 {
            width: 31%;
            display: inline-block;
            text-align: center;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            box-sizing: border-box;
            background-color: #EFD28D;
            margin: 20px 10px 0 10px;
        }
        .card-title {
            width: 100%;
            box-sizing: content-box;
            height: 40px;
        }
        .card-title.confirmed {
            color: #004777;
        }
        .card-title.deaths {
            color: #A30000;
        }
        .card-title.recovered {
            color: #20BF55;
        }
        hr.blue {
            border-top: 2px dashed #004777;
        }
        hr.red {
            border-top: 2px dashed #A30000;
        }
        hr.green {
            border-top: 2px dashed #20BF55;
        }
        .card-title h6 {
            font-size: 25px;
            font-family: 'Abel', sans-serif;
            letter-spacing: 2px;
        }
        .card-content {
            width: 100%;
            box-sizing: content-box;
            text-align: center;
        }
        .card-content p {
            font-size: 30px;
            font-family: 'Ubuntu', sans-serif;
        }
        @media screen and (max-width: 550px){
            .container {
                width: 78%;
                left: 12%;
                padding: 0;
                margin: 0 0 20px 0;
                position: relative;
                text-align: center;
            }
            h3.date {
                font-family: 'Abel', sans-serif;
                letter-spacing: 1px;
                font-size: 16px;
            }
            h2.title {
                font-family: 'Abel', sans-serif;
                letter-spacing: 2px;
                text-align: center;
                font-size: 19px;
                margin: 40px 0 0 0;
            }
            .total {
                width: 80%;
                padding: 0 0 16px 0;
                margin: 5px 0 0 0;
                display: inline-block;
                position: relative;
                left: 10%;
            }
            .column-3 {
                width: 90%;
                display: inline-block;
                text-align: center;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                box-sizing: border-box;
                background-color: #EFD28D;
                margin: 20px 10px 0 10px;
            }
        }
        </style>

        <h2 class="title">COVID-19 GLOBAL CASES TODAY <span>Provided By Johns Hopkins University</span></h2>
        <div class="total">
            <div class="column-3">
                <div class="card-title confirmed">
                    <h6>GLOBAL CONFIRMED<h6>
                </div>
                <hr class="blue">
                <div class="card-content">
                    <p>${totaldata.confirmed.value}</p>
                </div>
            </div>
            <div class="column-3">
                <div class="card-title deaths">
                    <h6>GLOBAL DEATHS<h6>
                </div>
                <hr class="red">
                <div class="card-content">
                    <p>${totaldata.deaths.value}</p>
                </div>
            </div>
            <div class="column-3">
                <div class="card-title recovered">
                    <h6>GLOBAL RECOVERED<h6>
                </div>
                <hr class="green">
                <div class="card-content">
                    <p>${totaldata.recovered.value}</p>
                </div>
            </div>
        </div>
        <div class="container">
            <h3 class="date">Last Update : ${date}</h3>
        </div>
        `
    }
}

customElements.define('total-board', TotalBoard)