const changeColorBtn = document.getElementById("changeColorBtn");

chrome.storage.sync.get('color', function(data) {
  changeColorBtn.style.backgroundColor = data.color;
  changeColorBtn.setAttribute('value', data.color);
});

changeColorBtn.onclick = function (element) {
  const color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.body.style.backgroundColor = "' + color + '";'}
    );
  });
}
