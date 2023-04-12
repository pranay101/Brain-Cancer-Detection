import React, { useState } from 'react';
import "../App.css"
import Loader from '../Loader/Loader';
const DetailSection = ({loading, setImageSelected,formReference,ImageSelected,setLoading}) => {
    const [selectedAlgo, setSelectedAlgo] = useState("DENSENET")
    return (
        <div className='DetailSection'>
            <h2>Brain Cancer Detection</h2>
            <div className='underline' />
            <p>This project is currently under development and we hope to improve it in the comming future for more brain phases. Currently it is being able to classify between 4 classes. This project is currently under development and we hope to improve it in the comming future for more brain phases. Currently it is being able to classify between</p>

            <h4>Choose the Algorithm</h4>
            <div className='algorithms'>
                <div onClick={() => setSelectedAlgo("DENSENET")} className={selectedAlgo === "DENSENET" ? ['algo', 'selectedAlgo'].join(" ") : "algo"}>
                    <p>Process using</p>
                    <h5>DenseNet121</h5>
                    <span>
                    dense block and transition layers, spread their weights over multiple inputs
                    </span>
                </div>
                <div onClick={() => setSelectedAlgo("RESNET")} className={selectedAlgo === "RESNET" ? ['algo', 'selectedAlgo'].join(" ") : "algo"}>
                    <p>Process using</p>
                    <h5>RESNET50</h5>
                    <span>
                        Improved declined accuracy caused by the vanishing gradient in high-level neural networks.
                    </span>
                </div>
            </div>

            <div className='controls'>
                <span>
                    
                {
                    loading? (
                        <Loader />
                        ) : (<>
                            {!ImageSelected? <span>Select an Image to Continue</span>:null}
                            <button onClick={() => formReference.current.requestSubmit()} title={ImageSelected?"Start Processing":"No Image Selected"} disabled={!ImageSelected} className='Processbutton' type='submit'>Process Image</button>
                            </>)
                        }
                </span>
                <button onClick={() => {setImageSelected(null); setLoading(false)}} className='canclebutton' type='submit'>Cancle</button>
            </div>

        </div>
    )
}

export default DetailSection