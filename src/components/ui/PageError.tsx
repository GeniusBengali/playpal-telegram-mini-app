import {Link} from "react-router-dom";

const PageError = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <p>Oops! something went wrong</p>
      <Link to="/" className="text-yellow-600">&larr; Go Back</Link>
    </div>
  )
}

export default PageError