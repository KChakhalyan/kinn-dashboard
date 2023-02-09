import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
   let data;

   // temporary amount
   const amount = 100;
   const percentage = 20;

   switch (type) {
      case "users":
         data = {
            title: "USERS",
            isMoney: false,
            link: "See all users",
            icon: (
               <PersonOutlineOutlinedIcon
                  className="icon"
                  style={{
                     backgroundColor: "rgba(43, 52, 226, 0.2)",
                     color: "rgba(43, 52, 226, 1)",
                  }}
               />
            ),
         };
         break;
      case "orders":
         data = {
            title: "ORDERS",
            isMoney: false,
            link: "View all orders",
            icon: (
               <ShoppingCartOutlinedIcon
                  className="icon"
                  style={{
                     backgroundColor: "rgba(255, 196, 0, 0.2)",
                     color: "rgba(255, 196, 0, 1)",
                  }}
               />
            ),
         };
         break;
      case "earnings":
         data = {
            title: "EARNINGS",
            isMoney: true,
            link: "View net earnings",
            icon: (
               <MonetizationOnOutlinedIcon
                  className="icon"
                  style={{
                     backgroundColor: "rgba(255, 80, 80, 0.2)",
                     color: "rgba(255, 80, 80, 1)",
                  }}
               />
            ),
         };
         break;
      case "balance":
         data = {
            title: "BALANCE",
            isMoney: true,
            link: "See details",
            icon: (
               <AccountBalanceWalletOutlinedIcon
                  className="icon"
                  style={{
                     backgroundColor: "rgba(109, 255, 96, 0.2)",
                     color: "rgba(109, 255, 96, 1)",
                  }}
               />
            ),
         };
         break;
      default:
         break;
   }

   return (
      <div className="widget">
         <div className="left_widget">
            <span className="title">{data.title}</span>
            <span className="counter">
               {data.isMoney && "$"} {amount}
            </span>
            <span className="link">{data.link}</span>
         </div>
         <div className="right_widget">
            <div className="percentage positive">
               <KeyboardArrowUpOutlinedIcon />
               {percentage} %
            </div>
            {data.icon}
         </div>
      </div>
   );
};

export default Widget;
