document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('text-input').value;

    if (!input) {
        alert('Please input a value');
        return;
    }

    // Remove all non-alphanumeric characters and convert to lowercase
    const cleaned = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Reverse the cleaned string
    const reversed = cleaned.split('').reverse().join('');

    // Check if palindrome
    const isPalindrome = cleaned === reversed;

    const result = document.getElementById('result');
    if (isPalindrome) {
        result.textContent = `${input} is a palindrome.`;
    } else {
        result.textContent = `${input} is not a palindrome.`;
    }
});
