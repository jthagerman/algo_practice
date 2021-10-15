const isIp = (ip) => {
    if(/[a-z]/.test(ip) === true) return false 
    
    ip = ip.split(".");
    if (ip.length !== 4) return false;
    for (index in ip) {
        if (Number(ip[index]) < 0 || Number(ip[index]) > 255) return false;
    }
    return true;
};


    console.log(isIp("23.23.000.234"));
    console.log(isIp("123.23.0.9.234"));
    console.log(isIp("123.9.234"));



