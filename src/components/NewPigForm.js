import React, { useState } from "react";

function NewPigForm({onPigFormSubmit}) {
  const [formData, setFormData] = useState({
    pigName: "",
    pigSpecialty: "",
    pigGreased: false,
    pigWeight: 0,
    pigHighestMedal: "wood",
    pigImage: ""
  });

  const medals = ["wood", "bronze", "silver", "gold", "platinum", "diamond"];
  const medalsOption = medals.map(medal => {
      return (<option key={medal}>{medal}</option>);
  });

  function handleSubmit(event) {
    event.preventDefault();
    const newPig = {
      name: formData.pigName,
      specialty: formData.pigSpecialty,
      greased: formData.pigGreased,
      weight: formData.pigWeight,
      "highest medal achieved": formData.pigHighestMedal,
      image: formData.pigImage
    };
    console.log(newPig);
    onPigFormSubmit(newPig);
  }

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;
  
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }
  
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <div>
      <h3 className="smallHeader">Add a Pig</h3>
      <form className="new-pig-form" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="pigName" value={formData.pigName} onChange={handleChange} />
        </div>
        <div>
          <label>Specialty:</label> 
          <input type="text" name="pigSpecialty" value={formData.pigSpecialty} onChange={handleChange} />
        </div>
        <div>
          <label>Greased:</label>   
          <input type="checkbox" name="pigGreased" value={formData.pigGreased} onChange={handleChange} />
        </div>
        <div>
          <label>Weight (pounds):</label>  
          <input type="text" name="pigWeight" value={formData.pigWeight} onChange={handleChange} />
        </div>
        <div>
          <label>Highest Medal Achieved:</label>
          <select name="pigHighestMedal" value={formData.pigHighestMedal} onChange={handleChange} >
            {medalsOption}
          </select>
        </div>
        <div>
          <label>Image (Url):</label>
          <input type="text" name="pigImage" value={formData.pigImage} onChange={handleChange} />
        </div>
        <div>
          <input type="submit" value="Add pig" />
        </div>
      </form>
    </div>
  );
}

export default NewPigForm;