/*

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/sk\.gzonline\.gov\.cn\/prominent-citizens\/nucleicAcid\/v1\/result.*
[mitm]
hostname = sk.gzonline.gov.cn


**************************/
console.log(1111, $response)
let body = $response.body;

if (body) {
    console.log(3333)
    try {
        nowDate = new Date();
        function padding(num, length) {
            //这里用slice和substr均可
            return (Array(length).join("0") + num).slice(-length);
        }
        var date = {
            year: nowDate.getFullYear(),
            month: padding(nowDate.getMonth() + 1, 2),
            date: padding(nowDate.getDate(), 2),
        }
    
    
    
    
        var body = JSON.parse($response.body || '{}') || {}
        var data = body.data || []
        var firstItem = data[0]
        if (firstItem) {
    
    
            firstItem.testing_date.replace(/\d{4}-\d{1,2}-\d{1,2}/, [date.year - 1, date.month, date.date].join('-'))
            $done({
                body: JSON.stringify(body)
            });
        } else {
            // $done({});
        }
    } catch(e) {
        console.log(e)
    }
    

} else {
    
    console.log(444)
    // $done({});
}
