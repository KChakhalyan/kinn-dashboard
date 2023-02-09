import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
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
            <p className="chart_title">Total sales made today</p>
            <p className="amount">$420</p>
            <p className="desc">
               Previous transactions processing. Last payments may not be icluded
            </p>
            <div className="summary">
               <div className="summary-item">
                  <div className="item-title">Target</div>
                  <div className="item-result positive">
                     <KeyboardArrowUpOutlinedIcon fontSize="small" />
                     <div className="result-amount">$12.4k</div>
                  </div>
               </div>
               <div className="summary-item">
                  <div className="item-title">Last Week</div>
                  <div className="item-result negative">
                     <KeyboardArrowDownOutlinedIcon fontSize="small" />
                     <div className="result-amount">$4.2k</div>
                  </div>
               </div>
               <div className="summary-item">
                  <div className="item-title">Last Month</div>
                  <div className="item-result positive">
                     <KeyboardArrowUpOutlinedIcon fontSize="small" />
                     <div className="result-amount">$2.4k</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Featured;
