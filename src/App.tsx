import {Home} from "./pages/homepage/Home.tsx";
import {Dashboard} from "./pages/dashboard/Dashboard.tsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {NotFound} from "./pages/NotFound.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard/:id" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App
