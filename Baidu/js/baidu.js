//搜索
button1.addEventListener("click", clickButton1);
function clickButton1() {
    var search = document.getElementById("search").value;
    var url = `https://www.baidu.com/s?wd=${search}`;    
    search = "";
    window.open(url, "_blank");
}

var search = document.getElementById("search");
search.addEventListener("focus", () => {
    search.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            clickButton1();
        }
    });
})


// function SouSuo() {
//     const souSuo = document.getElementById("SOUSUO");
//     if (souSuo.value === "") {
//         alert("403");
//     } else if (souSuo.value === "飞行工作室") {
//         if (confirm("你真想了解吗？")) {
//             alert("QQ:451616582");
//             alert("OK");
//         } else {
//             alert("OK");
//         }
//     } else if (souSuo.value === "1") {
//         if (confirm("你真想了解吗？")) {
//             alert("QQ:451616582");
//             alert("OK");
//         } else {
//             alert("OK");
//         }
//     } else if (souSuo.value === "HTML") {
//         alert("HTML5 简介");
//         alert("HTML5是HTML最新的修订版本，2014年10月由万维网联盟（W3C）完成标准制定。");
//         alert("HTML5的设计目的是为了在移动设备上支持多媒体。");
//         alert("HTML5 简单易学。");
//         alert("推荐大家使用。");
//         if (confirm("了解更多")) {
//             alert("HTML 指的是超文本标记语言: HyperText Markup Language");
//             alert("HTML 不是一种编程语言，而是一种标记语言");
//             alert("标记语言是一套标记标签 (markup tag)");
//             alert("HTML 使用标记标签来描述网页");
//             alert("HTML 文档包含了HTML 标签及文本内容");
//             alert("HTML文档也叫做 web 页面");
//             alert("OK");
//         } else {
//             alert("OK");
//         }
//     } else if (souSuo.value === "2") {
//         alert("HTML5 简介");
//         alert("HTML5是HTML最新的修订版本，2014年10月由万维网联盟（W3C）完成标准制定。");
//         alert("HTML5的设计目的是为了在移动设备上支持多媒体。");
//         alert("HTML5 简单易学。");
//         alert("推荐大家使用。");
//         if (confirm("了解更多")) {
//             alert("HTML 指的是超文本标记语言: HyperText Markup Language");
//             alert("HTML 不是一种编程语言，而是一种标记语言");
//             alert("标记语言是一套标记标签 (markup tag)");
//             alert("HTML 使用标记标签来描述网页");
//             alert("HTML 文档包含了HTML 标签及文本内容");
//             alert("HTML文档也叫做 web 页面");
//             alert("OK");
//         } else {
//             alert("OK");
//         }
//     } else if (souSuo.value === "3") {
//         alert("Python 是一种解释型、面向对象、动态数据类型的高级程序设计语言。");
//         alert("Python 由 Guido van Rossum 于 1989 年底发明，第一个公开发行版发行于 1991 年。");
//         alert("像 Perl 语言一样, Python 源代码同样遵循 GPL(GNU General Public License) 协议。");
//         alert("官方宣布，2020 年 1 月 1 日， 停止 Python 2 的更新。");
//         alert("Python 2.7 被确定为最后一个 Python 2.x 版本。");
//         if (confirm("了解更多")) {
//             alert("Python 是一种解释型语言： 这意味着开发过程中没有了编译这个环节。类似于PHP和Perl语言");
//             alert("Python 是交互式语言： 这意味着，您可以在一个 Python 提示符 >>> 后直接执行代码。");
//             alert("Python 是面向对象语言: 这意味着Python支持面向对象的风格或代码封装在对象的编程技术。");
//             alert("Python 是初学者的语言：Python 对初级程序员而言，是一种伟大的语言，它支持广泛的应用程序开发，从简单的文字处理到 WWW 浏览器再到游戏。");
//             alert("OK");
//         } else {
//             alert("OK");
//         }
//     } else if (souSuo.value === "PYTHON") {
//         alert("Python 是一种解释型、面向对象、动态数据类型的高级程序设计语言。");
//         alert("Python 由 Guido van Rossum 于 1989 年底发明，第一个公开发行版发行于 1991 年。");
//         alert("像 Perl 语言一样, Python 源代码同样遵循 GPL(GNU General Public License) 协议。");
//         alert("官方宣布，2020 年 1 月 1 日， 停止 Python 2 的更新。");
//         alert("Python 2.7 被确定为最后一个 Python 2.x 版本。");
//         if (confirm("了解更多")) {
//             alert("OK");
//         } else {
//             alert("OK");
//         }
//     } else {
//         alert("暂时没有此词条。");
//     }
// }

// function backgroundImgF() {
//     const backgroundImgWeb = document.getElementById("backgroundImg").value;
//     document.body.style.backgroundImage = url(str(backgroundImgWeb));
// }

function cameraF() {
    alert("暂时无法使用");
}

function huanYiHuan() {
    alert("暂时无法换一换!")
}

// 获取

const camera = document.getElementById("btn").addEventListener('click', cameraF);
const dianji1 = document.getElementById("button1").addEventListener('click', clickButton1);
const yongHu = document.getElementById("inputB");

// 其他

var text1 = "每一个星球都有一个驱动核心，";
var text2 = "每一种思想都有影响力的种子。";
var text3 = "感受世界的温度，";
var text4 = "年轻的你也能成为改变世界的动力，";
var text5 = "百度珍惜你所有的潜力。";
var text6 = "你的潜力，是改变世界的动力！";

console.log(text1);
console.log(text2);
console.log(text3);
console.log(text4);
console.log(text5);
console.log(text6);

// 数字
const yongHuMin = Math.floor(Math.random()*(9999999-1000000+1)+1000000);
console.log(yongHuMin);
console.log(yongHu.value);


yongHu.value = yongHuMin;