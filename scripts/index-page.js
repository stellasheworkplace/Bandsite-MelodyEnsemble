const users = [
    {
        name:"Victor Pinto",
        comment:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        name:"Christina Cebrera",
        comment:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name:"Isaac Tadesse",
        comment:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
];

const userEL = document.querySelector(".users");

showALLComments(users);

function showALLComments(users){
    userEL.innerHTML = "";

    for(let i = 0; i < users.length; i++){
        const user = users[i];

        displayUser(user);
    }
}

function displayUser(user){

    const userEL = document.createElement("article");
    userEL.classList.add("user");

    const userInfo = document.createElement("div");
    userInfo.classList.add("user__info-container");

    const userName = document.createElement("h3");
    userName.classList.add(user_name);
    userName.innerText = user.name;

    const userComment = document.createElement("div");
    userName.classList.add(user_comment);
    userName.innerText = user.comment;

    userInfo.appendChild(userName);
    userInfo.appendChild(userComment);
    userEL.appendChild(userEL);
}

const addUser = document.getElementById("add-comment");

addUser.addEventListener("submit",(event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const comment = event.target.comment.value;

    const newUser = {
        name: name,
        comment: comment
    }

    users.push(newUser);
    showALLComments(users);
});
