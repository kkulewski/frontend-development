import React from 'react';
import ReactDOM from 'react-dom';

function Avatar(props) {
    return (<div>Avatar: {props.user.name}</div>)
}

function UserInfo(props) {
    return (
        <div>
            <Avatar user={props.about.author} />
            <div className="UserInfo-name">
                {props.about.author.name}
            </div>
        </div>
    )
}

function CommentText(props) {
    return (
        <div>Text: {props.text}</div>
    )
}

function CommentDate(props) {
    return (
        <div>Date: {props.date}</div>
    )
}

function Comment(props) {
    return(
        <div className="Comment">
            <UserInfo about={props.data.about}/>
            <CommentText text={props.data.text}/>
            <CommentDate date={props.data.date}/>
        </div>
    )
}

const data = {
    about: {
        author: { 
            name: 'Jan',
        }
    },
    text: "Some text",
    date: new Date().toLocaleDateString()
}

ReactDOM.render(<Comment data={data}/>, document.getElementById("root"))
