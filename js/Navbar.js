const createComponent = () => {
    const filepath = "components/Navbar.html" ;
    const component = document.createElement('nav');
    component.id = 'navbar';
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

    return component;
};

// Replace the placeholder element with the component
const placeholder = document.getElementById('_navbar');
if (placeholder) {
    const newComponent = createComponent();
    placeholder.replaceWith(newComponent);
}

replaceAbout();
