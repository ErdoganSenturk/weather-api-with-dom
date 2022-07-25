const submitBtn = document.getElementById('submit-btn')
submitBtn.addEventListener("click", function(){
    const inputbtn = document.getElementById('input-btn').value;
 

const key = "ceb84ee212e3c4957be78d213c7ac491";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputbtn.value}&units=metric&APPID=${key}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const cityName = data.name;
        const tem = data.main.temp;
        const temp = tem - 273.15;
        const description = data.weather[0].description;
        document.getElementById('city').innerText = cityName;
        document.getElementById('temp').innerText = temp.toFixed();
        document.getElementById('des').innerText = description;
      })
      .catch((res) => alert("Please Enter a Right City Name"));
}
)

// const key = "ceb84ee212e3c4957be78d213c7ac491";
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&APPID=${key}`;

// `https://api.openweathermap.org/data/2.5/weather?q=${inputbtn.value}&units=metric&appid=bdd3a9eeeb496f366d2a0051b35ac744`;