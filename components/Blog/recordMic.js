import React from 'react'
import { useState } from 'react';
import { ReactMic } from 'react-mic'

const RecordMic = ( { audio, setAudio } ) => {
    const [recording, setRecording] = useState(false)
    
    const onStop = (recordedBlob) => {
        setAudio(recordedBlob)
    }

    return (
        <>
            <div>
                {(!recording && audio) ? 
                     <audio controls src={audio.blobURL}></audio>
                :
                null
            }
            </div>
            <ReactMic 
                record={recording}
                className={"hidden"}
                onStop={(data) => onStop(data)}
                strokeColor="#000000"
                backgroundColor="#FF4081"
            />
            <button onClick={() => setRecording(true)} type="button">Start</button>
            <button onClick={() => setRecording(false)} type="button">Stop</button>
        </>
    )
}

export default RecordMic