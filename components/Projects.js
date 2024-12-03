function replaceProjects() {
  const Smiley = "components/projects/Smiley.js";

  const component = document.createElement('div');
  component.id = 'main-content';
  component.innerHTML = `          
            <h1 class="header-primary">Projects</h1>
            <div class="card">
                <div class="card-title-secondary">
                <div class="card-title">
                ASCII Art Rotate Smiley Face | C · Mathematics and Geometry · 3D Graphics (2024)
                </div>
                </div>
                <div class="card-text">
                Designed and implemented a C program to render a rotating smiley face using only ASCII characters. The program renders the smiley face and applies a rotation matrix to simulate rotational movement. It is then projected onto the screen using perspective distance. The 3D effect is achieved through the manipulation of ASCII text.
                </div>
              <button onclick="replaceSmiley()" style="text-align:right;">View >></button>
            </div>
            <div class="card">
                <div class="card-title-secondary">
              <div class="card-title">
              Diffusion Model with classifier guidance | Probabilistic Models · Gitlab · Git · PyTorch · Python (2024)
              </div>
                </div>
              <div class="card-text">
              Implemented and validated the concept of classifier guidance in diffusion models as presented in the paper "Diffusion Models Beat GANs on Image Synthesis" by Prafulla Dhariwal and Alex Nichol. Selected the CelebA dataset and downscaled the images to 64x64 for experimentation. Trained a diffusion model with a U-Net architecture on the dataset, alongside a classifier built with an encoder U-Net, using celebrities as classes. Integrated the classifier's output into the diffusion model's denoising process, allowing the image generation to be guided by the classifier, resulting in more controlled and accurate image synthesis.
              </div>
            </div>
            <div class="card">
                <div class="card-title-secondary">
              <div class="card-title">
              Kaleidoscope Effect | Shaders · C++ · OpenGL Shading Language (GLSL) (2023)
              </div>
                </div>
              <div class="card-text">
              Developed a shader to simulate a kaleidoscope effect using GLSL and OpenGL. Created a quad surface as the platform to display the kaleidoscope effect, with lighting applied based on the vertices' normals. The surface is divided into different regions at fixed angles from the center, with the angle being adjustable. Each region is mapped with a sub-region of an open-source image, and the selection of the sub-region is controllable. Odd-numbered regions are mapped with the sampled normal image, while even-numbered regions are mapped with the sampled flipped image, creating a kaleidoscope effect.
              </div>
            </div>
            <div class="card">
                <div class="card-title-secondary">
              <div class="card-title">
              Life of an Apple tree | Computer Graphics · C++ · OpenCL · Computer Animation (2023)
              </div>
                </div>
              <div class="card-text">
              Developed a computer graphics animation depicting the life cycle of an apple tree. Utilized open-source models for the tree and apple, with OpenCL for vertex loading and color rendering. The animation begins with the display of the tree model, which then rotates horizontally to simulate falling. An apple is gradually introduced, and the tree becomes transparent, suggesting the apple's detachment. The apple then undergoes a vertical shrinkage and color transition from red to brown, depicting decomposition. Subsequently, a new apple emerges from the original spot, scaling from zero to full size, signifying regeneration. This cycle repeats, illustrating the continuous life cycle of an apple tree.
              </div>
            </div>
            <div class="card">
                <div class="card-title-secondary">
              <div class="card-title">
              Hand Gesture Recognition to Control SOLIDWORKS 3D space | Python (Programming Language) · SOLIDWORKS API · Supervised Learning · Convolutional Neural Networks (CNN) · Image Processing (2020)
              </div>
                </div>
              <div class="card-text">
              Developed a hand gesture recognition system to control the SOLIDWORKS 3D space. Utilizing a webcam, the system captures video and employs a trained convolutional neural network for hand and gesture detection. Hand tracking is achieved using a Kalman filter. The system features a GUI to display video frames and bounding boxes for hand detection. Upon recognizing and tracking specific hand gestures, the system translates, scales, and rotates the SOLIDWORKS 3D space, enabling intuitive and efficient user interaction.
              </div>
            </div>
            <div class="card">
                <div class="card-title-secondary">
              <div class="card-title">
              Smart Door with Face Detection | Python (Programming Language) · C++ · Node-RED · Image Processing · Serial Communications  (2020)
              </div>
                </div>
              <div class="card-text">
              Developed a smart door security system utilizing a Raspberry Pi 3 integrated with a camera module for facial recognition. The system processes video frames for face detection and is equipped with an Arduino-based RFID module for card reading. Utilizing serial communication, the Arduino sends the card's UID to the Raspberry Pi 3 for verification. If the UID is unregistered, the system instructs the Arduino to keep the sliding door locked and sends an alert to a Node-RED server via MQTT protocol, notifying users of unauthorized access attempts.
              </div>
            </div>
      `;
  const placeholder = document.getElementById('main-content');
  if (placeholder)
    placeholder.replaceWith(component);

  return;
  }