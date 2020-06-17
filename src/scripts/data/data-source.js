class DataSource {
    static loadCases() {
        return fetch(`https://covid19.mathdro.id/api`, {
            method: 'GET'
        })
        .then( response => {
            return response.json();
        })
        .then( responseJson => {
            if (responseJson) {
                return Promise.resolve(responseJson)
            } else {
                return Promise.reject(`Data is not found`)
            }
        })
        .catch( error => {
            console.log(error)
        })
    }
    
    static dailyCases() {
        return fetch(`https://covid19.mathdro.id/api/daily`, {
            method: 'GET'
        })
        .then( response => {
            return response.json();
        })
        .then( responseJson => {
            if (responseJson) {
                return Promise.resolve(responseJson)
            } else {
                return Promise.reject(`Data is not found`)
            }
        })
        .catch( error => {
            console.log(error)
        })
    }

    static recoveredCases() {
        return fetch(`https://covid19.mathdro.id/api/recovered`, {
            method : 'GET'
        })
        .then( response => {
            return response.json();
        })
        .then( responseJson => {
            if (responseJson) {
                return Promise.resolve(responseJson)
            } else {
                return Promise.reject(`Data is not found`)
            }
        })
        .catch( error => {
            console.log(error)
        })
    }

    static deathCases() {
        return fetch(`https://covid19.mathdro.id/api/deaths`, {
            method: 'GET'
        })
        .then( response => {
            return response.json();
        })
        .then( responseJson => {
            if (responseJson) {
                return Promise.resolve(responseJson)
            } else {
                return Promise.reject(`Data is not found`)
            }
        })
        .catch( error => {
            console.log(error)
        })
    }

    static pieRecoveredCases(keyword) {
        return fetch(`https://covid19.mathdro.id/api/countries/${keyword}/recovered`, {
            method: 'GET'
        })
        .then( response => {
            return response.json();
        })
        .then( responseJson => {
            if (responseJson) {
                return Promise.resolve(responseJson)
            } else {
                return Promise.reject(`${keyword} is not found`)
            }
        })
        .catch( error => {
            console.log(error)
        })
    }

    static pieDeathCases(keyword) {
        return fetch(`https://covid19.mathdro.id/api/countries/${keyword}/deaths`, {
            method: 'GET'
        })
        .then( response => {
            return response.json();
        })
        .then( responseJson => {
            if (responseJson) {
                return Promise.resolve(responseJson)
            } else {
                return Promise.reject(`${keyword} is not found`)
            }
        })
        .catch( error => {
            console.log(error)
        })
    }

    static searchClub(keyword) {
        return fetch(`https://covid19.mathdro.id/api/countries/${keyword}`, {
            method: 'GET'
        })
        .then( response => {
            return response.json();
        })
        .then( responseJson => {
            if (responseJson.confirmed) {
                return Promise.resolve(responseJson.confirmed)
            } else {
                return Promise.reject(`The country name is not found`)
            }
        })
        .catch( error => {
            console.log(error)
        })
    }
} 

export default DataSource;