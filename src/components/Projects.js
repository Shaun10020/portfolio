import { Link } from "react-router-dom"

function Projects() {
    return (
      <div class="container-wrapper">
        <div class="container">
          <h1 class="header-primary">Projects</h1>
            <div class="card hover:cursor-pointer">
              <div class="card-title">
                Hand Gesture Recognition to Control SOLIDWORKS 3D space (2020)
              </div>
              <div class="card-text">
                Developed a python script by using convolutional neural networks and enabled users to interact with SOLIDWORKS 3d space using hand gestures.
              </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Projects;