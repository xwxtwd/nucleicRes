/*

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/sk\.gzonline\.gov\.cn\/prominent-citizens\/nucleicAcid\/v1\/result.*
[mitm]
hostname = sk.gzonline.gov.cn


**************************/


// function padding(num, length) {
//     //这里用slice和substr均可
//     return (Array(length).join("0") + num).slice(-length);
// }
console.log(1111, $response)

let body = $response.body;

if (body) {
    console.log(3333)

    // var nowDate = new Date();
    // var date = {
    //     year: nowDate.getFullYear(),
    //     month: padding(nowDate.getMonth() + 1, 2),
    //     date: padding(nowDate.getDate(), 2),
    // }


    console.log(44444, body)

    // var body = JSON.parse(body) || {}
    console.log(55555)
    // var data = body.data || []
    console.log(666)
    // var firstItem = data[0]
    // if (firstItem) {

console.log(777)
        // firstItem.testing_date.replace(/\d{4}-\d{1,2}-\d{1,2}/, [2022, 10, 22].join('-'))
        // $done({
        //     body: JSON.stringify(body)
        // });
    // } else {
        // $done({});
    // }
// 

} else {
    console.log(666)
    // $done({});
}
