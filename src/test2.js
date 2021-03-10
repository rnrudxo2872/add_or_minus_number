import {Component} from 'react'
import propTypes from 'prop-types'

class sub extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.food}</h1>
                <div>{this.props.desc}</div>
            </div>
        )
    }
}

sub.propTypes = {
    food:propTypes.string,
    desc:propTypes.string
}

export default sub;