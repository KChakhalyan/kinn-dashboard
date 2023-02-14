import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/list/List";
const Single = () => {
   return (
      <div className="single">
         <Sidebar />
         <div className="single-container">
            <Navbar />
            <div className="top">
               <div className="left">
                  <div className="editButton">Edit</div>
                  <h1 className="title">User Information</h1>
                  <div className="item">
                     <img
                        src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        alt="avatar"
                        className="item-img"
                     />
                     <div className="details">
                        <h2 className="full-name">John Snow</h2>
                        <div className="detail-item">
                           <span className="item-key">Email : </span>
                           <span className="item-value">john.snow@gmail.com</span>
                        </div>
                        <div className="detail-item">
                           <span className="item-key">Phone : </span>
                           <span className="item-value">+1(123)456-789-00</span>
                        </div>
                        <div className="detail-item">
                           <span className="item-key">Address : </span>
                           <span className="item-value">Elton St. 234 Garden Yd. New York</span>
                        </div>
                        <div className="detail-item">
                           <span className="item-key">Country : </span>
                           <span className="item-value">USA</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="right">
                  <Chart aspect={3 / 1} title="User's spendingd (last 6 month)" />
               </div>
            </div>

            <div className="bottom">
               <h1 className="title">User Information</h1>
               <List title="Last Transactions" />
            </div>
         </div>
      </div>
   );
};

export default Single;
