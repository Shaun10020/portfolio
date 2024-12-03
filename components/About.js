function replaceAbout() {
  const HeadShot = '../img/headshot.jpg';

  const component = document.createElement('div');
  component.id = 'main-content';
  component.innerHTML = `
        <h1 class="header-primary">About</h1>
        <div>
          <img class="image" src=${HeadShot} alt="headshot" />
        </div>
        <div class="card">
          <p class="card-text" >
          Hello! I'm SoonSong Cheok, a passionate Computer Science graduate from Oregon State University with a CGPA of 3.91. Originally from Malaysia, where I completed my education in Mechatronics Engineering, my journey has led me to specialize in software engineering, motivated by a deep interest in problem-solving and innovation.
          </p>
          <p class="card-text" >
          Throughout my studies and professional experiences, I've tackled diverse projects—from debugging and troubleshooting in teaching assistant roles to hands-on security architecture at a large university. I enjoy the challenge of designing efficient, high-performance software, leveraging my skills in Python, C/C++, and machine learning.
          </p>
          <p class="card-text" >
          While I may come across as quiet and introverted at first, my friends would tell you that I'm more lively and humorous once you get to know me. Outside of work, I’m a fan of fiction and Sci-Fi shows, where I find inspiration in unique worlds and stories. I’m also driven to continually expand my skills, always excited by opportunities to learn and try new things.
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
  

  
  
