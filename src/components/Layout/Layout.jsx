import "./layout.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HeaderBottom from "../HeaderBottom/HeaderBottom";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Layout = ({ children }) => {
   const location = useLocation();
   const [courseTitle, setCourseTitle] = useState("");

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
        {showHeaderBottom && <HeaderBottom location={location} courseTitle={courseTitle} />}
        <main><Outlet context={[setCourseTitle]} /></main>
        <Footer />
    </>
   )
};

export default Layout;