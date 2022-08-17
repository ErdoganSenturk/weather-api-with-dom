const submitBtn = document.getElementById('submit-btn')
const clear = document.getElementById("clear");

submitBtn.addEventListener("click", function(){
    const inputbtn = document.getElementById('input-btn');
 

const key = "ceb84ee212e3c4957be78d213c7ac491";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputbtn.value}&units=metric&APPID=${key}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const cityName = data.name;
        const temp = data.main.temp;
    
        const description = data.weather[0].description;
        document.getElementById('city').innerText = cityName;
        document.getElementById('temp').innerText = temp.toFixed();
        document.getElementById("des").innerText = description;
       
        
      })
      .catch((res) => console.log(error));
}
)


