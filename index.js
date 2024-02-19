const spinBtn = document.querySelector('.spinBtn');
const wheel = document.querySelector('.wheel');
const button = document.querySelector('.button');
let inputp = document.querySelector('.inputp');
const input = document.querySelector('.input');
const deleteBtn = document.querySelector('.deleteBtn');
const clearAll = document.querySelector('.clrall');


let spinResults = Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000;

const timingCurve = 'cubic-bezier(0.25, 0.01, 0.25, 1)'; 



let arrayvalue = [];



let result = Math.floor(Math.random() * 8) + 1;


/////////////////////////////////////////////////////////////////

renderHTML();





spinBtn.onclick = function(){
    if(document.querySelector('.one').innerHTML === '') {
        console.log('nothing to spin');
    } else {
        wheel.style.transition = `transform 10s ${timingCurve}`;
        wheel.style.transform = "rotate(" + spinResults +"deg)";
        spinResults += Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000;
        console.log(spinResult);
    };
}




function renderHTML(){

    let acchtml = '';

    for(let i = 0; i < arrayvalue.length; i++){
        let Value = arrayvalue[i];
        let html = `
        <p class="pco">
        </p>`;
        if (i == 0){
            document.querySelector('.one').innerHTML = `${Value}`;
        }else if(i == 1){
            document.querySelector('.two').innerHTML = `${Value}`;
        }else if(i == 2){
            document.querySelector('.three').innerHTML = `${Value}`;
        }else if(i == 3){
            document.querySelector('.four').innerHTML = `${Value}`;
        }else if(i == 4){
            document.querySelector('.five').innerHTML = `${Value}`;
        }else if(i == 5){
            document.querySelector('.six').innerHTML = `${Value}`;
        }else if(i == 6){
            document.querySelector('.seven').innerHTML = `${Value}`;
        }else if(i == 7){
            document.querySelector('.eight').innerHTML = `${Value}`;
        }
        
        acchtml += html;
    }
   
    
    
    document.querySelector('.pcon').innerHTML = acchtml;
};

function spinDelete(){
    document.querySelector('.one').innerHTML = '';
    document.querySelector('.two').innerHTML = '';
    document.querySelector('.three').innerHTML = '';
    document.querySelector('.four').innerHTML = '';
    document.querySelector('.five').innerHTML = '';
    document.querySelector('.six').innerHTML = '';
    document.querySelector('.seven').innerHTML = '';
    document.querySelector('.eight').innerHTML = '';
    arrayvalue = [];
}





button.onclick = () => {
    if (input.value === '') {
        console.log('none');
    } else {
        btnclick();
    }
};

function btnclick (){
    let inputValue = input.value;
    if(arrayvalue.length < 8){
        arrayvalue.push(inputValue);
        renderHTML();
    } else {
        console.log('Maximum array length reached (8 indexes)');
    }
    input.value = '';
};




/*notes
for(let i = 0; i < arrayvalue.length; i++){
        let Value = arrayvalue[i];
        let html = `
        <p class="pco">
        ${Value} 
        <button onclick="
        arrayvalue.splice(${i}, 1);
        renderHTML();
        ">Delete</button>
        </p>`;
        if (i == 0){
            document.querySelector('.one').innerHTML = `${Value}`;
        }else if(i == 1){
            document.querySelector('.two').innerHTML = `${Value}`;
        }else if(i == 2){
            document.querySelector('.three').innerHTML = `${Value}`;
        }else if(i == 3){
            document.querySelector('.four').innerHTML = `${Value}`;
        }else if(i == 4){
            document.querySelector('.five').innerHTML = `${Value}`;
        }else if(i == 5){
            document.querySelector('.six').innerHTML = `${Value}`;
        }else if(i == 6){
            document.querySelector('.seven').innerHTML = `${Value}`;
        }else if(i == 7){
            document.querySelector('.eight').innerHTML = `${Value}`;
        }
        
        acchtml += html;
    }
    */
