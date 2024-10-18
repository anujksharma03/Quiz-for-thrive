document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll(".category");
    const quizzes = document.querySelectorAll(".quiz");
    const resultContainer = document.querySelector(".result");

    // Function to hide all quizzes
    function hideAllQuizzes() {
        quizzes.forEach(quiz => {
            quiz.style.display = "none";
        });
        resultContainer.style.display = "none"; // Hide results
    }

    // Function to show results based on the category
    function showResults(category) {
        let resultText = "";
        let score = 0;

        // Calculate score based on user input for the selected category
        const answers = document.querySelectorAll(`#${category}-quiz input[type="radio"]:checked`);
        answers.forEach(answer => {
            if (answer.value === "Yes" || answer.value === "Good" || answer.value === "Balanced") {
                score++;
            }
        });

        // Determine the result based on the score
        if (score <= 1) {
            resultText = "It seems you may need to focus on this area. Consider reaching out for support or exploring resources.";
        } else if (score <= 2) {
            resultText = "You have a moderate level of awareness and action in this area. Keep working towards improvement!";
        } else {
            resultText = "Great job! You're doing well in this area of health and well-being. Keep it up!";
        }

        resultContainer.innerHTML = `<h3>Your Results:</h3><p>${resultText}</p>`;
        resultContainer.style.display = "block"; // Show results
    }

    // Add event listeners to categories
    categories.forEach(category => {
        category.addEventListener("click", function() {
            hideAllQuizzes();
            document.getElementById(`${category.id}-quiz`).style.display = "block"; // Show selected quiz
        });
    });

    // Add event listeners to submit buttons
    const submitButtons = document.querySelectorAll(".submit");
    submitButtons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.closest('.quiz').id.replace('-quiz', ''); // Get category
            showResults(category); // Show results for that category
        });
    });
});
