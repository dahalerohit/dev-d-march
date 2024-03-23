document.addEventListener('DOMContentLoaded', function() {
    const decrementBtn = document.getElementById('decrement');
    const incrementBtn = document.getElementById('increment');
    const clearBtn = document.getElementById('clear');
    const middleDiv = document.getElementById('middle');
    const errorMessage = document.getElementById('error-message');

    let count = 0;

    function updateCountDisplay() {
        middleDiv.innerHTML = count;
        if (count <= 0) {
            decrementBtn.disabled = true;
            errorMessage.style.display = 'block';
        } else {
            decrementBtn.disabled = false;
            errorMessage.style.display = 'none';
        }

        if (count === 0) {
            clearBtn.style.display = 'none';
        } else {
            clearBtn.style.display = 'block';
        }
    }

    incrementBtn.addEventListener('click', function() {
        count++;
        updateCountDisplay();
    });

    decrementBtn.addEventListener('click', function() {
        if (count > 0) {
            count--;
            updateCountDisplay();
        }
    });

    clearBtn.addEventListener('click', function() {
        count = 0;
        updateCountDisplay();
    });

    updateCountDisplay();
});
