let arr = [];

// function calculateSplit() {
//     let totalCost = 0;
//     for (let i = 0; i < arr.length; i++) {
//         totalCost += Number(arr[i].cost);
//     }
//     let personNumber = Number(document.getElementById('personNumber').value);
//     if (personNumber > 0) {
//         let costPerPerson = (totalCost / personNumber).toFixed(2);
//         document.getElementById('totalCost').innerText = 'Total Cost per Person: ₹' + costPerPerson;
//     } else {
//         document.getElementById('totalCost').innerText = 'Please enter a valid number of people!';
//     }
// }

function addItem() {
    let cost = Number(document.getElementById('cost').value);
    let personNumber = Number(document.getElementById('personNumber').value);
    let item = document.getElementById('item').value;
    let splitAmount;

    if (cost > 0 && personNumber > 0 && item !== '') {
        splitAmount = (cost / personNumber).toFixed(2);
        arr.push({ item, cost, personNumber, splitAmount });

        let tableBody = document.querySelector('#item-table tbody');
        let row = document.createElement('tr');

        row.innerHTML = `
            <td>${item}</td>
            <td>₹${cost.toFixed(2)}</td>
            <td>${personNumber}</td>
            <td>₹${splitAmount}</td>
        `;
        tableBody.appendChild(row);

        document.getElementById('item').value = '';
        document.getElementById('cost').value = '';
        document.getElementById('personNumber').value = '';

    } else {
        alert('Please enter valid item details!');
    }
}