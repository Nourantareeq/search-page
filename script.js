document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');
  
    searchButton.addEventListener('click', function() {
      const searchTerm = searchInput.value.trim();
  
      if (searchTerm !== '') {
        // You can implement your search functionality here
        // For demo purposes, let's just display the search term
        searchResults.innerHTML = `<p>Search results for: <strong>${searchTerm}</strong></p>`;
      } else {
        searchResults.innerHTML = '<p>Please enter a search term</p>';
      }
    });
  });
  