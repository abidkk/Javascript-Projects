
function onSubmit() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let s1 = document.getElementById("eng").value;
    let s2 = document.getElementById("math").value;
    let s3 = document.getElementById("phy").value;
    let s4 = document.getElementById("gk").value;
    let s5 = document.getElementById("comp").value;
    console.log(name, roll)
    console.log(s1, s2, s3, s4, s5)



    // setting marks
    let setName = document.getElementById("student_name").innerHTML = `<h2 > <b class="">${name} </b> </h2>`;
    let setRoll = document.getElementById("student_roll").innerHTML = `<h2 >  <b class="">${roll} </b> </h2>`;

    let setColHead = document.getElementById("colHead").innerHTML = `<div class=' bg-gray-700 text-gray-100 p-2 flex gap-4  py-2  hover:shadow-md  duration-500  my-2 justify-between'> <p class=" w-80 px-5 ">Subject</p> <p class="w-40 px-5 text-center"> Total </p>  <p class="w-40 px-4 font-bold text-center ">Obtained</p> </dv>`;
    let setEng = document.getElementById("engMarks").innerHTML = `<div class=' shadow-sm   p-2 flex gap-4  py-2 hover:shadow-md duration-500 my-1 justify-between'> <p class=" w-80 px-5 ">English</p> <p class="w-40 px-5 text-center"> 100 </p>  <p class="w-40 px-4 font-bold text-center ">${s1}</p> </dv>`;
    let setMath = document.getElementById("mathMarks").innerHTML = `<div class=' shadow-sm  p-2 flex gap-4  py-2 hover:shadow-md duration-500 my-1 justify-between'> <p class=" w-80 px-5 ">Mathematics</p> <p class="w-40 px-5 text-center"> 100 </p>  <p class="w-40 px-4 font-bold text-center">${s1}</p> </dv>`;
    let setPhy = document.getElementById("phyMarks").innerHTML = `<div class='shadow-sm p-2 flex gap-4  py-2 hover:shadow-md duration-500 my-1 justify-between'> <p class="w-80 px-5 ">Physics</p> <p class="w-40 px-5 text-center"> 100 </p>  <p class="w-40 px-4 font-bold text-center">${s3}</p> </dv>`;
    let setGk = document.getElementById("gkMarks").innerHTML = `<div class='shadow-sm p-2 flex gap-4  py-2 hover:shadow-md duration-500 my-1 justify-between'> <p class=" w-80 px-5 ">G.Knowledge</p> <p class="w-40 px-5 text-center"> 100 </p>  <p class="w-40 px-4 font-bold text-center">${s4}</p> </dv>`;
    let setCs = document.getElementById("csMarks").innerHTML = `<div class='shadow-sm p-2 flex gap-4  py-2 hover:shadow-md duration-500 my-1 justify-between'> <p class=" w-80 px-5 ">Computer Sci</p> <p class="w-40 px-5 text-center"> 100 </p>  <p class="w-40 px-4 font-bold text-center">${s5}</p> </dv>`;
    let sumUp = Number(s1) + Number(s2) + Number(s3) + Number(s4) + Number(s5)
    let totalObtain = document.getElementById("obtained").innerHTML = `<div class=' bg-gray-700 text-gray-100  p-2 flex gap-4 py-2 my-2 hover:shadow-md   duration-500   justify-between'> <p class=" w-80 px-5 ">Total Marks</p> <p class="w-40 px-5  text-center"> 500 </p>  <p class="w-40 px-4 text-center  font-bold ">${sumUp}</p> </dv>`;
    let percentage = sumUp * 100 / 500;


    // Grade Logic

    let grade = ""
    if (percentage < 70) {
        grade = "Fail"
    } else if (percentage < 80) {
        grade = "B"
    } else if (percentage < 90) {
        grade = "A"
    } else if (percentage < 100) {
        grade = "A+"
    }
    else {
        grade = "Invalid"
    }

    // Remarks logic
    let remark = ""
    if (percentage >= 70) {
        remark = `Congratulations ${name} You have Qualified for next Semester`
    } else {
        remark = `Sorry, ${name} You were unable to Qualify for next Semester`
    }

    let remarkss = document.getElementById('remarks').innerHTML = `        <!-- percentage and grade -->
        <div class=" grid grid-cols-2 gap-2  ">
            <div class="grid grid-cols-2 justify-between bg-gray-100">
                <p class="bg-gray-700 p-2">Percentage</p>
                <p class="text-center p-2 font-bold text-red-500">${percentage}%</p>
            </div>

            <div class="grid grid-cols-2 justify-between bg-gray-100 ">
                <p class="bg-gray-700 p-2">Grade</p>
                <p class="text-center p-2 font-bold text-red-500">${grade}</p>
            </div>
        </div>

        <!-- Remarks -->
        
        <div class="my-2">
            <div class="grid grid-cols-4 justify-between bg-gray-100 ">
                <p class="bg-gray-700 col-span-1 p-2 flex items-center">Remarks</p>
                <p class="text-center p-2 font-bold col-span-3 text-gray-800">${remark}</p>
            </div>
        </div>
`

    var frm = document.getElementsByName('result-form')[0];
    // frm.submit(); // Submit the form
    frm.reset();  // Reset all form data
    return false; // Prevent page refresh
}