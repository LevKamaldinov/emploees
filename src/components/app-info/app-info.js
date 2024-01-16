import './app-info.css'; //2. импортировали стили для компонента

const AppInfo = ({employees, increased}) => { //1. создали компонент, кт будет шапкой нашего приложения

    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo; //3. экспортировали компонент