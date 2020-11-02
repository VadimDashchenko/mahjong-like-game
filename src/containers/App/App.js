import React, {Component} from 'react';
import Card from "../../components/Card/Card";
import {connect} from 'react-redux';
import * as gamesActions from '../../actions/games';
import './styles.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        }
    }

    componentDidMount() {
        this.generate();
    }

    // динамическая генерация простых чисел
    generate = () => {
        let primeNumbers = [];
        for(let counter = 2; counter <= 50; counter++){
            let notPrime = false;
            for(let i = 2; i <= counter; i++) {
                if(counter %i === 0 && i !== counter){
                    notPrime = true
                }
            }
            if(notPrime === false){
                primeNumbers.push(counter);
                primeNumbers.push(counter);
            }
        }
        this.randomSortArray(primeNumbers);
    }

    // кэширование входных данных
    madness = () => {
        let cache = [];
        function putToCache(elem, cache){
            if(cache.indexOf(elem) !== -1){
                return;
            }
            let i = Math.floor(Math.random()*(cache.length + 1));
            cache.splice(i, 0, elem);
        }
        return function(a, b){
            putToCache(a, cache);
            putToCache(b, cache);
            return cache.indexOf(b) - cache.indexOf(a);
        }
    }

    // ф-я рандомной сортировки массива
    randomSortArray = (arr) => {
        const {generatePrimeNumbers} = this.props;
        let compare = this.madness();
        arr.sort(compare);
        generatePrimeNumbers(arr);
    }

    handleClick = (elem, i) => {
        const {getFirstNumber, getSecondNumber, first, second} = this.props;
        if(first !== elem) {
            getFirstNumber(elem);
        } else {
            getSecondNumber(elem)
        }
    }

    render(){
        const {numbers, first, second} = this.props;
        const {show} = this.state;
        return (
            <div className="app">
                <Card
                    first={first}
                    second={second}
                    show={show}
                    changeNumber={this.handleClick}
                    numbers={numbers} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    numbers: state.game.numbers,
    first: state.game.firstNumber,
    second: state.game.secondNumber,
})

export default connect(
    mapStateToProps,
    gamesActions
)(App);
