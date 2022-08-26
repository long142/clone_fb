


//  let cencel_btn = document.querySelector("#cencel-btn");
//  let save_btn = document.querySelector("#save-btn");
 
//  cencel_btn.addEventListener("click", function() {
//      bio_text.classList.remove("bio-btn-click");
//      bio_btn_click.classList.add("bio-btn-click");
//  })
 
//  save_btn.addEventListener("click", function() {
//      bio_text.classList.remove("bio-btn-click");
//      bio_btn_click.classList.add("bio-btn-click");
//      let input_b_vlaue = String(input_box.value);
//      bio_text.innerHTML = input_b_vlaue;
//  })


//  ---------------------
function openNav() {
	document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
	document.getElementById("myNav1").style.width = "0%";
}


//------------------------------------------------------ 

// const baseURL = 'https://62ebc1e5705264f263dfa66f.mockapi.io/v1'
const baseURL='https://62ef261df5521ecad57e5f20.mockapi.io/v1'

const _axios = {
  get(url, opts = {}) {
    return fetch(url, {
      method: "GET",
      ...opts,
    })
  },
  post(url, payload, opts = {}) {
    return fetch(url, {
      method: "POST",
      body: payload,
      ...opts,
    })
  }
}

function getUserInfo() {
  return new Promise((resolve,reject) => {

    let userUrl = baseURL + '/user'

    _axios.get(userUrl)
    .then(response => { 
      return response.json()
	// resolve(response)
    })
    .then(data => {
      resolve(data[0]) 
    })
    .catch(err => {
      reject(err)
    })
  })
}


window.addEventListener('DOMContentLoaded', function() {
  console.log('running when page loaded');

 getUserInfo().then(data => {
  const avatar = document.getElementById("avatar")
  const avatar1 = document.getElementById("avatar1")
  const avatar2 = document.getElementById("avatar2")
  const avatar3 = document.getElementById("avatar3")
  const avatar4 = document.getElementById("avatar4")
  const background = document.getElementById("background")
  const username = document.getElementById("username")
  const username1 = document.getElementById("username1")
  username.innerHTML = data.name
  username1.innerHTML = data.name
  background.src = data.background
  avatar.src = data.avatar
  avatar1.src = data.avatar
  avatar2.src = data.avatar
  avatar3.src = data.avatar
  avatar4.src = data.avatar
  console.log('show data',data)
 
 })
 .catch(e => {
   alert(e.message)
 })
})
  

// -----
// const loader = document.querySelector('.loader');
// const main = document.querySelector('.main');

//  function init() {
//   setTimeout(() => {
//     loader.style.opacity = 0;
//     loader.style.display = 'none';

//     main.style.display = 'block';
//     setTimeout(() => (main.style.opacity = 1), 50);
//   }, 4000);
// }

// init();
// ----------------------------
 