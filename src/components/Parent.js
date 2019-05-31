import React, { Component } from 'react';
import WrapComponent from '../utils/WrapComponent'
import Child1 from './Child1'
import Context from '../utils/connect'

class Parent extends Component {

    render() {
        return (
            <div>
                <Context.Provider value={"qqqqq"}>
                    Parent杨昕宇
                    {
                        console.log(this.props, "Parent")
                    }
                    <Child1 />                    
                </Context.Provider>
            </div>
        );
    }
}

export default WrapComponent((age) => {
    console.log(age)
    return age.age
})(Parent);