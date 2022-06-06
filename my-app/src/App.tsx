import "./App.css";
import SignUp from "./components/forms/SignUp/SignUp";
import SignIn from "./components/forms/SignIn/SignIn";
import Dashboard from "./components/dashboard/Dashboard";
import Jobs from "./components/dashboard/Jobs/Jobs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendar from "./components/dashboard/Calendar/Calendar";
import Candidates from "./components/dashboard/Candidates/Candidates";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/candidates" element={<Candidates />} />
      </Routes>
    </Router>
  );
};

export default App;
