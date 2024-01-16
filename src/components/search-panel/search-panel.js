import { Component } from 'react';

import './search-panel.css'; //2. навесили стили

// это вариант с классовым подходом
class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    // создадим метод, который будет обновлять значение term, он назван так же, как метод в App, но это другой метод
    onUpdateSearch = (e) => {
        const term = e.target.value; // получили вводимое пользователем значение
        this.setState({term: term}) // установили стэйту это значение
        this.props.onUpdateSearch(term) // через пропс вызвали одноимённый метод из app и ему передали аргументом строку, введённую пользователем
        // теперь в app будет меняться значение term, т.е. мы воспользовались поднятием состояния
    }

    render() {
        return (
            <input
                type='text'
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearch}/>)
    }
}

// это вариант с функциональным подходом
// const SearchPanel = () => { //1. создали компонент
//     return (
//         <input
//             type='text'
//             className="form-control search-input"
//             placeholder="Найти сотрудника"/>
//     )
// }

export default SearchPanel; //3. экспортировали