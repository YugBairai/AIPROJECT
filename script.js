let prompts = [];

const addPromptBtn = document.getElementById("addPromptBtn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const form = document.querySelector("form");
const titleInput = document.getElementById("title");
const categoryInput = document.getElementById("category");
const promptInput = document.getElementById("prompt");
const tagsInput = document.getElementById("tags");
const promptContainer = document.getElementById("promptContainer");

classaddEventListener(()=>{
    modal.children("Clicked Here")
})

addPromptBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

closeBtn.addEventListener("click", (event) => {
    modal.classList.add("hidden");
});

function createPromptCard(promptData) {

    const card = document.createElement("div");
    card.classList.add("prompt-card");

    card.innerHTML = `
        <h3>${promptData.title}</h3>

        <span class="category">
            ${promptData.category}
        </span>

        <p>
            ${promptData.prompt}
        </p>

        <div class="tags">
            <span>${promptData.tags}</span>
        </div>

        <div class="card-actions">
            <button>⭐</button>
            <button>📋</button>
            <button>✏️</button>
            <button>🗑️</button>
        </div>
    `;

    promptContainer.appendChild(card);
}

function loadPrompts() {

    const storedPrompts = localStorage.getItem("prompts");

    if (storedPrompts) {

        prompts = JSON.parse(storedPrompts);

        prompts.forEach(function(prompt) {
            createPromptCard(prompt);
        });

    }
    else if(form === "" || DataTransfer ===""){

        promptContainer.remove();
        closeBtn.addEventListener("dblclick",(e)=>{
            console.log(e.target);
        })
    }else{
        alert("Fill the total form ! Do Not forget anything space.........");
        return;
    }

}

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const title = titleInput.value.trim();
    const category = categoryInput.value;
    const prompt = promptInput.value.trim();
    const tags = tagsInput.value.trim();

    if (title === "" || prompt === "") {
    alert("Please fill in all required fields.");
    return;
    }

    const promptData = {
        title,
        category,
        prompt,
        tags
    };

    prompts.push(promptData);

    localStorage.setItem("prompts", JSON.stringify(prompts));

    createPromptCard(promptData);
    form.reset();
    modal.classList.add("hidden");
    

});

function EventListner(event){
    form.addEventListener('click',function(){
        console.log("Print console");
        return 1;
    })
}


loadPrompts();