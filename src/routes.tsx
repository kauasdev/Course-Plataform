import { ReactDOM } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";


export function AppRoutes(){
    return (
        <Router>
            <Routes>
                {/* <Route path="" element={}/> */}
                <Route path="/" element={<LandingPage />}/>
            </Routes>
        </Router>
    )
}