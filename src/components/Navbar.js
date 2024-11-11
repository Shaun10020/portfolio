import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";


function toggleHide() {
      var x = document.getElementById("navbar");
      if (x.classList.contains("hidden")) 
      {
            x.classList.remove("hidden");
            x.classList.add("flex");
      } 
      else 
      {
            x.classList.add("hidden");
            x.classList.remove("flex");
      }
    }
  

const Navbar =()=>{
      return (
            <div class="navbar">
                  <div class="md:hidden p-2 flex justify-center" onClick={toggleHide}>
                        <AiOutlineMenu/>
                  </div>
                  <div id="navbar" class="hidden md:flex flex-col sm:flex-row items-center justify-start flex-wrap">
                        {/* <Link class="p-4 text-black font-mono font-bold" to="/">Home</Link>
                        <Link class="p-4 text-black font-mono font-bold" to="/about">About</Link> */}
                        <Link class="navbar-item" to="/">About</Link>
                        <Link class="navbar-item" to="/careers">Careers</Link>
                        <Link class="navbar-item" to="/education">Education</Link>
                        <Link class="navbar-item" to="/projects">Projects</Link>
                        <Link class="navbar-item" to="/skills">Skills</Link>
                        <Link class="navbar-item" to="/contact">Contact</Link>
                  </div>
            </div>
      )
}
export default Navbar;