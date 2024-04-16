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
                {muscleGroup: 'Back', exerciseName: 'Barbell Deadlift', fatigueNum: 4},
                {muscleGroup: 'Back', exerciseName: 'Back Extension', fatigueNum: 3}
            ],
            Biceps: [
                {muscleGroup: 'Biceps', exerciseName: 'Hammer Curl', fatigueNum: 1},
                {muscleGroup: 'Biceps', exerciseName: 'Incline Dumbbell Curl', fatigueNum: 2},
                {muscleGroup: 'Biceps', exerciseName: 'EZ Bar Preacher Curl', fatigueNum: 3},
                {muscleGroup: 'Biceps', exerciseName: 'Machine Preacher Curl', fatigueNum: 2},
                {muscleGroup: 'Biceps', exerciseName: 'Spider Curl', fatigueNum: 2},
                {muscleGroup: 'Biceps', exerciseName: 'Cable Curl', fatigueNum: 1},
                {muscleGroup: 'Biceps', exerciseName: 'Standing EZ Bar Curl', fatigueNum: 2}
            ],
            Triceps: [
                {muscleGroup: 'Triceps', execiseName: 'Tricep Overhead Press (rope)', fatigueNum: 2},
                {muscleGroup: 'Biceps', exerciseName: 'Tricep Overhead Press (bar)', fatigueNum: 2},
                {muscleGroup: 'Biceps', exerciseName: 'EZ Bar Skull Crusher', fatigueNum: 3},
                {muscleGroup: 'Biceps', exerciseName: 'EZ Bar JM Press', fatigueNum: 3},
                {muscleGroup: 'Biceps', exerciseName: 'Tricep Pushdown (rope)', fatigueNum: 1},
                {muscleGroup: 'Biceps', exerciseName: 'Tricep Pushdown (bar)', fatigueNum: 1},
                {muscleGroup: 'Biceps', exerciseName: 'French Press', fatigueNum: 2}
            ],
            Forearms: [
                {muscleGroup: 'Forearms', exerciseName: 'Dumbbell Wrist Curl', fatigueNum: 1},
                {muscleGroup: 'Forearms', exerciseName: 'Barbell Wrist Curl', fatigueNum: 1}
            ],
            Abdominals: [
                {muscleGroup: 'Abdominals', exerciseName: 'Dumbbell Ab-Crunch', fatigueNum: 2},
                {muscleGroup: 'Abdominals', exerciseName: 'Captains Chair Leg raises', fatigueNum: 3},
                {muscleGroup: 'Abdominals', exerciseName: 'Hanging Leg Raises', fatigueNum: 4},
                {muscleGroup: 'Abdominals', exerciseName: 'Decline Ab-Crunch', fatigueNum: 2},
                {muscleGroup: 'Abdominals', exerciseName: 'Cable Ab Curl', fatigueNum: 2},
                {muscleGroup: 'Abdominals', exerciseName: 'machine Abs', fatigueNum: 3}
            ],
            Glutes: [
                {muscleGroup: 'Glutes', exerciseName: 'Barbell Hip Thrust', fatigueNum: 3},
                {muscleGroup: 'Glutes', exerciseName: 'Machine Hip Thrust', fatigueNum: 3},
                {muscleGroup: 'Glutes', exerciseName: 'Glute-Focused Walking Lunge', fatigueNum: 4},
                {muscleGroup: 'Glutes', exerciseName: 'Single Leg Barbell Hip Thrust', fatigueNum: 3},
                {muscleGroup: 'Glutes', exerciseName: 'Glute Machine', fatigueNum: 2},
                {muscleGroup: 'Glutes', exerciseName: 'Cable Pullthrough', fatigueNum: 2}

            ],
            Quadriceps: [
                {muscleGroup: 'Quadriceps', exerciseName: 'Front Squat', fatigueNum: 4},
                {muscleGroup: 'Quadriceps', exerciseName: 'Back Squat', fatigueNum: 3},
                {muscleGroup: 'Quadriceps', exerciseName: 'Leg Extension', fatigueNum: 1},
                {muscleGroup: 'Quadriceps', exerciseName: 'Quad-Focused Walking Lunge', fatigueNum: 4},
                {muscleGroup: 'Quadriceps', exerciseName: 'Leg Press', fatigueNum: 2},
                {muscleGroup: 'Quadriceps', exerciseName: 'Smith Machine Depth Split Squat', fatigueNum: 5},
                {muscleGroup: 'Quadriceps', exerciseName: 'Sissy Squat', fatigueNum: 4},
                {muscleGroup: 'Quadriceps', exerciseName: 'Hack Squat', fatigueNum: 3},
                {muscleGroup: 'Quadriceps', exerciseName: 'Pendulum Squat', fatigueNum: 3},
                {muscleGroup: 'Quadriceps', exerciseName: 'Bulgarian Split-Squat', fatigueNum: 5}
            ],
            Hamstrings: [
                {muscleGroup: 'Hamstrings', exerciseName: 'Romanian Deadlift', fatigueNum: 5},
                {muscleGroup: 'Hamstrings', exerciseName: 'Seated Leg Curl', fatigueNum: 2},
                {muscleGroup: 'Hamstrings', exerciseName: 'Laying Leg Curl', fatigueNum: 2},
                {muscleGroup: 'Hamstrings', exerciseName: 'Standing Leg Curl', fatigueNum: 3},
            ],
            Calves: [
                {muscleGroup: 'Calves', exerciseName: 'Leg Press Calf Raise', fatigueNum: 3},
                {muscleGroup: 'Calves', exerciseName: 'Standing Calf Raise', fatigueNum: 2},
                {muscleGroup: 'Calves', exerciseName: 'seated Calf Raise', fatigueNum: 1},
                {muscleGroup: 'Calves', exerciseName: 'Single Leg Calf Raise', fatigueNum: 2}
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
console.log(compendium.exercises);