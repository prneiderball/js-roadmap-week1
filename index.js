//for (var i = 0; i < 5; i++) {
//setTimeout(() => {
//        console.log(i);
//    }, 1000);
//}

function hoistMe() {
    console.log(a)
    var a = 10
    console.log(a)
}

hoistMe();
