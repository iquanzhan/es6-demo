
// 1.变量声明let,作用域为大括号
let i = 1;
// 2.常量声明const,不可修改
const PI = 3.14;
// 3.模版字符串
let name = "小明";
console.log(`name= ${name}`);
// 4.函数可以添加默认值
function add(num1 = 0, num2 = 0) {
    return num1 + num2;
}
// 5.箭头函数
(message) => {

}

// 6.json对象中键值对重名可以简写
let name = "你好";
let json = {
    name
}

//7.解构
const person = {
    name: "小明",
    age: 14
};

const { name, age } = person;


//8.import和export

export default {
    compute: () => {
        return "compote";
    }
}

import Compute from './lib';
Compute()

