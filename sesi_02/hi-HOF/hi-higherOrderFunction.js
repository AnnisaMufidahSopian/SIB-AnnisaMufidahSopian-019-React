//High-Order Function

/*setInterval (() =>{
    console.log("Tick")
},1000);*/

const printTick = () => {
    console.log("Tick");
}

setInterval(printTick, 1000); 
//printTick adalah fungsi callback
//1000 adalah waktu interval

