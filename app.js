const submitBtn = document.getElementById('submit-btn')
const clear = document.getElementById("clear");
const inputbtn = document.getElementById('input-btn');


submitBtn.addEventListener("click", function(){
const key = "ceb84ee212e3c4957be78d213c7ac491";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputbtn.value}&units=metric&APPID=${key}&lang=tr`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { name, main:{ temp }, weather } = data
        const description = weather[0].description;
        document.getElementById('city').innerText = name;
        document.getElementById('temp').innerText = temp.toFixed(1);
        document.getElementById("des").innerText = description;
      })
    .catch((error) => console.log(error));
}
)
clear.addEventListener("click", () => { 
  inputbtn.value = " "
})


window.onload = function () {
  inputbtn.focus();
};