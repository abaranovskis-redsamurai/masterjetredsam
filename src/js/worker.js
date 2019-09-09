function sleep(miliseconds) {
    var currentTime = new Date().getTime();

    var i = 0;
    while (currentTime + miliseconds >= new Date().getTime()) {
        i++;
        if (i % 1000000 === 0 ) {
            console.log('rows processed: ' + i);
        }
    }
}

onmessage = function (event) {
    console.log(event.data);

    sleep(10000);

    postMessage('long task completed');
};