import React,{Component} from 'react';
import { Button } from 'antd';
import CharactorInfo from '../components/CharactorInfo/CharactorInfo';

class NovelImage extends Component {
    render(){
        console.log("这里有执行吗？");
        return (
            <div>
                <h1>魔道祖师</h1>
                <Button type="primary" >我是蚂蚁按钮</Button>
                <CharactorInfo />
            </div>
        );
    }
}

export default NovelImage;