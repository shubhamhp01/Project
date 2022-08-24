import React, {useState} from 'react'

export default function TextForm(props){
    const [text,setText] = useState("Enter Text here");
    return(
        <div>
            <h1>{props.title} - {text}</h1>
            <div className="mb-3">

                <textarea className="form-control"  value = {text} id="Box" rows="5"></textarea>
            </div>

        </div>
    )
}