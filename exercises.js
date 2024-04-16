class Exercise {
    constructor(muscleGroup, exerciseName, fatigueNum) {
        const muscleGroups = ['Shoulders', 'Chest', 'Back', 'Biceps', 'Triceps', 'Forearms', 'Abdominals', 'Glutes', 'Quadriceps', 'Hamstrings', 'Calves']
        if (!muscleGroups.includes(muscleGroup)) {
            throw new Error('Invalid Muscle Group')
        }
        this._muscleGroup = muscleGroup;
        this._exerciseName = exerciseName;
        if (fatigueNum < 1 || fatigueNum > 5) {
            throw new Error('fatigueNum must be between 1 and 5')
        }
        this._fatigueNum = fatigueNum;
    }

}

class ExerciseCompendium {
    constructor() {
        this._exercises = {
            Shoulders: [
                {muscleGroup: 'Shoulders', exerciseName: 'Dumbbell Lateral Raise', fatigueNum: 2},
                {muscleGroup: 'Shoulders', exerciseName: 'Dumbbell Frontal Raise', fatigueNum: 2},
                {muscleGroup: 'Shoulders', exerciseName: 'Dumbbell Seated Shoulder Press', fatigueNum: 3},
                {muscleGroup: 'Shoulders', exerciseName: 'Barbell Seated Shoulder Press', fatigueNum: 3},
                {muscleGroup: 'Shoulders', exerciseName: 'Cable Single Arm Lateral Raise', fatigueNum: 2},
                {muscleGroup: 'Shoulders', exerciseName: 'Dumbbell Shrug', fatigueNum: 2},
                {muscleGroup: 'Shoulders', exerciseName: 'Barbell Shrug', fatigueNum: 2},
                {muscleGroup: 'Shoulders', exerciseName: 'Machine Shoulder Press', fatigueNum: 2}
            ],
            Chest: [
                {muscleGroup: 'Chest', exerciseName: 'Barbell Flat Bench Press', fatigueNum: 3},
                {muscleGroup: 'Chest', exerciseName: 'Barbell Incline Bench Press', fatigueNum: 3},
                {muscleGroup: 'Chest', exerciseName: 'Dumbbell Flat Bench Press', fatigueNum: 3},
                {muscleGroup: 'Chest', exerciseName: 'Dumbbell Incline Bench Press', fatigueNum: 3},
                {muscleGroup: 'Chest', exerciseName: 'Cable Chest Flye', fatigueNum: 1},
                {muscleGroup: 'Chest', exerciseName: 'Pec-Deck', fatigueNum: 1},
                {muscleGroup: 'Chest', exerciseName: 'Machine Chest Press', fatigueNum: 2},
            ],
            Back: [
                {muscleGroup: 'Back', exerciseName: 'Barbell Bent-Over Row', fatigueNum: 3},
                {muscleGroup: 'Back', exerciseName: 'Pendlay Row', fatigueNum: 3},
                {muscleGroup: 'Back', exerciseName: 'Pull up', fatigueNum: 4},
                {muscleGroup: 'Back', exerciseName: 'Wide Grip Lat Pulldown', fatigueNum: 3},
                {muscleGroup: 'Back', exerciseName: 'Narrow Grip Lat Pulldown', fatigueNum: 3},
                {muscleGroup: 'Back', exerciseName: 'Cable Row', fatigueNum: 2},
                {muscleGroup: 'Back', exerciseName: 'Machine Row', fatigueNum: 2},
                {muscleGroup: 'Back', exerciseName: 'Barbell Deadlift', fatigueNum: 4}
            ],
            Biceps: [
                {}
            ],
            Triceps: [

            ],
            Forearms: [

            ],
            Abdominals: [

            ],
            Glutes: [

            ],
            Quadriceps: [
                {muscleGroup: 'Quadriceps', exerciseName: 'Front Squat', fatigueNum: 4},
                {muscleGroup: 'Quadriceps', exerciseName: 'Back Squat', fatigueNum: 3},
                {muscleGroup: 'Quadriceps', exerciseName: 'Leg Extension', fatigueNum: 1},
                {muscleGroup: 'Quadriceps', exerciseName: 'Quad-Focused Walking Lunge', fatigueNum: 3},
                {muscleGroup: 'Quadriceps', exerciseName: 'Leg Press', fatigueNum: 2},
                {muscleGroup: 'Quadriceps', exerciseName: 'Smith Machine Depth Split Squat', fatigueNum: 5},
                {muscleGroup: 'Quadriceps', exerciseName: 'Sissy Squat', fatigueNum: 4},
                {muscleGroup: 'Quadriceps', exerciseName: 'Hack Squat', fatigueNum: 3},
                {muscleGroup: 'Quadriceps', exerciseName: 'Pendulum Squat', fatigueNum: 3}
            ],
            Hamstrings: [

            ],
            Calves: [

            ]
        };
    }

    addExercise(muscleGroup, exerciseName, fatigueNum) {
        try {
            const exercise = new Exercise(muscleGroup, exerciseName, fatigueNum);
            if (this._exercises.hasOwnProperty(muscleGroup)) {
                this._exercises[muscleGroup].push({
                    muscleGroup: muscleGroup,
                    exerciseName: exerciseName,
                    fatigueNum: fatigueNum
                });
            } else {
                throw new Error('Invalid Muscle Group');
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    get exercises() {
        return this._exercises;
    }
}

const compendium = new ExerciseCompendium();
compendium.addExercise('Shoulders', 'Dumbbell Seated Shoulder Press', );
console.log(compendium.exercises);