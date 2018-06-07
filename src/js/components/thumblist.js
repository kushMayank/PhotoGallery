import React ,{Component} from'react';
import Thumbnail from './thumbnail';

class Thumblist extends Component{
    constructor(props){
        console.log("in the Thumblist constructor")
        super(props)
    }

    render(){
        return(
            <div>
                <h4>Thumblist </h4>
                <div className='imagethumbnail'>
                    <Thumbnail/>
                </div>
            </div>
        )
    }
}

export default Thumblist;