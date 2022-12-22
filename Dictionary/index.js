function DictionaryOrder(){
    // varは再宣言、再定義できるが、letは再定義はできるが再宣言ができない、constは両方できない
    let from = document.getElementById('from');
    let to = document.getElementById('to');
    let result_screen = document.getElementById('result_screen');
    let str_start = from.value; 
    let str_goal = to.value;
    let str_length1 = str_start.length;
    let str_length2 = str_goal.length;
    let result = 0;

    let startlist = makestartlist(str_start);

    // for(var key in startlist){
    //     console.log(key + startlist[key])
    // }

    // 並び替えの総数
    let total = factorial(str_length1);

    
    if(str_length1 == str_length2){
        for(let i=0; i<str_length1; i++){
            var word2 = str_goal.charAt(i);
            var num2 = startlist[word2];

            // console.log(num2);            

            if(num2 < Object.keys(startlist).length){
                var degree = (str_length1 - i) -  num2;
                Math.abs(degree);
                result += degree * factorial(str_length1 - (i + 1));

                // console.log("degree:" + degree + "num2:" + num2);           
                // console.log(i);
                // console.log(result);

                delete startlist[word2];
            } else{
                delete startlist[word2];
                // console.log(i + word2 + Object.keys(startlist).length);

            }
           
        }
    } else {
        alert("始まりと終わりの文字数が違います。並べ替えができません");
        return;
    }

    result = total - result;
    result_screen.textContent = result; 

}

function makestartlist(str1){
    let strarray1 = str1.split('');
    let association1 = {};
    // 1文字 => 数字　の連想配列
    for(let i=0; i<strarray1.length; i++){
        association1[strarray1[i]] = i + 1;
    }
    
    return association1;
}

function makegoallist(str2){
    let strarray1 = str2.split('');
    let association1 = {};
    // 1文字 => 数字　の連想配列
    for(let i=1; i<strarray1.length + 1; i++){
        association1[strarray1[i]] = i;
    }
    
    return association1;
}

// function List_delete(associations, key){
//     return delete associations[key];
// }

// 階乗計算
function factorial(num){
    if(num < 2) return 1;
    return num * factorial(num - 1);
}