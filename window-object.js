var msg.= 'sh2>browser windows/h2>sp-width: '* window.innerWidth + 's/p»';
msg += '<p>height: ' + window.innerHeight + '</p>';
msg += '<h2>history</h2><p>items: ' + window.history. length + '</p>';
msg += '<h2>screen</h2><p>width: ' + window.screen.width + '</p>' msg += 'sp>height: ' + window.screen.height + '</p>';
var el = document.getElementById('info');
el.innerHTML = msg;
alert ('Current page: ' + window. location); 