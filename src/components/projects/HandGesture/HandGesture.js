import demo from "./Demo.mp4";
import blockdiagram from "./HandGesture_Block Diagram.png";
import flowchart1 from "./HandGesture_Flowchart.png";
import flowchart2 from "./HandGesture_Flowchart2.png";
import flowchart3 from "./HandGesture_Flowchart3.png";

function HandGesture() {
    return (
      <div class="container-wrapper">
        <div class="container">
          <h1 class="header-project">Hand Gesture Recognition to Control SOLIDWORKS 3D space</h1>
          <div class="card">
            <div class="card-title">
              Program Block Diagram
            </div>
            <div class="flex flex-row justify-center">
              <div class="m-2">
                <img src={blockdiagram} class="bg-white h-100 border-2" alt="block diagram" />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-title">
              Program Flowcharts
            </div>
            <div class="flex flex-row justify-center">
              <div class="m-2">
                <img src={flowchart1} class="bg-white h-100 border-2" alt="flowchart 1" />
              </div>
              <div class="m-2">
                <img src={flowchart2} class="bg-white h-100 border-2" alt="flowchart 2" />
              </div>
              <div class="m-2">
                <img src={flowchart3} class="bg-white h-100 border-2" alt="flowchart 3" />
              </div>
            </div>
          </div>
          <div class="video-container">
            <video class="video" controls src={demo} type="video/mp4" />
          </div>
        </div>
      </div>
    );
  }
  
  export default HandGesture;