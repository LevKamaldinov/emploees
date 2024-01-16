import { Component } from 'react';

import AppInfo from '../app-info/app-info'; // импортируем шапку приложения
import SearchPanel from '../search-panel/search-panel'; // импортируем поиск работников
import AppFilter from '../app-filter/app-filter'; // импортируем кнопки фильтров
import EmployeesList from '../employees-list/employees-list'; // импортируем перечень сотрудников
import EmployeesAddForm from '../employees-add-form/employees-add-form'; // импортируем форму для добавления новых сотрудников

import './app.css';

// это классовый код
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [ 
                {name: 'John Smith', salary: 800, increase: false, rise: false, id: 1},
                {name: 'Alex Sanders', salary: 3000, increase: false, rise: false, id: 2},
                {name: 'Ivan Reon', salary: 5000, increase: false, rise: false, id: 3}
            ],
            // создадим переменную, куда будет записываться то, что пользователь ввёл в строку поиска в компоненте фильтра
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    // пропишем метод, который будет удалять выбранный элемент массива
    // в id уникальный номер элемента, кт надо удалить
    deleteItem = (id) => {
        this.setState(({data}) => {
            // т.к. напрямую изменять state нельзя, мы будем переписывать его, создавая каждый раз новый массив, но без искомого элемента
            return {
                data: data.filter(elem => elem.id !== id)
            }
        })
    }

    // пропишем метод, кт будет добавлять новые элементы массива
    addItem = (name, salary) => {
        if (name && salary) {
            const newItem = {
                name,
                salary,
                increase: false,
                rise: false,
                id: this.maxId++
                
            }
            this.setState(({data}) => {
                const newArr = [...data, newItem];
    
                return {
                    data: newArr
                }
            });
        }
        
    }

    // пропишем метод, который будет тогглить свойство increase у перечня работников
    // onToggleIncrease = (id) => {
    //     // это вариант через map, более сложный, но компактный код
    //     this.setState(({data}) => ({ // мы не пишем return, вместо него используем круглые скобки и возвращаем объект как содержание state
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, increase: !item.increase}
    //             }
    //             return item;
    //         })
    //     }))
        // это вариант с подробным, пусть и большим кодом
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id); // находим индекс элемента
        //     const old = data[index]; // находим элемент по индексу
        //     const newItem = {...old, increase: !old.increase}; // создаём новый объект, аналогичный старому. 
        //     // Через запятую мы прописываем свойство и задаём ему значение, в таком синтаксисе это означает, что если у ...old есть такое свойство, ему можно поставить новое значение
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)] // создаём новый массив, который пойдёт в state компонента
        //     return {
        //         data: newArr // возвращаем итоговый массив с новым элементом как объект state
        //     }
        // })
        // }

    // // пропишем метод, который будет тогглить изменения состояния работника, идущего на повышение
    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({ // мы не пишем return, вместо него используем круглые скобки и возвращаем объект как содержание state
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, rise: !item.rise}
    //             }
    //             return item;
    //         })
    //     }))
    // }
    
    // пропишем один метод, который будет выполнять функционал двух методов выше
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({ // мы не пишем return, вместо него используем круглые скобки и возвращаем объект как содержание state
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }   

    // создадим метод, который будет реагировать на то, что пользователь вводит в строку поиска в компоненте фильтра и выводить нужные данные
    // он будет принимать два аргумента: массив items, который будет фильтроваться, и строка term, по которой будет осуществляться фильтрация
    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        } else {
            return items.filter(item => {
            // возвращаем только те элементы, внутри которых найдена строка поиска (если ничего не найдено indexOf возвращает -1, поэтому мы пишем проверку больше этого значения)
            return item.name.indexOf(term) > -1;
        });
        }        
    }

    // создадим метод, который будет обновлять значение state.term
    onUpdateSearch = (term) => {
        this.setState({term: term});
    }

    // создадим метод, который будет фильтровать массив по выбранной кнопке фильтрации
    // код преподавателя
    filterEmployees = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }
    onFilterSelect = (filter) => {
        this.setState({filter: filter});
    }
    // мой код
    // создадим метод, который будет обновлять значение state.filter
    // onUpdateFilter = (filter) => {
    //     this.setState({filter: filter});
    // }
    // filterEmployees = (items, filter) => {
    //     if (filter === 'allEmp') {
    //         return items;
    //     } else if (filter === 'increasedEmp') {
    //         return items.filter(item => item.rise);
    //     } else if (filter === 'richEmp') {
    //         return items.filter(item => item.salary > 1000);
    //     }
    // }

    render() {
        const {data, term, filter} = this.state;
        // создадим переменные, которые будут передавать количество работников и работников, кт ждёт премия,
        // чтобы затем эти переменные передать как пропсы для шапки сайта
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase === true).length;
        // создадим переменную, которая через метод searchEmp возвращает тот массив данных, который и надо показывать на странице
        const visibleData = this.filterEmployees(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo employees={employees}
                increased={increased}></AppInfo>
    
                <div className='search-panel'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}></SearchPanel>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}></AppFilter>
                </div>
    
                <EmployeesList data={visibleData} // показываем не начальный массив, а отфильтрованный через метод
                // через пропсы прописываем методы класса, мы их так передадим компонентам ниже по иерархии
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}></EmployeesList>
                <EmployeesAddForm onAdd={this.addItem}></EmployeesAddForm>
            </div>
        )
    }
}

// это функциональный код
// function App() {
//     const data = [ // создадим массив с данными о сотрудниках, которые будут отражаться в компоненте с перечнем сотрудников
//     // пока это будет вместо информации, получаемой от сервера
//         {name: 'John Smith', salary: 800, id: 1},
//         {name: 'Alex Sanders', salary: 3000, id: 2},
//         {name: 'Ivan Reon', salary: 5000, id: 3}
//     ];

//     return (
//         <div className="app">
//             <AppInfo></AppInfo>

//             <div className='search-panel'>
//                 <SearchPanel></SearchPanel>
//                 <AppFilter></AppFilter>
//             </div>

//             <EmployeesList data={data}
//             onDelete={id => console.log(id)}></EmployeesList> {/*зададим свойство data, по которому перечень работников будет получать данные о них от data */}
//             <EmployeesAddForm></EmployeesAddForm>
//         </div>
//     )
// }

export default App;