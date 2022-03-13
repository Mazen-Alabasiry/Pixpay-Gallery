import axios from 'axios';
import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import NavBar from './components/Navbar';

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async (query) => {
    let data = await axios.get(`https://pixabay.com/api/?key=26121726-899cdaf544e22fb9c9d950894&q=${query}&image_type=photo`).then(res => {
      const newdata = res.data;
      setData(newdata)
    })
  }

  return (
    <div className="App" >
      <NavBar fetchData={fetchData} />
      <Gallery data={data ? data : []} />
    </div>
  );
}

export default App;
