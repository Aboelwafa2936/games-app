
import { gameDetails } from "./details.js";
const details = new gameDetails();
export class UI {
    displayGames(response){ 
        let gamesContainer = ``;
        for(let i = 0; i < response.length; i++){
            gamesContainer +=`                     <div class="col-lg-3 col-md-6 gy-3">
                                <div data-id="${response[i].id}" class="card h-100">
                                    <img src="${response[i].thumbnail}" class="card-img-top" alt="..."> 
                                    <div class="card-body p-2">
                                        <div class="d-flex justify-content-between mb-3">
                                            <span class="title" title="${response[i].title}">${response[i].title.split(" ").slice(0, 4).join(" ")}</span> 
                                            <span class="badge badge-primary">Free</span>
                                        </div>
                                        <p class="text-center description">${response[i]["short_description"].slice(0, 60)}</p> 
                                    </div>
                                    <div class="card-footer d-flex justify-content-between align-items-center">
                                            <span class="badge badge-bg me-2">${response[i].genre}</span> 
                                            <span class="badge badge-bg">${response[i].platform}</span> 
                                    </div>
                                </div>
                            </div>`;
                        }
                    document.getElementById('games').innerHTML = gamesContainer;
                    details.getId();
    }
}