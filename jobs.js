fetch("data.json")
.then (function(response){
    return response.json();
})

.then(function(jobs){
    let placeholder = document.querySelector("div#data-output");
    let out ="";
    let counter = 0;
    for(let job of jobs){
        out += `
        <div class="grid-item">
        <div class="card">
        <div class="card-body">
            <h5 class="card-title m-0 pb-1">${job.jobName}</h5>
            <h6 class="card-subtitle  text-muted pb-3">${job.company}  </h6>
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
                        <h5 class="modal-title categorylabels fw-bold">${job.jobName}</h5><br>
                            <div class="mx-5">
                                <span class="badge bg-primary pl-5">${job.workType}</span>
                            </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                        <div class="row">
                            <div class="col-md-4">

                            <p>${job.jobDescription}</p>
                          <p class="text-justify ">
                          <h4><strong> ${job.company}</strong></h4>
                          <h6><strong>Location/Office:</strong> ${job.place}</h6>
                          <h6><strong>Posted on:</strong> ${job.datePosted}</h6>
                            <h6><strong>Salary:</strong> PHP ${job.salary}</h6><br>
                            <h5><strong>Job Highlights</strong></h5>
                            100k Sign On Bonus <br>
                            Work From Home <br>
                            Impactful Work <br>
                            </p>
                            </div>


                            <div class="col-md-8 ">

                            <h4 class="mb-3 ]">Company Overview: </h4>

                            Theoria Medical is a comprehensive medical group and technology company dedicated to serving patients across the care continuum with an emphasis on post-acute care and primary care. Theoria serves facilities across the United States with a multitude of services to improve the quality of care delivered, refine facility processes, and enhance critical relationships. We offer a broad scope of services including multispecialty physician services, telemedicine, remote patient monitoring, and more. We currently operate primary care clinics and provide medical services to skilled nursing facilities in numerous states across the nation. 
                            
                            As a leading edge, innovative, and quality driven physician group, we continue to expand nationally. In pursuit of this, we continue to seek talented individuals to join our amazing team and care for our population. We wish to extend a warm welcome to all candidates interested in making a difference in healthcare delivery by joining the Theoria team
                            
                            Theoria’s Technology Department is seeking individuals to join its team as a Full-Stack Developer, to build new features, both on the admin side and end-user side of the web application. This individual will be interacting with several third-party APIs that we need to integrate into our app and should, therefore, be comfortable reading through documentation and be able to implement them. This individual is expected to know how to write code that is secure, optimal, and scalable. 
                            
                            <h4>Shift Structure: </h4>
                            
                            US EST, Monday-Friday 9am-5pm EST 
                            Remote
                            Employment Type: 
                            
                            Full-Time
                            Responsibilities: 
                            
                            The responsibilities will include but is not limited to:
                            <p>
                            Leading a project when needed 
                            Making smart technical decisions and recognize trade-offs for all such decisions 
                            Recognizing code smells and write code that’s secure and scalable 
                            Understanding business requirements and translate them into workable technical requirements </p>
                            
                            <h4>Requirements and Qualifications:</h4>
                            <p>
                            Experience in developing apps with NodeJS and NextJS/ReactJS
                            Experience in successfully launching applications in production 
                            Experience with interacting with external APIs 
                            Comfortable with English communication 
                            Willing to explore and learn new technologies </p>
                            
                            <h5>Required skill: JavaScript</h5>
                            Great skills to have: NextJS/React, ElectronJS, TypeScript, Apollo GraphQL, MongoDB, WebRTC, CI/CD, Kubernetes, Docker 
                            >3 years of experience preferred 
                            We are looking for entry, junior, mid level and senior roles to be filled. All are welcome to apply 
                            Must be willing to take a live coding test in https://codesandbox.io during technical interview/exam
                            Compensation and Benefits: 
                            
                            P35,000 - P200,000 per month, Salary is commensurate with experience
                            Road to promotions and management opportunities
                            13th month pay
                            Paid time off
                            Additional Information
                            Career Level
                            1-4 Years Experienced Employee
                            Years of Experience
                            3 years
                            Job Type
                            Full-Time
                            Job Specializations
                            Computer/Information Technology, IT-Software </p>

                            </div>
                        </div>
              


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary">Apply Now</button>
                            <button type="button" class="btn btn-secondary">
                            <i class="fas fa-thumbs-up"></i>
                            Save</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                    </div>
                </div>
        </div>  
    </div>
    </div>
        `
        counter++;
        ;
    }
        placeholder.innerHTML = out;

        var countDisplay = document.getElementById("count");
        countDisplay.innerText = counter;
});

