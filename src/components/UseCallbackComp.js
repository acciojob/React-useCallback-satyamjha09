import React, { useCallback, useState } from 'react'

const UseCallbackComp = () => {

  const [skills, setSkills] = useState(["HTML", "CSS", "Javascript", "React"]);
  const [skill, setSkill] = useState("");


  const addSkill = useCallback(() => {
    if (skill.trim() !== "" && !skills.includes(skill)) {
      setSkills((prevSkills) => [...prevSkills, skill]);
    }
    setSkill("");
  }, [skill, skills]);

  const removeSkill = useCallback((skillToRemove) => {
    setSkills((prevSkills) => prevSkills.filter((s) => s !== skillToRemove));
  }, []);


  return (
    <section>
    <h1 id="heading">Manage Skills</h1>
    <div>
      <input
        id="skill-input"
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Enter skill"
      />
      <button id="skill-add-btn" onClick={addSkill}>Add Skill</button>
    </div>
    <SkillList skills={skills} removeSkill={removeSkill} />
  </section>
  );
};


const SkillList = ({ skills, removeSkill  }) => {
  return (
    <ul>
      {skills.map((skill, idx) => (
        <li
          key={idx}
          id={`skill-number-${idx}`}
          onClick={() => removeSkill(skill)}
        >
          {skill}
        </li>
      ))}

    </ul>
  )
}

export default UseCallbackComp