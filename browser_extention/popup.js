


document.addEventListener('DOMContentLoaded', () => {
  const scanButton = document.getElementById('scanButton');
  const resultList = document.getElementById('resultList');
  scanButton.addEventListener('click', () => {
    resultList.innerHTML = '';
    for (let port = 1; port <= 2000; port++) {
      checkPort(port);
    }
  });

  function checkPort(port) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:${port}`, true);
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
      // Port is closed or unreachable
      /console.log(` ${port} is closed`);
    };
    xhr.send();
  }
});


