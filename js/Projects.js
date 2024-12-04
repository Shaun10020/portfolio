function replaceProjects() {
  const filepath = "components/Projects.html" ;

  fetch(filepath)
  .then(response =>{
      if(!response.ok)
          throw new Error(`Could not fetch the file: ${response.statusText}`);
      return response.text();
  })
  .then(htmlString=>{
    const component = document.createElement('div');
    component.id = 'main-content';
      component.innerHTML = htmlString;
      const placeholder = document.getElementById('main-content');
      if (placeholder)
        placeholder.replaceWith(component);
      populateProjects();
  })
  .catch(error =>{
      console.error('Error reading the file:', error);
  });



  return;
  }

  function populateProjects(){
    const filepath = "json/projects.json" ;
    fetch(filepath)
    .then(response =>{
        if(!response.ok)
            throw new Error(`Could not fetch the file: ${response.statusText}`);
        return response.text();
    })
    .then(data=>{
      const component = document.createElement('div');
        component.innerHTML = renderProjects(JSON.parse(data).projects);
        const placeholder = document.getElementById('projects-placeholder');
        if (placeholder)
          placeholder.replaceWith(component);
    })
    .catch(error =>{
        console.error('Error reading the file:', error);
    });
  
  }
  
  
  function renderProjects(projects){
    let html = ``;
  
  
    for(let i=0;i<projects.length;i++)
    {
        // add card div
        html+= `<div class="card">`;
  
        // add primary text - title
        html+= `<div class="card-title-primary">`;
        html+=projects[i].title;
        html+= `</div>`;
  
        // add secondary text - skills and date
        html+= `<div class="card-title-secondary">`;
        html+= `<div class="card-title">`;
        html+=projects[i].skills;
        html+= `</div>`;
        html+= `<div class="card-title-time">`;
        html+=projects[i].date;
        html+= `</div>`;
        html+= `</div>`;

      
        // add card text
        html+= `<div class="card-text">`;
        html+= projects[i].description;
        html+= `</div>`;

        if(projects[i].button)
        {
          html+=`<button class="button-secondary" onclick="`;
          html+= projects[i].button;
          html+= `"> View </button>`
        }
  
        html+= `</div>`;
    }
    
    return html;
  }
    