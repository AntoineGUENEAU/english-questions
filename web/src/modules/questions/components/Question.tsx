import React from "react";

interface IpropsQuestion {
    question: string;
}

export default function Question(props: IpropsQuestion) {
    return <p id="question">{props.question}</p>;
}
