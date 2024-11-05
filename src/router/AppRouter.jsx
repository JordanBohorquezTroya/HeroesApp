import {  Route, Routes } from "react-router";

import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRouter } from "../heroes/routes/HeroesRouter";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  return (
    <>

   
      <Routes>
        <Route path="login" element={
          <PublicRouter>
            <LoginPage/>
          </PublicRouter>
        
        }/>


        <Route path="/*" element={
          <PrivateRouter>
            <HeroesRouter/>
          </PrivateRouter>
        } />
      </Routes>
      
    </>
  );
};
