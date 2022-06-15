import { useState, useEffect, useMemo } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { get_db } from '../actions/actions'
import Input from '../components/Input/Input'
import Select from '../components/Select/Select'
import './homepage.css'

function HomePage() {
    const [DataBase, setDataBase] = useState([]);
    const [OptionsColumn, setOptionsColumn] = useState(['name', 'quantity', 'distance']);
    const [OptionsCondition, setOptionsCondition] = useState(['равно', 'содержит']);
    const [ActiveConditions, setActiveConditions] = useState('равно');
    const [ActiveColumn, setActiveColumn] = useState('name');
    const [Search, setSearch] = useState('');
    const [LastPage, setLastPage] = useState(0);

    const { id } = useParams();
    const navigate = useNavigate();

    const filter = useMemo(() => {
        let result = DataBase
        if (!!Search) {
            switch (ActiveConditions) {
                case 'равно':
                    result = DataBase.filter(element => element[ActiveColumn] == Search)
                    break;
                case 'содержит':
                    result = DataBase.filter(element => `${element[ActiveColumn]}`.includes(`${Search}`))
                    break;
                case 'больше':
                    result = DataBase.filter(element => element[ActiveColumn] > Search)
                    break;
                case 'меньше':
                    result = DataBase.filter(element => element[ActiveColumn] < Search)
                    break;
            }
        }
        return result
    })

    useEffect(() => {
        if(!id){
            navigate('/1');
            return
        }
        get_db(id ? id : 1, (element) => {
            setDataBase([...element.array]);
            setLastPage(element.last_page)
        });
    }, [id])

    const changeOptionsColumn = (e) => {
        if (e === 'name') {
            setOptionsCondition(['равно', 'содержит'])
        } else {
            setOptionsCondition(['равно', 'содержит', 'больше', 'меньше'])
        }
        setActiveColumn(e)
    }

    const changeOptionsConditions = (e) => {
        setActiveConditions(e)
    }

    return (
        <div className='homepage_container'>

            <div className="search_container">
                <Input placeholder='Search' value={Search} onChange={(e) => setSearch(e)} />
                <div className="select_row">
                    <Select
                        onChange={(e) => { changeOptionsColumn(e) }}
                        options={OptionsColumn} />
                    <Select
                        onChange={(e) => { changeOptionsConditions(e) }}
                        options={OptionsCondition} />
                </div>
            </div>

            <div className="row_db">
                <p>name</p>
                <p>quantity</p>
                <p>distance</p>
                <p>date</p>
            </div>
            {
                filter.map(element => (
                    <div className="row_db" key={element.id}>
                        <p>{element.name}</p>
                        <p>{element.quantity}</p>
                        <p>{element.distance}</p>
                        <p>{element.date.split('T')[0].split('-').reverse().join('.')}</p>
                    </div>
                ))
            }
            <div className="pagination">
                {id > 2 ? <Link to="/1">1</Link> : ''}
                {id > 2 ? <span>...</span> : ''}
                {id > 1 ? <Link to={`/${id - 1}`}>{id - 1}</Link> : ''}
                {id <= LastPage ? <Link to={`/${id}`}>{id}</Link> : ''}
                {id < LastPage ? <Link to={`/${id - 0 + 1}`}>{id - 0 + 1}</Link> : ''}
                {id < LastPage - 1 ? <span>...</span> : ''}
                {id < LastPage - 1 ? <Link to={`/${LastPage}`}>{LastPage}</Link> : ''}
            </div>
        </div>
    )
}

export default HomePage