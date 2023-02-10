import DataTable from "../../components/datatable/DataTable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";

const List = () => {
   return (
      <div className="list">
         <Sidebar />
         <div className="list-container">
            <Navbar />
            <DataTable />
         </div>
      </div>
   );
};

export default List;
