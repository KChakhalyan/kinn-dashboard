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
               <div className="left">
                  <h1 className="info-title">User Information</h1>
                  <div className="item">
                     <img
                        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                        alt="avatar"
                        className="item-img"
                     />
                     <div className="details">
                        <h2 className="full-name">John Snow</h2>
                     </div>
                  </div>
               </div>
               <div className="right">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, alias.
               </div>
            </div>
            <div className="bottom">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sint quibusdam
               alias reprehenderit quidem? Magni?
            </div>
         </div>
      </div>
   );
};

export default Single;
