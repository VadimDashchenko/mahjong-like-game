import React, {Component} from 'react';
import Card from "../../components/Card/Card";
import {connect} from 'react-redux';
import * as gamesActions from '../../actions/games';
import './styles.scss';

class App extends Component {

    componentDidMount() {
        this.generate();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {first, second, resetChoice} = this.props;
        if(first !== null && second !== null && (first.count !== second.count || first.count === second.count)){
            setTimeout(() => resetChoice(), 1000);
        }
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
                primeNumbers.push({count: counter, state: 'show', chosen: false});
                primeNumbers.push({count: counter, state: 'show', chosen: false});
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
        const {generatePrimeNumbers, numbers} = this.props;
        let compare = this.madness();
        arr.sort(compare);
        generatePrimeNumbers(arr);
    }

    handleClick = (elem, i) => {
        const {getFirstNumber, getSecondNumber, first, second} = this.props;
        if(first === null && first !== elem) {
            getFirstNumber({count:elem.count, i});
        } else if(second === null) {
            getSecondNumber({count:elem.count, i})
        }
    }

    render(){
        const {numbers, first, second} = this.props;
        return (
            <div  className="app">
                <h1>Mahjong-like game</h1>
                <div className="app__content">
                    <Card
                        first={first}
                        second={second}
                        changeNumber={this.handleClick}
                        numbers={numbers} />
                </div>
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
