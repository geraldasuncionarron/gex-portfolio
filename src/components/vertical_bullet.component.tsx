import Icon from "./icon.component";

function VerticalBullet () {
    return(
        <ul className="Vertical-bullet mt-4">
            <li className="Bullet">
                <h1>Supermoney S.p.A <span style={{ fontSize: 22, color: "#51504F"}}>Fullstack Developer</span></h1>
                <p style={{ fontSize: 19, color: "#51504F"}}>
                Worked as a Fullstack Developer on their platform called OneForm. A dashboard that allows call centers to create a contract for clients. They sell Electricity/gas/internet offers. I worked also on the backend side which is a NestJS Application that Scapes all the supplier websites so they can create a contract automatically.

                Tech stack used: ReactJS, NodeJS, NestJS with puppeteer/playwright for scraping, MySQL DB
                </p>
                <a href="https://www.linkedin.com/company/supermoney-eu/"><Icon name="linkedin" /></a>
            </li>
            <li className="Bullet">
                <h1>Lista PH <span style={{ fontSize: 22, color: "#51504F"}}>Founding and Fullstack Developer</span></h1>
                <p style={{ fontSize: 19, color: "#51504F"}}>
                Founding and Implementing a bookkeeping App that helps local businesses.

                Worked as a Fullstack Developer. Stack used: React-Native, NestJS, MySQL with the integration of some APIs like Firebase, Amazon S3, RabbitMQ, Messaging APIs like Twilio

                Participating in some business decisions and Managing Developers and tasks.
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", width: "15%" }}>
                    <a href="https://play.google.com/store/apps/details?id=com.listaPh&hl=en&gl=US"><Icon name="googleplay"/></a>
                    <a href="https://apps.apple.com/ph/app/lista-ph/id1580527951"><Icon name="appstore"/></a>
                </div>

            </li>
            <li className="Bullet">
                <h1>Craon SRL <span style={{ fontSize: 22, color: "#51504F"}}>Fullstack Developer</span></h1>
                <p style={{ fontSize: 19, color: "#51504F"}}>
                Worked as a Fullstack Developer third-party Companies. In the first half, I was working in a team for a third-party Company Called Nautes.
                I was implementing website pages and widgets for Coltorti.com, a Fashion/Brand Website Dashboard. in the second half I was working in a team on MAIARE a real estate website dashboard.
                </p>
                <a href="https://www.linkedin.com/company/craonsrl/"><Icon name="linkedin" /></a>
            </li>
            <li className="Bullet">
                <h1>Cosmo <span style={{ fontSize: 22, color: "#51504F"}}>Fullstack Developer</span></h1>
                <p style={{ fontSize: 19, color: "#51504F"}}>
                Founding and Implementing an Ecommerce App for local businesses in the Philippines.<br />
                <br />
                Back-end:
                <br />
                Design, development, launch and finalization of projects with Agile methodology<br />
                Back-end development with modern TS-Node Express technology with the support of Heroku's Dynos containers<br />
                Use of Bit-Bucket for code-collaboration and git, yarn and npm versioning systems<br />
                Middleware management and development, OAuth 2.0, JWT. Image quality compression using sharp & image-min<br />
                Web-Sockets implementation with Socket.IO<br />
                Data development and upload via CSV<br />
                For customers without CSV, using Web Scraping of data / products with Google Chrome extensions for automatic import<br />
                Amazon Web Services integration for Mysql, S3 RDS data management<br />
                Google Cloud integration for Maps & Geocoding APIs<br />
                Integration with Heroku services such as Redis and with some experience on workers<br />
                Integration with various external API services, such as Lalamove Asia on-demand delivery services or OTP services (Twilio, MessageBird)<br />
                Integration with social authentication services (Facebook, Google & Apple)<br />
                Mastery in VSC + Local / Remote (in the case of Heroku) Debugging<br />
                <br />
                Mobile front-end:
                <br />
                Hybrid mobile app development with React Native Typescript (ES5, ES6)<br />
                UI design with Flexboxes following the Atom Design (atoms, molecules, organisms, templates and pages)<br />
                Use of Context API, Event-Bus, Babel<br />
                Mastery of axios for Ajax calls<br />
                Socket.IO Client development<br />
                Firebase services integration (Analytics & Google Cloud Messaging)<br />
                Integration of visual libraries for social authentication (Facebook, Google & Apple)<br />
                Experience in editing public library (fork or branch) for compatibility and to make the project more dynamic<br />
                UI & UX Design experience with Zeplin & Invision<br />
                </p>
            </li>
            <li className="Bullet">
                <h1>Aubay <span style={{ fontSize: 22, color: "#51504F"}}>Fullstack Developer</span></h1>
                <p style={{ fontSize: 19, color: "#51504F"}}>
                Worked as a Fullstack Developer For internal projects and third-party Companies. In the first half of the year, I was working on some internal projects and supporting the seniors with some bug fixes. In the second half, I was working in a team for a third-party company called Vodafone.    
                </p>
                <a href="https://www.linkedin.com/company/aubay-italy/?originalSubdomain=it"><Icon name="linkedin" /></a>
            </li>
            <li className="Bullet">
                <h1>Atlas <span style={{ fontSize: 22, color: "#51504F"}}>Fullstack Developer</span></h1>
                <p style={{ fontSize: 19, color: "#51504F"}}>
                Founding and Implementing a website to save money for traveling    
                </p>
            </li>
            <li className="Bullet">
                <h1>OntheSpot <span style={{ fontSize: 22, color: "#51504F"}}>Fullstack Developer</span></h1>
                <p style={{ fontSize: 19, color: "#51504F"}}>
                Founding and Implementing a mobile app where you could buy clothes and we could delivery them to you.   
                </p>
            </li>
            <li className="Bullet">
                <h1>Garoo S.r.l <span style={{ fontSize: 22, color: "#51504F"}}>Web developer</span></h1>
                <p style={{ fontSize: 19, color: "#51504F"}}>
                Implementing Components and widgets using HTML/CSS/Javascript and Bootstrap websites

                Website: http://www.garoobox.com/    
                </p>
                <a href="https://www.linkedin.com/company/aubay-italy/?originalSubdomain=it"><Icon name="linkedin" /></a>
            </li>
        </ul>
    )
}

export default VerticalBullet;