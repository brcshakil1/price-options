import './App.css'
import PriceOptions from './components/PriceOptions/PriceOptions';
// import DaisyNev from './components/DaisyNev/DaisyNev';
import Navbar from './components/Navbar/Navbar';
import LineCharts from './components/LineCharts/LineCharts';
import Phones from './components/Phones/Phones';

function App() {

  return (
    <>
     {/* <DaisyNev /> */}
     <Navbar />
     <PriceOptions />
     <LineCharts />
     <Phones />
    </>
  )
}

export default App
