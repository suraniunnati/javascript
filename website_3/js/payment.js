document.addEventListener("DOMContentLoaded", () => {
  const paymentForm = document.getElementById("payment-form");
  const paymentDetails = document.getElementById("payment-details");

  // Payment method selection
  const paymentOptions = document.querySelectorAll('input[name="payment"]');

  // Update payment details based on selection
  paymentOptions.forEach((option) => {
    option.addEventListener("change", () => {
      const selectedPayment = document.querySelector(
        'input[name="payment"]:checked'
      ).value;

      let detailsHTML = ""; // Dynamic HTML for payment details

      switch (selectedPayment) {
        case "Cash on Delivery":
          detailsHTML = `
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p class="text-gray-600">You will pay in cash upon receiving your order. Please ensure exact change if possible.</p>
            </div>
          `;
          break;

        case "Online Payment":
          detailsHTML = `
            <div class="space-y-4">
              <div>
                <label class="block text-gray-600">Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" class="w-full p-2 border rounded-lg">
              </div>
              <div class="flex space-x-4">
                <div>
                  <label class="block text-gray-600">Expiry Date</label>
                  <input type="text" placeholder="MM/YY" class="w-full p-2 border rounded-lg">
                </div>
                <div>
                  <label class="block text-gray-600">CVV</label>
                  <input type="text" placeholder="123" class="w-full p-2 border rounded-lg">
                </div>
              </div>
            </div>
          `;
          break;

        case "UPI":
          detailsHTML = `
            <div>
              <label class="block text-gray-600">UPI ID</label>
              <input type="text" placeholder="example@upi" class="w-full p-2 border rounded-lg">
            </div>
          `;
          break;

        case "Debit/Credit Card":
          detailsHTML = `
            <div class="space-y-4">
              <div>
                <label class="block text-gray-600">Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" class="w-full p-2 border rounded-lg">
              </div>
              <div class="flex space-x-4">
                <div>
                  <label class="block text-gray-600">Expiry Date</label>
                  <input type="text" placeholder="MM/YY" class="w-full p-2 border rounded-lg">
                </div>
                <div>
                  <label class="block text-gray-600">CVV</label>
                  <input type="text" placeholder="123" class="w-full p-2 border rounded-lg">
                </div>
              </div>
            </div>
          `;
          break;

        default:
          detailsHTML = "";
          break;
      }

      paymentDetails.innerHTML = detailsHTML;
      paymentDetails.classList.remove("hidden"); // Show the details section
    });
  });

  // Handle form submission
  paymentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedPayment = document.querySelector(
      'input[name="payment"]:checked'
    ).value;

    alert(`Payment method selected: ${selectedPayment}`);
  });
});
