function replaceCareer() {
    const component = document.createElement('div');
    component.id = 'main-content';
    component.innerHTML = `
            <h1 class="header-primary">Careers</h1>
            <div class="card">
                <div class="card-title-primary">
                    Graduate Teaching Assistant
                </div>
                <div class="card-title-secondary">
                    <div class="card-title">
                        Oregon State University, Corvallis, OR, United States
                    </div>
                    <div class="card-time">
                        Sep 2023 - Jun 2024
                    </div>
                </div>
                <ul>
                    <li>
                    Delivered personalized assistance to students during office hours, addressing questions, explaining concepts, and providing guidance on assignments.
                    </li>
                    <li>
                    Contributed to the instruction of a diverse student body, supporting over <b>300</b> individuals in their academic pursuits
                    </li>
                </ul>
            </div>
            <div class="card">
                <div class="card-title-primary">
                    Digitalization and Automation Engineer
                </div>
                <div class="card-title-secondary">
                    <div class="card-title">
                        Top Glove Corporation Berhad, Klang, Malaysia
                    </div>
                    <div class="card-time">
                        Sep 2020 - Mar 2021
                    </div>
                </div>
                <ul>
                    <li>
                        Designed and developed 3 PowerApps to automate manual order systems in 3 different factories to improve the efficiency of order systems and staff.
                    </li>
                    <li>
                        Designed 2 LabVIEW programs for production lines to capture and transfer real-time data to the cloud to enable Industrial 4.0.
                    </li>
                    <li>
                        Installed 80 sensors on 20 production lines and connected these sensors to IoT for real-time monitoring and performance evaluation.
                    </li>
                    <li>
                        Partnered with co-workers to write Power BI queries to visualize real-time data on the dashboard for effective monitoring and immediate response to production issues.
                    </li>
                </ul>
            </div>
            <div class="card">
                <div class="card-title-primary">
                    MIT Solutions Software Engineer (Intern)
                </div>
                <div class="card-title-secondary">
                    <div class="card-title">
                            Intel Products, Kulim, Malaysia
                    </div>
                    <div class="card-time">
                            Feb 2019 – Aug 2019
                    </div>
                </div>
                <ul>
                    <li>
                        Worked as part of a 3-member team to design and develop a web application by using Angular framework, C#, and Typescript with Agile to reduce development time and cost.
                    </li>
                    <li>
                        Utilized Postman API test tool to test web applications and resolved issues derived from the test in order to prevent bugs, reduce cost and improve performance.
                    </li>
                    <li>
                        Provided technical support to maintain web application performance by completing 50 requests using the Kanban task management tool.
                    </li>
                </ul>
            </div>
        `;
    const placeholder = document.getElementById('main-content');
    if (placeholder) 
      placeholder.replaceWith(component);
    
    return;
}