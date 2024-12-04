function replaceExperiences() {
    const filepath = "components/Experiences.html" ;
  
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
    populateExperiences();
    })
    .catch(error =>{
        console.error('Error reading the file:', error);
    });
  
    return;
}

function populateExperiences(){
    const filepath = "json/experiences.json" ;
    fetch(filepath)
    .then(response =>{
        if(!response.ok)
            throw new Error(`Could not fetch the file: ${response.statusText}`);
        return response.text();
    })
    .then(data=>{
      const component = document.createElement('div');
        component.innerHTML = renderExperiences(JSON.parse(data).experiences);
        const placeholder = document.getElementById('experiences-placeholder');
        if (placeholder)
          placeholder.replaceWith(component);
    })
    .catch(error =>{
        console.error('Error reading the file:', error);
    });

}
 

function renderExperiences(experiences){
    let html = ``;


    for(let i=0;i<experiences.length;i++)
    {
        // add card div
        html+= `<div class="card">`;

        // add secondary text - job title and employer
        html+= `<div class="card-title-secondary">`;
        html+= `<div class="card-title">`;
        html+=experiences[i].title;
        html+= `</div>`;
        html+= `<div class="card-title-time">`;
        html+=experiences[i].employer;
        html+= `</div>`;
        html+= `</div>`;

        // add secondary text - location and perid
        html+= `<div class="card-title-secondary">`;
        html+= `<div class="card-title">`;
        html+=experiences[i].location;
        html+= `</div>`;
        html+= `<div class="card-title-time">`;
        html+=experiences[i].period;
        html+= `</div>`;
        html+= `</div>`;

        // add card text
        html+= `<div class="card-text">`;
        html+= `<ul>`;
        for(let j=0;j<experiences[i].description.length;j+=1)
        {
          html+= `<li>`;
          html+=experiences[i].description[j];
          html+= `</li>`;
        }
        html+= `</ul>`;
        html+= `</div>`;

        html+= `</div>`;
    }
    
    return html;
}