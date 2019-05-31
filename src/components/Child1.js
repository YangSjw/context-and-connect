import React, { Component } from 'react';
import WrapComponent from '../utils/WrapComponent'
import NewChild from './NewChild'

class Child1 extends Component {
    render() {
        // console.log(this.props, 'child')
        return (
            <div>
                划水哗啦啦
                <NewChild name={"zzzzzz"} />
            </div>
        );
    }
}

export default WrapComponent(() => {})(Child1);