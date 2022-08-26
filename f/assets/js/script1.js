 


let bio_edit_btn = document.querySelector("#bio-edit-btn");
let bio_text = document.querySelector("#bio-text");

let bio_btn_click = document.querySelector(".bio-btn-click");

let length_count = document.getElementById("length-count");


let input_box = document.querySelector(".input-box");

bio_edit_btn.addEventListener("click", function() {
	bio_text.classList.add("bio-btn-click");
	bio_btn_click.classList.remove("bio-btn-click");

	let input_length = 101 - input_box.value.length;
	length_count.innerHTML = input_length;

	if (input_length <= 101 && input_length >= 30) {
		length_count.style.color= "green";
	} else if (input_length <= 31 && input_length >= 6) {
		length_count.style.color= "#C24641";

	} else if (input_length <= 5 && input_length >= 0) {
		length_count.style.color= "red";
	}

	input_box.addEventListener("input", function() {
		let input_length = 101 - input_box.value.length;
		length_count.innerHTML = input_length;

		if (input_length <= 101 && input_length >= 30) {
			length_count.style.color= "green";
		} else if (input_length <= 31 && input_length >= 6) {
			length_count.style.color= "#C24641";

			if (input_length == 9) {
				length_count.innerHTML = "09";
			} else if (input_length == 8) {
				length_count.innerHTML = "08";
			} else if (input_length == 7) {
				length_count.innerHTML = "07";
			} else if (input_length == 6) {
				length_count.innerHTML = "06";
			}

		} else if (input_length <= 5 && input_length >= 0) {
			length_count.style.color= "red";

			if (input_length == 5) {
				length_count.innerHTML = "05";
			} else if (input_length == 4) {
				length_count.innerHTML = "04";
			} else if (input_length == 3) {
				length_count.innerHTML = "03";
			} else if (input_length == 2) {
				length_count.innerHTML = "02";
			} else if (input_length == 1) {
				length_count.innerHTML = "01";
			} else if (input_length == 0) {
				length_count.innerHTML = "00";
			}
		} else {
			length_count.innerHTML = "00";
		}
	})

})


 let cencel_btn = document.querySelector("#cencel-btn");
 let save_btn = document.querySelector("#save-btn");
 
 cencel_btn.addEventListener("click", function() {
     bio_text.classList.remove("bio-btn-click");
     bio_btn_click.classList.add("bio-btn-click");
 })
 
 save_btn.addEventListener("click", function() {
     bio_text.classList.remove("bio-btn-click");
     bio_btn_click.classList.add("bio-btn-click");
     let input_b_vlaue = String(input_box.value);
     bio_text.innerHTML = input_b_vlaue;
 })


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
const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 4000);
}

init();
// ----------------------------
const button = document.getElementById("button"),
      toast = document.querySelector(".toast")
      closeIcon = document.querySelector(".close"),
      progress = document.querySelector(".progress");

      let timer1, timer2;

      button.addEventListener("click", () => {
        toast.classList.add("active");
        progress.classList.add("active");

        timer1 = setTimeout(() => {
            toast.classList.remove("active");
        }, 5000); //1s = 1000 milliseconds

        timer2 = setTimeout(() => {
          progress.classList.remove("active");
        }, 5300);
      });
      
      closeIcon.addEventListener("click", () => {
        toast.classList.remove("active");
        
        setTimeout(() => {
          progress.classList.remove("active");
        }, 300);

        clearTimeout(timer1);
        clearTimeout(timer2);
      });