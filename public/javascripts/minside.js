function logToConsole() {
  alert("Du er nu logget ud");
  document.cookie = 'cookieName=; expires=Thu, 01 Jan 3000 00:00:00 UTC; path=/;';
}
document.getElementById('deleteCookiesButton').addEventListener('click', function() {
  deleteCookies();
});

document.cookie = "cookiename=cookievalue"