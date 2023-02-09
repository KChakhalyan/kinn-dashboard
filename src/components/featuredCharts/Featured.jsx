import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
   return (
      <div className="featured">
         <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize="small" />
         </div>
         <div className="bottom">
            <div className="featured-chart">
               <CircularProgressbar value={70} text={"70%"} strokeWidth={3} />
            </div>
            <p></p>
         </div>
      </div>
   );
};

export default Featured;
