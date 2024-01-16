// это код преподавателя, функциональный подход
import './app-filter.css'

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/п больше 1000$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        // в app установлено значение filter по умолчанию all. Если во время перебора будет найден элемент с имененем all, то у active будет статус true
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button 
                className={`btn ${clazz}`}
                type='button'
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className='btn-group'>
            {buttons}
        </div>
    );
}

// Мой код с фильтрами
// это классовый подход
// import { Component } from 'react';

// import './app-filter.css';

// class AppFilter extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             filter: ''
//         }
//     }

//     onUpdateFilter = (e) => {
//         const filter = e.currentTarget.getAttribute('data-button');
//         this.setState({filter: filter})
//         this.props.onUpdateFilter(filter) 
//     }

//     render() {
//         return (
//             <div className='btn-group'>
//                 <button 
//                     className='btn btn-light'
//                     type='button'
//                     data-button='allEmp'
//                     onClick={this.onUpdateFilter}>
//                         Все сотрудники
//                 </button>
//                 <button 
//                     className='btn btn-outline-light'
//                     type='button'
//                     data-button='increasedEmp'
//                     onClick={this.onUpdateFilter}>
//                         На повышение
//                 </button>
//                 <button 
//                     className='btn btn-outline-light'
//                     type='button'
//                     data-button='richEmp'
//                     onClick={this.onUpdateFilter}>
//                         З/П больше 1000$
//                 </button>
//             </div>
//         );
//     }
// }

export default AppFilter;