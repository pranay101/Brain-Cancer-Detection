import React, { useRef, useState } from 'react';
import "../App.css"
import { PhotoIcon } from "@heroicons/react/24/outline"
import axios from 'axios';


const Processor = process.env.REACT_APP_PROCESSOR

const ImageSection = ({ imageSelected, setImageSelected, loading, setLoading, formReference,selectedAlgo,data,setData }) => {

    const ImagePicker = useRef(null)
    
    const openImagePicker = () => {
        ImagePicker.current.click()
    }
    const updateImage = () => {
        {
            const imageFile = ImagePicker.current.files[0];

            const reader = new FileReader();
            reader.addEventListener("load", (e) => {
                setImageSelected(e.target.result);
            });

            reader.readAsDataURL(imageFile);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        let url = `${process.env.REACT_APP_PROCESSOR}/predictDenseNet` || `http://localhost:5000/predictDenseNet`;
        if (selectedAlgo === "RESNET") {
            url = `${process.env.REACT_APP_PROCESSOR}/predictResnet` || `http://localhost:5000/predictResnet`;
        }
        const formData = new FormData();
        const file = ImagePicker.current.files[0]
        formData.append('file', file);
        formData.append('fileName', file.name);

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Access-Control-Allow-Credentials': true,
                "withCredentials": true,
            },
        };
        

        await axios.post(url, formData, config)
            .then((response) => {

                const disease = response.data.result
                setData(disease);
                setLoading(false)
            });

    }
    // console.log(URL.createObjectURL(imageSelected));

    return (
        <div className='ImageSection' style={{ alignItems: imageSelected ? "inherit" : "center" }}>

            <form id='form' onSubmit={handleSubmit} name='bt_classifier' method='POST' ref={formReference} encType='multipart/form-data' className='ImageIconContainer'>
                <input name='bt_image' accept="image/*" onChange={(e) => { setImageSelected(e.target.result); updateImage() }} style={{ display: "none" }} ref={ImagePicker} type="file" placeholder='Choose an Image to process' src="" alt="" />
                {
                    imageSelected ?
                        (<>
                            <div className='ImageHolder'>
                                <div>
                                    <img className='ImageSectionimg' src={imageSelected} alt="" srcSet="" />
                                </div>
                            </div>
                            {
                                data ? (<div className='result'>
                                    <div>
                                        <h4>Disease Detected:{data ? data : " "}</h4>
                                    </div>
                                </div>) : null
                            }

                        </>
                        ) :
                        (
                            <>
                                <PhotoIcon onClick={openImagePicker} className='ImageIcon' />
                                <h5>Click here to Select an Image</h5>
                            </>
                        )
                }
            </form>
        </div>
    )
}

export default ImageSection