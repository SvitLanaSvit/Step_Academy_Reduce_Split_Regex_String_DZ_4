function countOfAll(str){

    const countNum = str.match(/[0-9]/gi);
    const countLetters = str.toLowerCase().match(/[a-z]/gi);
    const countSymbols = str.match(/[!-/]/gi);
    console.log(`Count of numbers = ${countNum.length}\nCount of letters = ${countLetters.length}\nCount of symbols = ${countSymbols.length}`)
}

//2
//3
function changeLetters(str){
    let res = Array.from(str).map((elem)=>{
        
       if(elem.charCodeAt(0)>64&&elem.charCodeAt(0)<91) 
       return elem.toLowerCase();
       else if(elem.charCodeAt(0)>96&&elem.charCodeAt(0)<123)
       return elem.toUpperCase();
       else return elem
        }).reduce((acc, item)=>acc+item, "");
    const replacedNum = res.replace(/[0-9]/g, '_');
    console.log(replacedNum);
}
//4
function changeOnCamelCase(style){
    const count = style.split("-");
    if(count.length == 2){
        let word = count[0] + count[1].charAt(0).toUpperCase() + count[1].slice(1);;
        console.log(word);
    }
}
//5
function getAbriviatur(str){
    console.log("--------Abriviatur--------")
    let s = str.split(/[\s-]+/);
    let chars = [];
    for (let i = 0; i < s.length; i++) {
        chars.push(s[i].charAt(0));
    }
    let abr = chars.reduce((a,c) => a + c).toUpperCase();
    console.log(abr);
}
//6
function cancatAndReverseString(str){
    let s = str.split(" ").join("").split("").reverse().join("");
    console.log(s);
}
//7
function calculator(str){
    let arr = [];
    if(str.includes('+')){
        arr = str.split("+");
        let sum = arr.reduce((a,c) => +a + +c, 0);
        console.log(sum);
    }
    else if(str.includes('-')){
        arr = str.split("-");
        let diff = arr.reduce((a,c) => a - c);
        console.log(diff);
    }
    else if(str.includes('*')){
        arr = str.split("*");
        let multy = arr.reduce((a,c) => a * c, 1);
        console.log(multy);
    }
    else if(str.includes('/')){
        arr = str.split("/");
        let dev = arr.reduce((a,c) => a / c);
        console.log(dev);
    }
}
//8
function getInfoAboutUrl(urlstr){
    let url = new URL(urlstr);
    console.log(url.host);
    console.log(url.hostname);
    console.log(url.protocol);
    console.log(url.pathname);
}
//9
function getArrayWithotSplit(str, symbol){
    let arr = [''];
    let j = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == symbol) {
            j++;
            arr.push('');
        } else {
            arr[j] += str.charAt(i);
        }
    }
    let s = "";
    for (let i = 0; i < arr.length; i++) {
        s += `"${arr[i]}" `;
    }
    return s;
}
//10
function printf(template, ...values) {
    return template.replace(/%(\d+)/g, (str, num) => [...values][num - 1]);
  }