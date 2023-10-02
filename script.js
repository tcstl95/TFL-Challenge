document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text-input');
    const changeInput= document.getElementById('change-input');
    const outputText = document.getElementById('output-text');

    
        changeInput.addEventListener("click", function() {
            const input = textInput.value;
            const newText = changeWithVowels(input);
            outputText.textContent = newText;
        });
    
        function changeWithVowels(input) {
            return input.split(/\b/).map(word => {
                return word.length > 1 ? word.replace(/[aeiouAEIOU]/g, '').slice(0, 1) + (word.match(/[aeiouAEIOU]/g) || []).length + word.replace(/[aeiouAEIOU]/g, '').slice(-1) : word;
            }).join('');

        }
    }
);
          