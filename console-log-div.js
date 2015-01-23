(function initConsoleLogDiv() {

  if (console.log.toDiv) {
    return;
  }

  function toString(x) {
    return typeof x === 'string' ? x : JSON.stringify(x);
  }

  var log = console.log.bind(console);
  var error = console.error.bind(console);

  var logTo = (function createLogDiv() {
    var div = document.createElement('div');
    div.classList.add('console-log-div');
    div.style.width = '100%';
    div.style.minHeight = '200px';
    div.style.fontFamily = 'monospace';
    div.style.marginTop = '20px';
    document.body.appendChild(div);
    return div;
  }());

  function printToDiv() {
    var msg = Array.prototype.slice.call(arguments, 0)
      .map(toString)
      .join(' ');
    var text = logTo.innerText;
    logTo.innerText = text + msg + '\n';
  }

  function logWithCopy() {
    log.apply(null, arguments);
    printToDiv.apply(null, arguments);
  }

  console.log = logWithCopy;
  console.log.toDiv = true;

  console.error = function errorWithCopy() {
    error.apply(null, arguments);
    var args = Array.prototype.slice.call(arguments, 0);
    args.unshift('ERROR:');
    printToDiv.apply(null, args);
  };

}());
