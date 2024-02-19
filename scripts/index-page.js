 import BandSiteApi from "./band-site-api.js";
 const bandSiteApi = new BandSiteApi("31d9bc99-8ea4-494d-9bb8-edd3eef3945c");

const users = [
    {
        image: "/",
        name: "Victor Pinto",
        timestampe: "11/02/2023",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        image: "/",
        name: "Christina Cebrera",
        timestampe: "10/28/2023",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        image: "/",
        name: "Isaac Tadesse",
        timestampe: "10/20/2023",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
];


const usersEL = document.querySelector(".users");

showALLComments(users);

function showALLComments(users) {
    usersEL.innerHTML = "";

    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        displayUser(user);
    }
}
/* <section class="user">
   
    <img class="user__avatar" src="/" alt="avatar"></img>

    <div class="user__container">
        <div class="user__container-namendate">
            <h3 class="user__name"></h3>
            <h3 class="user__date"></h3>
        </div>

        <h3 class="user__comment"></h3>

    </div>
</section> */

function displayUser(user) {

    const userEL = document.createElement("section");
    userEL.classList.add("user");

    const userAvatar = document.createElement("img");
    userAvatar.classList.add("user__avatar");
    userAvatar.src = "./assets/Images/icon-like.jpeg";
    userAvatar.alt = "avatar";

    const userInfo = document.createElement("div");
    userInfo.classList.add("user__container");

    const userNameDate = document.createElement("div");
    userNameDate.classList.add("user__container-namedate");

    const userName = document.createElement("h3");
    userName.classList.add("user__name");
    userName.innerText = user.name;

    const userDate = document.createElement("h3");
    userDate.classList.add("user__date");
    userDate.innerText = user.timestampe;

    const userComment = document.createElement("h3");
    userComment.classList.add("user__comment");
    userComment.innerText = user.comment;

    userEL.appendChild(userAvatar);
    userEL.appendChild(userInfo);

    userInfo.appendChild(userNameDate);
    userInfo.appendChild(userComment);

    userNameDate.appendChild(userName);
    userNameDate.appendChild(userDate);

    usersEL.appendChild(userEL);
}

//related to form
const addUser = document.getElementById("add-comment");
const formErrors = document.getElementById("add-errors");

addUser.addEventListener("submit", (event) => {
    event.preventDefault();

    formErrors.innerText = "";

    const name = event.target.name.value;

    const comment = event.target.comment.value;

    if (name === "") {
        formErrors.innerText = "Name can not be empty";

        return;
    }

    const newUser = {
        
        name: name,
        timestampe: new Date().toLocaleDateString(),
        comment: comment
    }

    users.push(newUser);

    showALLComments(users);
});

//The code below is my idea of the sprint-3, but not works property at this point
//I am thinking about the displayUser() method should be fixed to have a list to contain data from the api...


// const usersEL = document.querySelector(".users");

// async function displayUser() {

//     const comments = await bandSiteApi.getComments();
//     console.log(comments);

//     commentListEl.innerHTML = "";

//     comments.forEach((user) => {

//     const userEL = document.createElement("section");
//     userEL.classList.add("user");

//     const userAvatar = document.createElement("img");
//     userAvatar.classList.add("user__avatar");
//     userAvatar.src = "./assets/Images/icon-like.jpeg";
//     userAvatar.alt = "avatar";

//     const userInfo = document.createElement("div");
//     userInfo.classList.add("user__container");

//     const userNameDate = document.createElement("div");
//     userNameDate.classList.add("user__container-namedate");

//     const userName = document.createElement("h3");
//     userName.classList.add("user__name");
//     userName.innerText = user.name;

//     const userDate = document.createElement("h3");
//     userDate.classList.add("user__date");
//     userDate.innerText = user.timestampe;

//     const userComment = document.createElement("h3");
//     userComment.classList.add("user__comment");
//     userComment.innerText = user.comment;

//     userEL.appendChild(userAvatar);
//     userEL.appendChild(userInfo);

//     userInfo.appendChild(userNameDate);
//     userInfo.appendChild(userComment);

//     userNameDate.appendChild(userName);
//     userNameDate.appendChild(userDate);

//     usersEL.appendChild(userEL);
//     });
// }

// const formEL = document.querySelector(".comment");

// formEL.addEventListener("submit", async function(event) {
//     event.preventDefault();
//     console.log(event.target.comment.value);
//     const response = await bandSiteApi.postComments({
//       name: event.target.name.value ,
//       comment: event.target.comment.value
//       });
  
//     getComments();
  
//     formEL.reset();
//   });
  
//   getComments();


