import ButtonSaveOrDeleteUserToMeeting from "./ButtonSaveOrDeleteUserToMeeting";

export default function MeetingsList({meetings, username, onDelete, signIn, signOut}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Uczestnicy</th>
                <th>Akcje</th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => <tr key={index}>
                    <td>{meeting.title}</td>
                    <td>{meeting.description}</td>
                    <td>
                        {
                            meeting.participants.length > 0
                                ? <ul>{meeting.participants.map(p => <li key={p}>{p}</li>)}</ul>
                                : <em>Brak uczestników</em>
                        }
                    </td>
                    <td>
                        <ButtonSaveOrDeleteUserToMeeting meeting={meeting}
                                                         username={username}
                                                         onDelete={() => onDelete(meeting)}
                                                         signIn={() => signIn(meeting)}
                                                         signOut={() => signOut(meeting)}/>
                    </td>
                </tr>)
            }
            </tbody>
        </table>
    );
}