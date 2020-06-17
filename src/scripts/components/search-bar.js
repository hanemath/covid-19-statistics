class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render()
    }
    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            width: 78%;
            left: 10%;
            /*max-width: 800px;*/
            box-shadow: 6px 6px 10px 6px rgba(0, 0, 0, 0.2);
            padding: 16px;
            margin-top: 20px;
            border-radius: 5px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: white;
        }
        
        .search-container > input {
            width: 75%;
            padding: 16px;
            border: 0;
            border-bottom: 1px solid #004777;
            font-weight: bold;
        }
        
        .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid #004777;
        }
        
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
        
        .search-container >  input::placeholder {
            color: #004777;
            font-weight: normal;
        }
        
        .search-container > button {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: #004777;
            color: white;
            border: 0;
            text-transform: uppercase;
        }
        
        @media screen and (max-width: 550px){
            .search-container {
                box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.2);
                flex-direction: column;
                position: relative;
                width: 78%;
                left: 7%;
            }
        
            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
                font-size: 18px;
            }
        
            .search-container > button {
                width: 100%;
            }
        }
        </style>

        <div id="search-container" class="search-container">
            <input placeholder="Search Country" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `
        this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent)
    }
}

customElements.define('search-bar', SearchBar)