import exerciseList from './exerciselist.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateWorkout');
    generateButton.addEventListener('click', generateAndDisplayWorkout);
});

function generateAndDisplayWorkout() {
    const workoutType = document.getElementById('worktype').value;
    const amount = parseInt(document.getElementById('amount').value, 10);

    if (workoutType === 'full') {
        let workouts = [];
        if (amount >= 4 && amount <= 12) {
            workouts = exerciseList.generateFullBodyWorkout(amount);
        } else {
            console.error('Invalid number of exercises');
            alert('INVALID NUMBER. HAS TO BE BETWEEN 4 AND 12')
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
    } else {
        alert('Not finished')
    }
}

//const fullBodyWorkout = exerciseList.generateFullBodyWorkout(12);
//console.log(fullBodyWorkout);