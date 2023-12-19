function toggleOptions(boxId, box) {
    const optionsDiv = document.getElementById(boxId + 'Options');
    const allBoxes = document.querySelectorAll('.shoe-box');
    const radioIcon = document.getElementById(boxId + 'RadioIcon');
    const radio = document.getElementById(boxId + 'Radio');

    allBoxes.forEach((otherBox) => {
        if (otherBox !== box) {
            otherBox.style.height = 'auto';
            otherBox.classList.remove('expanded');
            const otherOptionsDiv = otherBox.querySelector('.options');
            otherOptionsDiv.style.display = 'none';
            const otherRadioIcon = otherBox.querySelector('.radio-icon');
            otherRadioIcon.classList.remove('selected');
        }
    });

    optionsDiv.style.display = optionsDiv.style.display === 'none' ? 'block' : 'none';
    box.style.height = optionsDiv.style.display === 'none' ? 'auto' : 'auto';
    box.classList.toggle('expanded');
    radio.checked = true;
    radioIcon.classList.toggle('selected');
}
