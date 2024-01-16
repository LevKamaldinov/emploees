import { Component } from 'react';

// import './employees-add-form.css';
import './employees-add-form.scss';

// это код для классового подхода
class EmployeesAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    //т.к. неважно, какое было предыдущее состояние (мы вводим данные нового работника)
    // достаточно предусмотреть только возврат сразу объекта, без коллбэк функции внутри setState
    onValueChange = (e) => {
        this.setState({
            // т.к. мы прописали в инпуты атрибут name, то теперь его можно напрямую вызвать через event.target
            // используем квадратные скобки, иначе ошибка синтаксиса
            [e.target.name]: e.target.value
        })
   }

   onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
        name: '',
        salary: ''
    })
   }

   static onLog = () => {
    console.log('Hey');
   }

   static logged = 'om';

    render() {
        let {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name='name'
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}

EmployeesAddForm.onLog();
console.log(EmployeesAddForm.logged);
// это код для функционального подхода
// const EmployeesAddForm = () => {
//     return (
//         <div className="app-add-form">
//             <h3>Добавьте нового сотрудника</h3>
//             <form
//                 className="add-form d-flex">
//                 <input type="text"
//                     className="form-control new-post-label"
//                     placeholder="Как его зовут?" />
//                 <input type="number"
//                     className="form-control new-post-label"
//                     placeholder="З/П в $?" />

//                 <button type="submit"
//                         className="btn btn-outline-light">Добавить</button>
//             </form>
//         </div>
//     );
// }

export default EmployeesAddForm;

// В этом компоненте:
// h3 это заголовок нашего компонента (кт является формой дбавления новых сотрудников)
// form это сама форма добавления
// input это поля ввода данных о сотруднике (имя и ЗП)
// button это кнопка добавления