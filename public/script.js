const factButton = document.getElementById("factButton");
const fact = document.getElementById("fact");

factButton.addEventListener("click", async() => {
    fact.textContent = "Generating a fun fact....";

    try {
        const response = await fetch("/fun-fact");
        const data = await response.json();

        fact.textContent = data.fact;
    } catch (error) {
        console.error(error);

        fact.textContent = "sorry, somthing went wrong!";
    }
});