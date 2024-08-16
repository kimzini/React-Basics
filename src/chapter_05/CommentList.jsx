import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"김진희",
        comment:"배고프다!!!!!",
    },
    {
        name:"최유라",
        comment:"보이넥스트도어 한태산 내꺼.",
    },
    {
        name:"굴비",
        comment:"아이 원트 산책!!!!!",
    },
];

function CommentList(props) {
    return (
        <div>
           {comments.map((comment) => {
            return (
                <Comment name={comment.name} comment={comment.comment} />
            );
           })}
        </div>
    );
}

export default CommentList;