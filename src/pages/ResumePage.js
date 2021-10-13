import React from 'react';
import classes from './ResumePage.module.scss';
import image from '../assets/images/priti.jpg';
import cvLink from '../assets/docs/CV1.pdf'

const ResumePage = (props) => {
    document.title = 'Priti Bhunia | Resume';

    return (
        <div className={`${classes.ResumePage}`} id="ResumePage">
            <div className="row container">
                <div className={`${classes.header} col-12 col-lg-3`}>
                    <h1 className={classes.title}>Priti Bhunia</h1>
                    <img className={classes.image} src={image} alt="" />
                    <a className={classes.email} href="mailto:pritibhunia@gmail.com">pritibhunia@gmail.com</a>
                    <div className={classes.githubcv}>
                        <a href={cvLink} target="new">CV</a>
                        <a href="https://github.com/pritibhunia" target="new"> <i className="bi bi-github"></i> </a>
                        <a href="https://www.linkedin.com/in/pritibhunia" target="new"><i class="bi bi-linkedin"></i></a>
                        <a href="https://www.facebook.com/bhuniapriti" target="new"><i class="bi bi-facebook"></i></a>
                        <a href="https://twitter.com/pritibhunia" target="new"><i class="bi bi-twitter"></i></a>
                        <a href="https://pritibhunia.medium.com" target="new"><i class="bi bi-globe"></i></a>
                    </div>
                </div>
                <div className={`${classes.body} col-12 col-lg-9`}>
                    <h2 className="greeting" id="hello">Hello!!!</h2>
                    <p><em>I am a Software Engineer working with Siemens Healthineers as a Senior Engineer - Design & Development based in Bangalore, India</em></p>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="mailto:pritibhunia@gmail.com">Email</a></li>
                        <li class="breadcrumb-item"><a href="https://pritibhunia.medium.com/">Website</a></li>
                        <li class="breadcrumb-item"><a href="https://www.linkedin.com/in/pritibhunia/">LinkedIn</a></li>
                        <li class="breadcrumb-item"><a href="https://github.com/pritibhunia/">GitHub</a></li>
                        <li class="breadcrumb-item"><a href="https://twitter.com/pritibhunia/">Twitter</a></li>
                    </ol>
                    <h2 id="work-experience">Work Experience</h2>
                    <p>
                        <strong>Senior Engineer - Design & Development</strong> @ <a href="https://www.corporate.siemens-healthineers.com/">Siemens Healthineers</a>
                        <em> (May 2021 - Present)</em>
                    </p>
                    <ul>
                        <li>Enhancing and developing new features for diagnostic imaging based digital healthcare product.</li>
                        <li>Responsible for requirement gathering, successful development and delivery of different components of the product, end-to-end pipeline creation for infrastructure and application deployment, with 90% accuracy.</li>
                        <li>Responsible for several enhancements which includes Edge platform management and installation, GitOps integration, proxy setup, monitoring services integration and creation of new version of the product but not limited to these.</li>
                        <li>Responsible for writing automation test cases using XUnit, BDD, TDD framework, Integration testing and Goss testing.</li>
                        <li><strong><em>Tech Stack: </em></strong> Edge Compuitng, Hybrid Cloud, Azure DevOps, Ansible, C#, .NET 5, PowerShell, YAML, ARM template, Kubernetes.
                            <br />
                            <br />
                        </li>
                    </ul>

                    <p>
                        <strong>DevOps Engineer</strong> @ <a href="https://www.ey.com/en_in/careers/global-delivery-services">EY</a>
                        <em> (Sep 2019 - Apr 2021)</em>
                    </p>

                    <ul>
                        <li>Provisioned easily manageable cloud infrastructures using multiple Azure IaaS and PaaS services for multiple projects in Azure utilizing Infrastructure as Code(IaC) tools like Ansible, Azure DevOps depending on the application requirements.</li>
                        <li>Automated end-to-end containerized applications deployment using CI/CD pipelines on Azure DevOps with 95% efficiency.</li>
                        <li>Automated the new client on-boarding process for the applications which saved around one week time and workforce requirements with 90% accuracy.</li>
                        <li>Designed and implemented Monitoring solutions for the applications</li>
                        <li><strong><em>Tech Stack: </em></strong> Azure, Azure DevOps, PowerShell, YAML, ARM template, Kubernetes, Kusto Query Languange, SQL, Java.
                            <br />
                            <br />
                        </li>
                    </ul>

                    <p>
                        <strong>Cloud Engineer </strong> @
                        <a href="https://www.cognizant.com/"> Cognizant</a>
                        <em> (Jul 2016 - Sep 2019)</em>
                    </p>
                    <ul>
                        <li>Worked with multiple clients from healthcare and insurance domain where my responsibilities were requirement gathering , decision making, automating deployment, infrastructure migration etc.</li>
                        <li>Automated the API configuration flow in Azure API Management, designed the developer portal for customers, designed the monitoring solution.</li>
                        <li>Automated report generation process to revoke the manual effort.</li>
                        <li>Provisioned easily manageable cloud infrastructures in Azure using ARM template single click deployment utilizing various IaaS and PaaS services focusing on high-availability, fault tolerance, disaster recovery and auto-scaling.</li>
                        <li><strong><em>Tech Stack: </em></strong>Azure, PowerShell, ARM template, Kusto Query Languange, SQL, XML, C#.
                            <br />
                            <br />
                        </li>
                    </ul>

                    <h2 id="interests">Interests</h2>
                    <p><strong>Technical</strong></p>
                    <p>I like to learn new technology stack and spend time on doing research on new topics.
                        <br />
                        <br />
                    </p>
                    <p><strong>Personal</strong></p>
                    <p>I like to spend my leisure by reading novels (I can read anything and everything), listening to music or sometimes dancing.</p>
                    <p>I feel alive when I am travelling and exploring the new places, new culture and specially meeting new people.
                        <br />
                        <br />
                    </p>

                    <h2 id="education">Education</h2>
                    <p>
                        <strong>Bachelor of Technology </strong>
                        in Electronics and Communication Engineering
                        <a href="https://www.stcet.org/"> St. Thomas’ College of Engineering & Technology</a>
                        <span> - Kolkata, India (2012 - 2016)</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ResumePage
