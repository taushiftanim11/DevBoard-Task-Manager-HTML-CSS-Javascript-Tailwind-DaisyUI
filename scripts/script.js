function btnClick(id, hId){

    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const time = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;


    const taskCount = document.getElementById("task-count").innerText;
    const floatTaskCount = parseFloat(taskCount);
    const taskDone = document.getElementById("task-done").innerText;
    const floatTaskDone = parseFloat(taskDone);


    const title = document.getElementById(hId).innerText;
    const history = document.getElementById("history");
    const para = document.createElement("p")
    para.innerHTML = `
    <p class="p-[10px] rounded-[4px] bg-[#eef3ff]">
        You have Complete The Task "${title}" at ${time}
    </p>
    `;


    document.getElementById("task-count").innerHTML = floatTaskCount-1;
    document.getElementById("task-done").innerHTML = floatTaskDone+1;

    document.getElementById(id).setAttribute("disabled", "");
    document.getElementById(id).style.backgroundColor = "#CED6FF";

    
    history.appendChild(para);
}
document.getElementById("b1").addEventListener("click", function(){
    btnClick("b1", "h1");
});
document.getElementById("b2").addEventListener("click", function(){
    btnClick("b2", "h2");
});
document.getElementById("b3").addEventListener("click", function(){
    btnClick("b3", "h3");
});
document.getElementById("b4").addEventListener("click", function(){
    btnClick("b4", "h4");
});
document.getElementById("b5").addEventListener("click", function(){
    btnClick("b5", "h5");
});
document.getElementById("b6").addEventListener("click", function(){
    btnClick("b6", "h6");
});




document.getElementById("clear-history").addEventListener("click", function() {
    const history = document.getElementById("history");
    history.innerHTML = "";
});



function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
document.getElementById("change-color").addEventListener("click", function() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});



function updateDate() {
    const now = new Date();
    
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const weekday = daysOfWeek[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear();
    
    document.getElementById("weekday").textContent = `${weekday} ,`;
    document.getElementById("month-date-year").textContent = `${month} ${date} ${year}`;
}
updateDate();
