export default function ButtonSaveOrDeleteUserToMeeting({username, meeting, signOut, signIn}) {
    const alreadyAssigned = meeting.participants.includes(username);

    return <>
        {
            alreadyAssigned ? <button onClick={signOut}>Wypisz się na spotkanie</button> :
                <button onClick={signIn}>Zapisz się na spotkanie</button>
        }
    </>
        ;
}