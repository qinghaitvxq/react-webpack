import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import NovelImage from './containers/NovelImage';
// import NovelText from './containers/NovelText'; 
import asyncComponent from './hoc/asyncComponent';
import Cselect from './containers/Cselect';

const AsyncNovelText=asyncComponent(() => {
    return import('./containers/NovelText');
});

class App extends Component {
     render(){
         return(
             <div>
                <div>
                   <Link to="/">控件测试</Link>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <Link to="/novelText">小说简介</Link>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <Link to="/novelCharactor">小说人物</Link>
                </div>
                <div>
                    <Route path="/novelCharactor" exact component={NovelImage} />
                    <Route path="/novelText" exact component={ AsyncNovelText } />
                    <Route path="/" exact component={ Cselect } />
                    {/* <Route path="/novelText" component={NovelText} /> */}
                </div>
             </div>
         )
     }
 }

 export default App;