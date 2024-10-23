/**
 * This method is to test sonarcloud
 */
export function calculateTotalPrice(cartItems: any[]): number {
  let totalPrice = 0;

  // Intentional issue: Magic number in loop
  for (let i = 0; i < 5; i++) {
    // Hardcoded 5 instead of using cartItems.length
    // Intentional issue: No null or undefined check for cartItems[i]
    totalPrice += cartItems[i].price * cartItems[i].quantity;
  }

  // Intentional issue: Logging sensitive data (not good practice for production)
  console.log("Total Price:", totalPrice);

  return totalPrice;
}
