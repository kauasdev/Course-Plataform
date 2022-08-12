import { ReactDOM } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/Login";
import { SignUpPage } from "./pages/SignUpPage";


export function AppRoutes(){
    return (
        <Router>
            <Routes>
                {/* <Route path="" element={}/> */}
                <Route path="/" element={<LandingPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/signup" element={<SignUpPage />}/>
            </Routes>
        </Router>
    )
}