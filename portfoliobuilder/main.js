const form = document.getElementById("form");
const name = document.getElementById("name");

const indexh2 = document.getElementById("indexh2");
const linkedinurl = document.getElementById("linkedinurl");
const githuburl = document.getElementById("githuburl");
const twitterurl = document.getElementById("twitterurl");
const instagramurl = document.getElementById("instagramurl");

//skills

const skill1 = document.getElementById('skill1')
const skill2 = document.getElementById('skill2')
const skill3 = document.getElementById('skill3')
const skill4 = document.getElementById('skill4')
const skill5 = document.getElementById('skill5')

//experience
const company = document.getElementById('company-input')
const position = document.getElementById('position-input')
const role = document.getElementById('role-input')


//contact-Details
const number = document.getElementById('number-input');
const email = document.getElementById('email-input');
const address = document.getElementById('address-input');




const domain1 = document.getElementById("domain1");
const domain2 = document.getElementById("domain2");
const domain3 = document.getElementById("domain3");
const domain4 = document.getElementById("domain4");


const abouturl = document.getElementById("abouturl");

form.addEventListener("submit", (e) => {
  e.preventDefault();




  const nameValue = name.value;
  
  const githuburlValue = githuburl.value;
  const linkedinValue = linkedinurl.value;
  const twitterurlValue = twitterurl.value;
  const instagramurlValue = instagramurl.value;
  const aboutusValue = abouturl.value;



  const numbervalue = number.value;
  const emailvalue = email.value;
  const addressvalue = address.value;


  const companyvalue = company.value;
  const positionvalue = position.value;
  const rolevalue = role.value;


  const skill1Value = skill1.value;
  const skill2Value = skill2.value;
  const skill3Value = skill3.value;
  const skill4Value = skill4.value;
  const skill5Value = skill5.value;

  const domain1Value = domain1.value;
  const domain2Value = domain2.value;
  const domain3Value = domain3.value;
  const domain4Value = domain4.value;

  // localStorage.setItem('myObject', {nm:nameValue,em:emailValue});

  localStorage.setItem("name", nameValue);
  localStorage.setItem("linkedin", linkedinValue);

  localStorage.setItem("github", githuburlValue);
  localStorage.setItem("twitter", twitterurlValue);
  localStorage.setItem("instagram", instagramurlValue);
  localStorage.setItem("about", aboutusValue);

  localStorage.setItem("email", emailvalue);
  localStorage.setItem("number", numbervalue);
  localStorage.setItem("address", addressvalue);




  localStorage.setItem("company", companyvalue);
  localStorage.setItem("position", positionvalue);
  localStorage.setItem("role", rolevalue);


  localStorage.setItem("skill1", skill1Value);
  localStorage.setItem("skill2", skill2Value);
  localStorage.setItem("skill3", skill3Value);
  localStorage.setItem("skill4", skill4Value);
  localStorage.setItem("skill5", skill5Value);


  localStorage.setItem("domain1", domain1Value);
  localStorage.setItem("domain2", domain2Value);
  localStorage.setItem("domain3", domain3Value);
  localStorage.setItem("domain4", domain4Value);






  

  window.location.href = "./next.html";

  
 
});