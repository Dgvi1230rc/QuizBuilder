import { useState } from "react";
import "./App.css";

function App() {
  const [role, setRole] = useState("user");

  return (
    <div className="app">
      <header className="navbar">
        <h1>Quiz Builder</h1>

        <nav>
          <button onClick={() => setRole("user")}>
            User
          </button>

          <button onClick={() => setRole("admin")}>
            Admin
          </button>
        </nav>
      </header>

      <main className="container">
        {role === "admin" ? (
          <AdminDashboard />
        ) : (
          <UserDashboard />
        )}
      </main>
    </div>
  );
}

function AdminDashboard() {
  return (
    <section>
      <h2>Admin Dashboard</h2>
      <p>Create and manage your quizzes.</p>

      <button className="primary">
        Create Quiz
      </button>
    </section>
  );
}

function UserDashboard() {
  return (
    <section>
      <h2>Welcome to Quiz Builder</h2>
      <p>Select a quiz and test your knowledge.</p>

      <button className="primary">
        Start Quiz
      </button>
    </section>
  );
}

export default App;