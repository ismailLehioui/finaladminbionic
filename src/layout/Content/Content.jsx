import "./Content.css";
import ContentTop from '../../components/ContentTop/ContentTop';
// import ContentMain from '../../components/ContentMain/ContentMain';
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Content = () => {
  return (
    <div className='app'>
      <Sidebar />
      <div className='main-content'>
        <ContentTop />
        <Outlet />
      </div>
    </div>
  )
}

export default Content
