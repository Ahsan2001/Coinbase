import { Link } from "react-router-dom";
import style from "./style.module.css";
const Error:React.FC = () => {
  document.title = "Error 404 page here"; 
  return (
      <div className={style.Error__page}>
        <h1>Error 404 Page is not available or temporary down </h1>
        <Link to="/">Go to Home page</Link>
      </div>
  )
}

export default Error