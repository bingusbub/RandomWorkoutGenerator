import exerciseList from './exerciselist.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateWorkout');
    generateButton.addEventListener('click', generateAndDisplayWorkout);
});

function generateAndDisplayWorkout() {
    const workoutType = document.getElementById('worktype').value;
    const amount = parseInt(document.getElementById('amount').value, 10);

    let workouts = [];
    if (amount < 4 || amount > 12) {
        console.error('Invalid number of exercises');
        alert('INVALID NUMBER. HAS TO BE BETWEEN 4 AND 12 OR 4 AND 6 FOR SHOULDERS AND ARMS');
        return;
    }

    if (workoutType === 'full') {
        workouts = exerciseList.generateFullBodyWorkout(amount);
    } else if (workoutType === 'upper') {
        workouts = exerciseList.generateUpperBodyWorkout(amount);
    } else if (workoutType === 'lower') {
        workouts = exerciseList.generateLowerBodyWorkout(amount);
    } else if (workoutType === 'upperpush') {
        workouts = exerciseList.generateUpperPushWorkout(amount);
    } else if (workoutType === 'upperpull') {
        workouts = exerciseList.generateUpperPullWorkout(amount);
    } else if (workoutType === 'shoulders') {
        if (amount < 4 || amount > 6) {
            alert('SHOULDER WORKOUT EXERCISE RANGE IS 4 TO 6 ONLY');
        } else {
            workouts = exerciseList.generateShoulderWorkout(amount);
        }
    } else if (workoutType === 'arms') {
        if (amount < 4 || amount > 8) {
            alert('ARM WORKOUT EXERCISE RANGE IS 4 TO 8 ONLY');
        } else {
            workouts = exerciseList.generateArmWorkout(amount);
        }
    } else {
        alert('Not finished');
        return;
    }

    const tableBody = document.querySelector('#workout tbody');
    tableBody.innerHTML = ''; // Clear previous results

    workouts.forEach(exercise => {
        const row = tableBody.insertRow();
        const cellExercise = row.insertCell(0);
        const cellSets = row.insertCell(1);
        const cellReps = row.insertCell(2);
        const cellFatigue = row.insertCell(3);

        cellExercise.textContent = exercise.exerciseName;
        cellSets.textContent = exercise.sets;
        cellReps.textContent = exercise.reps;
        cellFatigue.textContent = exercise.fatigueNum;
    });
}

//const fullBodyWorkout = exerciseList.generateFullBodyWorkout(12);
//console.log(fullBodyWorkout);