import { useState } from 'react'
import { testValue } from "../mobile"
import { useDispatch } from 'react-redux';
import { setTotalCount } from './counterSlice';

const Storedata = () => {
    const [testValues, setTestValue] = useState(testValue);
    const dispatch=useDispatch()


    const addInCart = (clickedId: string, selectEvt: string) => {
        setTestValue((prevItems) =>
            prevItems.map((item) =>
                item.id === clickedId ? { ...item, updatedNum: selectEvt != 'inc' ? item.updatedNum + 1 : item.updatedNum > 0 ? item.updatedNum - 1 : 0 } : item
            )
        );
        const totalCount = testValues.reduce((sum, item) => sum + item.updatedNum, 0);
        dispatch(setTotalCount(totalCount));

    };
    return (
        <div className="mobile">
            {testValues.map((item) => (
                <div className="img" >
                    <ul>
                        <li>
                            <img src={item.image} alt={item.model} width="120" />
                            <h3>{item.company}</h3>
                            <p>{item.model}</p>
                            <p>${item.price}</p>
                            <button style={{ color: 'white', backgroundColor: "green" }} onClick={() => addInCart(item.id, 'dec')}>+</button>Add{item.updatedNum}<button style={{ color: 'white', backgroundColor: "gray" }} onClick={() => addInCart(item.id, 'inc')}>-</button>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Storedata