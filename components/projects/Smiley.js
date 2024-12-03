const cols = 22;
const rows = 22;
let asciiFrame = Array(cols*rows).fill(' ').join("").replace(/(.{22})/g, "$1\n");

let A = 0, B = 0, C = 0;
let obj = {Nx:0,Ny:0,Nz:-1}
let Lx=0,Ly=0,Lz = -1;
let interval_time = 10;
let interval_id = 0;
const density = 0.5;
const diameter = 20.0;
const radius = diameter / 2;
const depth = 5;
const k2 = radius + 10;
const k1 = 14.0;

function checkEyes(x, y, scale, distance, targetY, targetX, Nx, Ny, Nz) {
  const half = distance / 2;
  const dist1 = Math.sqrt((x - (targetX - half)) ** 2 + (y - targetY) ** 2);
  const dist2 = Math.sqrt((x - (targetX + half)) ** 2 + (y - targetY) ** 2);

  if (dist1 <= scale || dist2 <= scale) return true;
  if (dist1 <= scale + 1) {
    Nx = -(x - (targetX - half)) / dist1;
    Ny = -(y - targetY) / dist1;
    Nz = 0;
  } else if (dist2 <= scale + 1) {
    Nx = -(x - (targetX + half)) / dist2;
    Ny = -(y - targetY) / dist2;
    Nz = 0;
  }
  return false;
}

function checkMouth(x, y, radius, arc, thickness, centerX, centerY, Nx, Ny, Nz) {
  const half = arc / 2;
  let prev_dist = Infinity;

  for (let angle = -half; angle < half; angle += 0.04) {
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);
    let calcX = 0;
    let calcY = radius;

    calcX = calcX * cosAngle - calcY * sinAngle;
    calcY = calcX * sinAngle + calcY * cosAngle;

    calcX += centerX;
    calcY += centerY;
    const dist = Math.sqrt((x - calcX) ** 2 + (y - calcY) ** 2);

    if (dist > prev_dist) continue;
    prev_dist = dist;
    if (dist <= thickness) return true;
    if (dist <= thickness + 1) {
      Nx = -(x - calcX) / dist;
      Ny = -(y - calcY) / dist;
      Nz = 0;
    }
  }
  return false;
}

const Smiley = () => {
  const smiley = document.getElementById('Smiley');
  if(!smiley)
  {
    clearInterval(interval_id);
    A = 0, B = 0, C = 0;
    return;
  }

  
  const output = Array(rows * cols).fill(" ");
  const zbuffer = Array(rows * cols).fill(Infinity);
  let cosA = Math.cos(A), cosB = Math.cos(B), cosC = Math.cos(C);
  let sinA = Math.sin(A), sinB = Math.sin(B), sinC = Math.sin(C);
  for (let y = -radius; y < radius; y += density) 
  {
    for (let x = -radius; x < radius; x += density) 
    {
      for (let z = 0; z < depth; z++) 
      {
        obj.Nx = x/radius;
        obj.Ny = y/radius;
        obj.Nz = 0;
        if (checkEyes(x, y, 3, 10, -2, 0, obj.Nx, obj.Ny, obj.Nz)) continue;
        if (checkMouth(x, y, radius + 4, 0.7, 2, 0, -8, obj.Nx, obj.Ny, obj.Nz)) continue;


        if(z === 0)
          {
            obj.Nx=0;
            obj.Ny=0;
            obj.Nz = -1;
          }
          else if (z === depth -1)
          {  
            obj.Nx=0;
            obj.Ny=0;
            obj.Nz = 1;
          }

        const dist = Math.sqrt(x * x + y * y);
        if (dist <= radius) 
        {
          // Rotating matrix
          let circleX = x*cosA*cosB - y*sinA*cosB + z*sinB;                    
          let circleY = x*sinA*cosC + y*cosA*cosC + y*sinA*sinB*sinC - x*cosA*sinB*sinC + z*cosB*sinC;                    
          let circleZ =  - x*sinA*sinC - y*cosA*sinC + y*sinA*sinB*cosC - x*cosA*sinB*cosC + z*cosB*cosC + k2;                    
          let ooz = 1/circleZ;

          const screenX = Math.floor(cols / 2 + k1 * ooz * circleX);
          const screenY = Math.floor(rows / 2 + k1 * ooz * circleY);

          const index = screenX + cols * screenY;
          if (index >= 0 && index < output.length && screenX > 0 && screenX<cols && screenY>0 && screenY<rows && circleZ < zbuffer[index]) 
          {
            zbuffer[index] = circleZ;
            let L = Math.floor(8*(
              Lx*(obj.Nx*cosA*cosB - obj.Ny*sinA*cosB + obj.Nz*sinB) + 
              Ly*(obj.Nx*sinA*cosC + obj.Ny*cosA*cosC + obj.Ny*sinA*sinB*sinC - obj.Nx*cosA*sinB*sinC + obj.Nz*cosB*sinC) +
              Lz*(-obj.Nx*sinA*sinC - obj.Ny*cosA*sinC + obj.Ny*sinA*sinB*cosC - obj.Nx*cosA*sinA*cosC + obj.Nz*cosB*cosC)
          ));
            output[index] =  ".,-~:;=!*#$@"[L > 0 ? L:0]; // Replace with luminance logic if needed
          }
        }
      }
    }
  }

  asciiFrame = output.join("").replace(/(.{22})/g, "$1\n"); // Format output

  A+=0.0;
  B+=0.02;
  C+=0.03;


  const component = document.createElement('pre');
  component.id = "Smiley";
  component.className="card";
  component.style= { fontFamily: "monospace", lineHeight: "1em" };
  component.innerHTML=`${asciiFrame}`;
  if (smiley)
    smiley.replaceWith(component);
};


function replaceSmiley() {
  const component = document.createElement('div');

  component.id = 'main-content';
  component.innerHTML = `
    <pre id="Smiley" class="card" style={{ fontFamily: "monospace", lineHeight: "1em" }}>
      ${asciiFrame}
    </pre>
      `;
  const placeholder = document.getElementById('main-content');
  if (placeholder)
    placeholder.replaceWith(component);

  interval_id = setInterval(()=>{Smiley()},interval_time);
  }
  
