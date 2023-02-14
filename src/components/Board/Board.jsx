export const Board = ({ dataBody, dataHead }) => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        {dataHead.map((item, index) => (
                            <td key={index}>{item}</td>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {dataBody.map((item, index) => (
                        <tr key={index}>
                            <td>{item.src}{item.name}{item.id}</td>
                            <td>{item.date}</td>
                            <td>{item.in}</td>
                            <td>{item.out}</td>
                            <td>{item.bed}</td>
                            <td>{item.note}</td>
                            <td>{item.type}</td>
                            <td>{item.floor}</td>
                            <td>{item.facilities}</td>
                            <td>{item.rate}</td>
                            <td>{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}