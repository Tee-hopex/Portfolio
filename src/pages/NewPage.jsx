import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";



function NewPage () {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }

    return (
        <>
            <h1 style={{color: "red"}}>This is the NEWPAGE</h1>

            <button onClick={handleClick}>HOME PAGE</button>

            <Link to = "/#s2">Home page</Link>
        </>
    )
}

export default NewPage