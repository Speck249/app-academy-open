let currentIndex = 0;

// Function creates new elements
const addElements = () => {
    // Create new section with buttons to add and remove profile
    const firstSection = document.createElement("section");
    firstSection.setAttribute("id", "firstSection");
    firstSection.innerHTML = `<button id="add">Add Profile</button>
                              <button id="remove">Remove Profile</button>`;
    document.body.appendChild(firstSection);
    
    const add = document.getElementById('add');
    const remove = document.getElementById('remove');

    // Create dog profile information
    const dogs = ["Baxter", "Luna", "Rusty", "Ziggy", "Bella"]
    const dogInfo = [
        {
            "age": "🎈 4 years old",
            "personality": "🐕 Friendly, playful, and sociable.",
            "fun_fact": "💫 Baxter has a talent for playing catch. He can catch a frisbee mid-air with such grace that his owners \
            have created a highlight reel of his best tricks."
        },
        {
            "age": "🎈 3 years old",
            "personality": "🐶 Energetic, curious, and creative.",
            "fun_fact": "💫 Luna loves to paint! Using non-toxic, pet-safe paint, she 'paints' with her paws and has even donated several \
            pieces to local art shows, raising funds for animal shelters."
        },
        {
            "age": "🎈 5 years old",
            "personality": "🐕‍🦺 Loyal, determined, and friendly.",
            "fun_fact": "💫 Rusty has an extraordinary sense of smell and is part of a volunteer search and rescue team that specializes in \
            finding lost pets. He once found a lost cat in a neighbor's shed!"
        },
        {
            "age": "🎈 2 years old",
            "personality": "🐩 Intelligent, active, and quirky.",
            "fun_fact": "💫 Ziggy is known for his incredible ability to learn new commands quickly. He can navigate a mini obstacle course and \
            impressing everyone with his speed and cleverness!"
        },
        {
            "age": "🎈 4 years old",
            "personality": "🐕‍🦺 Outgoing, adventurous, and spirited.",
            "fun_fact": "💫 Bella loves the snow and is known for her incredible speed on the hills. She once raced her owner down a snowy slope and won!"
        }
    ]

    // Create parent profile container
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute("id", "mainContainer")
    document.body.appendChild(mainContainer);
    
    // Initialize button behavior
    add.addEventListener("click", async () => {
        if (currentIndex == dogInfo.length) {
            alert('ALERT: All Profiles Have Been Displayed.')
            return;
        }

        try {
            const profileContainer = document.createElement('div');
            profileContainer.setAttribute("id", "mainProfile");
            mainContainer.appendChild(profileContainer); 

            const newHeader = document.createElement("h2");
            newHeader.setAttribute("class", "cardTitle")
            newHeader.innerText = dogs[currentIndex];
            
            const res = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await res.json();
            const url = data.message;
            const newImage = document.createElement("img");
            newImage.setAttribute("class", "myImage");
            newImage.src = url
            
            const newUL = document.createElement('ul');
            newUL.setAttribute("class", "dogInfo")
            
            Object.values(dogInfo[currentIndex]).forEach(value => {
                const newLI = document.createElement('li');
                newLI.innerText = value;
                newUL.appendChild(newLI)
            })
    
            profileContainer.appendChild(newHeader);
            profileContainer.appendChild(newImage)
            profileContainer.appendChild(newUL);  

            currentIndex++;
        } catch (error) {
            console.log("Failed to Create Profile")
        }
    })

    remove.addEventListener("click", async () => {
        try {
            mainContainer.remove();
        } catch (error) {
            console.log("Failed to Remove Section")
        }
    })
}

window.onload = addElements