import { useState } from "react";
import Header from "./Header";
import StudentProfile from "./StudentProfile";
import Footer from "./Footer";

function App() {
  const studentName = "Anu";
  const studentDepartment = "CSE";
  const studentYear = "3rd Year";

  const [practiceCount, setPracticeCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div>
      <Header />

      <button onClick={() => setPracticeCount(practiceCount + 1)}>
        Complete Practice
      </button>

      <button onClick={() => setPracticeCount(0)}>
        Reset
      </button>

      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile && (
        <StudentProfile
          name={studentName}
          department={studentDepartment}
          year={studentYear}
          practiceCount={practiceCount}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;