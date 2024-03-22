
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.getElementById('mainTable').getElementsByTagName('tbody')[0];
  const prevPageButton = document.getElementById('prevPage');
  const nextPageButton = document.getElementById('nextPage');
  const pageCounter = document.getElementById('pageCounter');

  let currentPage = 0;
  const rowsPerPage = 15;
  const totalRows = 100; // Total dummy rows to demonstrate functionality
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  function populateTable(page) {
    tableBody.innerHTML = ''; // Clear table body
    
    // Generate table rows with dummy data
    for (let i = page * rowsPerPage; i < (page + 1) * rowsPerPage && i < totalRows; i++) {
      const row = tableBody.insertRow();
      for (let j = 0; j < 15; j++) { // Assuming 15 columns
        const cell = row.insertCell();
        cell.textContent = `Row ${i + 1} Column ${j + 1}`;
        cell.style.cursor = 'pointer';
      }
      
      row.onmouseover = () => row.style.backgroundColor = '#fffae6'; // Hover effect
      row.onmouseout = () => row.style.backgroundColor = ''; // Remove hover effect
      row.onclick = () => { // Click to display row details
        const details = Array.from(row.cells).slice(0, 7).map(cell => cell.textContent).join(', ');
        document.getElementById('selectedRowDetails').textContent = `Selected: ${details}`;
      };
    }
    
    // Update the page counter
    pageCounter.textContent = `Page ${page + 1} of ${totalPages}`;
  }

  prevPageButton.onclick = () => {
    if (currentPage > 0) {
      currentPage--;
      populateTable(currentPage);
    }
  };

  nextPageButton.onclick = () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      populateTable(currentPage);
    }
  };

  populateTable(currentPage); // Initial population of the table
});
