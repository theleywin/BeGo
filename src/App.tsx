import { BrowserRouter, Route, Routes } from "react-router";
import CargoOrders from "./pages/CargoOrder.tsx";
import MenuBar from "./components/MenuBar.tsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MenuBar />}>
                        <Route path="/" element={<CargoOrders />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
