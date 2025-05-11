export default function MeetingsList({meetings, onDelete}) {
    let pageContent = <div>
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Akcja</th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => <tr key={index}>
                    <td>{meeting.title}</td>
                    <td>{meeting.description}</td>
                    <td><button onClick={() => onDelete(meeting)}>Usuń</button></td>
                </tr>)
            }
            </tbody>
        </table>
    </div>

    return (
        <div>{pageContent}</div>
    );
}
