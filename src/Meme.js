import React from "react";

export default function Meme(){

    const [meme,setMeme]=React.useState(
         [
            {
                "topText": "",
                "bottomText": "",
                "randomImage": "http://i.imgflip.com/1bij.jpg",
            }

        ]  
    )

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    

    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])
    
    function getMemeImage(){
        
            const randomNumber = Math.floor(Math.random() * allMemeImages.length)
            const url= allMemeImages[randomNumber].url
            setMeme(prevMeme=> {
                return{
                    ...prevMeme,
                    randomImage: url

                }
            })
    }
    
    return(
        <>
        <div className="generator">
        <div className="input">
        <input type="text" placeholder=" Top Text" className="form-input" name="topText" value={meme.topText} onChange={handleChange}></input>
        <input type="text" placeholder=" Bottom Text" className="form-input" name="bottomText" value={meme.bottomText} onChange={handleChange}></input>
        </div>
        <br/>
        <button className="generate-meme-btn" onClick={getMemeImage}>Get a new meme image </button>
        </div>
        <div className="meme">
            <img src={meme.randomImage} className="meme-img"></img>
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
        </>
    )
}