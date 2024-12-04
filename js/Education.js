function replaceEducation() {
  const filepath = "components/Education.html" ;

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

      populateEducation();
  })
  .catch(error =>{
      console.error('Error reading the file:', error);
  });

  return;
  }
  
function populateEducation(){
  const filepath = "json/education.json" ;
  fetch(filepath)
  .then(response =>{
      if(!response.ok)
          throw new Error(`Could not fetch the file: ${response.statusText}`);
      return response.text();
  })
  .then(data=>{
    const component = document.createElement('div');
      const placeholder = document.getElementById('education-placeholder');
      component.innerHTML = renderEducation(JSON.parse(data).education);

      if (placeholder)
        placeholder.replaceWith(component);

      populateEducation();
  })
  .catch(error =>{
      console.error('Error reading the file:', error);
  });
}

function renderEducation(education){
    let html = ``;


    for(let i=0;i<education.length;i++)
    {
        // add card div
        html+= `<div class="card">`;

        // add primary text - university name
        html+= `<div class="card-title-primary">`;
        html+=education[i].university;
        html+= `</div>`;

        // add secondary text - location and period
        html+= `<div class="card-title-secondary">`;
        html+= `<div class="card-title">`;
        html+=education[i].location;
        html+= `</div>`;
        html+= `<div class="card-title-time">`;
        html+=education[i].period;
        html+= `</div>`;

        // add card text
        html+= `<div class="card-text">`;
        html+= `<h4>`;
        html+= `Related courseworks:`;
        html+= `</h4>`;
        html+= `<ul class="card-list">`;
        for(let j=0;j<education[i].length;j+=1)
        {
          html+= `<li class="card-list">`;
          html+=education[i][j];
          html+= `</li>`;
        }
        html+= `</ul>`;
        html+= `</div>`;
        html+= `</div>`;
    }
    
    return html;
}
