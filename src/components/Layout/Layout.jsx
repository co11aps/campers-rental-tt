import { Toaster } from "react-hot-toast";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Toaster />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
