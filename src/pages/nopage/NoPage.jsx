import { Link, useNavigate } from "react-router-dom";
const NoPage = () => {
    return (
    <div className='nopage'>
       <h1>File Not Found: 404</h1>
       <Link to='/'>
         Back to Home
       </Link>
    </div>
    ) 
  }
  
  export default NoPage;