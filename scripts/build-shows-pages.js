
// Sample array of information
const shows = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA"

  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA"

  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA"
  }
];

// const showEL = document.querySelectorAll(".show");

//showAll(shows);

//function showAll(shows) {
  // showEL.innerHTML = "";

  // for (let i = 0; i < shows.length; i++) {
  //   const show = shows[i];

  //   console.log(displayShow(show));
  // }
//}

for(let i = 0; i < shows.length; i++){
  const show = shows[i];

  displayShow(show);
}

/*<article "show">

  <div class = "show__date">
  <h3>DATE</h3>
  <h2></h2>
  </div>

  <div class = "show__venue">
  <h3>DATE</h3>
  <h2></h2>
  </div>

  <div class = "lshow__ocation">
  <h3>DATE</h3>
  <h2></h2>
  </div> 

</article>*/

function displayShow(shows) {
  const showsEL = document.createElement("section");
  showsEL.classList.add("show");

  // <show__date>
  const showsDate = document.createElement("div");
  showsDate.classList.add("show__date");

  const showsTitle = document.createElement("h3");
  showsTitle.classList.add("show__date-title");
  showsTitle.innerText = "DATE";

  const showsSubTitle = document.createElement("h2");
  showsSubTitle.classList.add("show__date-subtitle");
  showsSubTitle.innerText = shows.date;

  //show__venue
  const showsVenue = document.createElement("div");
  showsVenue.classList.add("show__venue");

  const showsVenueTitle = document.createElement("h3");
  showsVenueTitle.classList.add("show__venue-title");
  showsVenueTitle.innerText = "VENUE";

  const showsVenueSubTitle = document.createElement("h2");
  showsVenueSubTitle.classList.add("show__venue-subtitle");
  showsVenueSubTitle.innerText = shows.venue;

  //show__location
  const showsLocation = document.createElement("div");
  showsLocation.classList.add("show__ocation");

  const showsLocationTitle = document.createElement("h3");
  showsLocationTitle.classList.add("show__ocation-title");
  showsLocationTitle.innerText = "LOCATION";

  const showsLocationSubTitle = document.createElement("h2");
  showsLocationSubTitle.classList.add("show__date-subtitle");
  showsLocationSubTitle.innerText = shows.location;

  showsEL.appendChild(showsDate);
  showsEL.appendChild(showsVenue);
  showsEL.appendChild(showsLocation);

  showsDate.appendChild(showsTitle);
  showsDate.appendChild(showsSubTitle);

  showsVenue.appendChild(showsVenueTitle);
  showsVenue.appendChild(showsVenueSubTitle);

  showsLocation.appendChild(showsLocationTitle);
  showsLocation.appendChild(showsLocationSubTitle);

  document.querySelector("#showTime").appendChild(showsEL);
}
