import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

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
                        <label htmlFor="image">
                           Image: <DriveFolderUploadOutlinedIcon className="icon" />
                        </label>
                        <input type="file" name="image" id="image" hidden />
                     </div>
                     <div className="form-input">
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="johnsnow" name="username" id="username" />
                     </div>
                     <div className="form-input">
                        <label htmlFor="full-name">Name and Lastname</label>
                        <input
                           type="text"
                           placeholder="John Snow"
                           name="full-name"
                           id="full-name"
                        />
                     </div>
                     <div className="form-input">
                        <label htmlFor="email">Email</label>
                        <input
                           type="email"
                           placeholder="john_snow@email.com"
                           name="email"
                           id="email"
                        />
                     </div>
                     <div className="form-input">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                     </div>
                     <div className="form-input">
                        <label htmlFor="email">Phone</label>
                        <input type="tel" placeholder="+1(123)456-789-00" name="phone" id="phone" />
                     </div>
                     <div className="form-input">
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" id="address" />
                     </div>
                     <div className="form-input">
                        <label htmlFor="country">Chouse County</label>
                        <select name="country" id="country">
                           <option value="">--Please choose an option--</option>
                           <option value="usa">USA</option>
                           <option value="uk">United Kingdom</option>
                           <option value="germany">Germany</option>
                           <option value="irland">Irland</option>
                           <option value="france">France</option>
                           <option value="spain">Spain</option>
                        </select>
                     </div>
                     <div className="form-input">
                        <button>Add</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default New;
