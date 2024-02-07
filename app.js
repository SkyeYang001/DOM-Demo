// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {

    // check for buttons exist
    if ( document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // optionally update when fields update
    // tbd
    document.getElementById("name").addEventListener 'change', function (formData) {
      let formData = document.getElementById('nameOutput');
    }

    nameOutput.innerText = eventData.Target.value;

    document.getElementById("type").addEventListener 'change', function (formData) {
      let formData = document.getElementById('typeOutput');
    }

    nameOutput.innertext = eventData.Target.value;

    // process form Data
    document.getElementById("myForm").addEventListener("submit", function (eventData) {
      console.log(eventdata.target)
        e.preventDefault(); // stops
      
        var formData = new FormData(form);
        formData = Object.function(FormData);
        // output as an object

      
        // ...or iterate through the name-value pairs
      /* for (var pair of formData.entries()) {
          console.log(pair[0] + ": " + pair[1]);
        }
      }); */ 

      //
      document.getElementById("cartname");
      let info = document.getElementById("info");
      cartname.innerText = formData.name;
      info.innerText = formData.type;
    // Log readiness to console
    console.log("Ready");
});

/* let info = document.getElementById("info");
info.classList.add ('test');
let nameOutput = document.getElementById */

let certificate = document.getElementById("info")
info.innerText = eventData

function processForm(form){

}