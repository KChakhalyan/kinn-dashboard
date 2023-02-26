import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import SystemHelth from "./components/sysHelth/SystemHelth";
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
import { useContext, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Stats from "./components/Stats/Stats";
import Settings from "./components/settings/Settings";

function App() {
   const { darkMode } = useContext(DarkModeContext);

   return (
      <div className={darkMode ? "app dark" : "app"}>
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
                  <Route path="/stats">
                     <Route index element={<Stats />} />
                  </Route>
                  <Route path="/system" element={<SystemHelth />} />
                  <Route path="/settings" element={<Settings />} />
                 
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
