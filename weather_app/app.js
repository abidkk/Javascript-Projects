// getting userInput
let userVal = document.getElementById('userInp');
document.getElementById('head').innerHTML =`<p class="text-6xl tewt-white px-5 font-bold py-10 font-sans" > Weather <span class="text-purple-300 font-serif">App </span> </p>`

// get current weather containers
let display = document.getElementById('out');
let temperature = document.getElementById('temp');
let symbol = document.getElementById('icon');
let state = document.getElementById('text');


// getting days container
// let day1 = document.getElementById('d1');
let day2 = document.getElementById('d2');
let day3 = document.getElementById('d3');
let day4 = document.getElementById('d4');
let day5 = document.getElementById('d5');
let day6 = document.getElementById('d6');
let day7 = document.getElementById('d7');


//// get days containers
async function onSubmit(){
let location = userVal.value;
// fetching Api
let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=23fcc5d639524b19b2c142225241002&q=${location}&days=7`);
let weatherData = await data.json();
console.log(weatherData)


document.getElementById('head').innerHTML =``

// Setting up Current Weather
display.innerHTML = ` <span> ${weatherData.location.name}</span>`;
temperature.innerHTML = `<span class="text-6xl">&#176;</span> <span class="text-4xl font-mono"> ${weatherData.current.temp_c}</span> `;
symbol.innerHTML = `<img src="${weatherData.current.condition.icon}" alt="icon" class="w-20 h-20 ">`;
state.innerHTML = weatherData.current.condition.text;




// converting date to days logic
let days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// let date1 = new Date(weatherData.forecast.forecastday[0].date);
let date2 = new Date(weatherData.forecast.forecastday[1].date);
let date3 = new Date(weatherData.forecast.forecastday[2].date);
let date4 = new Date(weatherData.forecast.forecastday[3].date);
let date5 = new Date(weatherData.forecast.forecastday[4].date);
let date6 = new Date(weatherData.forecast.forecastday[5].date);
let date7 = new Date(weatherData.forecast.forecastday[6].date);

// let dayName1 = days[date1.getDay()];
let dayName2 = days[date2.getDay()];
let dayName3 = days[date3.getDay()];
let dayName4 = days[date4.getDay()];
let dayName5 = days[date5.getDay()];
let dayName6 = days[date6.getDay()];
let dayName7 = days[date7.getDay()];





// Day2  Weather
let day2Temp = weatherData.forecast.forecastday[1].day.avgtemp_c;
let day2Stat = weatherData.forecast.forecastday[1].day.condition.text;
let day2Icon = weatherData.forecast.forecastday[1].day.condition.icon;


// Day3  Weather
let day3Temp = weatherData.forecast.forecastday[2].day.avgtemp_c;
let day3Stat = weatherData.forecast.forecastday[2].day.condition.text;
let day3Icon = weatherData.forecast.forecastday[2].day.condition.icon;


// Day4  Weather
let day4Temp = weatherData.forecast.forecastday[3].day.avgtemp_c;
let day4Stat = weatherData.forecast.forecastday[3].day.condition.text;
let day4Icon = weatherData.forecast.forecastday[3].day.condition.icon;


// Day5  Weather
let day5Temp = weatherData.forecast.forecastday[4].day.avgtemp_c;
let day5Stat = weatherData.forecast.forecastday[4].day.condition.text;
let day5Icon = weatherData.forecast.forecastday[4].day.condition.icon;


// Day6  Weather
let day6Temp = weatherData.forecast.forecastday[5].day.avgtemp_c;
let day6Stat = weatherData.forecast.forecastday[5].day.condition.text;
let day6Icon = weatherData.forecast.forecastday[5].day.condition.icon;


// Day7  Weather
let day7Temp = weatherData.forecast.forecastday[6].day.avgtemp_c;
let day7Stat = weatherData.forecast.forecastday[6].day.condition.text;
let day7Icon = weatherData.forecast.forecastday[6].day.condition.icon;

//// Setting upcoming weather
// day1.innerHTML = dayName1
day2.innerHTML = ` <ul class="w-20 sm:w-24 text-xs  p-1 ">  <li class=" bg-gray-900">${dayName2} </li>  <li class="text-sm font-bold font-mono"><span class="text-xl">&#176;</span>${day2Temp}</li>  <li class="h-10 w-10 mx-auto" > <img src="${day2Icon}" alt="" class=""> </li> <li>${day2Stat}</li> </ul>`
day3.innerHTML = ` <ul class="w-20 sm:w-24 text-xs  p-1 ">  <li class=" bg-gray-900">${dayName3} </li>  <li class="text-sm font-bold font-mono"><span class="text-xl">&#176;</span>${day3Temp}</li>  <li class="h-10 w-10 mx-auto" > <img src="${day3Icon}" alt="" class=""> </li> <li>${day3Stat}</li> </ul>`
day4.innerHTML = ` <ul class="w-20 sm:w-24 text-xs  p-1 ">  <li class=" bg-gray-900">${dayName4} </li>  <li class="text-sm font-bold font-mono"><span class="text-xl">&#176;</span>${day4Temp}</li>  <li class="h-10 w-10 mx-auto" > <img src="${day4Icon}" alt="" class=""> </li> <li>${day4Stat}</li> </ul>`
day5.innerHTML = ` <ul class="w-20 sm:w-24 text-xs  p-1 ">  <li class=" bg-gray-900">${dayName5} </li>  <li class="text-sm font-bold font-mono"><span class="text-xl">&#176;</span>${day5Temp}</li>  <li class="h-10 w-10 mx-auto" > <img src="${day5Icon}" alt="" class=""> </li> <li>${day5Stat}</li> </ul>`
day6.innerHTML = ` <ul class="w-20 sm:w-24 text-xs  p-1 ">  <li class=" bg-gray-900">${dayName6} </li>  <li class="text-sm font-bold font-mono"><span class="text-xl">&#176;</span>${day6Temp}</li>  <li class="h-10 w-10 mx-auto" > <img src="${day6Icon}" alt="" class=""> </li> <li>${day6Stat}</li> </ul>`
day7.innerHTML = ` <ul class="w-20 sm:w-24 text-xs  p-1 ">  <li class=" bg-gray-900">${dayName7} </li>  <li class="text-sm font-bold font-mono"><span class="text-xl">&#176;</span>${day7Temp}</li>  <li class="h-10 w-10 mx-auto" > <img src="${day7Icon}" alt="" class=""> </li> <li>${day7Stat}</li> </ul>`


}

