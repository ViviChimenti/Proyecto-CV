document.addEventListener('DOMContentLoaded', () => {
    datos();
    
    
    
});

function datos() {
   
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
          const user = data.results[0];
          const userInfo = document.getElementById('user-info');
          userInfo.innerHTML = 
          `
          
          <div id="imagen"><img src="${user.picture.large}" alt="User picture"></div>
          <div id="info">
          <div><p><br> ${user.name.first} ${user.name.last}<br>Desarrollador<p></div>
          <div><p>Email:<br> ${user.email}<p></div>
          <div><p>Teléfono:<br> ${user.email}<p></div>
          <div><p>Fecha de nacimiento:<br> ${user.dob.date}<p></div></div>
          
        `;
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
 
}


