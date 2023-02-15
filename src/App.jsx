import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import "./style/dark.scss";
import {
   createBrowserRouter,
   RouterProvider,
   Route,
   Link,
   Routes,
   BrowserRouter,
} from "react-router-dom";
import { userInputs, productInputs } from "./formSource";

function App() {
   return (
      <div className="app dark">
         <BrowserRouter>
            <Routes>
               <Route path="/">
                  <Route index element={<Home />}></Route>
                  <Route path="login" element={<Login />}></Route>
                  <Route path="users">
                     <Route index element={<List />} />
                     <Route path=":userId" element={<Single />} />
                     <Route path="new" element={<New inputs={userInputs} title="Add new user" />} />
                  </Route>
                  <Route path="products">
                     <Route index element={<List />} />
                     <Route path=":productId" element={<Single />} />
                     <Route
                        path="new"
                        element={<New inputs={productInputs} title="Add new product" />}
                     />
                  </Route>
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
