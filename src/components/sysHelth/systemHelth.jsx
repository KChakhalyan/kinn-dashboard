import LineCharts from '../chart/LineCharts'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './systemHelth.scss'


const systemHelth = () => {
  return (
    <div className="system-helth">
         <Sidebar />
         <div className="system-helth-container">
            <Navbar />
            <LineCharts />
         </div>
      </div>
  )
}
export default systemHelth