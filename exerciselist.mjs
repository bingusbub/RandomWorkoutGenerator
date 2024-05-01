const exerciseList = {
    _shoulders: [
        {muscleGroup: 'Shoulders', exerciseName: 'Dumbbell Lateral Raise', fatigueNum: 4},
        {muscleGroup: 'Shoulders', exerciseName: 'Dumbbell Frontal Raise', fatigueNum: 4},
        {muscleGroup: 'Shoulders', exerciseName: 'Dumbbell Seated Shoulder Press', fatigueNum: 6},
        {muscleGroup: 'Shoulders', exerciseName: 'Barbell Seated Shoulder Press', fatigueNum: 6},
        {muscleGroup: 'Shoulders', exerciseName: 'Cable Single Arm Lateral Raise', fatigueNum: 4},
        {muscleGroup: 'Shoulders', exerciseName: 'Dumbbell Shrug', fatigueNum: 3},
        {muscleGroup: 'Shoulders', exerciseName: 'Barbell Shrug', fatigueNum: 4},
        {muscleGroup: 'Shoulders', exerciseName: 'Machine Shoulder Press', fatigueNum: 3}
    ],
    _chest: [
        {muscleGroup: 'Chest', exerciseName: 'Barbell Flat Bench Press', fatigueNum: 6},
        {muscleGroup: 'Chest', exerciseName: 'Barbell Incline Bench Press', fatigueNum: 6},
        {muscleGroup: 'Chest', exerciseName: 'Dumbbell Flat Bench Press', fatigueNum: 6},
        {muscleGroup: 'Chest', exerciseName: 'Dumbbell Incline Bench Press', fatigueNum: 6},
        {muscleGroup: 'Chest', exerciseName: 'Cable Chest Flye', fatigueNum: 3},
        {muscleGroup: 'Chest', exerciseName: 'Pec-Deck', fatigueNum: 2},
        {muscleGroup: 'Chest', exerciseName: 'Machine Chest Press', fatigueNum: 4},
    ],
    _back: [
        {muscleGroup: 'Back', exerciseName: 'Barbell Bent-Over Row', fatigueNum: 6},
        {muscleGroup: 'Back', exerciseName: 'Pendlay Row', fatigueNum: 6},
        {muscleGroup: 'Back', exerciseName: 'Pull up', fatigueNum: 7},
        {muscleGroup: 'Back', exerciseName: 'Wide Grip Lat Pulldown', fatigueNum: 5},
        {muscleGroup: 'Back', exerciseName: 'Narrow Grip Lat Pulldown', fatigueNum: 5},
        {muscleGroup: 'Back', exerciseName: 'Cable Row', fatigueNum: 6},
        {muscleGroup: 'Back', exerciseName: 'Machine Row', fatigueNum: 5},
        {muscleGroup: 'Back', exerciseName: 'Barbell Deadlift', fatigueNum: 8},
        {muscleGroup: 'Back', exerciseName: 'Back Extension', fatigueNum: 5}
    ],
    _biceps: [
        {muscleGroup: 'Biceps', exerciseName: 'Hammer Curl', fatigueNum: 2},
        {muscleGroup: 'Biceps', exerciseName: 'Incline Dumbbell Curl', fatigueNum: 3},
        {muscleGroup: 'Biceps', exerciseName: 'EZ Bar Preacher Curl', fatigueNum: 4},
        {muscleGroup: 'Biceps', exerciseName: 'Machine Preacher Curl', fatigueNum: 3},
        {muscleGroup: 'Biceps', exerciseName: 'Spider Curl', fatigueNum: 4},
        {muscleGroup: 'Biceps', exerciseName: 'Cable Curl', fatigueNum: 2},
        {muscleGroup: 'Biceps', exerciseName: 'Standing EZ Bar Curl', fatigueNum: 4}
    ],
    _triceps: [
        {muscleGroup: 'Triceps', exerciseName: 'Tricep Overhead Press (rope)', fatigueNum: 4},
        {muscleGroup: 'Triceps', exerciseName: 'Tricep Overhead Press (bar)', fatigueNum: 4},
        {muscleGroup: 'Triceps', exerciseName: 'EZ Bar Skull Crusher', fatigueNum: 5},
        {muscleGroup: 'Triceps', exerciseName: 'EZ Bar JM Press', fatigueNum: 4},
        {muscleGroup: 'Triceps', exerciseName: 'Tricep Pushdown (rope)', fatigueNum: 3},
        {muscleGroup: 'Triceps', exerciseName: 'Tricep Pushdown (bar)', fatigueNum: 3},
        {muscleGroup: 'Triceps', exerciseName: 'French Press', fatigueNum: 4}
    ],
    _forearms: [
        {muscleGroup: 'Forearms', exerciseName: 'Dumbbell Wrist Curl', fatigueNum: 2},
        {muscleGroup: 'Forearms', exerciseName: 'Barbell Wrist Curl', fatigueNum: 2}
    ],
    _abdominals: [
        {muscleGroup: 'Abdominals', exerciseName: 'Dumbbell Ab-Crunch', fatigueNum: 4},
        {muscleGroup: 'Abdominals', exerciseName: 'Captains Chair Leg raises', fatigueNum: 5},
        {muscleGroup: 'Abdominals', exerciseName: 'Hanging Leg Raises', fatigueNum: 7},
        {muscleGroup: 'Abdominals', exerciseName: 'Decline Ab-Crunch', fatigueNum: 5},
        {muscleGroup: 'Abdominals', exerciseName: 'Cable Ab Curl', fatigueNum: 3},
        {muscleGroup: 'Abdominals', exerciseName: 'machine Abs', fatigueNum: 5}
    ],
    _glutes: [
        {muscleGroup: 'Glutes', exerciseName: 'Barbell Hip Thrust', fatigueNum: 7},
        {muscleGroup: 'Glutes', exerciseName: 'Machine Hip Thrust', fatigueNum: 6},
        {muscleGroup: 'Glutes', exerciseName: 'Glute-Focused Walking Lunge', fatigueNum: 8},
        {muscleGroup: 'Glutes', exerciseName: 'Single Leg Barbell Hip Thrust', fatigueNum: 6},
        {muscleGroup: 'Glutes', exerciseName: 'Glute Machine', fatigueNum: 4},
        {muscleGroup: 'Glutes', exerciseName: 'Cable Pullthrough', fatigueNum: 3}

    ],
    _quadriceps: [
        {muscleGroup: 'Quadriceps', exerciseName: 'Front Squat', fatigueNum: 9},
        {muscleGroup: 'Quadriceps', exerciseName: 'Back Squat', fatigueNum: 8},
        {muscleGroup: 'Quadriceps', exerciseName: 'Leg Extension', fatigueNum: 2},
        {muscleGroup: 'Quadriceps', exerciseName: 'Quad-Focused Walking Lunge', fatigueNum: 8},
        {muscleGroup: 'Quadriceps', exerciseName: 'Leg Press', fatigueNum: 5},
        {muscleGroup: 'Quadriceps', exerciseName: 'Smith Machine Depth Split Squat', fatigueNum: 10},
        {muscleGroup: 'Quadriceps', exerciseName: 'Sissy Squat', fatigueNum: 8},
        {muscleGroup: 'Quadriceps', exerciseName: 'Hack Squat', fatigueNum: 7},
        {muscleGroup: 'Quadriceps', exerciseName: 'Pendulum Squat', fatigueNum: 7},
        {muscleGroup: 'Quadriceps', exerciseName: 'Bulgarian Split-Squat', fatigueNum: 10}
    ],
    _hamstrings: [
        {muscleGroup: 'Hamstrings', exerciseName: 'Romanian Deadlift', fatigueNum: 10},
        {muscleGroup: 'Hamstrings', exerciseName: 'Seated Leg Curl', fatigueNum: 4},
        {muscleGroup: 'Hamstrings', exerciseName: 'Laying Leg Curl', fatigueNum: 4},
        {muscleGroup: 'Hamstrings', exerciseName: 'Standing Leg Curl', fatigueNum: 5},
    ],
    _calves: [
        {muscleGroup: 'Calves', exerciseName: 'Leg Press Calf Raise', fatigueNum: 4},
        {muscleGroup: 'Calves', exerciseName: 'Standing Calf Raise', fatigueNum: 3},
        {muscleGroup: 'Calves', exerciseName: 'seated Calf Raise', fatigueNum: 1},
        {muscleGroup: 'Calves', exerciseName: 'Single Leg Calf Raise', fatigueNum: 4}
    ],

    addExercise(newMuscleGroup, newExerciseName, newFatigueNum) {
        try {
            // Correcting the reference to use `newMuscleGroup` and accessing the property correctly using `this`.
            // Also, using `_` prefix according to your data structure
            const groupKey = `_${newMuscleGroup.toLowerCase()}`; // Assuming muscle group names are case-insensitive
            if (this.hasOwnProperty(groupKey)) {
                this[groupKey].push({
                    muscleGroup: newMuscleGroup,
                    exerciseName: newExerciseName,
                    fatigueNum: newFatigueNum
                });
            } else {
                throw new Error('Invalid Muscle Group');
            }
        } catch (error) {
            console.error(error.message);
        }
    },

    generateFullBodyWorkout(exerciseAmount) {
        if (exerciseAmount < 4 || exerciseAmount > 12) {
            console.error("The number of exercises must be between 4 and 12.");
            return;
        }
    
        const allMuscleGroups = Object.keys(this).filter(key => key.startsWith('_'));
        const selectedExercises = [];
        const usedMuscleGroups = new Set();
    
        while (selectedExercises.length < exerciseAmount) {
            const availableGroups = allMuscleGroups.filter(group => !usedMuscleGroups.has(group));
    
            // If all groups are used, reset to allow repeats
            if (availableGroups.length === 0) {
                usedMuscleGroups.clear();
                continue;
            }
    
            // Select random muscle group from available groups
            const randomGroup = availableGroups[Math.floor(Math.random() * availableGroups.length)];
            usedMuscleGroups.add(randomGroup);
    
            // Select a random exercise from the chosen group
            const exercises = this[randomGroup];
            const randomExercise = exercises[Math.floor(Math.random() * exercises.length)];
    
            // Determine sets and reps based on fatigue number
            let sets, reps;
            if (randomExercise.fatigueNum >= 1 && randomExercise.fatigueNum <= 4) {
                sets = 4;
                reps = Math.floor(Math.random() * (23) + 8); // random number between 8 and 30
            } else if (randomExercise.fatigueNum >= 5 && randomExercise.fatigueNum <= 7) {
                sets = 3;
                reps = Math.floor(Math.random() * (23) + 8); // random number between 8 and 30
            } else if (randomExercise.fatigueNum >= 8 && randomExercise.fatigueNum <= 10) {
                sets = 2;
                reps = Math.floor(Math.random() * (13) + 8); // random number between 8 and 20
            }
    
            // Add exercise to the workout list
            selectedExercises.push({
                muscleGroup: randomExercise.muscleGroup,
                exerciseName: randomExercise.exerciseName,
                sets: sets,
                reps: reps,
                fatigueNum: randomExercise.fatigueNum
            });
        }
    
        // Sort exercises by fatigue number in descending order
        selectedExercises.sort((a, b) => b.fatigueNum - a.fatigueNum);
    
        return selectedExercises;
    }
    
};

export default exerciseList;


//exerciseList.addExercise('Shoulders', 'New Shoulder Exercise', 3);
//console.log(exerciseList.shoulders);  // This should now include the new exercise

