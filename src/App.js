import { useEffect, useState } from 'react';
import Home from './Home'
import './Home.css'

function App() {
  const [newData, setNewData] = useState([]);
  const [dataCount, setDataCount] = useState(0);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let sliced = data.slice(0, 22);
        setNewData(sliced);
        setDataCount(sliced.length);
      })
  }, [])

  console.log(newData)
  const remove = (id) => {
    const filterData = newData.filter((item, idx) => idx !== id);
    setNewData(filterData);
    setDataCount(dataCount - 1);
  }

  return (
    <>
      <div className="gridContainer">
        {dataCount < 1 ? <p className="DataCountInfo">All Data Deleted.</p> : newData.map((data, xid) => <Home key={xid} id={xid} remove={remove} data={data} />)}
      </div>
    </>
  );
}

export default App;
