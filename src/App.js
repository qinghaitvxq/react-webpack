 import React,{Component} from 'react';
 import {Link,Route} from 'react-router-dom';

 import NovelImage from './containers/NovelImage';
 import NovelText from './containers/NovelText';

 class App extends Component{
     render(){
         return(
             <div>
                <div>
                    <Link to="/">小说人物</Link>
                    <Link to="/novelText">小说简介</Link>
                </div>
                <div>
                    <Route path="/" exact component={NovelImage} />
                    <Route path="/novelText" component={NovelText} />
                </div>
             </div>
         )
     }
 }

 export default App;