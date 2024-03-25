import { Link } from "react-router-dom"

function Projects() {
    return (
      <div class="container-wrapper">
        <div class="container">
          <h1 class="header-primary">Projects</h1>
            <div class="card hover:cursor-pointer">
              <div class="card-title">
              Diffusion Model with classifier guidance | Probabilistic Models · Gitlab · Git · PyTorch · Python (2024)
              </div>
              <div class="card-text">
              Implemented and validated the effect of classifier guidance from a paper.
              </div>
            </div>
            <div class="card hover:cursor-pointer">
              <div class="card-title">
              Kaleidoscope Effect | Shaders · C++ · OpenGL Shading Language (GLSL) (2023)
              </div>
              <div class="card-text">
              Designed and developed a shader effect that imitate the Kaleidoscope effect using GLSL.
              </div>
            </div>
            <div class="card hover:cursor-pointer">
              <div class="card-title">
              Life of an Apple tree | Computer Graphics · C++ · OpenCL · Computer Animation (2023)
              </div>
              <div class="card-text">
              Designed and developed a C++ program that visualize an apple tree through OpenCL and animate it.
              </div>
            </div>
            <div class="card hover:cursor-pointer">
              <div class="card-title">
              Hand Gesture Recognition to Control SOLIDWORKS 3D space | Python (Programming Language) · SOLIDWORKS API · Supervised Learning · Convolutional Neural Networks (CNN) · Image Processing (2020)
              </div>
              <div class="card-text">
                Developed a python script by using convolutional neural networks and enabled users to interact with SOLIDWORKS 3d space using hand gestures.
              </div>
            </div>
            <div class="card hover:cursor-pointer">
              <div class="card-title">
              Smart Door with Face Detection | Python (Programming Language) · C++ · Node-RED · Image Processing · Serial Communications  (2020)
              </div>
              <div class="card-text">
              Designed and implemented a security smart door prototype system able to send email notifications through Node-RED server using Arduino, and Raspberry Pi 3.
              </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Projects;