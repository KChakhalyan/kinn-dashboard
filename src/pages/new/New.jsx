import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
   const [file, setFile] = useState("");

   return (
      <div className="new">
         <Sidebar />
         <div className="new-container">
            <Navbar />
            <div className="top">
               <h1>{title}</h1>
            </div>
            <div className="bottom">
               <div className="left">
                  <img
                     src={
                        file
                           ? URL.createObjectURL(file)
                           : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                     }
                     alt="upload image"
                  />
               </div>
               <div className="right">
                  <form>
                     <div className="form-input">
                        <label htmlFor="image">
                           Image: <DriveFolderUploadOutlinedIcon className="icon" />
                        </label>
                        <input
                           type="file"
                           name="image"
                           id="image"
                           hidden
                           onChange={(e) => setFile(e.target.files[0])}
                        />
                     </div>

                     {inputs.map((input) => (
                        <div className="form-input" key={input.id}>
                           <label htmlFor="username">{input.label}</label>
                           <input
                              type={inputs.type}
                              placeholder={inputs.placeholder}
                              name="username"
                              id="username"
                           />
                        </div>
                     ))}

                     {/* <div className="form-input">
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
                     </div> */}
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
