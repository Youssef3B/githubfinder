let input = document.getElementById('input');
let img = document.getElementById('img');
let githubName = document.getElementById('name_github');
let realName = document.getElementById('real_name');
let btn = document.getElementById('btn');
let work = document.getElementById('work');
let section = document.getElementById('section');
let api = "https://api.github.com/users/";
let api2 = "https://api.github.com/users/Youssef3B/repos"


input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        api = `https://api.github.com/users/${input.value}`;
        api2 = `https://api.github.com/users/${input.value}/repos`;

        async function getUser(){
            const response = await fetch(api)
            const data = await response.json();
            console.log(data);
            const response2 = await fetch(api2)
            const data2 = await response2.json();
          
            console.log(data2);
            section.innerHTML = `
            <div class="left">
             <img id="img" src="${data.avatar_url}" alt="">
             <p id="name_github">${data.login}</p>
             <h4 id="real_name">${data.name}</h4>
             <a href=${data.html_url} target="_blank" id="btn">Voir sur github</a>
            </div>
            <div class="right">
             <p>Public Repos</p>
             ${data2.map(repo => `<div class="blog" id="work">${repo.name}</div>`)}
             </div>
            `
        }
        getUser() 
    }
   
})
