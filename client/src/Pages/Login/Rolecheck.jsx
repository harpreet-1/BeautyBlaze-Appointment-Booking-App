import { useEffect, useState } from "react"
import SignUpCust from "./SignUpCust"
import SignUpPro from "./SignUpPro"


function Rolecheck(){
    const [isProfessional, setIsProfessional] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsProfessional(event.target.checked);
  };

  return (
    <div>
      <h2 id="roleCheckheading">Registration Form</h2>

      <label htmlFor="professionalCheckbox" className="checkbox-group">
      <input
        type="checkbox"
        id="professionalCheckbox"
        checked={isProfessional}
        onChange={handleCheckboxChange}
      />
      Professional Registration</label><br /><br />

      {isProfessional ? <SignUpPro /> : <SignUpCust />}
    </div>
  );
}

export default Rolecheck;