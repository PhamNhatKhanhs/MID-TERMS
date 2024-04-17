document.getElementById('set-alarm').addEventListener('click', () => {
    const alarmTimeValue = document.getElementById('alarm-time').value;
    const alarmDateValue = document.getElementById('alarm-date').value;

    if (!alarmTimeValue || !alarmDateValue) {
        alert('Please set a valid alarm time and date.');
        return;
    }

    const alarmDateTime = new Date(`${alarmDateValue}T${alarmTimeValue}`);
    const now = new Date();

    if (alarmDateTime < now) {
        alert('Please set a time and date in the future.');
        return;
    }

    const timeout = alarmDateTime.getTime() - now.getTime();
    const alarmInfo = document.getElementById('alarm-info');
    alarmInfo.textContent = `Alarm set for ${alarmDateTime.toLocaleString()}.`;

    setTimeout(() => {
        const alarmSound = new Audio('alarm.mp3');
        alarmSound.play();
        alarmInfo.textContent = 'Alarm ringing!';
    }, timeout);
});

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours % 12 || 12}:${minutes}:${seconds} ${amPm}`;
    const formattedDate = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    document.getElementById('time-display').textContent = formattedTime;
    document.getElementById('date-display').textContent = formattedDate;
}


var countdownElement = document.getElementById('countdown');
var countdownInterval = setInterval(function() {
    countdownElement.innerText = 'Countdown: ' + countdownTime + 's';

    if (countdownTime === 0) {
        clearInterval(countdownInterval);
        countdownElement.innerText = "Countdown: Time's up!";
    } else {
        countdownTime--;
    }
}, 1000);

let intervalId; // Biến để lưu ID của setInterval

function setAlarm() {
    const alarmTimeValue = document.getElementById('alarm-time').value;
    const alarmDateValue = document.getElementById('alarm-date').value;

    const updateCooldown = () => {
        const currentTime = new Date();
        const alarmDateTime = new Date(`${alarmDateValue}T${alarmTimeValue}`);

        const cooldown = alarmDateTime.getTime() - currentTime.getTime();
        let cooldownInSeconds = Math.floor(cooldown / 1000);

        if (cooldownInSeconds < 0) {
            clearInterval(intervalId); // Dừng setInterval khi cooldown kết thúc
            cooldownInSeconds = 0; // Đảm bảo hiển thị 0 giây khi cooldown kết thúc
        }

        const cooldownInfo = document.getElementById('cooldown-info');
        cooldownInfo.innerText = `Cooldown time: ${cooldownInSeconds} seconds`;
        cooldownInfo.style.display = 'block';
    };

    // Gọi hàm updateCooldown ngay khi nhấn nút "Set Alarm"
    updateCooldown();

    // Cập nhật thời gian cooldown mỗi giây
    intervalId = setInterval(updateCooldown, 1000);
}

// Dừng việc cập nhật thời gian cooldown
function stopCooldown() {
    clearInterval(intervalId);
}
setInterval(updateClock, 1000);
updateClock();



