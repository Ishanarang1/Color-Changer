// Select elements
const colorPicker = document.getElementById('colorPicker');
const applyColorButton = document.getElementById('applyColor');

// Add event listener to button
applyColorButton.addEventListener('click', () => {
  const selectedColor = colorPicker.value;
  document.body.style.backgroundColor = selectedColor;
});
