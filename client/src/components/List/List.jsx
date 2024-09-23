import { listData } from '../../lib/dummydata'
import Card from '../Card/Card'
import './List.scss'

function List(){
    return(
        <div className="list">
            {listData.map(item => (
                <Card key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default List