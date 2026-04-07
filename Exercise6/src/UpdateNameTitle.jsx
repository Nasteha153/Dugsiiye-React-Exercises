import { useEffect,useState } from "react";
const UpdateNameTitle = () => {
    const [name,setName] = useState("");
    const [greeting,setGreeting] = useState("");
    useEffect(() => {
        if(!name){
            document.title = "Welcome";
        }else{
            document.title = `${greeting} ${name}`;
        }
    }, [name,greeting]);
    return (
        <div>
            <h2>Enter your name:</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <h2>Choose Greeting</h2>
            <input type="text" value={greeting} onChange={(e) => setGreeting(e.target.value)} />
        </div>
    );

}
export default UpdateNameTitle;