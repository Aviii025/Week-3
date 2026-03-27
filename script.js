let arr = [23, 45, 67, 89, 12, 90, 44];

let largest = -Infinity;
let second = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        second = largest;
        largest = arr[i];
    } else if (arr[i] > second && arr[i] !== largest) {
        second = arr[i];
    }
}

console.log("Second Largest:", second);

function uniqueElements(a, b) {
    let combined = a.concat(b);
    let result = [];

    for (let i = 0; i < combined.length; i++) {
        if (result.indexOf(combined[i]) === -1) {
            result.push(combined[i]);
        }
    }

    return result;
}

console.log(uniqueElements([1, 2, 3], [2, 3, 4, 5]));

let students = [
    { name: 'Alice', age: 22, scores: [78, 85, 92] },
    { name: 'Bob', age: 20, scores: [88, 90, 76] },
    { name: 'Charlie', age: 21, scores: [95, 80, 85] }
];

let topName = "";
let highestAvg = 0;

for (let i = 0; i < students.length; i++) {
    let total = 0;

    for (let j = 0; j < students[i].scores.length; j++) {
        total += students[i].scores[j];
    }

    let avg = total / students[i].scores.length;

    if (avg > highestAvg) {
        highestAvg = avg;
        topName = students[i].name;
    }
}

console.log("Top Student:", topName, "with an average score of", highestAvg.toFixed(2));

let time = 3600;
let timer = null;

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("time").innerText = minutes + ":" + seconds;
}

function startTimer() {
    if (timer !== null) return;

    timer = setInterval(function () {
        if (time > 0) {
            time--;
            updateDisplay();
        } else {
            clearInterval(timer);
            timer = null;
            document.getElementById("message").innerText = "Time is up";
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    time = 3600;
    document.getElementById("message").innerText = "";
    updateDisplay();
}

updateDisplay();