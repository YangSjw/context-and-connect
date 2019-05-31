import React, { Component } from 'react';
import WrapComponent from '../utils/WrapComponent'
import Context from '../utils/connect'

class NewChild extends Component {
    state = {

    }
    componentDidMount(){
        this.setState({
            // res: a
        })
    }
    render() {
        console.log(this.props,'newChild')
        return (
            <div>
                <Context.Consumer>
                    {
                        a => {
                            console.log(a)
                            return a
                        }
                    }
                </Context.Consumer>
                小狗子
            </div>
        );
    }
}

export default WrapComponent((res) => {
    return res
})(NewChild);