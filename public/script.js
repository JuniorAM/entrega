document.addEventListener('DOMContentLoaded', () => {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#recordsTable tbody');
            data.forEach(record => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${record.code}</td>
                    <td>${record.name}</td>
                    <td>${record.surname}</td>
                    <td>${record.address}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
