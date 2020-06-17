class AppNavbar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :host {
            display: block;
            padding: 16px;
            width: 100%;
            background-color: #A30000;
            text-align: center;
            color: #EFD28D;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        h2 {
            padding: 60px;
            font-size: 45px;
            font-family: 'Abel', sans-serif;
            letter-spacing: 3px;
        }
        span {
            display: block;
            font-size: 16px;
        }
        span a{
            font-size: 16px;
            font-family: 'Abel', sans-serif;
            letter-spacing: 3px;
            color: #000000;
            text-decoration-line: none;
        }
        </style>
        
        <h2>Covid-19 Statistics <span>Datasource provided by <a href="https://github.com/mathdroid/covid-19-api">Muhammad Mustadi</a> </span></h2>
        
        `
    }
}

customElements.define('app-navbar', AppNavbar)