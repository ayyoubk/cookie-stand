/* eslint-disable no-unused-vars */
'use strict';

const hoursOfOpen= ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'];
let branchs = [];
function Store (branchName,minCust,maxCust,avgCookiesPercust,salesFactor){
  this.branchName=branchName;
  this.minCust=minCust;
  this.maxCust=maxCust;
  this.avgCookiesPercust=avgCookiesPercust;
  this.salesFactor=salesFactor;
  this.custNumHourly=[];
  this.cookisPerHour=[];
  this.totalCookies=0;
  branchs.push(this);

}
Store.prototype.randomCust=function(){
  for (let i=0;i<14;i++){
    this.custNumHourly.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
  }
};
Store.prototype.cookiesHourly=function(){
  for (let i=0;i<14;i++){
    this.cookisPerHour.push(Math.ceil(this.avgCookiesPercust*this.custNumHourly[i]*this.salesFactor));
    this.totalCookies=this.totalCookies+this.cookisPerHour[i];
  }
};

Store.prototype.calc=function(){
  this.randomCust();
  this.cookiesHourly();

};
Store.prototype.render=function(){
  let tableRow=document.createElement('tr');
  tableRow.setAttribute('class', 'row');
  table.appendChild(tableRow);
  let tableData=document.createElement('th');
  tableRow.appendChild(tableData);
  tableData.textContent=this.branchName;
  for(let i=0;i<this.cookisPerHour.length;i++){
    tableData=document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent=this.cookisPerHour[i];
  }
  tableData=document.createElement('td');
  tableRow.appendChild(tableData);
  tableData.textContent=this.totalCookies;
};

let seattle = new Store('Seattle',23,65,6.3,1);
let tokyo = new Store('Tokyo',3,24,1.2,1);
let dubai = new Store('Dubai',11,38,3.7,1);
let paris = new Store('Paris',20,38,2.3,1);
let lima = new Store('Lima',23,65,6.3,1);


let container = document.getElementById('cookieSales');
let heading = document.createElement('h2');
container.appendChild(heading);
heading.textContent='Sales Statistics :';
let table =document.createElement('table');
container.appendChild(table);
let tableRow=document.createElement('tr');
table.appendChild(tableRow);
let tableHeader=document.createElement('th');
tableRow.appendChild(tableHeader);
tableHeader.textContent='      ';
for(let i=0;i<hoursOfOpen.length;i++){
  tableHeader=document.createElement('th');
  tableRow.appendChild(tableHeader);
  tableHeader.textContent=hoursOfOpen[i];
}
tableHeader=document.createElement('th');
tableRow.appendChild(tableHeader);
tableHeader.textContent='Daily Location Total';

// get form
const form =  document.getElementById('new-stand');
form.addEventListener('submit', getForm);

for(let b=0 ;b<branchs.length ;b++){
  branchs[b].calc();
  branchs[b].render();
}
let lastRow=document.createElement('tr');
table.appendChild(lastRow);
finalRow();

console.log(branchs);





function getForm(event){
  event.preventDefault();
  let standLoc=event.target.loc.value;
  let min=parseInt(event.target.min.value);
  let max=parseInt(event.target.max.value);
  let avg=parseFloat(event.target.avg.value);
  let salesFcr=parseFloat(event.target.factor.value);
  let newLoc= new Store(standLoc,min,max,avg,salesFcr);
  newLoc.calc();
  newLoc.render();
  console.log(table.rows.length);
  finalRow();
}

function finalRow(){
  lastRow.remove();
  lastRow=document.createElement('tr');
  table.appendChild(lastRow);
  let tableData=document.createElement('th');
  lastRow.appendChild(tableData);
  tableData.textContent='Totals/hrs';
  let cookiesForAll=0;
  for(let i=0;i<hoursOfOpen.length;i++){
    let totalAtOneHour=0;
    for(let j=0;j<branchs.length;j++){
      totalAtOneHour=totalAtOneHour+branchs[j].cookisPerHour[i];
    }
    tableData=document.createElement('td');
    lastRow.appendChild(tableData);
    tableData.textContent=totalAtOneHour;
    cookiesForAll=cookiesForAll+totalAtOneHour;
  }
  let lastData=document.createElement('td');
  lastRow.appendChild(lastData);
  lastData.textContent=cookiesForAll;
}
