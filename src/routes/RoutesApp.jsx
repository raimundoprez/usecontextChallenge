import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {ThemeValues, useTheme} from "../themes/ThemeContext.jsx";
import Home from "../pages/Home.jsx";
import MyJob from "../pages/MyJob.jsx";
import Profile from "../pages/Profile.jsx";
import Button from "../components/Button.jsx";

function RoutesApp() {
    const {theme} = useTheme();
    const themeName = ThemeValues[theme];

    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/myjob">MyJob</Link>
                <Link to="/profile">Profile</Link>
            </nav>

            <section className={"App " + themeName}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/myjob" element={<MyJob/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>

                <Button/>
            </section>
        </Router>
    );
}

export default RoutesApp;