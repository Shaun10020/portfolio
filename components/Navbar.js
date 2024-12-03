const createComponent = () => {
    const component = document.createElement('nav');
    component.id = 'navbar';
    component.innerHTML = `
    <ul>
        <li><button onclick="replaceAbout()">About</button></li>
        <li><button onclick="replaceCareer()">Career</button></li>
        <li><button onclick="replaceEducation()">Education</button></li>
        <li><button onclick="replaceProjects()">Projects</button></li>
        <li><button onclick="replaceSkills()">Skills</button></li>
        <li><button onclick="replaceCertificates()">Certificates</button></li>
        <li><button onclick="replaceContact()">Contact</button></li>
    </ul>
    `;
    return component;
};

// Replace the placeholder element with the component
const placeholder = document.getElementById('_navbar');
if (placeholder) {
    const newComponent = createComponent();
    placeholder.replaceWith(newComponent);
}

replaceAbout();
