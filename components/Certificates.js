function replaceCertificates() {

  const component = document.createElement('div');
  component.id = 'main-content';
  component.innerHTML = `
          <h1 class="header-primary">Certificates</h1>
            <div class="card">
            <div class="card-title-secondary">
              <div class="card-title">
              Data Structures and Algorithms Specialization
              </div>
              </div>
              <div class="card-text">
              Issuing organization: Coursera <br/>
              Issuing date: July, 2021 <br/>
              Credential ID: DPDNXRT7DC5E <br/>
              Credential URL: https://www.coursera.org/account/accomplishments/specialization/certificate/DPDNXRT7DC5E <br/>
              Skills: Python, Genome Assembly, Graph Theory
              </div>
            </div>
            <div class="card">
            <div class="card-title-secondary">
              <div class="card-title">
              Introduction to Discrete Mathematics for Computer Science Specialization
              </div>
              </div>
              <div class="card-text">
              Issuing organization: Coursera <br/>
              Issuing date: June, 2021 <br/>
              Credential ID: FWATVMWDCTVY <br/>
              Credential URL: https://www.coursera.org/account/accomplishments/specialization/certificate/FWATVMWDCTVY <br/>
              Skills: Python,  Cryptography. Discrete Mathematics, Probability
              </div>
            </div>
            <div class="card">
            <div class="card-title-secondary">
              <div class="card-title">
              Programming Foundations with JavaScript, HTML and CSS (with Honors)
              </div>
              </div>
              <div class="card-text">
              Issuing organization: Coursera <br/>
              Issuing date: April, 2021 <br/>
              Credential ID: QZZQG4BQJGTJ <br/>
              Credential URL: https://coursera.org/share/9cf4712fab7e729859357eadd8aff014 <br/>
              Skills: HTML, JavaScript, Cascading Style Sheets (CSS)
              </div>
            </div>
            <div class="card">
            <div class="card-title-secondary">
              <div class="card-title">
              Build a Modern Computer from First Principles: From Nand to Tetris (Project-Centered Course)
              </div>
              </div>
              <div class="card-text">
              Issuing organization: Coursera <br/>
              Issuing date: March, 2021 <br/>
              Credential ID: PDF8H8BHXJ3AE <br/>
              Credential URL: http://www.coursera.org/account/accomplishments/certificate/PDF8H8BHXJ3A <br/>
              Skills: Assembly Language
              </div>
            </div>
  `;
  const placeholder = document.getElementById('main-content');
  if (placeholder)
    placeholder.replaceWith(component);

  return;
}