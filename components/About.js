function replaceAbout() {
  const HeadShot = '/portfolio/img/headshot.jpg';

  const component = document.createElement('div');
  component.id = 'main-content';
  component.innerHTML = `
        <h1 class="header-primary">About</h1>
        <div>
          <img class="image" src=${HeadShot} alt="headshot" />
        </div>
        <div class="card">
          <p class="card-text" >
          Hello! I'm SoonSong Cheok, a passionate Computer Science graduate from Oregon State University with a CGPA of 3.91. I originally from Malaysia, where I completed my Bachelor's degree in Mechatronics Engineering. I decided to specialize in software engineering, driven by a passion for data engineering and algorithm design. 
          </p>
          <p class="card-text" >
          Throughout my studies and professional experiences, I've tackled diverse projects—from debugging and troubleshooting in teaching assistant roles to hands-on security architecture at a large university. I enjoy the challenge of designing efficient, high-performance software, leveraging my skills in Python, C/C++, and machine learning.
          </p>
          <p class="card-text" >
          Currently, I'm seeking a full-time role in software engineering or verification, but I’m open to exploring other areas where my skills and curiosity can make an impact. Let’s connect and see how we can create something innovative together!
          </p>
        </div>
      `;
  const placeholder = document.getElementById('main-content');
  if (placeholder)
    placeholder.replaceWith(component);

  return;
  }
  

  
  
