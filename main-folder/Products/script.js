function saveCompanyInfo() {
  const companyName = document.getElementById('companyName').value;
  localStorage.setItem('companyName', companyName);

  const companyAddress = document.getElementById('companyAddress').value;
  localStorage.setItem('companyAddress', companyAddress);

  const companyPhone = document.getElementById('companyPhone').value;
  localStorage.setItem('companyPhone', companyPhone);

  const companyEmail = document.getElementById('companyEmail').value;
  localStorage.setItem('companyEmail', companyEmail);

  localStorage.setItem('newInvoice', 'true');

    //dont forget windowlocation after you made the invoice
    window.location.href = '/main-folder/Invoice/invoice.html';
}
function saveClientInfo() {
    const clientName = document.getElementById('clientName').value;
    localStorage.setItem('clientName', clientName);
    
    const clientAddress = document.getElementById('clientAddress').value;
    localStorage.setItem('clientAddress', clientAddress);
    
    const clientPhone = document.getElementById('clientPhone').value;
    localStorage.setItem('clientPhone', clientPhone);
    
    const clientEmail = document.getElementById('clientEmail').value;
  localStorage.setItem('clientEmail', clientEmail);
  //dont forget windowlocation after you made the invoice
  window.location.href = '/main-folder/Invoice/invoice.html';
}

const buttons = document.querySelectorAll('.add-product');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    const name = product.getAttribute('data-name');
    const price = parseFloat(product.getAttribute('data-price'));
    const quantity = parseInt(product.querySelector('#quantity').value);

    const item = {
      name,
      quantity,
      price
    };

    const existing = JSON.parse(localStorage.getItem('invoiceItems')) || [];
    existing.push(item);
    localStorage.setItem('invoiceItems', JSON.stringify(existing));

    alert(`${quantity} x ${name} added to invoice.`);
  });
});