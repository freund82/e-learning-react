import "./layout.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
   return( 
   <>
        <Header />
        <main className="container">{children}</main>
        <Footer />
    </>
   )
};

export default Layout;