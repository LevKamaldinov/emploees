// этот импорт нужен для классового подходоа
// import { Component } from 'react';

import './employees-list-item.css';

// это версия с классами
// class EmployeesListItem extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             increase: false,
//             classNames: 'list-group-item d-flex justify-content-between'
//         }
//     }

//     onIncrease = () => {
//         // тут используется деструктуризация при передачи аргумента для экономии кода
//         // сам метод предполагает изменение значения состояния на противоположное
//         this.setState(({increase}) => ({
//             increase: !increase
//         }))
//     }

//     onStar = () => {
//         if (this.state.classNames.includes(' like')) {
//             this.setState(({classNames}) => ({
//                 classNames: classNames.replace(' like', '')
//             }))
//         } else {
//             this.setState(({classNames}) => ({
//                 classNames: classNames + ' like'
//             }))
//         }
//     }

//     render() {
//         const {name, salary, onDelete} = this.props;
//         let {classNames, increase} = this.state;

//         // создадим отдельную переменную, в кт будут перечислены все классы
//         // если у increase стоит значение true (в будущем это будет происходить при нажатии на кнопку печеньки), 
//         // то к классу будет прибавляться новый класс

//         if (increase) {
//             classNames += ' increase';
//         };

//         return (
//             <li className={classNames}> 
//                 <span className="list-group-item-label" onClick={this.onStar}>{name}</span>
//                 <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
//                 <div className='d-flex justify-content-center align-items-center'>
//                     <button type="button"
//                         className="btn-cookie btn-sm "
//                         onClick={this.onIncrease}>
//                         <i className="fas fa-cookie"></i>
//                     </button>

//                     <button type="button"
//                             className="btn-trash btn-sm "
//                             onClick={onDelete}>
//                         <i className="fas fa-trash"></i>
//                     </button>
//                     <i className="fas fa-star"></i>
//                 </div>
//             </li>
//         );
//     }
// }

// это версия с функциональным подходом
const EmployeesListItem = (props) => {
    // через деструктуризацию получаем от вышестоящего по иерархии компонента EmployeesList его пропсы
    const {name, salary, onDelete, onToggleProp, increase, rise} = props;

    // создадим отдельную переменную, в кт будут перечислены все классы
    // если у increase стоит значение true (в будущем это будет происходить при нажатии на кнопку печеньки), 
    // то к классу будет прибавляться новый класс
    let classNames = 'list-group-item d-flex justify-content-between';
    if (increase) {
        classNames += ' increase';
    };
    if (rise) {
        classNames += ' like';
    }

    return (
        <li className={classNames}> 
            <span className="list-group-item-label" 
            onClick={onToggleProp} 
            data-toggle='rise'>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle='increase'>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeesListItem;

// в данном компоненте:
// li это список сотрудников
// span это имя сотрудника
// input это поле, куда вводится ЗП сотрудника
// button это кнопки премирования (иконка в виде печеньки) и удаления (иконка в виде корзины)
// i с атрибутом fa-star это кнопка выделения сотрудника, кт идёт на повышение