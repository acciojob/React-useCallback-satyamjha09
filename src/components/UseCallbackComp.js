import React, { useCallback, useState } from 'react'

const UseCallbackComp = () => {

    const [skills, setSkills] = useState(["HTML", "CSS", "javascript", "React"]);
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
    <div>
        <h1> Manage Skills </h1>
        <div>
            <input 
                id="skill-input" 
                type='text' 
                value={skill} 
                placeholder='Enter skill' 
                onChange={(e) => setSkill(e.target.value)}
            />

            <button
              id='skill-add-btn'
              onClick={addSkill}

            >
                Add Skill
            </button>
            <SkillList skills={skills} removeSkill={removeSkill}  />
        </div>
    </div>
  )
};


const SkillList = ({skills, removeSkill}) => {
    return (
        <ul className="list-disc">
        {skills.map((skill, idx) => (
            <li
            key={idx}
            id={`skill-number-${idx}`}
            className="cursor-pointer p-2 bg-gray-200 mb-2 rounded"
            onClick={() => removeSkill(skill)}
            >
            {skill}
            </li>
      ))}
    </ul>
    )
}

export default UseCallbackComp