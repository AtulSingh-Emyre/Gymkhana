import React from 'react';

interface IProps {
    data: {
        id:number,
        event?: string,
        organiser: string,
        date: string,
        time?: string,
        venue?: string,
        attachment: [{poster:string},{result:string}],
    }
}

const NoticeTableRow: React.FC<IProps> = (props) => {
    return (
        <tr style = {tableRow}>
            <td style={tableDataId}>{props.data.id}</td>
           {props.data.event?(<td style={tableDataEvent}>{props.data.event}</td>) : <></>}
           <td>{props.data.organiser}</td>
           <td>{props.data.date}</td>
           {props.data.time?<td>{props.data.time}</td>:<></>}
           {props.data.venue?<td>{props.data.venue}</td>:<></>}
           <td> <a href={props.data.attachment[0].poster}>poster</a> <a href={props.data.attachment[1].result}>result</a></td>
        </tr>
    );
}

const tableRow : React.CSSProperties = {
    maxWidth : '100%'
}
const tableDataId : React.CSSProperties = {
    maxWidth :'3%'
}
const tableDataEvent : React.CSSProperties = {
    maxWidth : '20%'
}

export default NoticeTableRow;
