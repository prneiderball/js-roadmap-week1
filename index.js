//for (var i = 0; i < 5; i++) {
//setTimeout(() => {
//        console.log(i);
//    }, 1000);
//}

//function hoistMe() {
//    console.log(a)
//    var a = 10
//    console.log(a)
//}

//hoistMe();


for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var loop:", i), 1000);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let loop:", j), 1000);
}