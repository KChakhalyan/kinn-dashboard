import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
const Home = () => {
   return (
      <div className="home">
         {/* <Navbar /> */}
         <Sidebar />
         <div className="container">container</div>
      </div>
   );
};

export default Home;
