// ===============================
// SMOOTH SCROLL
// ===============================

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// ===============================
// JOIN CHALLENGE
// ===============================

function joinChallenge(button) {

    button.innerText = "Joined ✓";

    button.style.background = "#2d9858";
    button.style.color = "white";

    button.disabled = true;

    alert("Challenge accepted! 🌱 You can now start your eco mission.");
}


// ===============================
// QUIZ
// ===============================

function startQuiz() {

    document.getElementById("quizModal")
        .classList.add("show");

}


function closeQuiz() {

    document.getElementById("quizModal")
        .classList.remove("show");

    document.getElementById("quizResult")
        .innerText = "";

}


function answer(correct) {

    const result = document.getElementById("quizResult");

    if (correct) {

        result.innerHTML =
            "🎉 Correct! You earned +50 XP.";

        result.style.color = "#2a9656";

    } else {

        result.innerHTML =
            "❌ Not quite. Try again!";

        result.style.color = "#d45d5d";

    }

}


// ===============================
// NOTIFICATION
// ===============================

document.querySelector(".icon-btn")
    .addEventListener("click", function () {

        alert(
            "🔔 Notifications\n\n" +
            "• Your 7-day eco streak is active!\n" +
            "• New Plastic-Free Challenge available.\n" +
            "• You earned the Eco Beginner badge."
        );

    });


// ===============================
// SEARCH
// ===============================

const searchInput =
    document.querySelector(".search input");

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const cards =
        document.querySelectorAll(
            ".challenge-card"
        );

    cards.forEach(function (card) {

        const text =
            card.innerText.toLowerCase();

        if (text.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});