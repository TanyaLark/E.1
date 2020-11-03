
    //Дата в URL указывается в параметре ?date=
    //let URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20201005&json';
    let dayForURL = "";
    let days = [];
    for (let i = 1; i <= 12; i++) {
        if(i < 10){
            dayForURL = "0" + i; 
            days.push(dayForURL);
        } else {
            dayForURL = "" + i;
            days.push(dayForURL);
        } 
    }
    
    for (const element of days) {
        let URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=202010' + element + '&json';

         fetch( URL )
        .then( data => data.json())
        .then( data => {
            let usdRate = data.find( item => item.cc === 'USD' );
            //console.log(usdRate);
            console.log(`${usdRate.exchangedate} - ${usdRate.rate} грн.`);
        });
    }
            