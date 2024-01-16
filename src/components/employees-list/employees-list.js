import EmployeesListItem from '../employees-list-item/employees-list-item'; // импортируем функцию по созданию карточек работников

import './employees-list.css';
// зададим свойство data, кт будет передавать массив с объектами, внутри кт данные о сотрудниках
// это пока вместо сервера
// в свойствах компонента через деструктуризацию передаём в качестве атрибутов пропсы компоненту от вышестоящего по иерархии компонента app
const EmployeesList = ({data, onDelete, onToggleProp}) => {
// поскольку данных неизвестно сколько, вручную нет смысла прописывать каждый компонент, лучше сделать перебор с созданием нового массива, т.е. использовать map()
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
            // здесь можно прописать просто name={item.name} salary={item.salary}, а можно использовать spread оператор:
            key={id} 
            {...itemProps}
            // прописываем пропсы компонента, используя переданные выше как атрибуты пропсы вышестоящего по иерархии компонента app
            // методы вызываем через коллбэк функцию, потому что так в метод можно передать параметр
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => {onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}}></EmployeesListItem>
        )
    });

    return (
        <ul className='app-list list-group'>
            {elements} {/*мы помещаем переменную elements, которая представляет собой новый массив с компонентами - данными о каждом сотруднике в формате вёрстки, 
            поэтому мы, фактически, помещаем новую вёрстку, которая будет генерироваться сама в зависимости от количества элементов в data */}
        </ul>
    );
}

export default EmployeesList;