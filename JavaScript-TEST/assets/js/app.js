let shigyo = "Hello world!!";
shigyo = "Hello Word2";
console.log(shigyo);

const takumu = "He...hello World";
console.log(takumu);

let inoki = ["いち","にー","さん","ダーー‼"]
console.log(inoki[3])

// let index = 0;
// while(index < inoki.length){
//     console.log(inoki[index]);
//     index++;
// }

if(inoki.length > 3){
    console.log("ボンバイエ‼");
} else {
    console.log("ボンバ...!");
}


const test = (arg) => {
    if(inoki.length > arg){
    console.log("ボンバイエ‼");
} else {
    console.log("ボンバ...!");
}
};

test(5);
test(7);
test(2);
test(8);


const test2 = {
    color: "pink",
    size: "large",
    purfume: "mint",
    bon: () => {
        console.log("Hello BON!!");
    }
};
console.log(test2.bon());

console.log(window.innerHeight);
console.log(window.innerWidth);
// window.alert("Hello World!!)

console.log(document);

document.getElementsByTagName("button")[0].addEventListener("click", ()=> {
    window.alert("Hello World!!!!")
});
























document.getElementsByTagName("button")[1].addEventListener("click", () => {
    window.alert("クリックされました")
});