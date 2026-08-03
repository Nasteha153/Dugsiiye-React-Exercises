import { useReducer } from "react";
const initialState ={
    step: 1,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
}
const reducer =(state,action)=>{
    switch(action.type){
        case "updateField":
            return {...state, [action.field]: action.value};
        case "nextStep":
            return {...state, step: state.step + 1};
        case "prevStep":
            return {...state, step: state.step - 1};
        case "reset":
            return initialState;
        default:
            return state;
    }
};

const MultStepForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {step, firstName, lastName, email, phone} = state;

    const handleChange = (e) => {
        dispatch({type: "updateField", field: e.target.name, value: e.target.value});
    }
    return (
        <div>
            <h2>Multi Step Form</h2>
            {step === 1 && (
                <div>
                    <h3>Step 1</h3> 

                    <input type="text" name="firstName" value={firstName} onChange={handleChange} placeholder="First Name" />
                    <input type="text" name="lastName" value={lastName} onChange={handleChange} placeholder="Last Name" />
                    <button onClick={() => dispatch({type: "nextStep"})}>Next</button>
                </div>
            )}
            {step === 2 && (
                <div>
                    <h3>Step 2</h3>
                    <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" />
                    <input type="text" name="phone" value={phone} onChange={handleChange} placeholder="Phone" />
                    <button onClick={() => dispatch({type: "prevStep"})}>Previous</button>
                    <button onClick={() => dispatch({type: "nextStep"})}>Next</button>
                </div>
            )}
            {step === 3 && (    
                <div>
                    <h3>Step 3</h3>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <button onClick={() => dispatch({type: "prevStep"})}>Previous</button>
                    <button onClick={() => dispatch({type: "reset"})}>Reset</button>
                </div>
            )}

        </div>
    );
}
export default MultStepForm;