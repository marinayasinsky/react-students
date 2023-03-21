import React from 'react';
import Score from './Score';

function Students(props) {
  const { studentData } = props;

  return (
    <div>
      {studentData.students.map(student => (
        <div key={student.name}>
          <h2>{student.name}</h2>
          <p>{student.bio}</p>
          <h3>Scores:</h3>
          <ul>
            {student.scores.map(score => (
              <li key={score.date}>
                <Score date={score.date} score={score.score} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Students;
