const getCurrentDate = ()=> {
    const options = {year:'numeric', month: 'long', day:'numeric'}
    return new Date().toLocaleString("vi-VN",options);
}

const printLog = (msg)=>{
    console.log(msg)
}

exports.getCurrentDate = getCurrentDate
exports.printLog = printLog