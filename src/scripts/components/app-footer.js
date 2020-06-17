class AppFooter extends HTMLElement {
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
            text-align: center;
            color: #A30000;
        }
        h2 {
            padding: 20px 0 40px 0;
            font-size: 25px;
            font-family: 'Abel', sans-serif;
            letter-spacing: 3px;
        }
        span {
            display: block;
            font-size: 16px;
        }
        </style>
        
        <h2>Covid-19 Statistics <span>Designed & Developed with Love by Hanifa</span></h2>
        `
    }
}

customElements.define('app-footer', AppFooter)