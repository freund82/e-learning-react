import "./layout.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HeaderBottom from "../HeaderBottom/HeaderBottom";
import { Outlet, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
   const location = useLocation();

   // Массив путей, где должен показываться HeaderBottom
  const pagesWithHeaderBottom = [
    '/courses',
    '/blog',
    // можно добавить другие пути
  ];

    // Проверяем текущий путь
  const showHeaderBottom = pagesWithHeaderBottom.some(path => 
    location.pathname.startsWith(path)
  );

   return( 
   <>
        <Header />
        {showHeaderBottom && <HeaderBottom />}
        <main><Outlet /></main>
        <Footer />
    </>
   )
};

export default Layout;