import React, { useState } from "react";

function NewPigForm({onPigFormSubmit}) {
  const [formData, setFormData] = useState({
    pigName: "",
    pigSpecialty: "",
    pigGreased: false,
    pigWeight: 0,
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
      "highest medal achieved": formData.highestMedal,
      image: formData.pigImage
    };
    onPigFormSubmit(newPig);
  }

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;
  
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <form className="new-pig-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="pigName" value={formData.pigName} onChange={handleChange} />
      </label>
      <label>
        Specialty
        <input type="text" name="pigSpecialty" value={formData.pigSpecialty} onChange={handleChange} />
      </label>
      <label>
        Greased
        <input type="checkbox" name="pigGreased" value={formData.pigGreased} onChange={handleChange} />
      </label>
      <label>
        Highest Medal Achieved
        <select name="pigHighestMedal" value={formData.pigHighestMedal} onChange={handleChange} >
          {medalsOption}
        </select>
      </label>
      <label>
        Image
        <input type="text" name="pigImage" value={formData.pigImage} onChange={handleChange} />
      </label>
      <input type="submit" value="Add pig" />
    </form>
  );
}

export default NewPigForm;