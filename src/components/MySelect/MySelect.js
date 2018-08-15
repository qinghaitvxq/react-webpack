import React from 'react';
import PropTypes from "prop-types";
import { default as ReactSelect } from "react-select";

// const MySelect = () => {
//     return (
//         <div>
//             <p> MySelect测试 </p>
//         </div>
//     );
// }

// specify props.allowSelectAll = true to enable!

const MySelect = props => {
    if (props.allowSelectAll) {
        console.log("查看控件属性");
        console.log(props);
        
      if (props.value.length === props.options.length) {
        return (
          <ReactSelect
            {...props}
            value={[props.allOption]}
            onChange={selected => props.onChange(selected.slice(1))}
          />
        );
      }
  
      return (
        <ReactSelect
          {...props}
          options={[props.allOption, ...props.options]}
          onChange={selected => {
            if (
              selected.length > 0 &&
              selected[selected.length - 1].value === props.allOption.value
            ) {
              return props.onChange(props.options);
            }
            return props.onChange(selected);
          }}
        />
      );
    }
  
    return <ReactSelect {...props} />;
  };
  
  MySelect.propTypes = {
    options: PropTypes.array,
    value: PropTypes.any,
    onChange: PropTypes.func,
    allowSelectAll: PropTypes.bool,
    allOption: PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  };
  
  MySelect.defaultProps = {
    allOption: {
      label: "Select all",
      value: "*"
    }
  };
  

export default MySelect;