const btnEl = document.getElementById('btn');
const bmiresultEl = document.getElementById('bmi-result');
const weightConditionEl = document.getElementById('weight-condition');


function calculateBMI(){
    const heightValue = document.getElementById('height').value / 100;
    const weightValue = document.getElementById('weight').value;

    const bmiValue = weightValue / (heightValue*heightValue);

    bmiresultEl.value = bmiValue;

    if(bmiValue < 18.5){
     weightConditionEl.innerText = "Under wight";
    }else if(bmiValue >= 18.5 && bmiValue <=24.9){
        weightConditionEl.innerText = "Normal weight";
    }else if(bmiValue >= 25 && bmiValue <=29.9){
        weightConditionEl.innerText = "Overweight";
    }else if(bmiValue >=30){
        weightConditionEl.innerText = 'Obesity';
    }

    console.log(bmiValue)

}

btnEl.addEventListener('click',calculateBMI);