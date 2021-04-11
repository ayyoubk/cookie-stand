'use strict';

const seattle = {
  branchName:'Seattle',
  minCust:23,
  maxCust:65,
  openHours:['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'],
  custNumHourly:[],
  cookisPerHour:[],
  totalCookies:0,
  avgCookiesPercust:6.3,
  salesFactor:1, //1 means A normal day || ex: (= 2 if today marks cookies day)
  randomCust:function(){
    for (let i=0;i<14;i++){
      this.custNumHourly.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
  },
  cookiesHourly:function(){
    for (let i=0;i<14;i++){
      this.cookisPerHour.push(Math.ceil(this.avgCookiesPercust*this.custNumHourly[i]*this.salesFactor));
    }
  },
  total:function(){
    for(let i=0;i<14;i++){
      this.totalCookies=this.totalCookies+this.cookisPerHour[i];
    }
  },
  branchSales:function(){
    this.randomCust();
    this.cookiesHourly();
    this.total();
    let container = document.getElementById('cookieSales');
    let heading = document.createElement('h3');
    container.appendChild(heading);
    heading.textContent=`${this.branchName} Sales :`;
    let table =document.createElement('table');
    container.appendChild(table);
    let tableRow=document.createElement('tr');
    table.appendChild(tableRow);
    let tableHeader=document.createElement('th');
    tableRow.appendChild(tableHeader);
    tableHeader.textContent='Hours';
    let tableHeader1=document.createElement('th');
    tableRow.appendChild(tableHeader1);
    tableHeader1.textContent='Cookies';
    let tableRow1=null;
    let tableData=null;
    let tableData1=null;
    for(let i=0;i<14;i++){
      tableRow1=document.createElement('tr');
      table.appendChild(tableRow1);
      tableData=document.createElement('td');
      tableData1=document.createElement('td');
      tableRow1.appendChild(tableData);
      tableRow1.appendChild(tableData1);
      tableData.textContent=this.openHours[i];
      tableData1.textContent=this.cookisPerHour[i];
    }
    let finalRow=document.createElement('tr');
    table.appendChild(finalRow);
    let finaldata=document.createElement('td');
    finalRow.appendChild(finaldata);
    finaldata.textContent='Total';
    let finaldata1=document.createElement('td');
    finalRow.appendChild(finaldata1);
    finaldata1.textContent=this.totalCookies;
  },
  salesList:function(){
    this.randomCust();
    this.cookiesHourly();
    this.total();
    let container = document.getElementById('cookieSales');
    let heading = document.createElement('h3');
    container.appendChild(heading);
    heading.textContent=`${this.branchName} Sales :`;
    let uoList=document.createElement('ul');
    container.appendChild(uoList);
    let item=null;
    for(let i=0;i<14;i++){
      item=document.createElement('li');
      uoList.appendChild(item);
      item.textContent=`${this.openHours[i]} : ${this.cookisPerHour[i]}`;
    }
    item.textContent=`Total : ${this.totalCookies}`;
  }
};

// seattle.branchSales();

///////////////////////

const tokyo = {
  branchName:'Tokyo',
  minCust:3,
  maxCust:24,
  openHours:['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'],
  custNumHourly:[],
  cookisPerHour:[],
  totalCookies:0,
  avgCookiesPercust:1.2,
  salesFactor:1, //1 means A normal day || ex: (= 2 if today marks cookies day)
  randomCust:function(){
    for (let i=0;i<14;i++){
      this.custNumHourly.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
  },
  cookiesHourly:function(){
    for (let i=0;i<14;i++){
      this.cookisPerHour.push(Math.ceil(this.avgCookiesPercust*this.custNumHourly[i]*this.salesFactor));
    }
  },
  total:function(){
    for(let i=0;i<14;i++){
      this.totalCookies=this.totalCookies+this.cookisPerHour[i];
    }
  },
  branchSales:function(){
    this.randomCust();
    this.cookiesHourly();
    this.total();
    let container = document.getElementById('cookieSales');
    let heading = document.createElement('h3');
    container.appendChild(heading);
    heading.textContent=`${this.branchName} Sales :`;
    let table =document.createElement('table');
    container.appendChild(table);
    let tableRow=document.createElement('tr');
    table.appendChild(tableRow);
    let tableHeader=document.createElement('th');
    tableRow.appendChild(tableHeader);
    tableHeader.textContent='Hours';
    let tableHeader1=document.createElement('th');
    tableRow.appendChild(tableHeader1);
    tableHeader1.textContent='Cookies';
    let tableRow1=null;
    let tableData=null;
    let tableData1=null;
    for(let i=0;i<14;i++){
      tableRow1=document.createElement('tr');
      table.appendChild(tableRow1);
      tableData=document.createElement('td');
      tableData1=document.createElement('td');
      tableRow1.appendChild(tableData);
      tableRow1.appendChild(tableData1);
      tableData.textContent=this.openHours[i];
      tableData1.textContent=this.cookisPerHour[i];
    }
    let finalRow=document.createElement('tr');
    table.appendChild(finalRow);
    let finaldata=document.createElement('td');
    finalRow.appendChild(finaldata);
    finaldata.textContent='Total';
    let finaldata1=document.createElement('td');
    finalRow.appendChild(finaldata1);
    finaldata1.textContent=this.totalCookies;
  },
  salesList:function(){
    this.randomCust();
    this.cookiesHourly();
    this.total();
    let container = document.getElementById('cookieSales');
    let heading = document.createElement('h3');
    container.appendChild(heading);
    heading.textContent=`${this.branchName} Sales :`;
    let uoList=document.createElement('ul');
    container.appendChild(uoList);
    let item=null;
    for(let i=0;i<14;i++){
      item=document.createElement('li');
      uoList.appendChild(item);
      item.textContent=`${this.openHours[i]} : ${this.cookisPerHour[i]}`;
    }
    item.textContent=`Total : ${this.totalCookies}`;
  }
};

// tokyo.branchSales();

/////////////////////

const dubai = {
  branchName:'Dubai',
  minCust:11,
  maxCust:38,
  openHours:['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'],
  custNumHourly:[],
  cookisPerHour:[],
  totalCookies:0,
  avgCookiesPercust:3.7,
  salesFactor:1, //1 means A normal day || ex: (= 2 if today marks cookies day)
  randomCust:function(){
    for (let i=0;i<14;i++){
      this.custNumHourly.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
  },
  cookiesHourly:function(){
    for (let i=0;i<14;i++){
      this.cookisPerHour.push(Math.ceil(this.avgCookiesPercust*this.custNumHourly[i]*this.salesFactor));
    }
  },
  total:function(){
    for(let i=0;i<14;i++){
      this.totalCookies=this.totalCookies+this.cookisPerHour[i];
    }
  },
  branchSales:function(){
    this.randomCust();
    this.cookiesHourly();
    this.total();
    let container = document.getElementById('cookieSales');
    let heading = document.createElement('h3');
    container.appendChild(heading);
    heading.textContent=`${this.branchName} Sales :`;
    let table =document.createElement('table');
    container.appendChild(table);
    let tableRow=document.createElement('tr');
    table.appendChild(tableRow);
    let tableHeader=document.createElement('th');
    tableRow.appendChild(tableHeader);
    tableHeader.textContent='Hours';
    let tableHeader1=document.createElement('th');
    tableRow.appendChild(tableHeader1);
    tableHeader1.textContent='Cookies';
    let tableRow1=null;
    let tableData=null;
    let tableData1=null;
    for(let i=0;i<14;i++){
      tableRow1=document.createElement('tr');
      table.appendChild(tableRow1);
      tableData=document.createElement('td');
      tableData1=document.createElement('td');
      tableRow1.appendChild(tableData);
      tableRow1.appendChild(tableData1);
      tableData.textContent=this.openHours[i];
      tableData1.textContent=this.cookisPerHour[i];
    }
    let finalRow=document.createElement('tr');
    table.appendChild(finalRow);
    let finaldata=document.createElement('td');
    finalRow.appendChild(finaldata);
    finaldata.textContent='Total';
    let finaldata1=document.createElement('td');
    finalRow.appendChild(finaldata1);
    finaldata1.textContent=this.totalCookies;
  },
  salesList:function(){
    this.randomCust();
    this.cookiesHourly();
    this.total();
    let container = document.getElementById('cookieSales');
    let heading = document.createElement('h3');
    container.appendChild(heading);
    heading.textContent=`${this.branchName} Sales :`;
    let uoList=document.createElement('ul');
    container.appendChild(uoList);
    let item=null;
    for(let i=0;i<14;i++){
      item=document.createElement('li');
      uoList.appendChild(item);
      item.textContent=`${this.openHours[i]} : ${this.cookisPerHour[i]}`;
    }
    item.textContent=`Total : ${this.totalCookies}`;
  }
};

// dubai.branchSales();

////////////////////

const paris = {
  branchName:'Paris',
  minCust:20,
  maxCust:38,
  openHours:['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'],
  custNumHourly:[],
  cookisPerHour:[],
  totalCookies:0,
  avgCookiesPercust:2.3,
  salesFactor:1, //1 means A normal day || ex: (= 2 if today marks cookies day)
  randomCust:function(){
    for (let i=0;i<14;i++){
      this.custNumHourly.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
  },
  cookiesHourly:function(){
    for (let i=0;i<14;i++){
      this.cookisPerHour.push(Math.ceil(this.avgCookiesPercust*this.custNumHourly[i]*this.salesFactor));
    }
  },
  total:function(){
    for(let i=0;i<14;i++){
      this.totalCookies=this.totalCookies+this.cookisPerHour[i];
    }
  },
  branchSales:function(){
    this.randomCust();
    this.cookiesHourly();
    this.total();
    let container = document.getElementById('cookieSales');
    let heading = document.createElement('h3');
    container.appendChild(heading);
    heading.textContent=`${this.branchName} Sales :`;
    let table =document.createElement('table');
    container.appendChild(table);
    let tableRow=document.createElement('tr');
    table.appendChild(tableRow);
    let tableHeader=document.createElement('th');
    tableRow.appendChild(tableHeader);
    tableHeader.textContent='Hours';
    let tableHeader1=document.createElement('th');
    tableRow.appendChild(tableHeader1);
    tableHeader1.textContent='Cookies';
    let tableRow1=null;
    let tableData=null;
    let tableData1=null;
    for(let i=0;i<14;i++){
      tableRow1=document.createElement('tr');
      table.appendChild(tableRow1);
      tableData=document.createElement('td');
      tableData1=document.createElement('td');
      tableRow1.appendChild(tableData);
      tableRow1.appendChild(tableData1);
      tableData.textContent=this.openHours[i];
      tableData1.textContent=this.cookisPerHour[i];
    }
    let finalRow=document.createElement('tr');
    table.appendChild(finalRow);
    let finaldata=document.createElement('td');
    finalRow.appendChild(finaldata);
    finaldata.textContent='Total';
    let finaldata1=document.createElement('td');
    finalRow.appendChild(finaldata1);
    finaldata1.textContent=this.totalCookies;
  },
  salesList:function(){
    this.randomCust();
    this.cookiesHourly();
    this.total();
    let container = document.getElementById('cookieSales');
    let heading = document.createElement('h3');
    container.appendChild(heading);
    heading.textContent=`${this.branchName} Sales :`;
    let uoList=document.createElement('ul');
    container.appendChild(uoList);
    let item=null;
    for(let i=0;i<14;i++){
      item=document.createElement('li');
      uoList.appendChild(item);
      item.textContent=`${this.openHours[i]} : ${this.cookisPerHour[i]}`;
    }
    item.textContent=`Total : ${this.totalCookies}`;
  }
};

// paris.branchSales();

////////////////////////

const lima = {
  branchName:'Lima',
  minCust:2,
  maxCust:16,
  openHours:['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'],
  custNumHourly:[],
  cookisPerHour:[],
  totalCookies:0,
  avgCookiesPercust:4.6,
  salesFactor:1, //1 means A normal day || ex: (= 2 if today marks cookies day)
  randomCust:function(){
    for (let i=0;i<14;i++){
      this.custNumHourly.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
  },
  cookiesHourly:function(){
    for (let i=0;i<14;i++){
      this.cookisPerHour.push(Math.ceil(this.avgCookiesPercust*this.custNumHourly[i]*this.salesFactor));
    }
  },
  total:function(){
    for(let i=0;i<14;i++){
      this.totalCookies=this.totalCookies+this.cookisPerHour[i];
    }
  },
  branchSales:function(){
    this.randomCust();
    this.cookiesHourly();
    this.total();
    let container = document.getElementById('cookieSales');
    let heading = document.createElement('h3');
    container.appendChild(heading);
    heading.textContent=`${this.branchName} Sales :`;
    let table =document.createElement('table');
    container.appendChild(table);
    let tableRow=document.createElement('tr');
    table.appendChild(tableRow);
    let tableHeader=document.createElement('th');
    tableRow.appendChild(tableHeader);
    tableHeader.textContent='Hours';
    let tableHeader1=document.createElement('th');
    tableRow.appendChild(tableHeader1);
    tableHeader1.textContent='Cookies';
    let tableRow1=null;
    let tableData=null;
    let tableData1=null;
    for(let i=0;i<14;i++){
      tableRow1=document.createElement('tr');
      table.appendChild(tableRow1);
      tableData=document.createElement('td');
      tableData1=document.createElement('td');
      tableRow1.appendChild(tableData);
      tableRow1.appendChild(tableData1);
      tableData.textContent=this.openHours[i];
      tableData1.textContent=this.cookisPerHour[i];
    }
    let finalRow=document.createElement('tr');
    table.appendChild(finalRow);
    let finaldata=document.createElement('td');
    finalRow.appendChild(finaldata);
    finaldata.textContent='Total';
    let finaldata1=document.createElement('td');
    finalRow.appendChild(finaldata1);
    finaldata1.textContent=this.totalCookies;
  },
  salesList:function(){
    this.randomCust();
    this.cookiesHourly();
    this.total();
    let container = document.getElementById('cookieSales');
    let heading = document.createElement('h3');
    container.appendChild(heading);
    heading.textContent=`${this.branchName} Sales :`;
    let uoList=document.createElement('ul');
    container.appendChild(uoList);
    let item=null;
    for(let i=0;i<14;i++){
      item=document.createElement('li');
      uoList.appendChild(item);
      item.textContent=`${this.openHours[i]} : ${this.cookisPerHour[i]}`;
    }
    item.textContent=`Total : ${this.totalCookies}`;
  }
};


let listOrTable=prompt('Enter T for Table or Enter L for list');
switch (listOrTable) {
case 'T':
case 't':
  seattle.branchSales();
  tokyo.branchSales();
  dubai.branchSales();
  paris.branchSales();
  lima.branchSales();
  break;
case 'L':
case 'l':
  seattle.salesList();
  tokyo.salesList();
  dubai.salesList();
  paris.salesList();
  lima.salesList();
  break;
default:
  break;
}
