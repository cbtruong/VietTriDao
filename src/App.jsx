import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SC004 from "./pages/SC004";
import SC002_3 from "./pages/SC002_3";

const generateUsers = () => {
  return [
    { email: "user@example.com", password: "123456", phone: "1234567890" },
    { email: "user2@example.com", password: "password2", phone: "1234567891" },
    { email: "user3@example.com", password: "password3", phone: "1234567892" },
    { email: "user4@example.com", password: "password4", phone: "1234567893" },
    { email: "user5@example.com", password: "password5", phone: "1234567894" },
    { email: "user6@example.com", password: "password6", phone: "1234567895" },
    { email: "user7@example.com", password: "password7", phone: "1234567896" },
    { email: "user8@example.com", password: "password8", phone: "1234567897" },
    { email: "user9@example.com", password: "password9", phone: "1234567898" },
    { email: "user10@example.com", password: "password10", phone: "1234567899" },
  ];
};

function App() {
  useEffect(() => {
    const users = generateUsers();
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.removeItem("user")
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SC004 />} />
        <Route path="/login" element={<SC002_3 />} />
      </Routes>
    </Router>
  );
}

export default App;
