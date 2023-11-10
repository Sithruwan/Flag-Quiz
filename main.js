let countryCodeandName =
{"BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Barthelemy", "BM": "Bermuda", "BN": "Brunei", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BQ": "Bonaire, Saint Eustatius and Saba ", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "BZ": "Belize", "RU": "Russia", "RW": "Rwanda", "RS": "Serbia", "TL": "East Timor", "RE": "Reunion", "TM": "Turkmenistan", "TJ": "Tajikistan", "RO": "Romania", "TK": "Tokelau", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "PG": "Papua New Guinea", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "EE": "Estonia", "EG": "Egypt", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands", "FM": "Micronesia", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "XK": "Kosovo", "CI": "Ivory Coast", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos Islands", "CA": "Canada", "CG": "Republic of the Congo", "CF": "Central African Republic", "CD": "Democratic Republic of the Congo", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CW": "Curacao", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syria", "SX": "Sint Maarten", "KG": "Kyrgyzstan", "KE": "Kenya", "SS": "South Sudan", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "South Korea", "SI": "Slovenia", "KP": "North Korea", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "British Virgin Islands", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Laos", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "LV": "Latvia", "TO": "Tonga", "LT": "Lithuania", "LU": "Luxembourg", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libya", "VA": "Vatican", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "U.S. Virgin Islands", "IS": "Iceland", "IR": "Iran", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AQ": "Antarctica", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique"}
let countryCode = Object.keys(countryCodeandName);
let countryName = Object.values(countryCodeandName);
let seconds = undefined;
let qnum = 1;
let totalMarks=0;
$('#txt-q-number ').val(qnum);
let interval =undefined;
let flagCount = 0;
let submitDataArray=[];
const classObjects = [];
let countryNameArray = [];
let answerTrueFales=[];
let btn1 =$('#btn1');
let btn2 =$('#btn2');
let btn3 =$('#btn3');
let btn4 =$('#btn4');
let txtQuestionNumber = $('#txt-q-number');
let skipBtn =$('#skipBtn');
let startBtn =$('#startBtn');
let submitBtn = $('#submitBtn');
console.log(btn1.text(),btn2.text(),btn3.text(),btn4.text());
$('.answer-wrapper').css("display", "none");
class FlagQuestions{
    constructor(id,question,answers){
        this.id=id;
        this.question=question;
        this.answers=answers;
    }
}
class Answer{
    constructor(id,answer){
        this.id=id;
        this.answer=answer;

    }
}
shuffle =(array) =>{
    let currentIndex = array.length;

    // While there remain elements to shuffle.
    let randomIndex;
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

fetchData=(code)=>{
    let country =code;
    let url = `https://restcountries.com/v3.1/alpha/${country}`;
    fetch(url).then(response =>response.json()).then((data)=>{
        console.log(data);
        $('img').attr("src", data[0].flags.svg);
        //return data[0].flags.svg;
    }).catch((err)=>{
        console.log(err);
    })
}

setFlagCode=()=>{
    const codeArr = [];
    while (codeArr.length < 10) {
        const r = Math.floor(Math.random() * 100) + 1;
        if (codeArr.indexOf(r) === -1) {
            let code = countryCode[r];
            codeArr.push(code);
        }
    }
    return codeArr;
}
let codeArr = setFlagCode();

setAnswers=(codeArr)=> {
    let allAnswerSetArray =[];

    codeArr.forEach(data => {
        countryNameArray.push(countryCodeandName[data]);
    });
    for (let i = 0; i < countryNameArray.length; i++) {
        console.log(countryNameArray[i]);
        let answerSet1 = [countryNameArray[i],countryName[Math.floor(Math.random() * (250 - 1 + 1)) + 1],countryName[Math.floor(Math.random() * (250 - 1 + 1)) + 1],countryName[Math.floor(Math.random() * (250 - 1 + 1)) + 1]];

        allAnswerSetArray.push(shuffle(answerSet1))
    }

   console.log(allAnswerSetArray.length);

    for (let i = 0; i < allAnswerSetArray.length; i++) {
        let q1 = new FlagQuestions(
            codeArr[i],
            `https://www.countryflagicons.com/FLAT/64/${codeArr[i]}.png`,
            [new Answer(1,allAnswerSetArray[i][0],false),
                new Answer(2,allAnswerSetArray[i][1],true),
                new Answer(3,allAnswerSetArray[i][2],false),
                new Answer(3,allAnswerSetArray[i][3],false)
            ]
        );
        classObjects.push(q1);
    }



}


// let countryNameArray = setAnswers();//
console.log(codeArr);
setAnswers(codeArr);

const veryfyAnswer=(state)=>{
    clearInterval(interval);
    if(state=='skipped'){
        //console.log('flagCount :'+flagCount);
        //flagCount++;
        //qnum++;
        submitDataArray.push(null);

    }else if (state=='submit'){


        let answer = $("input:radio[name ='answer']:checked").val();
        submitDataArray.push(answer);
        console.log('answer :'+answer);


    }
    if(qnum==10){
        qnum=1;

        for(let i=0; i<countryNameArray.length;i++){
            if(countryNameArray.length==submitDataArray.length){
            if(submitDataArray[i]==countryNameArray[i]){
                answerTrueFales.push(1);
            }else{
                answerTrueFales.push(0);
            }

        }
        }
        console.log(answerTrueFales);
        for (let i = 0; i < answerTrueFales.length; i++) {
            totalMarks += answerTrueFales[i];
        }
        SetFinalMarks(countryNameArray , submitDataArray , answerTrueFales,totalMarks);
    }
    $('#txt-question').val(`${qnum+=1}/10`);
    displayFlag(flagCount+=1);
}



setFrontendData=(i)=> {
    let x = classObjects[i];
    btn1.text(x.answers[0].answer);
    btn2.text(x.answers[1].answer);
    btn3.text(x.answers[2].answer);
    btn4.text(x.answers[3].answer);
    $('#input1').attr("value",x.answers[0].answer);
    $('#input2').attr("value",x.answers[1].answer);
    $('#input3').attr("value",x.answers[2].answer);
    $('#input4').attr("value",x.answers[3].answer);
    console.log('======================');
    console.log(x.answers[0].answer);
    console.log(x.id);
    console.log('======================');

    let flagSrc = fetchData(x.id);

}

displayFlag =(flagCount)=>{
    seconds=0;

    setFrontendData(flagCount);
    $('input:radio[name="answer"]').prop('checked', false);

    interval = setInterval(()=>{
        if(seconds<10){
            $('#txt-time').val('00:0'+seconds);
        }else{
            $('#txt-time').val('00:'+seconds);
        }
        seconds++;
        flagCount++;

        if(seconds==31){
            console.log('skipped');

            veryfyAnswer('skipped');

            // setFrontendData(flagCount);
        }

    },1000);

}

SetFinalMarks= (correctData , providedData , CorrectState,total)=>{
    let tBody = $('.table tbody');
    tBody.empty();
    let button1=$('<button id="startAgain" class="btn  btn-success m-5" onclick="reload()">Start again !</button>');
    let markSpan =$('<span class="total-marks text-danger m-5" ></span> ')

    for (let i = 0; i < 10; i++) {
        //console.log(data);
        let row = $('<tr>').appendTo(tBody);


        $('<td>').text(i).appendTo(row);
        $('<td>').text(correctData[i]).appendTo(row);
        $('<td>').text(providedData[i]).appendTo(row);
        if(CorrectState[i]){
            // $('<td>').text(data.completed).appendTo(row);
            $('<td>').append('<i class="fa-regular fa-circle-check h3 text-success" ></i>').appendTo(row);

        }else {
            $('<td>').append('<i class="fa-regular fa-circle-xmark h3 text-danger"></i>').appendTo(row);
        }


        $('</tr>').appendTo(row);
    }
    $('.answer-wrapper').css("display", "none");
    $('.table-wrapper').css("display", "block");
    $('.marks-display').append(markSpan.text(`Total marks : ${totalMarks}`).append(button1));
};

start=()=>{
    startBtn.prop('disabled',true);
    $('.answer-wrapper').css("display", "block");
    //let codeArr = setFlagCode();
    console.log('here is codeArr : '+codeArr);
    $('#txt-question').val(`${qnum}`+'/10');
    displayFlag(flagCount);
    // codeArr.forEach((data)=>{
    //     displayFlag(data);
    // })
}

reload =()=>{location.reload(true);}


