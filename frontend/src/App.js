import About from "./About/About";
import "./App.css";
import Backdrop from "./Backdrop/Backdrop";
import DetailSection from "./DetailSection/DetailSection";
import ImageSection from "./ImageSection/ImageSection";
import Navbar from "./Navbar/Navbar";
import React, { useRef, useState }  from 'react';
function App() {
    const [imageSelected, setImageSelected] = useState(false);
    const [loading, setLoading] = useState(false)
    const [openAbout,setOpenAbout] = useState(false)
    const formReference = useRef(null)
    return (
        <div className="App">
            {
               openAbout? <>
               <About setOpenAbout={setOpenAbout} /> 
               <Backdrop setOpenAbout={setOpenAbout} />
               </>
               : null
               
            }
                
            <Navbar setOpenAbout={setOpenAbout} />
            <div>
                <ImageSection 
                    imageSelected={imageSelected} 
                    setImageSelected={setImageSelected} 
                    loading={loading} 
                    setLoading={setLoading} 
                    formReference = {formReference}  
                />
                <DetailSection loading={loading} setLoading={setLoading} setImageSelected={setImageSelected} formReference={formReference} ImageSelected={imageSelected}/>
            </div>
        </div>
    );
}

export default App;
