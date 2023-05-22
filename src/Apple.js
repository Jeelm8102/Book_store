// As only return statement is to be done, we can directly write it without return keyword and curly braces or parathesis.
import { useNavigate } from "react-router-dom";

export const Apple = () => {

    const Navigate = useNavigate();

    const onHomePageButtonClick = () =>{
        Navigate("/");
    };

    return (
        <div>
            <div>Apple Page</div>
        
            <button onClick={onHomePageButtonClick}>Navigate to Home page</button>
        </div>
    );
};