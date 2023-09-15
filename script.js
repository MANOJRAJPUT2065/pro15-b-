const form=document.querySelector('form');
form.addEventListener("submit",function(event){
    event.preventDefault();


const height=parseInt(document.querySelector("#height").value);
const weight=parseInt(document.querySelector("#weight").value);
const results=document.querySelector("#results");

if(height== ''||height<0 || isNaN(height)){
    results.innerHTML=`plz give a valid height number ${height}`;
}else if (weight== ''||weight<0 || isNaN(weight)){
    results.innerHTML=`plz give a valid weight number ${weight}`;
}
else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

results.innerHTML=`<span>${bmi}</span>`;
}
if (bmi<19){
results.innerHTML="underweight";
}

});

