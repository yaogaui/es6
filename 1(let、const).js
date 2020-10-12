// 作用域
// es5 全局作用域、函数作用域
// es6 新增块级作用域

function test() {
    let a = 1;
    console.log(a);
}
test();
//let试用，声明变量

function test() {
    for(var i = 1;i < 3;i++){
        console.log(i);
    }
    console.log(i);
}
test();
function test() {
    for(let i = 1;i < 3;i++){
        console.log(i);
    }
    console.log(i);
}
test();
//let报错 ReferenceError: i is not defined
//let和var的对比，let报错，只在块级作用域里声明了变量

function test() {
    let a = 1;
    let a = 2;
}
test();
//let报错 Identifier 'a' has already been declared
//let声明变量时，不可以重复声明

function test() {
    const PI = 3.1415926;
    PI = 3;
    console.log(PI);
}
test();
// const报错 Assignment to constant variable
//const声明的是常量，不可被修改
function test() {
    const k = {
        a : 1
    }
    k.a = 2;
    console.log(k);
}
test();
//声明对象指向的空间指针不可变，但是对象本身可变

function test() {
    const PI;
    PI = 3;
    console.log(PI);
}
test();
// const报错 Missing initializer in const declaration
//const声明的常量时，必须初始化数据