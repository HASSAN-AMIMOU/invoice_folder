// Function to calculate the total amount of an invoice
function calculateInvoiceTotal(items, taxRate) {
    let subtotal = 0;

    // Calculate subtotal by summing up item prices
    items.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    // Calculate tax
    const tax = subtotal * taxRate;

    // Calculate total
    const total = subtotal + tax;

    return {
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2)
    };
}

// Example usage
const invoiceItems = [
    { name: "Item 1", price: 10.00, quantity: 2 },
    { name: "Item 2", price: 15.50, quantity: 1 },
    { name: "Item 3", price: 7.25, quantity: 3 }
];

const taxRate = 0.07; // 7% tax
const invoiceTotal = calculateInvoiceTotal(invoiceItems, taxRate);

console.log("Invoice Summary:");
console.log("Subtotal: $" + invoiceTotal.subtotal);
console.log("Tax: $" + invoiceTotal.tax);
console.log("Total: $" + invoiceTotal.total);