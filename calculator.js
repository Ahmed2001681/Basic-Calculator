function deleteLastCharacter() {
      var display = document.getElementById('display');
      display.value = display.value.slice(0, -1);
    }

    function calculate() {
      var display = document.getElementById('display');
      try {
        display.value = eval(display.value);
      } catch (err) {
        display.value = 'Error';
      }
    }