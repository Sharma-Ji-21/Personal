let input =14062007;
let inputString=String(input);
let Year=Number(inputString.slice(4, 9));

console.log(Year);

let Month=Number(inputString.slice(2, 4));
if (Month==1){
    console.log("January");
} else if (Month==2){
    console.log("February");
} else if (Month==3){
    console.log("March");
} else if (Month==4){
    console.log("April");
} else if (Month==5){
    console.log("May");
} else if (Month==6){
    console.log("June");
} else if (Month==7){
    console.log("July");
} else if (Month==8){
    console.log("August");
} else if (Month==9){
    console.log("September");
} else if (Month==10){
    console.log("October");
} else if (Month==11){
    console.log("November");
} else if (Month==12){
    console.log("December");
} else {
    console.log("Invalid Month");
}