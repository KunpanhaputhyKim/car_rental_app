import { useEffect } from "react";
import NavbarOwner from "../../components/owner/NavbarOwner";
import Sidebar from "../../components/owner/Sidebar";
import { Outlet } from "react-router-dom";
import useAppStore from "../../store/useAppStore";

// Layout Component
const Layout = () => {
  // Getting state from the app store
  const isOwner = useAppStore((state) => state.isOwner);
  const navigate = useAppStore((state) => state.navigate);

  useEffect(() => {
    if (isOwner === false && typeof navigate === "function") {
      navigate("/");
    }
  }, [isOwner, navigate]);

  return (
    <div className="flex flex-col">
      <NavbarOwner />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
