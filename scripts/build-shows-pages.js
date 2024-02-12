
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

   
    const ul = document.createElement('ul');

   
    infoArray.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `Name: ${item.date}, Age: ${item.venue}, City: ${item.location}`;
      ul.appendChild(li);
    });

    
    container.appendChild(ul);
  }

  displayArray();

