console.log("Hello world!");

const getName = document.getElementById("inputName");
const getParty = document.getElementById("inputParty");
let setResult = document.getElementById("compile");
const getVote = 0;


let setData = document.getElementById("dataContainer");

let candidateData = [];

const loopHandler = () => {
  setData.innerHTML = "";
  const candidateList = localStorage.getItem("candidate") || "[]";
  const parsedCandidate = JSON.parse(candidateList);
  candidateData = parsedCandidate;
  candidateData.map((item, index) => {
    console.log(`From localStorage : ${item.name} and ${item.party}`);
    console.log(`good`);
    setData.innerHTML += ` <div class="bg-gray-200 p-2 w-64 m-5 shadow-md">
<!-- icons -->
<div class="flex justify-between  ">
    <img  onclick=(editHandler(${index}))  src="./public/edit.jpg" alt="edit" class="w-6 h-6 cursor-pointer  opacity-50 hover:opacity-100 duration-500 ">
    <img onclick=(removeHandler(${index}))  src="./public/cross2.png" alt="remove" class="w-8 h-8 cursor-pointer  opacity-40 hover:opacity-100 duration-500 ">
</div>
<div>
    <h1 class="text-center py-2 text-xl"> Vote: <b class="text-red-500 "> ${item.vote} </b></h1>
</div>
<div class="flex justify-center">
    <img src="./public/userlogo.png" alt="candidate_logo" class="w-24 h-24 ">
</div>

<div class="text-center  py-2">
    <h1 class="font-bold">${item.name}</h1>
    <h1>${item.party}</h1>
</div>

<div class="pt-2 ">
    <button class="bg-blue-500 w-full px-4 py-1 hover:bg-blue-700 duration-500 text-white" onclick=(voteHandler(${index}))>vote</button>
</div>

</div>`;
  });
};

// Submit handler
const submitHandler = () => {
  const candidate = {
    name: getName.value,
    party: getParty.value,
    vote: 0,
  };

  // if (candidate.name === candidateData[1].name) {
  //     alert("candidate already exists!")

  // }else{
  //     candidateData.push(candidate)
  // }

  candidateData.push(candidate);
  localStorage.setItem("candidate", JSON.stringify(candidateData));

  console.log(candidateData);
  getName.value = "";
  getParty.value = "";
  loopHandler();
};

// vote handler
let voteHandler = (index) => {
  //   console.log("hello vote");
  candidateData[index].vote += 1;
  localStorage.setItem("candidate", JSON.stringify(candidateData));
  loopHandler();
};

// remove candidate
const removeHandler = (index) => {
  //   confirm(
  //     `Are you sure you want to remove ${candidateData[index].name} from Election?`
  //   );

  if (
    confirm(
      `Are you sure you want to remove ${candidateData[index].name} from Election?`
    ) == true
  ) {
    candidateData.splice(index, 1);
    // console.log(candidateData);
    localStorage.setItem("candidate", JSON.stringify(candidateData));
    loopHandler();
    // alert('deleted')
  } else {
    alert("canclead");
  }
};

// edit candidate
const editHandler = (index) => {
  getName.value = candidateData[index].name;
  getParty.value = candidateData[index].party;
};

loopHandler();

// Compile Result LOgic
function onCompile() {
  const winner = candidateData.reduce((prev, current) => {
    return prev.vote > current.vote ? prev : current;
  });

  if (winner.vote == 0) {
    setResult.innerHTML = `<h1 class="text-center text-2xl text-red-500">No Vote Found </h1>`;
  } else {
    setResult.innerHTML = `<div class="px-2 md:px-10 flex justify-between items-center ">
    <div class=" w-full flex flex-wrap gap-5 justify-center items-center ">
    <div>
        <img src="./public/pakistanLogo.png" alt="star" class="w-20 h-20">
    </div>
    <h1 class="bg-green-100 py-2 px-2 md:px-4 md:text-2xl">Congratulation Mr <b class="text-red-500 font-bold">${winner.name} </b> with <b class="text-red-500 font-bold"> ${winner.vote}</b> votes. from party <b class="text-red-500 font-bold">${winner.party}</b>  You are the New Prime Minister of Pakistan</h1>
    <div>
        <img src="./public/star.png" alt="star" class="w-10 h-10">
    </div>
    </div> 
    </div>`;
  }
}