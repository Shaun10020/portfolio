function replaceCertificates() {
  const filepath = "components/Certificates.html" ;


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
      populateCertificates();
  })
  .catch(error =>{
      console.error('Error reading the file:', error);
  });


  return;
}

function populateCertificates(){
    const filepath = "json/certificates.json" ;
    fetch(filepath)
    .then(response =>{
        if(!response.ok)
            throw new Error(`Could not fetch the file: ${response.statusText}`);
        return response.text();
    })
    .then(data=>{
      const component = document.createElement('div');
        component.innerHTML = renderCertificates(JSON.parse(data).certificates);
        const placeholder = document.getElementById('certificates-placeholder');
        if (placeholder)
          placeholder.replaceWith(component);
    })
    .catch(error =>{
        console.error('Error reading the file:', error);
    });
  
  }
  
  
  function renderCertificates(certificates){
    let html = ``;
  
  
    for(let i=0;i<certificates.length;i++)
    {
        // add card div
        html+= `<div class="card">`;
        // add primary text - certificate name
        html+= `<div class="card-title-primary">`;
        html+= certificates[i].name;
        html+= `</div>`;

        // add card text
        html+= `<div class="card-text">`;
        
        html+= `Issuing organization: `;
        html+= certificates[i].organization;
        html+= `<br/>`;

        html+= `Issuing date: `;
        html+= certificates[i].date;
        html+= `<br/>`;

        html+= `</div>`;

        html+= `<a href="`;
        html+= certificates[i].url;
        html+= `" target="_blank" rel="noopener noreferrer" class="button-secondary">Link</a>`;


        html+= `</div>`;
    }
    
    return html;
  }