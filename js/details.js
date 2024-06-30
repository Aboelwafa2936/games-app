export class gameDetails{
    // function to get game details
    async getDetails(dataIdValue) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${dataIdValue}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e0667085d0msh8a11cb9241c8490p12c6b1jsnbcae5b2369c8',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    document.querySelector(".loader").style.display = "block";

    try {
        await new Promise((resolve) => {
            setTimeout(resolve, 500);
        });

        const request = await fetch(url, options);
        const detailsResponse = await request.json();
        this.displayDetails(detailsResponse);
    } catch (error) {
        console.error('Error fetching details:', error);
    } finally {
        document.querySelector(".loader").style.display = "none";
        this.closeDetails();
    }
}
    // function to get game id
    getId(){
        const cards = document.querySelectorAll('.card');
        for(let card of cards){
            card.addEventListener('click', ()=>{
                const dataIdValue = card.getAttribute('data-id');
                this.getDetails(dataIdValue);
            })
        } 
    }
    // function to display details section
    displayDetails(detailsResponse){
        const details = document.getElementById('details');
        const home = document.getElementById('home');
        const gameDetail = document.getElementById('gameDetails');
        gameDetail.innerHTML = 
        `                
                    <div class="col-md-4">
                        <img src="${detailsResponse.thumbnail}" class="img-fluid" alt="thumbnail">
                    </div>
                    <div class="col-md-8">
                        <div class="text">
                            <i class="fa-solid fa-close fa-fx2" ></i>
                            <h2>Title: ${detailsResponse.title}</h2>
                            <p>Category: <span class="badge details-badge">${detailsResponse.genre}</span></p>
                            <p>Platform: <span class="badge details-badge">${detailsResponse.platform}</span></p>
                            <p>Status: <span class="badge details-badge">${detailsResponse.status}</span></p>
                            <p>${detailsResponse.description}</p>
                            <a href="${detailsResponse["game_url"]}" target="_blank" class="btn btn-outline-warning">Show Game</a>
                        </div>
                    </div>
        `
        details.classList.remove('d-none');
        home.classList.add('d-none');
        document.querySelector('.loader').style.display = 'none';
    }
    // function to close details section
    async closeDetails(){
        const closeIcon = document.querySelector('.fa-close');
        closeIcon.addEventListener('click', ()=>{
            const details = document.getElementById('details');
            const home = document.getElementById('home');
            // Show loader temporarily
            document.querySelector('.loader').style.display = 'block';
    
            // Wait for a short delay to simulate closing process
            await new Promise(resolve => setTimeout(resolve, 500));
    
            // Close details and display home
            details.classList.add('d-none');
            home.classList.remove('d-none');
            
            // Hide loader after delay (simulated)
            document.querySelector('.loader').style.display = 'none';
        })
    }
}
