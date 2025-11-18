document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const dish = document.getElementById('dish').value;
    const quantity = document.getElementById('quantity').value;

    const confirmation = document.getElementById('confirmation');
    confirmation.innerHTML = `<p>እናመሰግናለን, ${name}! የርሶን ትእዛዝ ${quantity} ${dish} ተቀብለናል.</p>`;
});
