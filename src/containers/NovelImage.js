import React,{Component} from 'react';

import CharactorInfo from '../components/CharactorInfo/CharactorInfo';

class NovelImage extends Component {
    render(){
        console.log("这里有执行吗？");
        return (
            <div>
                <h1>魔道祖师</h1>
                <CharactorInfo />
            </div>
        );
    }
}

export default NovelImage;