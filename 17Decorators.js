// {
//     let readonly = function(target,name,descriptor) {
//         descriptor.writable = false;
//         return descriptor;
//     };
//     class Test{
//         @readonly
//         time(){
//             return '2020-9-22'
//         }
//     }
//     let test = new Test();
//     console.log(test.time);
// }

//第三方修饰器的js库 core-decorators npm install core-decorators

