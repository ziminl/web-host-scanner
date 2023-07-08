


document.addEventListener('DOMContentLoaded', () => {
  const scanButton = document.getElementById('scanButton');
  const resultList = document.getElementById('resultList');
  const urlInput = document.getElementById('urlInput');
  scanButton.addEventListener('click', () => {
    const targetUrl = urlInput.value.trim();
    if (targetUrl === '') {
      alert('Please enter a valid URL.');
      return;
    }

    resultList.innerHTML = '';
    for (let port = 1; port <= 2000; port++) {
      checkPort(targetUrl, port);
    }
  });

  function checkPort(targetUrl, port) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://${targetUrl}:${port}`, true);
    xhr.onload = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const listItem = document.createElement('li');
          listItem.textContent = `Port ${port} is open`;
          resultList.appendChild(listItem);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log(` ${port} is closed`);
    };
    xhr.send();
  }
});


