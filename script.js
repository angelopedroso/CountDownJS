'use strict'


const formatForce2Nums = (digit) => `0${digit}`.slice(-2);

const updateTime = (tempo) => {
    const time = document.querySelectorAll('[id*=cd]');

    const cSeconds = formatForce2Nums(tempo % 60);
    const cMinutes = formatForce2Nums(Math.floor((tempo % (60 * 60)) / 60));
    const cHours = formatForce2Nums(Math.floor((tempo % (60 * 60 * 24)) / (60 * 60)));
    const cDays = formatForce2Nums(Math.floor(tempo / (60 * 60 * 24)));

    const dates = [
        cDays,
        cHours,
        cMinutes,
        cSeconds
    ]

    for (let i = 0; i < time.length; i++) {
        time[i].textContent = dates[i];  
    }
};

function countDown(tempo) {
    const clearTime = () => clearInterval(id);
    
    const count = () => {
        if(tempo === 0) {
            clearTime();
        }
        updateTime(tempo);
        tempo--;
    };
    
    let id = setInterval(count, 1000);
}

const defTime = () => {
    const desiredTime = new Date('2022-01-11 21:00:00');
    const actualTime = Date.now();

    return Math.floor((desiredTime - actualTime) / 1000);
};

countDown(defTime());