

export const NyRegistering = ({ name, email, organizationNumber, branches, description, companyName, address, type, crewNumber, areas }) => (
    <div>
        <h1>Ny registrering</h1>
        <p>
            En ny användare har registrerat sig som {type}
        </p>
        <p>
            Namn: {name}
        </p>
        <p>
            Email: {email}
        </p>
        <p>
            Organisationsnummer: {organizationNumber}
        </p>
        <p>
            Branscher: 
        </p>
        <ul>
            {branches.map((branch) => (
                <li key={branch}>{branch}</li>
            ))}
        </ul>
       {type === "Bemanningsföretag" && (
        <div>
            <p>
                Antal anställda: {crewNumber}
            </p>
            <p>
                Arbetsområden: 
            </p>
            <ul>
                {areas.map((area) => (
                    <li key={area}>{area}</li>
                ))}
            </ul>
        </div>
         )}
        <p>
            Beskrivning: {description}
        </p>
        <p>
            Företagsnamn: {companyName}
        </p>
        <p>
            Adress: {address}
        </p>
        
    </div>
);