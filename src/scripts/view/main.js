import DataSource from '../data/data-source.js'
import '../components/search-bar.js'
import '../components/total-board.js'
import '../components/graph-board.js'
import '../components/bar-chart.js'
import '../components/card-board.js'
import '../components/pie-chart.js'

const main = () => {
    const searchElement = document.querySelector('search-bar');
    const cardBoardElement = document.querySelector('card-board');
    const totalBoardElement = document.querySelector('total-board');
    const graphBoardElement = document.querySelector('graph-board');
    const barChartElement = document.querySelector('bar-chart');
    const pieChartElement = document.querySelector('pie-chart');

    const loadTotalBoard = async () => {
        try {
            const alldata = await DataSource.loadCases();
            totalBoardElement.alldata = alldata
        } catch(error) {
            console.log(error)
        }
    }

    const loadDailyGraph = async () => {
        try {
            const dailydata = await DataSource.dailyCases();
            graphBoardElement.dailydata = dailydata
        } catch(error){
            console.log(error)
        }
    }

    const loadRecoveredChart = async () => {
        try {
            const recoveredData = await DataSource.recoveredCases();
            barChartElement.recoveredData = recoveredData;
            const deathData = await DataSource.deathCases();
            barChartElement.deathData = deathData;
        } catch(error) {
            console.log(error)
        }
    }

    const renderResult = values => {
        cardBoardElement.value = values
    }

    const renderPie = data => {
        pieChartElement.renderPie(data)
    }

    const fallbackResult = message => {
        cardBoardElement.renderError(message)
    };


    const onButtonSearchClicked = async () => {
        try {
            const values = await DataSource.searchClub(searchElement.value)
            renderResult(values)
            const data = await DataSource.pieDeathCases(searchElement.value)
            renderPie(data)
        } catch(messageFailed) {
            fallbackResult(messageFailed)
        }
    };

    function loadAll() {
        loadTotalBoard()
        .then(loadDailyGraph)
        .then(loadRecoveredChart)
    }

    loadAll()
    searchElement.clickEvent = onButtonSearchClicked;
}

export default main;