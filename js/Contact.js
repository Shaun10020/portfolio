function replaceContact() {
  const filepath = "components/Contact.html" ;

  fetch(filepath)
  .then(response =>{
      if(!response.ok)
          throw new Error(`Could not fetch the file: ${response.statusText}`);
      return response.text();
  })
  .then(htmlString=>{
        const component = document.createElement('div');
        component.id = 'right-content';
      component.innerHTML = htmlString;
      const placeholder = document.getElementById('right-content');
      if (placeholder)
        placeholder.replaceWith(component);
  })
  .catch(error =>{
      console.error('Error reading the file:', error);
  });



  return;
  }
  
replaceContact();