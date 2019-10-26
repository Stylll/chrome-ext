const buttonDiv = document.getElementById('buttonDiv');

const colors = ['#62AB37', '#AA4465', '#7EB2DD', '#271F30'];

function constructOptions(colorsList) {
  for (let color of colorsList) {
    let button = document.createElement('button');
    button.style.backgroundColor = color;
    button.addEventListener('click', function() {
      chrome.storage.sync.set({ color: color }, function() {
        console.log('color set is: ' + color);
      })
    });

    buttonDiv.appendChild(button);
  }
}

constructOptions(colors);
