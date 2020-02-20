import React from 'react';
import axios from 'axios';
import "./Main.css";

class Main extends React.Component{
constructor(){
    super()
    this.state = {
        memes: []
    }
}

    componentDidMount(){
        this.getAllMemes()
    }

    getAllMemes = async() => {
        const memes = await axios.get('/api/get_memes')
        this.setState({
            memes: memes.data
        })
    }

    render(){
        console.log(this.state.memes)
        const mappedMemes = this.state.memes.map( meme => {
            return <div>
                <img className="main-memes" alt='meme' src={meme.img_url}/>
            </div>
        })
        return(
            <div> This is the Main {mappedMemes}</div>
        )
    }
    
}

export default Main;