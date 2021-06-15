import BackgroundTimer from 'react-native-background-timer';

export default function backFun(url, p, v, s) {
    const intervalId = BackgroundTimer.setInterval(() => {
        // this will be executed every 200 ms
        // even when app is the the background
        console.log('start');
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                // Work with JSON data here
                let len = data.centers.length;
                for (let i = 0; i < len; i++) {
                    if (p == 'Free') {
                        if (data.centers[i].fee_type == 'Paid') {
                            continue;
                        }
                    }
                    if (p == 'Paid') {
                        if (data.centers[i].fee_type == 'Free') {
                            continue;
                        }
                    }
                    let len2 = data.centers[i].sessions.length;
                    for (let j = 0; j < len2; j++) {
                        if (v == "COVISHIELD" || v == "COVAXIN") {
                            if (data.centers[i].sessions[j].vaccine != v) {
                                continue;
                            }
                        }
                        if (data.centers[i].sessions[j][s] > 0) {
                            //do something
                            console.log("This is of your interest! \n");
                            BackgroundTimer.clearInterval(intervalId);
                        }
                    }
                }
                console.log("run done");
            })
            .catch((err) => {
                // Do something for an error here
                console.log(err);
            })

        console.log('tic');
    }, 5000);
    
    // Cancel the timer when you are done with it
    BackgroundTimer.clearInterval(intervalId);
}