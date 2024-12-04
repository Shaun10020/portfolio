function replaceSkills() {
  const filepath = "components/Skills.html" ;

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
    populateSkills();
  })
  .catch(error =>{
      console.error('Error reading the file:', error);
  });

  return;
}

function populateSkills(){
  const filepath = "json/skills.json" ;
  fetch(filepath)
  .then(response =>{
      if(!response.ok)
          throw new Error(`Could not fetch the file: ${response.statusText}`);
      return response.text();
  })
  .then(data=>{
    const component = document.createElement('div');
      component.innerHTML = renderSkills(JSON.parse(data).skills);
      const placeholder = document.getElementById('skills-placeholder');
      if (placeholder)
        placeholder.replaceWith(component);
  })
  .catch(error =>{
      console.error('Error reading the file:', error);
  });

}


function renderSkills(skills){
  let html = ``;


  for(let i=0;i<skills.length;i++)
  {
      // add card div
      html+= `<div class="card">`;

      // add secondary text - job title and employer
      html+= `<div class="card-title-primary">`;
      html+=skills[i].category;
      html+= `</div>`;

      // add card text
      html+= `<div class="card-text">`;
      html+= `<ul class="card-list-ul">`;
      for(let j=0;j<skills[i].skill.length;j+=1)
      {
        html+= `<li class="card-list-li">`;
        html+=skills[i].skill[j];
        html+= `</li>`;
      }
      html+= `</ul>`;
      html+= `</div>`;

      html+= `</div>`;
  }
  
  return html;
}
  