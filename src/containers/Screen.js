import React, { Component } from 'react'
import { connect } from 'react-redux'

class Screen extends Component {
    render(){
        return (
            <div className = 'row'>
                <div className = 'screen'>
                    {(
                        !this.propos.screen
                    )?'0':this.props.screen}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        screen: state.calculator.screen
    }
}

export default connect(mapStateToPropos)(Screen)