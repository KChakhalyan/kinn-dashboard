import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const New = () => {
   return (
      <div className="new">
         <Sidebar />
         <div className="new-container">
            <Navbar />
            <div className="top">
               <h1>Add New User</h1>
            </div>
            <div className="bottom">
               <div className="left">
                  <img
                     src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                     alt="upload image"
                  />
               </div>
               <div className="right">
                  <form>
                     <div className="form-input">
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="johnsnow" name="username" id="username" />
                        <label htmlFor="full-name">Name and Lastname</label>
                        <input
                           type="text"
                           placeholder="John Snow"
                           name="full-name"
                           id="full-name"
                        />
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default New;
