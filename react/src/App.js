import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [PetDetails, setPetDetails] = useState({
    nameOfPet: "",
    speciesOfPet: "default",
    genderOfPet: "default",
  });

  const PetDetailsHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPetDetails((values) => ({ ...values, [name]: value }));
  };

  const FormSubmitHandler = (event) => {
    event.preventDefault();
    console.log(PetDetails);
    axios
    .post("http://localhost:8888/Expawts/addPet", PetDetails)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };  

  return (
    <div className="App">
      <div className="formCon">
        <h1>Expawts: Pet Relocation</h1>
        <p>Sign up below and we will send you a quote!</p>
        <form onSubmit={FormSubmitHandler}>
          <input
            id="nameOfPet"
            name="nameOfPet"
            value={PetDetails.nameOfPet}
            placeholder="Name of Pet"
            onChange={PetDetailsHandler}
          />
          <select
            id="speciesOfPet"
            name="speciesOfPet"
            value={PetDetails.speciesOfPet}
            onChange={PetDetailsHandler}
          >
            <option value={"default"} disabled hidden>
              Species of Pet
            </option>
            <option value={"Canine"}>Canine</option>
            <option value={"Feline"}>Feline</option>
            <option value={"Equine"}>Equine</option>
            <option value={"Rodent"}>Rodent</option>
            <option value={"Avian"}>Avian</option>
            <option value={"Reptile"}>Reptile</option>
          </select>
          <select
            id="genderOfPet"
            name="genderOfPet"
            value={PetDetails.genderOfPet}
            onChange={PetDetailsHandler}
          >
            <option value={"default"} disabled hidden>
              Gender/Sex of Pet
            </option>
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
          </select>
          <input
            id="Age"
            name="Age"
            value={PetDetails.Age}
            placeholder="Age of Pet (years) "
            onChange={PetDetailsHandler}
          />
          <input
            id="microChipID"
            name="microChipID"
            value={PetDetails.microChipID}
            placeholder="Pet MicroChip Id"
            onChange={PetDetailsHandler}
          />
          <input
            id="ownerName"
            name="ownerName"
            value={PetDetails.ownerName}
            placeholder="Pet Owner Name"
            onChange={PetDetailsHandler}
          />
          <input
            id="ownerIDNumber"
            name="ownerIDNumber"
            value={PetDetails.ownerIDNumber}
            placeholder="Pet Owner ID Number"
            onChange={PetDetailsHandler}
          />
          <input
            id="exportOrigin"
            name="exportOrigin"
            value={PetDetails.exportOrigin}
            placeholder="Export Origin"
            onChange={PetDetailsHandler}
          />
          <input
            id="ExportDestination"
            name="ExportDestination"
            value={PetDetails.ExportDestination}
            placeholder="Export Destination"
            onChange={PetDetailsHandler}
          />

          <input type="submit" value="Lets Export That Pet!" />
        </form>
      </div>
    </div>
  );
}

export default App;
