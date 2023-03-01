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
          <div id="imagen_div" ><img id="foto" src="${user.picture.large}" alt="User picture" ></div>

          <div id="info_div">
            <div id="texto">
                <div>
                    <p><span style="color: #182153; font-size: 30px; font-weight: bold;"> ${user.name.first} ${user.name.last} </span><br /><span style="color: #182153;font-size: 20px; font-weight: bold;">Desarrollador</span><p>
                </div>
                <div>
                    <p><span style="color: #182153;font-weight: bold;">Email</span><br> ${user.email}<p>
                </div>
                <div>
                    <p><span style="color: #182153;font-weight: bold;">Teléfono:</span><br> ${user.cell}<p>
                </div>
                <div>
                    <p><span style="color: #182153;font-weight: bold;">Dirección:</span><br> ${user.location.street.name} ${user.location.street.number}<p>
                </div>
                <div>
                    <p><span style="color: #182153;font-weight: bold;">Edad:</span><br> ${user.dob.age}<p>
                </div>
            </div>   
          </div>
        `;
         document.getElementById("nombre_h1").innerText= user.name.first +"  "+user.name.last;
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
 
}


