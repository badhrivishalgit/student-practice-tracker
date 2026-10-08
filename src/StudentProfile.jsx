import { useEffect } from "react";

function StudentProfile(props) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `Practice Sessions: ${props.practiceCount}`;

    return () => {
      document.title = previousTitle;
    };
  }, [props.practiceCount]);

  return (
    <div style={{ border: "1px solid black", padding: "15px", margin: "10px 0" }}>
      <p>Name: {props.name}</p>
      <p>Department: {props.department}</p>
      <p>Year: {props.year}</p>
      <p>Practice Sessions Completed: {props.practiceCount}</p>
    </div>
  );
}

export default StudentProfile;