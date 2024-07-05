// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('fitnessForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (form.checkValidity()) {
            const height = document.getElementById('height').value;
            const weight = document.getElementById('weight').value;
            const goal = document.getElementById('goal').value;

            const workoutPlan = generateWorkoutPlan(height, weight, goal);
            displayWorkoutPlan(workoutPlan);
        } else {
            form.reportValidity();
        }
    });

    function generateWorkoutPlan(height, weight, goal) {
        let plan = `Height: ${height} cm, Weight: ${weight} kg, Goal: ${goal}\n`;

        if (goal === 'lose weight') {
            plan += "Week 1:\n- Monday: Cardio 30 min\n- Wednesday: HIIT 20 min\n- Friday: Yoga 45 min\n";
        } else if (goal === 'gain muscle') {
            plan += "Week 1:\n- Monday: Weightlifting 60 min\n- Wednesday: Strength Training 45 min\n- Friday: Circuit Training 30 min\n";
        } else if (goal === 'stay fit') {
            plan += "Week 1:\n- Monday: Swimming 45 min\n- Wednesday: Cycling 30 min\n- Friday: Pilates 60 min\n";
        }

        return plan;
    }

    function displayWorkoutPlan(plan) {
        const workoutPlanSection = document.getElementById('workoutPlan');
        workoutPlanSection.textContent = plan;
    }
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const expandBtns = document.querySelectorAll('.expand-btn');
    expandBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const details = this.nextElementSibling;
            details.style.display = details.style.display === 'block' ? 'none' : 'block';
        });
    });

    const goalFilter = document.getElementById('goal-filter');
    const difficultySort = document.getElementById('difficulty-sort');
    const durationSort = document.getElementById('duration-sort');

    goalFilter.addEventListener('change', filterSortWorkouts);
    difficultySort.addEventListener('change', filterSortWorkouts);
    durationSort.addEventListener('change', filterSortWorkouts);

    function filterSortWorkouts() {
        const goal = goalFilter.value;
        const difficulty = difficultySort.value;
        const duration = durationSort.value;

        const workoutCards = document.querySelectorAll('.workout-card');
        workoutCards.forEach(card => {
            const cardGoal = card.getAttribute('data-goal');
            const cardDifficulty = card.getAttribute('data-difficulty');
            const cardDuration = card.getAttribute('data-duration');

            const showCard = (goal === 'all' || cardGoal === goal) &&
                             (difficulty === 'all' || cardDifficulty === difficulty) &&
                             (duration === 'all' || cardDuration === duration);

            card.style.display = showCard ? 'block' : 'none';
        });
    }
});