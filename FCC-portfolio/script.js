
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
    alert("Message sent successfully!");
    // alert("Your message was sent successfully!");
  })
  .catch(error => {
    console.error('Error. Message not sent sent.', error);
    alert('Error. Message not sent sent.');
    msg.innerHTML = "Error. Message not sent.";
  });

}

// clean transportation mode choice

function modeLink() {

  var selectedMode = document.querySelector('input[name="mode"]:checked');
  

  if (selectedMode) {
    var mode = selectedMode.value;
    var relevantLink = document.getElementById('link');

    if (mode == 'transit') {
      relevantLink.innerHTML = '<a href="https://ridelbt.com/trip-planner/" target="_blank">Real-time Transit Trip Planner</a>';
    } else if (mode == 'cycling') {
      relevantLink.innerHTML = '<a href="https://longbeachca.maps.arcgis.com/apps/webappviewer/index.html?id=620af0c76dba42f0931e29544c264694" target="_blank">Bicycling Routes and Bikeshare Map</a>';
    } else if (mode == 'walking') {
      relevantLink.innerHTML = '<a href="https://www.walklongbeach.org/walking-loops" target="_blank">Walking Loops</a>';
    }

    var pointerIcon = document.getElementById('pointer-icon');
    pointerIcon.innerHTML = '<i class="fas fa-hand-pointer"></i>';

    // https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

    setTimeout(function () {
      relevantLink.innerHTML = '';
      pointerIcon.innerHTML = '';
    }, 4000);
  }
}

