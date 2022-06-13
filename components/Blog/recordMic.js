import React from 'react'
import { useState } from 'react';
import { ReactMic } from 'react-mic'
import { BsFillPlayFill, BsFillStopFill } from 'react-icons/bs'

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
            <button className='recmic-button rec' onClick={() => setRecording(true)} type="button" aria-label='Iniciar gravação de audio'><BsFillPlayFill size={24}/> Gravar</button>
            <button className='recmic-button stop' onClick={() => setRecording(false)} type="button" aria-label='Parar gravação de audio'><BsFillStopFill size={24}/> Parar de Gravar</button>
        </>
    )
}

export default RecordMic