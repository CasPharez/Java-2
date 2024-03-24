function checkDataType() {
    var data = document.getElementById('dataInput').value.trim();
    var resultElement = document.getElementById('result');
  
    if (data === '') {
      resultElement.textContent = 'Please enter data.';
      return;
    }
  
    var dataType;
    if (!isNaN(data)) {
      dataType = 'Number';
    } else if (!isNaN(parseFloat(data))) {
      dataType = 'String (Number)';
    } else {
      dataType = 'String';
    }
  
    resultElement.textContent = 'Data type: ' + dataType;
  }
  