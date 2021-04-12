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
  }
};
Store.prototype.total=function(){
  for(let i=0;i<14;i++){
    this.totalCookies=this.totalCookies+this.cookisPerHour[i];
  }
};
Store.prototype.calc=function(){
  this.randomCust();
  this.cookiesHourly();
  this.total();
};
Store.prototype.render=function(){
  let tableRow=document.createElement('tr');
  table.appendChild(tableRow);
  let tableData=document.createElement('td');
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

seattle.calc();
tokyo.calc();
dubai.calc();
paris.calc();
lima.calc();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
console.log(branchs);
let lastRow=document.createElement('tr');
table.appendChild(lastRow);
let tableData=document.createElement('td');
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







// const seattle = {
//   branchName:'Seattle',
//   minCust:23,
//   maxCust:65,
//   openHours:['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'],
//   custNumHourly:[],
//   cookisPerHour:[],
//   totalCookies:0,
//   avgCookiesPercust:6.3,
//   salesFactor:1, //1 means A normal day || ex: (= 2 if today marks cookies day)
//   randomCust:function(){
//     for (let i=0;i<14;i++){
//       this.custNumHourly.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
//     }
//   },
//   cookiesHourly:function(){
//     for (let i=0;i<14;i++){
//       this.cookisPerHour.push(Math.ceil(this.avgCookiesPercust*this.custNumHourly[i]*this.salesFactor));
//     }
//   },
//   total:function(){
//     for(let i=0;i<14;i++){
//       this.totalCookies=this.totalCookies+this.cookisPerHour[i];
//     }
//   },
//   branchSales:function(){
//     this.randomCust();
//     this.cookiesHourly();
//     this.total();
//     let container = document.getElementById('cookieSales');
//     let heading = document.createElement('h3');
//     container.appendChild(heading);
//     heading.textContent=`${this.branchName} Sales :`;
//     let table =document.createElement('table');
//     container.appendChild(table);
//     let tableRow=document.createElement('tr');
//     table.appendChild(tableRow);
//     let tableHeader=document.createElement('th');
//     tableRow.appendChild(tableHeader);
//     tableHeader.textContent='Hours';
//     let tableHeader1=document.createElement('th');
//     tableRow.appendChild(tableHeader1);
//     tableHeader1.textContent='Cookies';
//     let tableRow1=null;
//     let tableData=null;
//     let tableData1=null;
//     for(let i=0;i<14;i++){
//       tableRow1=document.createElement('tr');
//       table.appendChild(tableRow1);
//       tableData=document.createElement('td');
//       tableData1=document.createElement('td');
//       tableRow1.appendChild(tableData);
//       tableRow1.appendChild(tableData1);
//       tableData.textContent=this.openHours[i];
//       tableData1.textContent=this.cookisPerHour[i];
//     }
//     let finalRow=document.createElement('tr');
//     table.appendChild(finalRow);
//     let finaldata=document.createElement('td');
//     finalRow.appendChild(finaldata);
//     finaldata.textContent='Total';
//     let finaldata1=document.createElement('td');
//     finalRow.appendChild(finaldata1);
//     finaldata1.textContent=this.totalCookies;
//   },
//   salesList:function(){
//     this.randomCust();
//     this.cookiesHourly();
//     this.total();
//     let container = document.getElementById('cookieSales');
//     let heading = document.createElement('h3');
//     container.appendChild(heading);
//     heading.textContent=`${this.branchName} Sales :`;
//     let uoList=document.createElement('ul');
//     container.appendChild(uoList);
//     let item=null;
//     for(let i=0;i<14;i++){
//       item=document.createElement('li');
//       uoList.appendChild(item);
//       item.textContent=`${this.openHours[i]} : ${this.cookisPerHour[i]}`;
//     }
//     item.textContent=`Total : ${this.totalCookies}`;
//   }
// };

// // seattle.branchSales();

// ///////////////////////

// const tokyo = {
//   branchName:'Tokyo',
//   minCust:3,
//   maxCust:24,
//   openHours:['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'],
//   custNumHourly:[],
//   cookisPerHour:[],
//   totalCookies:0,
//   avgCookiesPercust:1.2,
//   salesFactor:1, //1 means A normal day || ex: (= 2 if today marks cookies day)
//   randomCust:function(){
//     for (let i=0;i<14;i++){
//       this.custNumHourly.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
//     }
//   },
//   cookiesHourly:function(){
//     for (let i=0;i<14;i++){
//       this.cookisPerHour.push(Math.ceil(this.avgCookiesPercust*this.custNumHourly[i]*this.salesFactor));
//     }
//   },
//   total:function(){
//     for(let i=0;i<14;i++){
//       this.totalCookies=this.totalCookies+this.cookisPerHour[i];
//     }
//   },
//   branchSales:function(){
//     this.randomCust();
//     this.cookiesHourly();
//     this.total();
//     let container = document.getElementById('cookieSales');
//     let heading = document.createElement('h3');
//     container.appendChild(heading);
//     heading.textContent=`${this.branchName} Sales :`;
//     let table =document.createElement('table');
//     container.appendChild(table);
//     let tableRow=document.createElement('tr');
//     table.appendChild(tableRow);
//     let tableHeader=document.createElement('th');
//     tableRow.appendChild(tableHeader);
//     tableHeader.textContent='Hours';
//     let tableHeader1=document.createElement('th');
//     tableRow.appendChild(tableHeader1);
//     tableHeader1.textContent='Cookies';
//     let tableRow1=null;
//     let tableData=null;
//     let tableData1=null;
//     for(let i=0;i<14;i++){
//       tableRow1=document.createElement('tr');
//       table.appendChild(tableRow1);
//       tableData=document.createElement('td');
//       tableData1=document.createElement('td');
//       tableRow1.appendChild(tableData);
//       tableRow1.appendChild(tableData1);
//       tableData.textContent=this.openHours[i];
//       tableData1.textContent=this.cookisPerHour[i];
//     }
//     let finalRow=document.createElement('tr');
//     table.appendChild(finalRow);
//     let finaldata=document.createElement('td');
//     finalRow.appendChild(finaldata);
//     finaldata.textContent='Total';
//     let finaldata1=document.createElement('td');
//     finalRow.appendChild(finaldata1);
//     finaldata1.textContent=this.totalCookies;
//   },
//   salesList:function(){
//     this.randomCust();
//     this.cookiesHourly();
//     this.total();
//     let container = document.getElementById('cookieSales');
//     let heading = document.createElement('h3');
//     container.appendChild(heading);
//     heading.textContent=`${this.branchName} Sales :`;
//     let uoList=document.createElement('ul');
//     container.appendChild(uoList);
//     let item=null;
//     for(let i=0;i<14;i++){
//       item=document.createElement('li');
//       uoList.appendChild(item);
//       item.textContent=`${this.openHours[i]} : ${this.cookisPerHour[i]}`;
//     }
//     item.textContent=`Total : ${this.totalCookies}`;
//   }
// };

// // tokyo.branchSales();

// /////////////////////

// const dubai = {
//   branchName:'Dubai',
//   minCust:11,
//   maxCust:38,
//   openHours:['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'],
//   custNumHourly:[],
//   cookisPerHour:[],
//   totalCookies:0,
//   avgCookiesPercust:3.7,
//   salesFactor:1, //1 means A normal day || ex: (= 2 if today marks cookies day)
//   randomCust:function(){
//     for (let i=0;i<14;i++){
//       this.custNumHourly.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
//     }
//   },
//   cookiesHourly:function(){
//     for (let i=0;i<14;i++){
//       this.cookisPerHour.push(Math.ceil(this.avgCookiesPercust*this.custNumHourly[i]*this.salesFactor));
//     }
//   },
//   total:function(){
//     for(let i=0;i<14;i++){
//       this.totalCookies=this.totalCookies+this.cookisPerHour[i];
//     }
//   },
//   branchSales:function(){
//     this.randomCust();
//     this.cookiesHourly();
//     this.total();
//     let container = document.getElementById('cookieSales');
//     let heading = document.createElement('h3');
//     container.appendChild(heading);
//     heading.textContent=`${this.branchName} Sales :`;
//     let table =document.createElement('table');
//     container.appendChild(table);
//     let tableRow=document.createElement('tr');
//     table.appendChild(tableRow);
//     let tableHeader=document.createElement('th');
//     tableRow.appendChild(tableHeader);
//     tableHeader.textContent='Hours';
//     let tableHeader1=document.createElement('th');
//     tableRow.appendChild(tableHeader1);
//     tableHeader1.textContent='Cookies';
//     let tableRow1=null;
//     let tableData=null;
//     let tableData1=null;
//     for(let i=0;i<14;i++){
//       tableRow1=document.createElement('tr');
//       table.appendChild(tableRow1);
//       tableData=document.createElement('td');
//       tableData1=document.createElement('td');
//       tableRow1.appendChild(tableData);
//       tableRow1.appendChild(tableData1);
//       tableData.textContent=this.openHours[i];
//       tableData1.textContent=this.cookisPerHour[i];
//     }
//     let finalRow=document.createElement('tr');
//     table.appendChild(finalRow);
//     let finaldata=document.createElement('td');
//     finalRow.appendChild(finaldata);
//     finaldata.textContent='Total';
//     let finaldata1=document.createElement('td');
//     finalRow.appendChild(finaldata1);
//     finaldata1.textContent=this.totalCookies;
//   },
//   salesList:function(){
//     this.randomCust();
//     this.cookiesHourly();
//     this.total();
//     let container = document.getElementById('cookieSales');
//     let heading = document.createElement('h3');
//     container.appendChild(heading);
//     heading.textContent=`${this.branchName} Sales :`;
//     let uoList=document.createElement('ul');
//     container.appendChild(uoList);
//     let item=null;
//     for(let i=0;i<14;i++){
//       item=document.createElement('li');
//       uoList.appendChild(item);
//       item.textContent=`${this.openHours[i]} : ${this.cookisPerHour[i]}`;
//     }
//     item.textContent=`Total : ${this.totalCookies}`;
//   }
// };

// // dubai.branchSales();

// ////////////////////

// const paris = {
//   branchName:'Paris',
//   minCust:20,
//   maxCust:38,
//   openHours:['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'],
//   custNumHourly:[],
//   cookisPerHour:[],
//   totalCookies:0,
//   avgCookiesPercust:2.3,
//   salesFactor:1, //1 means A normal day || ex: (= 2 if today marks cookies day)
//   randomCust:function(){
//     for (let i=0;i<14;i++){
//       this.custNumHourly.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
//     }
//   },
//   cookiesHourly:function(){
//     for (let i=0;i<14;i++){
//       this.cookisPerHour.push(Math.ceil(this.avgCookiesPercust*this.custNumHourly[i]*this.salesFactor));
//     }
//   },
//   total:function(){
//     for(let i=0;i<14;i++){
//       this.totalCookies=this.totalCookies+this.cookisPerHour[i];
//     }
//   },
//   branchSales:function(){
//     this.randomCust();
//     this.cookiesHourly();
//     this.total();
//     let container = document.getElementById('cookieSales');
//     let heading = document.createElement('h3');
//     container.appendChild(heading);
//     heading.textContent=`${this.branchName} Sales :`;
//     let table =document.createElement('table');
//     container.appendChild(table);
//     let tableRow=document.createElement('tr');
//     table.appendChild(tableRow);
//     let tableHeader=document.createElement('th');
//     tableRow.appendChild(tableHeader);
//     tableHeader.textContent='Hours';
//     let tableHeader1=document.createElement('th');
//     tableRow.appendChild(tableHeader1);
//     tableHeader1.textContent='Cookies';
//     let tableRow1=null;
//     let tableData=null;
//     let tableData1=null;
//     for(let i=0;i<14;i++){
//       tableRow1=document.createElement('tr');
//       table.appendChild(tableRow1);
//       tableData=document.createElement('td');
//       tableData1=document.createElement('td');
//       tableRow1.appendChild(tableData);
//       tableRow1.appendChild(tableData1);
//       tableData.textContent=this.openHours[i];
//       tableData1.textContent=this.cookisPerHour[i];
//     }
//     let finalRow=document.createElement('tr');
//     table.appendChild(finalRow);
//     let finaldata=document.createElement('td');
//     finalRow.appendChild(finaldata);
//     finaldata.textContent='Total';
//     let finaldata1=document.createElement('td');
//     finalRow.appendChild(finaldata1);
//     finaldata1.textContent=this.totalCookies;
//   },
//   salesList:function(){
//     this.randomCust();
//     this.cookiesHourly();
//     this.total();
//     let container = document.getElementById('cookieSales');
//     let heading = document.createElement('h3');
//     container.appendChild(heading);
//     heading.textContent=`${this.branchName} Sales :`;
//     let uoList=document.createElement('ul');
//     container.appendChild(uoList);
//     let item=null;
//     for(let i=0;i<14;i++){
//       item=document.createElement('li');
//       uoList.appendChild(item);
//       item.textContent=`${this.openHours[i]} : ${this.cookisPerHour[i]}`;
//     }
//     item.textContent=`Total : ${this.totalCookies}`;
//   }
// };

// // paris.branchSales();

// ////////////////////////

// const lima = {
//   branchName:'Lima',
//   minCust:2,
//   maxCust:16,
//   openHours:['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'],
//   custNumHourly:[],
//   cookisPerHour:[],
//   totalCookies:0,
//   avgCookiesPercust:4.6,
//   salesFactor:1, //1 means A normal day || ex: (= 2 if today marks cookies day)
//   randomCust:function(){
//     for (let i=0;i<14;i++){
//       this.custNumHourly.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
//     }
//   },
//   cookiesHourly:function(){
//     for (let i=0;i<14;i++){
//       this.cookisPerHour.push(Math.ceil(this.avgCookiesPercust*this.custNumHourly[i]*this.salesFactor));
//     }
//   },
//   total:function(){
//     for(let i=0;i<14;i++){
//       this.totalCookies=this.totalCookies+this.cookisPerHour[i];
//     }
//   },
//   branchSales:function(){
//     this.randomCust();
//     this.cookiesHourly();
//     this.total();
//     let container = document.getElementById('cookieSales');
//     let heading = document.createElement('h3');
//     container.appendChild(heading);
//     heading.textContent=`${this.branchName} Sales :`;
//     let table =document.createElement('table');
//     container.appendChild(table);
//     let tableRow=document.createElement('tr');
//     table.appendChild(tableRow);
//     let tableHeader=document.createElement('th');
//     tableRow.appendChild(tableHeader);
//     tableHeader.textContent='Hours';
//     let tableHeader1=document.createElement('th');
//     tableRow.appendChild(tableHeader1);
//     tableHeader1.textContent='Cookies';
//     let tableRow1=null;
//     let tableData=null;
//     let tableData1=null;
//     for(let i=0;i<14;i++){
//       tableRow1=document.createElement('tr');
//       table.appendChild(tableRow1);
//       tableData=document.createElement('td');
//       tableData1=document.createElement('td');
//       tableRow1.appendChild(tableData);
//       tableRow1.appendChild(tableData1);
//       tableData.textContent=this.openHours[i];
//       tableData1.textContent=this.cookisPerHour[i];
//     }
//     let finalRow=document.createElement('tr');
//     table.appendChild(finalRow);
//     let finaldata=document.createElement('td');
//     finalRow.appendChild(finaldata);
//     finaldata.textContent='Total';
//     let finaldata1=document.createElement('td');
//     finalRow.appendChild(finaldata1);
//     finaldata1.textContent=this.totalCookies;
//   },
//   salesList:function(){
//     this.randomCust();
//     this.cookiesHourly();
//     this.total();
//     let container = document.getElementById('cookieSales');
//     let heading = document.createElement('h3');
//     container.appendChild(heading);
//     heading.textContent=`${this.branchName} Sales :`;
//     let uoList=document.createElement('ul');
//     container.appendChild(uoList);
//     let item=null;
//     for(let i=0;i<14;i++){
//       item=document.createElement('li');
//       uoList.appendChild(item);
//       item.textContent=`${this.openHours[i]} : ${this.cookisPerHour[i]}`;
//     }
//     item.textContent=`Total : ${this.totalCookies}`;
//   }
// };


// let listOrTable=prompt('Enter T for Table or Enter L for list');
// switch (listOrTable) {
// case 'T':
// case 't':
//   seattle.branchSales();
//   tokyo.branchSales();
//   dubai.branchSales();
//   paris.branchSales();
//   lima.branchSales();
//   break;
// case 'L':
// case 'l':
//   seattle.salesList();
//   tokyo.salesList();
//   dubai.salesList();
//   paris.salesList();
//   lima.salesList();
//   break;
// default:
//   break;
// }
