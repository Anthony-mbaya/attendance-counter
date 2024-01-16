let count = 0;

let countEl = document.getElementById("counter");

function increment(){
    count += 1;
    countEl.textContent = count;
}
   
function save(){
    let durationEl = document.getElementById("duration").value;
    let recordEl = document.getElementById("record");
    recordEl.textContent =  durationEl + " : " + "[ " + count + " ]";
    countEl.textContent = 0;
    count = 0;
}

 