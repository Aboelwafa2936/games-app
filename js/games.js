import { UI } from "./ui.js";

export class gameApp{
    constructor(){
        this.apiKey = 'e0667085d0msh8a11cb9241c8490p12c6b1jsnbcae5b2369c8';
        this.apiHost = 'free-to-play-games-database.p.rapidapi.com';
        this.defaultCategory = 'mmorpg';
        this.ui = new UI();
    }
    // function to get games api
    async getApi(category){
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': this.apiKey,
                'x-rapidapi-host': this.apiHost
            }
        };
        const url =`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const request = await fetch(url, options);
        const response = await request.json();
        this.ui.displayGames(response);
    }
    // function to get games
    getGames(){
        const links = document.querySelectorAll('.nav-link')
        for (let i = 0; i < links.length; i++) {
            const element = links[i];
            element.addEventListener('click',()=>{
                this.getApi(`${element.id}`);
                links.forEach(link => link.classList.remove('active'));
                // Add active class to the clicked link
                element.classList.add('active');
                document.querySelector('.loader').style.display = 'block';
                setTimeout(()=>{
                    document.getElementById('home').style.display = 'block';
                    document.querySelector('.loader').style.display = 'none';
                }, 1000)
            })
        }
    }
    initialize(){
        // Call getApi when the document is fully loaded
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('home').style.display = 'none';
            setTimeout(() => {
                document.getElementById('home').style.display = 'block';
                document.querySelector('.loader').style.display = 'none';
            }, 1000);    
            this.getApi(this.defaultCategory); // Replace with the default category you want to load initially
            this.getGames();
        });
    }
}