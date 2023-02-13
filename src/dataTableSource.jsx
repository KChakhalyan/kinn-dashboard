export const userColumns = [
   { field: "id", headerName: "ID", width: 70 },
   {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
         return (
            <div className="cellWithImg">
               <img className="cellImg" src={params.row.img} alt="avatar" />
               {params.row.username}
            </div>
         );
      },
   },
   {
      field: "email",
      headerName: "Email",
      width: 230,
   },

   {
      field: "age",
      headerName: "Age",
      width: 100,
   },
   {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
         return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
      },
   },
];

// Temporary data

export const userRows = [
   {
      id: 1,
      username: "Snow",
      img: "https://media.gq-magazine.co.uk/photos/62ac38f82da9f5f89888eba9/16:9/w_640,c_limit/jon-snow-series-1200.jpeg",
      status: "Active",
      email: "1snow@gmail.com",
      age: 35,
   },
   {
      id: 2,
      username: "Jamie Lannister",
      img: "https://imgix.bustle.com/uploads/image/2020/4/10/54bfef8a-28a8-40c3-b175-133500e67f90-screen-shot-2020-04-10-at-52939-pm.png?w=2000&h=1090&fit=crop&crop=faces&auto=format%2Ccompress",
      email: "2snow@gmail.com",
      status: "Passive",
      age: 42,
   },
   {
      id: 3,
      username: "Cersei Lannister",
      img: "https://pyxis.nymag.com/v1/imgs/9eb/c1a/a838f7bffb25ed90a376864c85ae94c578-14-cersei-lannister.rsquare.w700.jpg",
      email: "3snow@gmail.com",
      status: "Pending",
      age: 45,
   },
   {
      id: 4,
      username: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4snow@gmail.com",
      status: "Active",
      age: 16,
   },
   {
      id: 5,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "5snow@gmail.com",
      status: "Passive",
      age: 22,
   },
   {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6snow@gmail.com",
      status: "Active",
      age: 15,
   },
   {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7snow@gmail.com",
      status: "Passive",
      age: 44,
   },
   {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8snow@gmail.com",
      status: "Active",
      age: 36,
   },
   {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "Pending",
      age: 65,
   },
   {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "Active",
      age: 65,
   },
];
