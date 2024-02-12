const users = [
    {
        name:"Victor Pinto",
        comment:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
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
    
}