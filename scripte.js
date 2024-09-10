const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');


const side_icon = document.getElementById('side-icon')
const close_icon = document.getElementById('close-icon')

if(close_icon) {
    close_icon.addEventListener('click' , ()=>{
        nav.classList.remove('active')
    })
}

if(side_icon) {
    side_icon.addEventListener('click' , ()=> {
        nav.classList.add('active');
    })
}

if (bar) {
    bar.addEventListener ('click',() => {

        nav.classList.add('active');
    })
}
const stateCities = {
    Alger: ["Los Angeles", "San Francisco", "San Diego"],
    Texas: ["Houston", "Dallas", "Austin"],
    
  };
  
  document.getElementById('state').addEventListener('change', function() {
    const state = this.value;
    const citySelect = document.getElementById('city');
    citySelect.disabled = !state;
    citySelect.innerHTML = '<option value="">Select a City</option>';
  
    if (state) {
      stateCities[state].forEach(function(city) {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
      });
    }
  });



 