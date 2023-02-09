import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const Featured = () => {
   return (
      <div className="featured">
         <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize="small" />
         </div>
         <div className="bottom">
            <div className="featured-chart"></div>
         </div>
      </div>
   );
};

export default Featured;
