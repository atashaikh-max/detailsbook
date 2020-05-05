const searchInput = document.getElementById('searchInput').value;
const searchForm = document.querySelector('form');
const details = document.getElementById('details');
const gender = document.getElementById('gender').value;
const scrollTopBtn = document.getElementById('scrollTopBtn');
let output = '';
const body = document.querySelector('body');
let url = 'https://randomuser.me/api/?results=10';

    var loadUser = () => {    
        fetch(url)
        .then((response) => {
            response.json()
        .then((peoples) => {
             const randomPeople = peoples.results;
             for(let i=0; i<randomPeople.length;i++){
                if((gender === 'male' && randomPeople[i].gender === 'female') || (gender === 'female' && randomPeople[i].gender === 'male')){
                    continue;
                }
                        output += `<div class="col col-xs-12 people form-control">
                        <img src="${randomPeople[i].picture.large}">
                        <h3>${randomPeople[i].name.first+' '+randomPeople[i].name.last}</h3>
                        <p>DOB: ${randomPeople[i].dob.date.slice(0,10)}</p>
                        <p>Age: ${randomPeople[i].dob.age}</p>
                        <p>Mobile: ${randomPeople[i].phone}</p>
                        <p>Country: ${randomPeople[i].location.country}</p>
                        <button class="btn btn-primary btn-block"><i class="fa fa-heart"></i> Like</button>
                        </div>`;  
                }
                details.innerHTML = output;
            })
        });
    }

    window.addEventListener('load', loadUser);

    scrollTopBtn.addEventListener('click',topFunction);
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
    }

// When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
