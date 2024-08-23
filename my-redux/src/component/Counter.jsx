import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/customSlice'

const Counter = () => {
    const count = useSelector((state) => state.customState.counter);
    const dispatch = useDispatch();

    return (
        <div className='counterLayout'>
            <h1>Counter : {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        </div>
    )
}
export default Counter