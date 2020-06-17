class CardBoard extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set value(value){
        this._value = value;
        this.render(value)
    }

    render(value) {
        this.shadowDOM.innerHTML = `
        <style>
        .card-shadow {
            width: 30vw;
            left: 45%;
            position: relative;
            box-sizing: border-box;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            margin: 80px 0 20px 0;
            padding: 5px 0 10px 0;
            border-radius: 5px; 
            display: block;
            background-color: #BEEDAA;
        } 
        .card-title {
            width: 100%;
            text-align: center;
            box-sizing: content-box;
            height: 40px;
        }
        .card-title h6 {
            font-size: 30px;
            color: brown;
            font-family: 'Abel', sans-serif;
            letter-spacing: 2px;
            color: #004777;
        }
        .card-content {
            width: 100%;
            text-align: center;
            box-sizing: content-box;
            font-size: 30px;
        }
        hr.blue {
            border-top: 2px dashed #004777;
        }
        @media screen and (max-width: 550px){
            .card-shadow {
                width: 66vw;
                left: 10%;
                top: 10%;
                position: relative;
                box-sizing: border-box;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                margin: 0 0 20px 0;
                padding: 5px 0 10px 0;
                border-radius: 5px;
                display: inline-block;
                background-color: #BEEDAA;
            }
        }        
        </style>
        
        <div class="card-shadow">
            <div class="card-title">
                <h6>Confirmed<h6>
            </div>
            <hr class="blue">
            <div class="card-content">
                <p>${value.value}</p>
            </div>
        </div>
        `
    }

    renderError(messageFailed) {
        console.log(messageFailed)
        this.shadowDOM.innerHTML = "";
        this.shadowDOM.innerHTML = `
        <style> 
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }

        </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">We're sorry, the country you searched is unknown.</h2>`;
    }
}

customElements.define('card-board', CardBoard)