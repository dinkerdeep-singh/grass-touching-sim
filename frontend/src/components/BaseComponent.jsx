import axios from 'axios'
import { useState } from 'react';

function BaseComponent() {
  const [grass, setGrass] = useState("");

  async function updateGrass() {
    const data = await axios.get("http://localhost:3000/api/v1/image");
    console.log(data.data.image.id)
    setGrass(data.data.image.image);
  }
  return (
    <>
    <div>
      <button onClick={updateGrass}>Touch Grass</button>
      <br />
    </div>
    {grass === "" ? <div>^ Press this homie </div> : <img src={"data:image/png;base64, " + grass} alt="touching grass" />}
    </>
  )
}

export default BaseComponent
