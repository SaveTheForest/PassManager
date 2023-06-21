export function generateRandomPassword(): string {
  const specialCharacters = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  const numbers = "0123456789";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";

  let password = "";

  password += uppercaseLetters.charAt(
    Math.floor(Math.random() * uppercaseLetters.length)
  ); // Add an uppercase letter
  password += lowercaseLetters.charAt(
    Math.floor(Math.random() * lowercaseLetters.length)
  ); // Add a lowercase letter
  password += numbers.charAt(Math.floor(Math.random() * numbers.length)); // Add a number
  password += specialCharacters.charAt(
    Math.floor(Math.random() * specialCharacters.length)
  ); // Add a special character

  const remainingCharacters =
    specialCharacters + numbers + uppercaseLetters + lowercaseLetters;

  for (let i = password.length; i < 8; i++) {
    password += remainingCharacters.charAt(
      Math.floor(Math.random() * remainingCharacters.length)
    );
  }

  return password;
}

// Example usage:
const randomPassword = generateRandomPassword();
console.log(randomPassword);
