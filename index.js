const amount = document.querySelector("#amount");
const percent = document.querySelector("#percent");
const btn = document.querySelector("#btn");
const total = document.querySelector("#total");


btn.addEventListener("click", ()=>{
    total.innerHTML = (Number(amount.value) * (Number(percent.value) / 100)) + Number(amount.value) + "$";
})