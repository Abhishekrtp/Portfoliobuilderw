const name =localStorage.getItem('name');


const linkedin =localStorage.getItem('linkedin');
const github =localStorage.getItem('github');
const twitter =localStorage.getItem('twitter');
const instagram =localStorage.getItem('instagram');
const about =localStorage.getItem('about');

const domain1 =localStorage.getItem('domain1');
const domain2 =localStorage.getItem('domain2');
const domain3 =localStorage.getItem('domain3');
const domain4 =localStorage.getItem('domain4');


const skill1 =localStorage.getItem('skill1');
const skill2 =localStorage.getItem('skill2');
const skill3 =localStorage.getItem('skill3');
const skill4 =localStorage.getItem('skill4');
const skill5 =localStorage.getItem('skill5');


const number = localStorage.getItem('number');
const email = localStorage.getItem('email');
const address = localStorage.getItem('address');



const companyres =localStorage.getItem('company');
const positionres =localStorage.getItem('position');
const roleres =localStorage.getItem('role');





document.getElementById('skill1').textContent = skill1;
document.getElementById('skill2').textContent = skill2;
document.getElementById('skill3').textContent = skill3;
document.getElementById('skill4').textContent = skill4;
document.getElementById('skill5').textContent = skill5;

document.getElementById('contact-number').textContent = number;
document.getElementById('email-number').textContent = email;
document.getElementById('address-number').textContent = address;




document.getElementById('nameindex').textContent = name;
document.getElementById('nameindex2').textContent = name;
document.getElementById('linkedin').href = linkedin;
document.getElementById('github').href = github;
document.getElementById('twitter').href = twitter;
document.getElementById('instagram').href = instagram;
// document.getElementById('emailindex').textContent = email;
document.getElementById('about-us').textContent = about;


document.getElementById('company-text').textContent = companyres;
document.getElementById('position-text').textContent = positionres;
document.getElementById('role-text').textContent = roleres;



document.addEventListener("DOMContentLoaded", () => {
  const dynamicTextElement = document.getElementById("dynamic-text");

  // Retrieve domains from localStorage or fallback text
  const userInputs = [
    localStorage.getItem("domain1"),
    localStorage.getItem("domain2"),
    localStorage.getItem("domain3"),
    localStorage.getItem("domain4"),
  ].filter(Boolean); // Filter out any null/empty entries

  // Fallback words if none are provided
  const fallbackInputs = ["Software Developer", "Web Designer", "Freelancer"];
  const typingTexts = userInputs.length ? userInputs : fallbackInputs;

  let index = 0;

  // Function to update text content with typing animation
  function updateTypingText() {
    // Hide the previous word
    dynamicTextElement.classList.add("hidden");

    // Wait for the current word to disappear before showing the next one
    setTimeout(() => {
      dynamicTextElement.textContent = typingTexts[index];
      dynamicTextElement.classList.remove("hidden");

      // Trigger the typing animation by resetting the width
      dynamicTextElement.style.width = "0";
      setTimeout(() => {
        dynamicTextElement.style.width = dynamicTextElement.scrollWidth + "px"; // Re-trigger typing animation
      }, 100);

      index = (index + 1) % typingTexts.length; // Move to the next word in the array
    }, 1000); // Adjust the time here to control how long the word stays on the screen
  }

  // Start the animation and change words every 4 seconds
  updateTypingText();
  setInterval(updateTypingText, 4000); // Change words every 4 seconds
});

if(companyres==""){
  document.getElementById('exper').style.display = "none";
  
}
