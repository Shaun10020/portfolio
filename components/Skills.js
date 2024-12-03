function replaceSkills() {
  const component = document.createElement('div');
  component.id = 'main-content';
  component.innerHTML = `
          <h1 class="header-primary">Skills</h1>
          <div class="card">
            <div class="card-title-secondary">
<div class="card-title">
              Programming Language
            </div>
            </div>
            <ul>
              <li>
                C++
              </li>
              <li>
                C
              </li>
              <li>
                Python
              </li>
            </ul>
          </div>
          <div class="card">
            <div class="card-title-secondary">
<div class="card-title">
              Language
            </div>
            </div>
            <ul>
              <li>
                English
              </li>
              <li>
                Mandarin
              </li>
            </ul>
          </div>
          <div class="card">
            <div class="card-title-secondary">
<div class="card-title">
              Programming Skills
            </div>
            </div>
            <ul>
              <li>
                Data Structure
              </li>
              <li>
                Analysis of Algorithms
              </li>
              <li>
                Computer Graphics Shaders
              </li>
              <li>
                Parallel Programming
              </li>
              <li>
                Machine Learning
              </li>
              <li>
                Deep Learning
              </li>
              <li>
                NLP with Deep Learning
              </li>
              <li>
                Operating Systems 
              </li>
            </ul>
          </div>
          <div class="card">
            <div class="card-title-secondary">
<div class="card-title">
              Engineering Skills
            </div>
            </div>
            <ul>
              <li>
                Analysis of Circuit
              </li>
              <li>
                Digital Electronics
              </li>
              <li>
                Analogue Electronics
              </li>
              <li>
                Digital Signal Processing
              </li>
              <li>
                Thermodynamics and Heat Transfer
              </li>
              <li>
                Fluid Mechanics
              </li>
              <li>
                Microprocessor Systems and Embedded Software
              </li>
              <li>
                Control Engineering
              </li>
              <li>
                PLC and Pneumatic Systems
              </li>
            </ul>
          </div>
          <div class="card">
            <div class="card-title-secondary">
<div class="card-title">
              Graphics Libraries
            </div>
            </div>
            <ul>
              <li>
                OpenGL
              </li>
              <li>
                OpenCL
              </li>
            </ul>
          </div>
          <div class="card">
            <div class="card-title-secondary">
<div class="card-title">
              Engineering Software
            </div>
            </div>
            <ul>
              <li>
                SolidWORKS
              </li>
              <li>
                Matlab
              </li>
              <li>
                LABView
              </li>
            </ul>
          </div>
      `;
  const placeholder = document.getElementById('main-content');
  if (placeholder)
    placeholder.replaceWith(component);

  return;
  }
  
