import { useState, createContext } from 'react'
import First from './components/first'
import Second from './components/second'
import Third from './components/third'


function App() {
  const [nowShow, setNowShow] = useState(0)
  const all_status = createContext(nowShow, setNowShow)

  function CheckShow() {
    let allPage = [<First />, <Second />, <Third />]

    console.log(allPage[nowShow]);
    return allPage[nowShow]
  }

  return (

    <div className="App">
    <h1>未完成，努力中...</h1>
      <all_status.Provider>
        <CheckShow />
      </all_status.Provider>
    </div>
  )
}

export default App
