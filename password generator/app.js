var slider = document.querySelector(".slider");
var slider_text = document.querySelector(".slider-text");
var btn = document.querySelector(".btn");
var copy_btn = document.querySelector(".copy-btn");
var length = slider.value;
var switchs = document.querySelectorAll(".switch");
var switch_inner = document.querySelectorAll(".switch-inner");
var passText = document.querySelector(".password-text");
var switchs_arr = [
  { isChecked: true, animeation: undefined },
  { isChecked: true, animeation: undefined },
  { isChecked: true, animeation: undefined },
  { isChecked: true, animeation: undefined },
];
function fixed_elements_size() {
  var ratio = innerWidth / 428;
  var ratio1 = innerHeight / 926;
  var ratio2 = innerWidth / 1646.94;
  var ratio3 = innerHeight / 926.41;
  if (ratio > 1) {
    ratio = 1;
  }
  document.documentElement.style.setProperty("--ratio", ratio);
  document.documentElement.style.setProperty("--ratio2", ratio2 * ratio3);
}
var generatedPassword = "2MG85Ui*T$9xSVLe";
function generatePassword() {
  var lowerCase = "qwertyuioplkjhgfdsazxcvbnm";
  var upperCase = lowerCase.toUpperCase();
  var numbers = "1234567890";
  var symbols = "#@%$&*_[]?!";
  generatedPassword = "";
  var chars = "";
  if (switchs_arr[0].isChecked) {
    chars += upperCase;
  }
  if (switchs_arr[1].isChecked) {
    chars += lowerCase;
  }
  if (switchs_arr[2].isChecked) {
    chars += numbers;
  }
  if (switchs_arr[3].isChecked) {
    chars += symbols;
  }

  for (var i = 0; i < parseInt(length); i++) {
    if (chars.length > 0) {
      generatedPassword += chars[Math.floor(Math.random() * chars.length)];
    }
  }

  passText.innerHTML = generatedPassword;
}

window.onload = () => {
  document.body.hidden = false;
  fixed_elements_size();
  anime({
    targets: ".fade-anm",
    opacity: [0, 1],
    scale: [0, 1],
    duration: 500,
    delay: anime.stagger(100),
    easing: "easeOutBack",
  });
  for (i in switchs_arr) {
    anime_switch(i, true);
  }
};
window.onresize = fixed_elements_size;

slider.oninput = (e) => {
  document.documentElement.style.setProperty("--length", slider.value - 1);
  slider_text.innerHTML = slider.value;
  length = slider.value;
};

for (i in switchs_arr) {
  switchs[i].classList.add(`switch${i}`);
  switch_inner[i].classList.add(`switch-inner${i}`);
}
function anime_switch1(index) {
  if (switchs_arr[index].isChecked == true) {
    switchs_arr[index].isChecked = false;
  } else {
    switchs_arr[index].isChecked = true;
  }
  anime_switch(index, switchs_arr[index].isChecked);
}
function anime_switch(index, isChecked) {
  switchs_arr[i].animeation = undefined;
  if (isChecked) {
    console.log(switchs_arr[index].isChecked);
    anime({
      targets: `.switch${index}`,
      background: ["rgba(20, 20, 22, 1)", "rgba(108, 79, 192, 1)"],
      //   opacity: [0, 1],
      duration: 100,
      easing: "linear",
      complete: () => {
        // alert("hello world");
      },
    });
    anime({
      targets: `.switch-inner${index}`,
      width: ["calc(40px * var(--ratio))", "calc(22px * var(--ratio))"],
      height: ["calc(18px * var(--ratio))", "calc(22px * var(--ratio))"],
      left: {
        value: "calc(34px * var(--ratio))",
      },
      border: {
        value: [
          "calc(3px * var(--ratio)) solid #d9d9d9",
          "calc(4px * var(--ratio)) solid #d9d9d9",
        ],
        easing: "linear",
        duration: 100,
      },
      duration: 500,
      // easing: "linear",
      delay: 0,
      complete: () => {
        // alert("hello world");
      },
    });
  } else {
    console.log(switchs_arr[index].isChecked);
    var tl = anime.timeline();
    anime({
      targets: `.switch${index}`,
      background: ["rgba(108, 79, 192, 1)", "rgba(20, 20, 22, 1)"],
      //   opacity: [0, 1],
      duration: 100,
      easing: "linear",
      complete: () => {
        // alert("hello world");
      },
    });
    anime({
      targets: `.switch-inner${index}`,
      width: ["calc(40px * var(--ratio))", "calc(18px * var(--ratio))"],
      height: ["calc(18px * var(--ratio))", "calc(18px * var(--ratio))"],
      left: {
        value: "calc(8px * var(--ratio))",
      },
      border: {
        value: [
          "calc(4px * var(--ratio)) solid #d9d9d9",
          "calc(3px * var(--ratio)) solid #d9d9d9",
        ],
        easing: "linear",
        duration: 100,
      },
      duration: 500,
      // easing: "linear",
      delay: 0,
      complete: () => {
        // alert("hello world");
      },
    });
  }
}

btn.onclick = () => {
  generatePassword();
  anime({
    targets: ".password-cont",
    opacity: [0, 1],
    top: ["25%", "50%"],
    // easing: "easeOutBack",
    duration: 500,
  });
};
copy_btn.onclick = () => {
  try {
    navigator.clipboard.writeText(generatedPassword);
    var tl1 = anime.timeline({
      duration: 500,
      complete: () => {
        tl2.play();
      },
    });
    var tl2 = anime.timeline({
      duration: 500,
      delay: 300,
      autoplay: false,
    });
    tl1.add({
      targets: ".done",
      opacity: [0, 1],
      left: ["100%", "50%"],
    });
    tl1.add(
      {
        targets: ".icon1",
        opacity: [1, 0],
        left: ["50%", "-100%"],
      },
      0
    );

    tl2.add({
      targets: ".done",
      opacity: [1, 0],
      left: ["50%", "100%"],
    });
    tl2.add(
      {
        targets: ".icon1",
        opacity: [0, 1],
        left: ["-100%%", "50%"],
      },
      0
    );
    // alert(generatedPassword);
  } catch (error) {
    var tl1 = anime.timeline({
      duration: 500,
      complete: () => {
        tl2.play();
      },
    });
    var tl2 = anime.timeline({
      duration: 500,
      delay: 300,
      autoplay: false,
    });
    tl1.add({
      targets: ".cancel",
      opacity: [0, 1],
      left: ["100%", "50%"],
    });
    tl1.add(
      {
        targets: ".icon1",
        opacity: [1, 0],
        left: ["50%", "-100%"],
      },
      0
    );

    tl2.add({
      targets: ".cancel",
      opacity: [1, 0],
      left: ["50%", "100%"],
    });
    tl2.add(
      {
        targets: ".icon1",
        opacity: [0, 1],
        left: ["-100%%", "50%"],
      },
      0
    );
  }
};
