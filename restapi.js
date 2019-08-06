//retreiving info from an API(database) 
var rootdiv = document.getElementById('root');
var container = document.createElement('div');

var logo = document.createElement('img');
logo.src = 'studio gibli.jpg';
logo.style.height = '30rem';
logo.style.width = '60rem';
logo.style.marginLeft = '11.5rem';
logo.style.display = 'block';
rootdiv.appendChild(container);
container.appendChild(logo);

//built in class 
var request = new XMLHttpRequest(); 

//ansynchronist, make a request and retreive it then stop the code (only when it is true), when it is false this works but does not stop retreiving
request.open('GET', 'https://ghibliapi.herokuapp.com/films',true);

request.onload = function() {
    var data = JSON.parse(this.response);
    if(request.status >= 200 && request.status < 400) {
        data.forEach(film => {
            var card = document.createElement('div');
            var heading1 = document.createElement('h1');
            heading1.style.color = 'purple';
            heading1.textContent = film.title; 

            var para = document.createElement('p');
            para.style.textAlign = 'center';
            para.style.color = 'gray';
            para.style.padding = '3rem';
            film.description = film.description.substring(0,300);
            para.textContent = `${film.description}`;

            container.appendChild(card);
            card.appendChild(heading1);
            card.appendChild(para);

            var para2 = document.createElement('p');
            para2.textContent = film.director;
            para2.style.color = 'gray';
            para2.style.textAlign = 'center';
            card.appendChild(para2);
        });
    } else {
        alert('nah');
    }
}

request.send();

