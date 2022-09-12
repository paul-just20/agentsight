fetch("data.json")
.then (function(response){
    return response.json();
})

.then(function(jobs){
    let placeholder = document.querySelector("#data-output");
    let out ="";
    for(let job of jobs){
        out += `
        <div class="grid-item">
        <div class="card">
        <div class="card-body">
            <h5 class="card-title m-0 pb-1">${job.jobName}</h5>
            <h6 class="card-subtitle  text-muted pb-3">${job.company}</h6>
            <h6 class="card-subtitle">${job.place}</h6>
            <div class="d-inline m-0 p-0">
                <span class="fa fa-star checked fa-1x"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>  
            </div>
            <p class="card-text">${job.salary}</p>
            <a href="#" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#myModal${job.id}">
                View details</a>
            
                <!-- MODAL TEST-->
                <!-- Modal -->
                <div class="modal fade" id="myModal${job.id}">
                    <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title">${job.jobName}</h5><br>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>${job.jobDescription}</p>
                            <h3>Some text to enable scrolling..</h3>
                            <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    
                            <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary">Apply Now</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                    </div>
                </div>
        </div>  
    </div>
    </div>
        `;
    }
        placeholder.innerHTML = out;
});

