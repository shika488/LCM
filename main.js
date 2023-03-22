'use strict';

//公約数
let d_Num = [];
function divisor(a, b) {
    for (let i = 1; i <=a && i <=b; i++) {
        if (a % i === 0 && b % i ===0) {
            d_Num.push(i);   //取得した値を配列に入れていく
        }    
    }
}


//ボタンが押されたとき
const btn = document.getElementById('btn');
btn.onclick = function () {

    //入力された値を数値にする
    const n1 = Number(document.getElementById('num1').value);
    const n2 = Number(document.getElementById('num2').value);

    //公約数を求める
    divisor(n1, n2);

    //最大公約数
    const gcd =  Math.max(...d_Num);

    //最小公倍数
    const lcm = n1 * n2 / gcd;

    //結果を表示
    const result = document.getElementById('result');
    //整数のとき
    if(n1>0 && n2>0){
        result.innerHTML = lcm;

    //整数ではないとき
    } else {
        alert('正の整数を入力して下さい ※半角');
    }
    
};


