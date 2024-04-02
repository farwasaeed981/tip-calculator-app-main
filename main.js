const inputEL = document.querySelector('#input'); 
const btnEL = document.querySelectorAll('.btn'); 
const custom = document.querySelector('#customTip');
const noOfPeople = document.querySelector('#input-people'); 
const errorEL = document.querySelector('#error');
const totalVal = document.querySelectorAll('.total-val, .tip-val'); 
const resetEL = document.querySelector('#reset');


let billVal = 0;
let pplVal = 1;
let tipVal = 0.15;



btnEL.forEach((btn)=> {
    btn.addEventListener('click', handleClick);
});

function handleClick(e){
    btnEL.forEach((btn) =>{
        btn.classList.remove('active');
        if(e.target.innerHTML === btn.innerHTML){
            btn.classList.add('active');
            tipVal = parseFloat(btn.innerHTML)/100;
            console.log(tipVal);
    }
});
    custom.value= ''
    calculate();
}

inputEL.addEventListener('input' , () => {
    if(inputEL.value.includes(',')){
        inputEL.value.replace(',', '.');
    }
    billVal = parseFloat(inputEL.value);
    calculate();
})

custom.addEventListener('input' , () => {
    tipVal = parseFloat(custom.value / 100); 
    btnEL.forEach((btn)=>btn.classList.remove('active'));
    // custom.classList.add('active');
    if(custom.value != 0){
    calculate();
    }
})

noOfPeople.addEventListener('input' , () => {
    pplVal = parseFloat(noOfPeople.value);

    if(pplVal <= 0){
        errorEL.innerHTML = 'Cant be zero';
        document.getElementById('input-people').style.boxShadow = '0 0.125rem 0.25rem red'
    }
    calculate();
})


function calculate ()  {
    if(pplVal >= 1){
        let tip = (billVal * tipVal) / pplVal;
        let totalAmount = (billVal + tip) / pplVal;
        totalVal[0].textContent = '$' + tip.toFixed(2);
        totalVal[1].textContent = '$' + totalAmount.toFixed(2);
    }
}

resetEL.addEventListener('click' , () => {
    inputEL.value = '';
    custom.value = '';
    noOfPeople.value = 1;
    errorEL.innerHTML = '';
    btnEL.forEach((btn) => btn.classList.remove('active'));
    btnEL[0].classList.add('active'); 
    tipVal = 0.15; 
    calculate();
})