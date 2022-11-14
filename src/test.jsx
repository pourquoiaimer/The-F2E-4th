import { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/src/ScrollTrigger';


const Test = () => {
    const [again, setAgain] = useState(0)
    const test = useRef()
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        //設參數為現抓顯示高度，帶入end
        gsap.to(".box", {
            scrollTrigger: {
                trigger: ".box", //觸發得物件
                start: "center center", // (物件開始位置, 卷軸開始位置) top center bottom px
                end: "+=800px", //(物件結束位置, 卷軸結束位置) , 也可以設卷軸捲動多少結束動畫(+=300)
                // pin: true, // 物件執行完動畫會跟著卷軸走，類似 fixed-top
                scrub: true, // 物件動畫根據卷軸捲動程度跑
                markers: true // 顯示標記

            },
            // repeat:-1,
            // yoyo:true,
            x: "1055px",
        });
    }, [])

    useEffect(() => {
        //設參數為現抓顯示高度，帶入end
        gsap.to(".word", {
            scrollTrigger: {
                trigger: ".word", //觸發得物件
                start: "center center", // (物件開始位置, 卷軸開始位置) top center bottom px
                end: "+=200px", //(物件結束位置, 卷軸結束位置) , 也可以設卷軸捲動多少結束動畫(+=300)
                // pin: true, // 物件執行完動畫會跟著卷軸走，類似 fixed-top
                scrub: true, // 物件動畫根據卷軸捲動程度跑
                markers: true // 顯示標記

            },
            // repeat:-1,
            // yoyo:true,
            x: "500px",
            "font-size": "100px"
        });
    }, [])

    return (
        <>

            <div className='blank'></div>

            <div className='word'>
                test
            </div>

            <div ref={test} className='test'>
                <div className="box">{again}</div>

                <br />
                <br />
            </div>
            <br />



            <div className='blank'></div>

        </>
    )

}

export default Test