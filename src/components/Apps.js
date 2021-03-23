import React, { Component } from 'react'
import Screen from '../containers/Screen'
import History from '../containers/History'

class Apps extends Component {
    render(){
        return (
            <div className = 'row'>
                <div classname = 'col-sm-12'>
                    <h3 className = 'mt-4'><i className = 'fa fa-calculator '/> Kalkulator </h3>
                </div>
                <div className = 'col-sm-8'>
                    <Screen />
                </div>
                <div className = 'col-sm-8'>
                    <h5>Button</h5>
                    <ButtonList/>
                </div>
                <div className = 'col-sm-4'>
                    <History />
                </div>
            </div>
        )
    }
}

export default Apps