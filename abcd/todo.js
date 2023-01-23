// const taskList =[];
// const addtask = () => {
//     const name = document.getElementById("name").value;
  

//     const obj = {
//         id:Date.now(),
//         taskname:name
//     }
//     taskList.push(obj);
//     console.log(taskList);
//     addTaskOnScreen();
// }
// function addTaskOnScreen(){
//     const element = document.createElement("div");
//     element.setAttribute("class","child");
//     const existingelement = document.getElementById("parent");
//     existingelement.appendChild(element);
//     element.innerText = taskList[taskList.length-1].taskname;
   
// }
function add_part(){
document.querySelector(".list").style.display="block"
document.querySelector("div.container").style.filter="blur(10px)"
}

//to hide add new list, .kite1click
$(".b1,.b2").click(function(){
    $(".list,.kite1").hide()
})