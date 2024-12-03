function replaceAbout() {
  const filepath = "components/About.html" ;

  fetch(filepath)
  .then(response =>{
      if(!response.ok)
          throw new Error(`Could not fetch the file: ${response.statusText}`);
      return response.text();
  })
  .then(htmlString=>{
    const placeholder = document.getElementById('main-content');
    const component = document.createElement('div');
    component.id = 'main-content';
      component.innerHTML = htmlString;
      if (placeholder)
        placeholder.replaceWith(component);

      populateEvents();
  })
  .catch(error =>{
      console.error('Error reading the file:', error);
  });

  return;
}

function populateEvents(){
  const events_filepath = "json/events.json";

  fetch(events_filepath)
  .then(response =>{
      if(!response.ok)
          throw new Error(`Could not fetch the file: ${response.statusText}`);
      return response.text();
  })
  .then(data=>{
    const component = document.createElement('div');
    const placeholder = document.getElementById('timeline-event-placeholder');
    component.innerHTML = renderEvents(JSON.parse(data).events);
    component.className = "timeline";
    if (placeholder)
      placeholder.replaceWith(component);
  })
  .catch(error =>{
      console.error('Error reading the file:', error);
  });


  return
}

function renderEvents(events){
    let html = ``;
    let direction = "left";
    for(let i=0;i<events.length;i++)
    {
        if(i%2)
            direction = "right";
        else
            direction = "left";

        html += `<div class="timeline-event ${direction}">`;

        html += `<div class="timeline-event title ${direction}">`;
        html += events[i].title;
        html += `</div>`;

        html += `<div class="timeline-event content ${direction}">`;
        html += events[i].content;
        html += `</div>`;

        html += `</div>`;
    }
    console.log(html);
    return html;
}

  
  
