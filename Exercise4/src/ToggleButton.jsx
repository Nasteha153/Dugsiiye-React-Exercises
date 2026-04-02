import { useState } from 'react';
const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn(!isOn);
    return (
        <div>
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
     {isOn && <p> The button is on.</p>}
       {!isOn && <p> The button is off.</p>}
    </div>
    );
}
export default ToggleButton;
