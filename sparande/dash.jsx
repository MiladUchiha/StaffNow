const ClientDash = ({ user, mission }) => {
    

    return(
      <>
       
        <h1>Client Dashboard</h1>
        <h1>Your missions</h1>
        <h1>Active missions</h1>
         
        <ul>
        {mission.map((mission) => (
            <li key={mission.id}>
                <h1>{mission.jobTitle}</h1>
                <h1>{mission.description}</h1>
                <h1>{mission.location}</h1>
                <h1>{mission.duration}</h1>
                <h1>{mission.startDate}</h1>
                <h1>{mission.endDate}</h1>
            </li>
        ))}
            
        </ul>
      </>
    )
    }
    
    export default ClientDash;
    