let owner = document.getElementById('username').value;
const body = document.querySelector('body');


async function getApi() {
    try {
        
        owner = document.getElementById('username').value;
        
       
        const url = `https://api.github.com/users/${owner}/repos`;
        const response = await fetch(url);
        
        const data = await response.json();
       
        console.log(data);
      data.forEach(element => {
        const container = document.createElement('div');
        container.style.marginLeft = '50px';
        container.style.marginRight = '50px';
        container.style.marginTop = '20px';
        container.style.marginBottom = '20px';
        container.style,padding = '20px'

        container.style.border = '1px solid black';
        body.appendChild(container);
            let div = document.createElement('div');
            div.innerHTML = `<h2 style="font-size : 25px; color : blue;  margin-bottom: 10px";>${element.name}</h2>
            <span style=" font-size : 25px";>${element.created_at}</span>`;
          
           container.appendChild(div);
          
            
            div.style.marginLeft = '10px';
            div.style.marginRight = '20px';
            div.style.marginTop = '10px';
            div.style.display = 'flex';
            div.style.justifyContent = 'space-between';
            const description = document.createElement('p');
            description.innerText = element.description;
            description.style.fontSize = '20px';
            description.style.paddingLeft = '30px';
            
            container.appendChild(description);
           


        }
        );
      } catch (error) {
        console.error('Error fetching data:', error);
    }
}




const submit = document.getElementById('submit');
submit.addEventListener('click', getApi);

