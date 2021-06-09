import React from 'react'
import { connect } from 'react-redux'

import * as calculatorActions from "../actions/calculatorActions"

const Element = (props) => {
    const { value, isSymbol, addElement, addSymbol } = props
    
    return (
        <input 
        type="button" 
        value={value} 
        onClick={() => isSymbol ? addSymbol(value) : addElement(value)} />
    )
}

export default connect(null, calculatorActions)(Element)