
const birth = document.getElementById("date");
birth.value = "2019-01-01";
const calc = document.getElementById("calc");
const res = document.getElementById("result");
const nameOfCh = document.getElementById("nameOfCh");

calc.onclick = onClickCalc;

//adding certain amount of days to any date
function countResult(dateForCount, days){
    let dateRes = dateForCount;
    dateRes.setDate(dateForCount.getDate() + days);
    return dateRes;
}

//adding certain amount of month to any date
function countResultByMonth(dateForCount, months){
    let dateRes1 = dateForCount;
    dateRes1.setMonth(dateForCount.getMonth() + months);
    return dateRes1;
}


/*
//class for every vaccine
class Vac{
    constructor(vaccine, numOfVac) {
        this.vaccine = vaccine;
        this.numOfVacs = numOfVac;
        this.dateOfVac = "";
    }
}

//class for the list of vaccines from JSON document
class Vaccines{
    constructor() { 
        this.vacList = [];
    }
    addVac(vaccine, numOfVac){
        if (typeof vaccine !== "string" || typeof numOfVac === "string" || 0 === vaccine.length || 0 === numOfVac.length){
            console.log("Wrong input");
            return false;
        }
        let vac = new Vac(vaccine, numOfVac);
        this.vacList.push(vac);
        console.log("The vaccine " + vaccine + " was added");
    }
}
*/

let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  };


function onClickCalc(){
    result.innerHTML = "";
    result.style.color = "#2F4F4F";
    result.style.fontSize = "12pt";
    result.style.fontWeight = "300";
    let divIntro = document.createElement('div');
    divIntro.style.fontSize = "14pt";
    if (nameOfCh.value !== ""){
        divIntro.innerText = "Календарь прививок для тебя, " + nameOfCh.value + ":" ;
    }
    else{
        divIntro.innerText = "Календарь прививок для тебя, друг:";
    }
   // divIntro.innerHTML = "Ваш календарь прививок: ";
    result.appendChild(divIntro);
    
    //creating table
    let table = document.createElement('table');
    //table.border = "1 px";
    table.cellPadding = "7px";
    
    //creating header of the table
    let th = document.createElement('th');
    th.innerText = "Прививка";
    table.appendChild(th);
    th = document.createElement('th');
    th.innerText = "Вакцинация";
    table.appendChild(th);
    th = document.createElement('th');
    th.innerText = "Дата";
    table.appendChild(th);
    //creating rows with vaccines
    let DateOfVac = new Date(birth.value);
    let countOfRows = myData.vacs.length;
    for (i = 0; i < countOfRows; i++){
        DateOfVac = new Date(birth.value);
        let row = document.createElement('tr');
        table.appendChild(row);
        let td = document.createElement('td');
        td.innerText = myData.vacs[i].vac;
        row.appendChild(td);
        td = document.createElement('td');
        td.innerText = myData.vacs[i].numOfVac;
        row.appendChild(td);
        td = document.createElement('td');
        let amount = +myData.vacs[i].addAmount;
        if ((+(myData.vacs[i].addWhat)) === 1){
            DateOfVac = countResult(new Date(birth.value), amount);
        }
        else if ((+(myData.vacs[i].addWhat)) === 2){
            DateOfVac = countResultByMonth(new Date(birth.value), amount);
        }
        else{
            console.log("Wrong data in initial table with vaccines");
            return false;
        }
        td.innerText = DateOfVac.toLocaleString("ru", options);
        row.appendChild(td);
    }
    result.appendChild(table);
}

//если дата не меняется предусмотреть чтобы данные не менялись
// <script type="text/javascript" src="listVac.js"></script> из хтмл