//外星人開始出現的頁面，直到太空船內部座倉

import { useState, useEffect, useRef, useContext } from 'react'

const Second = () => {
    const { nowShow, setNowShow } = useContext(all_status)
    console.log(nowShow);
    return (
        <div className='second_page'>
            <h1>Second Page</h1>
            <button onClick={setNowShow(2)}>

            </button>
        </div>
    )
}

export default Second