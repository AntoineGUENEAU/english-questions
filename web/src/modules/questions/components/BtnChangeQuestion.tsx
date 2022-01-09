import React from "react";

interface IpropsBtnChangeQuestion{
    clickHandle: () => void;
}

export default function BtnChangeQuestion(props: IpropsBtnChangeQuestion) {
    const changeQuestion = () => {
        props.clickHandle()
    }
    return (
      <>
          <div className="button" onClick={changeQuestion}>
              <a href="#">Changé de question</a>
          </div>
      </>

    );
}
