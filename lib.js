
function DaysCountBetween(startDate, endDate) {
    return ((new Date(endDate))-(new Date(startDate)))/(60*60*24*1000) + 1;
}

function findNumberOfFridaysBetween(startDate, endDate) {
    var daysCnt = DaysCountBetween(startDate, endDate);

    var weeksCnt = parseInt(daysCnt/7);

    var lastDaysCnt = daysCnt%7;

    var FridayInLastDays = 0;

    if (lastDaysCnt) {
        var startDateDayNum  = (new Date(startDate)).getDay();

        if (startDateDayNum < 6 &&
            lastDaysCnt >= (6-startDateDayNum)
        ) {
            FridayInLastDays = 1;
        }
    }

    return weeksCnt + FridayInLastDays;
}



function addStars(str, token) {
    var strArr = [];
    var tokenArr = [];
    strArr = str.split("");
    tokenArr = token.split("");
    var strResult = '';
    var tokenFound;

    for (i=0; i<strArr.length; i++) {
        tokenFound = false;
        if (strArr[i]==tokenArr[0]){
            tokenFound = true;
            for (j=0; j<tokenArr.length; j++) {
                if (strArr[i+j] != tokenArr[j]) {
                    tokenFound = false;
                    break;
                }
            }

            if (tokenFound) {
                strResult += ('*' + token + '*');
                i += j-1;
            }
        }

        if (!tokenFound) {
            strResult += strArr[i];
        }
    }

    return strResult;
}


function countOnes(pagesNum) {
    var count = 0;
    var arr = [];
    var i;
    var j;

    for (i = 1; i <= pagesNum; i++) {
        arr = i.toString().split("");
        for (j = 0; j < arr.length; j++) {
            if ('1' == arr[j]) {
                count++;
            }
        }
    }
//console.log(pagesNum, count);
    return count;
}

