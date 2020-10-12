{
    console.log(0b111110111);//二进制
    console.log(0o767);//八进制
}

{
    //Number.isFinite 是否有穷
    console.log('15',Number.isFinite(15));
    console.log('NaN',Number.isFinite(NaN));
    console.log('1/0',Number.isFinite(1/0));
    //Number.isNaN 是否是非数字
    console.log('NaN',Number.isNaN(NaN));
    console.log('0',Number.isNaN(0));
    console.log('aaa',Number.isNaN("aaa"));
}

{
    //Number.isInteger 是否是整数 必须为Number型
    console.log('25',Number.isInteger(25));
    console.log('25.0',Number.isInteger(25.0));
    console.log('25.5',Number.isInteger(25.5));
    console.log('25.5',Number.isInteger('25'));
}

{
    console.log(Number.MAX_SAFE_INTEGER);//数值的最大上限
    console.log(Number.MIN_SAFE_INTEGER);//数值的最小下限
    console.log(Number.isSafeInteger(10));//是否在2的23次方 -2的23次方之间
}

{
   // Math.trunc 返回小数的整数部分
    console.log(4.1,Math.trunc(4.1));
    console.log(4.9,Math.trunc(4.9));
}

{
    //Math.sign 判断正负数 0  返回 1  -1  0  NaN
    console.log(-5,Math.sign(-5));
    console.log(0,Math.sign(0));
    console.log(5,Math.sign(5));
    console.log('aa',Math.sign('aa'));
}

{
    //Math.cbrt 立方根
    //Math.sqrt 平方根
    console.log("9",Math.sqrt(9));
    console.log("27",Math.cbrt(27));
}