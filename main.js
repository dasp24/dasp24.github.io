// const fetch = require('node-fetch');

const square = (num) => {
    console.log(num ** 2)
    return num ** 2;
}
const sumThree = (a, b, c) => {
    console.log(a + b + c)
    return a + b + c;
}

const sumSpecThree = () => {
    let span = document.getElementById("output");
    let input1 = Number(document.getElementById("input1").value)
    let input2 = Number(document.getElementById("input2").value)
    let input3 = Number(document.getElementById("input3").value)
    let txt = input1 + input2 + input3;
    console.log(txt)
    span.innerText = txt;
}
const personObj = {
    name: 'Dan',
    age: 20,
    occupation: 'fun'
}
const viewPerson = () => console.log(personObj)
const agePerson = () => {
    personObj.age++
    console.log(personObj)
}
const editPersObj = (newName, newAge, newOcc) => {
    console.log(personObj);
    personObj[name] = newName;
    personObj[age] = newAge;
    personObj[occupation] = newOcc;
    console.log(personObj);
}

let str = 'He said "My name is Elliott"';
const arr = ['boom', 'town', 'peter'];
arr.push('poet')
arr.pop();

const fizzBuzz = () => {
    const num = Number(document.getElementById("number").value);
    const fizz = document.getElementById("fizz").value;
    const buzz = document.getElementById("buzz").value;
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(fizz + buzz);
        }
        else if (i % 3 === 0) {
            console.log(fizz);
        }
        else if (i % 5 === 0) {
            console.log(buzz);
        }
        else console.log(i);
    }
}

// fizzBuzz(20,'hello','world')

const divideByThree = (num = Number(document.getElementById("divide").value), result = []) => {
    let newnum;
    if (num === 1) return result;
    else if (num % 3 === 0) {
        newNum = num / 3;
        result.push(num + '/3 =' + newNum)
    }
    else if ((num - 1) % 3 === 0) {
        newNum = (num - 1) / 3
        result.push('(' + num + '-1) /3 =' + newNum)

    }
    else if ((num + 1) % 3 === 0) {
        newNum = (num + 1) / 3
        result.push('(' + num + '+1) /3 =' + newNum)
    }
    return divideByThree(newNum, result);
}

const isTriple = () => {
    str = document.getElementById("triple").value.split('');
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1] && str[i] === str[i + 2])
            count++
    }
    return count;
}

const seeObj = () => {
    const requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json'
    request.send();
    request.onload = function () {
        const superHeroes = request.response;
        console.table(superHeroes.members)
    }
}

const seeKings = ()=>{
    const requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json ';
    const request = new XMLHttpRequest();
    const kingSearch = document.getElementById("kings").value;
    let kingOutput = document.getElementById("kingOutput");
    request.open('GET', requestURL);
    request.responseType = 'json'
    request.send();
    request.onload = function () {
        const kings = request.response;
    //     kingOutput.innerHTM = `<table id="kingOutput">
    //     <tr>
    //       <th>name</th>
    //       <th>city</th>
    //       <th>house</th>
    //       <th>years</th>
    //     </tr> 
    // </table>`;
    kingOutput.innerHTML = `<table id="kingOutput">
      <tr>
    <th>name</th>
           <th>city</th>
           <th>house</th>
           <th>years</th>
        </tr> 
     </table>`;
        kings.forEach(king=>{
            for (let key in king) {
                if (king[key].toLowerCase().includes(kingSearch.toLowerCase())) {
                    kingOutput.innerHTML += `
                    <tr>
                      <td>${king.nm}</td>
                      <td>${king.cty}</td>
                      <td>${king.hse}</td>
                      <td>${king.yrs}</td>
                    </tr>
               `
                }
            }
        })
        console.log(kingOutput.innerHTM)
        
    }
}
const getRekt = ()=>{
    const word = document.getElementById("rekt").value;
    const leftOutput = document.getElementById("leftOutput");
    const rightOutput = document.getElementById("rightOutput");
    const upperOutput = document.getElementById("upperOutput");
    const lowerOutput = document.getElementById("lowerOutput");
    rektOutput.innerHTML = `<p id="upper">${word}</p><p style=${
        transform = 'rotate(90deg)',
        float= 'left'
    }>${word.split('').slice(1,-1).join('')}</p><p style=${
        transform = 'rotate(270deg)',
        float= 'right'
    }>${word.split('').slice(1,-1).reverse().join('')}</p><p id="bottom">${word.split('').reverse().join('')}</p>`
}