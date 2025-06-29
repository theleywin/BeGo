import { useNavigate, Outlet, useLocation } from "react-router-dom";
import Notification from "../assets/Notification.tsx";
import ArrowLeft from "../assets/ArrowLeft.tsx";


const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isDetailsPage = location.pathname === '/details';

    return (
        <>
            <header className="flex items-center justify-between h-[56px] !mx-[46px] !mt-[65px] !mb-[18px]">
                <button onClick={() => navigate('/')}>
                    <ArrowLeft/>
                </button>
                <h1>{isDetailsPage ? 'Cargo Details' : 'Cargo Orders'}</h1>
                <Notification/>
            </header>
            <Outlet />
        </>
    )
}

export default Header