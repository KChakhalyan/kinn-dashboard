import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
const Single = () => {
   return (
      <div className="single">
         <Sidebar />
         <div className="single-container">
            <Navbar />
            <div className="top">
               Top
               <div className="left">
                  <h1 className="info-title">User Information</h1>
                  <div className="item">{/* <img src="" alt="" className="item-img" /> */}</div>
               </div>
               <div className="right">Right</div>
            </div>
            <div className="bottom">Bottom</div>
         </div>
      </div>
   );
};

export default Single;
