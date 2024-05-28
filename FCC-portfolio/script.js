
// CODE FROM COSW 200 PART 2 EVENTS LAB
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses(){
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
};

// END CODE FROM COSW 200 PART 2 EVENTS LAB


//  CONTACT FORM JAVASCRIPT

const googleScriptURL = 'https://script.google.com/macros/s/AKfycbyzJNrVEl7zDDT9bOgp_ykbpginSDqM8gDZ26I3n_II_dP2EKcoilBtYVEy25b9kzWV-w/exec';

const form = document.getElementsByName("google-sheet-form")[0];
const msg = document.getElementById("msg");

form.addEventListener('submit', submitMsg); 

function submitMsg(e) {
  e.preventDefault();
  const data = new FormData(e.target);

  fetch(googleScriptURL, { method: 'POST', body: data})
  .then(response => {
    msg.innerHTML = "Message sent successfully!";
    // alert("Your message was sent successfully!");
  })
  .catch(error => {
    console.error('Error. Message not sent sent.', error);
    msg.innerHTML = "Error. Message not sent.";
  });

}
 