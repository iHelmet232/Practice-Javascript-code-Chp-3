var today = new Date;
var year = today.getFullYear();
var est = new Date ('Apr 16, 1996 15:45:55';
var difference = today. getTime () - est.getTime ();
difference = (difference 31556900000);

var elMs = document.getElementByld('message');
elMs.textContent = Math. floor (difference) + ' years of online travel advice';