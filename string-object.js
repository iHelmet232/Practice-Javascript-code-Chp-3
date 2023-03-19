var saying = 'Home sweet home';
var msg = '<h2>lengths/h2><p>' + saying. length + '</p>';
msg += '<h2>uppercase</h2><p>' + saying.toUpperCase() + '</p>'; mSg += '<h2>lowercases/h2><p>' + saying.toLowerCase () + '</p>';
msg += '<h2>character index: 12</h2><p>' + saying.charAt (12) + '</p>';
msg += '«h2>first ee</h2><p>' + saying. indexOf ('ee') + '</p>'; msg += '<h2>last e</h2><p>' + saying.lastIndex0f('e') + '</p>';
msg += '<h2>character index: 8-14</h2><p>' + saying.substring (8, 14) + '</p>';
msg += '<h2>replaces/h2><p>' + saying.replace('me', 'w') + '</p>
var el = document. getElementByld('info");
el.innerHTML = msg;