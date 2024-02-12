
  // Sample array of information
  const infoArray = [
    {
        date: "Mon Sept 09 2024",
        venue: "Ronald Lane",
      location:"San Francisco, CA"
    
    },
    {
        date: "Tue Sept 17 2024",
        venue: "Pier 3 East",
      location:"San Francisco, CA"
       
    },
    {
       date: "Sat Oct 12 2024",
        venue: "View Lounge",
      location:"San Francisco, CA"
    }
  ];

  function displayArray() {

    const container = document.getElementById('arrayDisplay');

    // Create an unordered list (ul) element
    const ul = document.createElement('ul');

    // Iterate through the array and create list items (li) for each entry
    infoArray.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `Name: ${item.date}, Age: ${item.venue}, City: ${item.location}`;
      ul.appendChild(li);
    });

    // Append the unordered list to the container
    container.appendChild(ul);
  }

  // Call the displayArray function to show the array on the page
  displayArray();

