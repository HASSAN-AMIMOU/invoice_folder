// This script is used to generate an invoice and save it as a PDF using jsPDF library


//alg of company infos
const companyName = localStorage.getItem('companyName');
const companyAddress = localStorage.getItem('companyAddress');
const companyPhone = localStorage.getItem('companyPhone');  
const companyEmail = localStorage.getItem('companyEmail');  

document.getElementById('companyNamePlace').textContent = companyName ;
document.getElementById('companyAddressPlace').textContent = companyAddress ;
document.getElementById('companyPhonePlace').textContent = companyPhone ;
document.getElementById('companyEmailPlace').textContent = companyEmail ;

//alg of client infos
const clientName = localStorage.getItem('clientName');  
const clientAddress = localStorage.getItem('clientAddress');
const clientPhone = localStorage.getItem('clientPhone');
const clientEmail = localStorage.getItem('clientEmail');

document.getElementById('clientNamePlace').textContent = clientName ;
document.getElementById('clientAddressPlace').textContent = clientAddress ;
document.getElementById('clientPhonePlace').textContent = clientPhone ;
document.getElementById('clientEmailPlace').textContent = clientEmail ;




//alg of invoice number
let number = localStorage.getItem('invoiceNumber');
const isNewInvoice = localStorage.getItem('newInvoice') === 'true';
if (isNewInvoice || !number) {
    number = Math.floor(Math.random() * 1000000);
    localStorage.setItem('invoiceNumber', number);
    localStorage.setItem('newInvoice', 'false'); // Reset flag
    
}
document.getElementById('invoiceNumberPlace').textContent = 'N ° ' + number;

//alg to generate date
document.getElementById('date').textContent = new Date().toLocaleDateString();

//alg of invoice items
const invoiceItems = JSON.parse(localStorage.getItem('invoiceItems')) || [];
const tbody = document.getElementById('invoiceTableBody');

let total = 0;

// 🌟 Currency formatter
const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD', // Or your local currency like MAD, USD, GBP...
  minimumFractionDigits: 2
});

// Create table rows dynamically
invoiceItems.forEach(item => {
  const row = document.createElement('tr');

  const itemCell = document.createElement('td');
  itemCell.textContent = item.name;

  const quantityCell = document.createElement('td');
  quantityCell.textContent = item.quantity;

  const unitPriceCell = document.createElement('td');
  unitPriceCell.textContent = currencyFormatter.format(item.price);

  const totalPrice = item.quantity * item.price;
  const totalPriceCell = document.createElement('td');
  totalPriceCell.textContent = currencyFormatter.format(totalPrice);

  total += totalPrice; // Add to total

  row.appendChild(itemCell);
  row.appendChild(quantityCell);
  row.appendChild(unitPriceCell);
  row.appendChild(totalPriceCell);
  tbody.appendChild(row);
});

// Calculate TVA
const tvaPercent = 20;
const tvaValue = (total * tvaPercent) / 100;

// Update TVA display
document.getElementById('tvaPercentagePlace').textContent = `${tvaPercent}%`;
document.getElementById('tvaValuePlace').textContent = currencyFormatter.format(tvaValue);

// ✨ Now ADD TVA to Total
const finalTotal = total + tvaValue;

// ✅ Update total price at the bottom
document.getElementById('totalePricePlace').textContent = currencyFormatter.format(finalTotal);

// Clear localStorage after generating invoice
localStorage.removeItem('invoiceItems');
localStorage.removeItem('invoiceNumber');
