let contain = document.getElementById("container");

let get_user = document.getElementById("search");
let get_header = document.getElementById("header");

function searchHandler() {
  get_header.innerHTML = `<h1 class="text-white text-2xl text-center">${get_user.value} </h1>`;
  


  async function call() {
    let data = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_3856532c18648c8a2d33a5427ee3490a67d5e&q=${get_user.value}&language=en`
    );
    let newsData = await data.json();
  
    newsData.results.map((res) => {
      console.log(res);
      console.log(res.title);
      contain.innerHTML += `
      <div  class=" flex flex-wrap  gap-2 rounded-md">
          <ul class="w-[400px] p-2 bg-white rouned-md">
              <li class=""> <b class="font-bold">Titile:  </b> ${res.title}</li>
              <li class=""> <b class="font-bold">Category:  </b>${res.category}</li>
              <li class=""> <b class="font-bold">Language:  </b>${res.language}</li>
              <li class=""> <b class="font-bold">Creator:  </b>${res.creator}</li>
              <li class=""><img src="${res.image_url}" alt=""></li>
              <li class=" py-4"> <b class="font-bold">Description:  </b>${res.description}</li>  
          </ul>
      </div> 
          `;
    });
  }
  call()
}


