//點擊座倉後，開始滾動顯示比賽相關的內容
//考慮當點擊不同星球時，是否跳出視窗顯示細節或者直接跳轉頁面

import { useState, useEffect, useRef, useContext } from 'react'

const Third = () => {
    const { nowShow, setNowShow } = useContext(all_status)
    console.log(nowShow);
    return (
        <div className='third_page'>
            <h1>Third Page</h1>

            <button onClick={setNowShow(0)}>

            </button>
        </div>
    )
}

export default Third