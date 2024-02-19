  import BandSiteApi from "./band-site-api.js";
  const bandSiteApi = new BandSiteApi("31d9bc99-8ea4-494d-9bb8-edd3eef3945c");

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
  },
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA"
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA"
  },
  {
    date: "Web Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA"
  }
  
];

let commentEL = document.querySelector("#showTime");

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
  showsLocation.classList.add("show__location");

  const showsLocationTitle = document.createElement("h3");
  showsLocationTitle.classList.add("show__location-title");
  showsLocationTitle.innerText = "LOCATION";

  const showsLocationSubTitle = document.createElement("h2");
  showsLocationSubTitle.classList.add("show__location-subtitle");
  showsLocationSubTitle.innerText = shows.location;

  const button = document.createElement("button");
  button.classList.add("click")
  button.textContent = 'BUY TICKETS';
  document.body.appendChild(button);

  showsEL.appendChild(showsDate);
  showsEL.appendChild(showsVenue);
  showsEL.appendChild(showsLocation);
  showsEL.appendChild(button);

  showsDate.appendChild(showsTitle);
  showsDate.appendChild(showsSubTitle);

  showsVenue.appendChild(showsVenueTitle);
  showsVenue.appendChild(showsVenueSubTitle);

  showsLocation.appendChild(showsLocationTitle);
  showsLocation.appendChild(showsLocationSubTitle);

  commentEL.appendChild(showsEL);
} 
