function replaceSkills() {
  const filepath = "components/Skills.html" ;

  const component = document.createElement('div');
  component.id = 'main-content';
  fetch(filepath)
  .then(response =>{
      if(!response.ok)
          throw new Error(`Could not fetch the file: ${response.statusText}`);
      return response.text();
  })
  .then(htmlString=>{
      component.innerHTML = htmlString;
  })
  .catch(error =>{
      console.error('Error reading the file:', error);
  });

  const placeholder = document.getElementById('main-content');
  if (placeholder)
    placeholder.replaceWith(component);

  return;
  }
  
