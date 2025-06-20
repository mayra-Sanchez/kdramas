import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Detail from "../../pages/detail/Detail";
import Favoritos from "../../pages/favoritos/Favoritos";
import Calendario from "../../pages/calendario/Calendario";
import Descubre from "../../pages/descubre/Descubre";
import Visto from "../../pages/visto/Visto";
import QuieroVer from "../../pages/quiero-ver/QuieroVer";
import EnEmision from "../../pages/en-emision/EnEmision";

const RoutesProject = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detalle/:id" element={<Detail />} />
                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="/calendario" element={<Calendario />} />
                <Route path="/descubre" element={<Descubre />} />
                <Route path="/visto" element={<Visto />} />
                <Route path="/quiero-ver" element={<QuieroVer />} />
                <Route path="/en-emision" element={<EnEmision />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesProject;