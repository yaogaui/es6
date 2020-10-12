{
    let regex = new RegExp('xyz','i');
    let regex2 = new RegExp(/xyz/i);
    console.log(regex.test("xyz123"),regex2.test('xyz123'));
    console.log(regex.flags);
    console.log(regex2.flags);

    let regex3 = new RegExp(/xyz/ig,'i'); //后边的第二个参数会覆盖前边的
    console.log(regex3.flags); //flags获取正则修饰符的属性 es6新增
}

{
    let s = "bbb_bb_b";  
    let a1 = /b+/g; //匹配完第一次，从上一次匹配完的位置继续向下寻找
    let a2 = /b+/y; //匹配完第一次，第二次必须从第一次匹配的下一个字符开始

    console.log("1",a1.exec(s),a2.exec(s));
    console.log("2",a1.exec(s),a2.exec(s));

    console.log(a1.sticky,a2.sticky)
}

{
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));//把两个字符看作是两个字符
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));//把两个两个字符看作为一个字符

    console.log(/\u{61}/.test('a'));
    console.log(/\u{61}/u.test('a')); //只有带u修饰符的时候 {61}才能被识别为a

    console.log(`\u{20886}`);//𠢆
    let s = '𠢆'
    console.log('u',/^.$/.test(s));
    console.log('u-2',/^.$/u.test(s)); //如果字符串中有的字符大于两个字节 记得加u修饰符，否则可能会有错误
    console.log("test",/𠢆{2}/.test("𠢆𠢆"));
    console.log("test2",/𠢆{2}/u.test("𠢆𠢆"));
}