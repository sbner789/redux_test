import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSwitch } from '../redux/customSlice'

const Toggle = () => {
    const toggleState = useSelector((state) => state.customState.toggle);
    const dispatch = useDispatch();

    return (
        <div className='toggleLayout'>
            <h1>{`${toggleState}`}</h1>
            <button onClick={() => dispatch(toggleSwitch())}>Toggle</button>
        </div>
    )
}

export default Toggle