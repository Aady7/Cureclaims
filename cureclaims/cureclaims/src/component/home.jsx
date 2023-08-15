import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
function Home(){
    return(<div  >
        
        <>
      <nav>
        <ul className="flex justify-center pt-10 ">
          
          <li className="px-4 hover:underline" >
            <Link to="/">Hospital Info</Link>
          </li>
          <li  className="px-4 hover:underline">
            <Link to="/users">User Info</Link>
          </li>
          <li  className="px-4 hover:underline">
            <Link to="/illness">Illness</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
    </div>)
}
export default Home