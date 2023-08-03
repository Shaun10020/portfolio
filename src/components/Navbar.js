import { Link } from "react-router-dom"

const Navbar =()=>{
      return (
            <div class="flex items-center justify-start flex-wrap bg-orange-500">
                  {/* <Link class="p-4 text-black font-mono font-bold" to="/">Home</Link>
                  <Link class="p-4 text-black font-mono font-bold" to="/about">About</Link> */}
                  <Link class="p-4 text-black font-mono font-bold" to="/">About</Link>
                  <Link class="p-4 text-black font-mono font-bold" to="/careers">Careers</Link>
                  <Link class="p-4 text-black font-mono font-bold" to="/education">Education</Link>
                  <Link class="p-4 text-black font-mono font-bold" to="/projects">Projects</Link>
                  <Link class="p-4 text-black font-mono font-bold" to="/skills">Skills</Link>
                  <Link class="p-4 text-black font-mono font-bold" to="/contact">Contact</Link>
            </div>
      )
}
export default Navbar;