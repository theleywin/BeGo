import { BrowserRouter, Route, Routes } from "react-router";
import CargoOrders from "./pages/CargoOrder.tsx";
import MenuBar from "./components/MenuBar.tsx";
import NotFound from "./pages/NotFound";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MenuBar />}>
                        <Route path="/" element={<CargoOrders />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
