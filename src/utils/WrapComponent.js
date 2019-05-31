import React, {Component} from 'react';

const WrapComponent = (cbk) => {
    return (Wrap) => {
        return class extends Component{
            state = {
                listData: {
                    nameCom: {
                        name: 'sjw'
                    },
                    ageCom: {
                        age: 3
                    }
                }
            }
            render(){
                // console.log(cbk, 'wrap')
                var res = cbk(this.state.listData.ageCom)
                return (
                    <Wrap {...res}/>
                )
            }
        }
    }
};

WrapComponent.propTypes = {
};

export default WrapComponent;
