function createNavbar (){
    const filepath = "components/Navbar.html" ;

    fetch(filepath)
    .then(response =>{
        if(!response.ok)
            throw new Error(`Could not fetch the file: ${response.statusText}`);
        return response.text();
    })
    .then(htmlString=>{
        const component = document.createElement('nav');
        component.id = 'navbar';
        component.innerHTML = htmlString;
        const placeholder = document.getElementById('_navbar');
        if (placeholder) 
            placeholder.replaceWith(component);
    })
    .catch(error =>{
        console.error('Error reading the file:', error);
    });

};

createNavbar();
replaceAbout();
