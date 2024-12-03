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
  })
  .catch(error =>{
      console.error('Error reading the file:', error);
  });


  return;
}