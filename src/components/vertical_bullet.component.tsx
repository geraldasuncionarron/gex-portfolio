import Icon from "./icon.component";

function VerticalBullet () {
    return(
        <ul className="Vertical-bullet mt-4">
            <li className="Bullet">
                <h1>Freelancer <span style={{ fontSize: 22, color: "#51504F"}}>Fullstack Developer</span></h1>
                <p style={{ fontSize: 19, color: "#51504F"}}>Develop</p>
            </li>
            <li className="Bullet">
                <h1>Supermoney S.p.A <span style={{ fontSize: 22, color: "#51504F"}}>Fullstack Developer</span></h1>
                <p style={{ fontSize: 19, color: "#51504F"}}>
                SuperMoney è prima di tutto una promessa: vogliamo rendere più semplici e chiare le tue scelte di ogni giorno.

La nostra mission è metterti nelle condizioni di effettuare acquisti in linea con le tue reali necessità e di farlo ad un prezzo di mercato conveniente.

Per fare questo, abbiamo sviluppato e messo a tua disposizione un servizio di confronto gratuito che permette di confrontare condizioni e prezzi di un'ampia gamma di beni e servizi, tra cui:prodotti assicurativi, servizi bancari, tariffe energetiche e telefoniche.
                </p>
                <a href="https://www.linkedin.com/company/supermoney-eu/"><Icon name="linkedin" /></a>
            </li>
            <li className="Bullet">
                <h1>Lista PH <span style={{ fontSize: 22, color: "#51504F"}}>Founding and Fullstack Developer</span></h1>
                <p style={{ fontSize: 19, color: "#51504F"}}>
                Lista is your trusted, free, and secure money management app, dedicated to helping both individuals and <br/>businesses reach their financial goals.
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", width: "15%" }}>
                    <a href="https://play.google.com/store/apps/details?id=com.listaPh&hl=en&gl=US"><Icon name="googleplay"/></a>
                    <a href="https://apps.apple.com/ph/app/lista-ph/id1580527951"><Icon name="appstore"/></a>
                </div>

            </li>
            <li className="Bullet">
                <h1>Craon SRL <span style={{ fontSize: 22, color: "#51504F"}}>Fullstack Developer</span></h1>
                <p style={{ fontSize: 19, color: "#51504F"}}>
                    CRAON è un’azienda informatica e di sviluppo software nata nel 1998 grazie ad un team composto da professionisti del settore informatico, opera in ambito IT attraverso l'utilizzo di tecnologie innovative, soluzioni digital e metodologie di programmazione all'avanguardia.
                </p>
                <a href="https://www.linkedin.com/company/craonsrl/"><Icon name="linkedin" /></a>
            </li>
            <li className="Bullet">
                <h1>Cosmo <span style={{ fontSize: 22, color: "#51504F"}}>Fullstack Developer</span></h1>
                <p style={{ fontSize: 19, color: "#51504F"}}>Develop</p>
            </li>
            <li className="Bullet">
                <h1>Aubay <span style={{ fontSize: 22, color: "#51504F"}}>Fullstack Developer</span></h1>
                <p style={{ fontSize: 19, color: "#51504F"}}>Aubay è una Digital Service Company, leader europea nelle aree della consulenza direzionale e dell’information & communication technology, quotata alla Borsa di Parigi. Aubay è presente presso i più grandi gruppi nei settori Banche e Finanza, Assicurativo, Telecomunicazioni, Industria, Energia, Trasporti e P.A. ed ha come elemento differenziante un’offerta di servizi a forte valore aggiunto che fa leva sulla tecnologia come elemento abilitante.</p>
                <a href="https://www.linkedin.com/company/aubay-italy/?originalSubdomain=it"><Icon name="linkedin" /></a>
            </li>
        </ul>
    )
}

export default VerticalBullet;