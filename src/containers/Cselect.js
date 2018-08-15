
import React, { Component } from 'react';
import Select from 'react-select';
import MySelect from '../components/MySelect/MySelect';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];
class Cselect extends Component {
      state = {
        selectedOption: null,
        testValues:[
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }]
       }
      handleChange = (selectedOption) => {
        this.setState({ selectedOption,testValues:selectedOption });
        console.log(`Option selected:`, selectedOption);
      }
    render() {
        const { selectedOption,testValues } = this.state;
        return (
            <div>
                <p>控件测试哈哈啦啦啦</p>
                <div style={{width:'300px'}}>
                    {/* <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        isMulti
                    /> */}
                </div>
                <p>------自定义控件测试-------</p>
                <div style={{width:'300px'}}>
                    <MySelect  
                      value={testValues}
                      options={options} 
                      onChange={this.handleChange}
                      allowSelectAll
                      isMulti
                    />
                </div>
            </div>
        );
    }
}

export default Cselect;