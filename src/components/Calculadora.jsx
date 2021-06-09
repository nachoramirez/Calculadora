import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import '../styles/Calculadora.scss'
import Element from './Element'

import * as calculatorActions from '../actions/calculatorActions'

const Calculadora = (props) => {
  useEffect(() => {
    props.clear()
  }, [])

  return (
    <div className="container">
      <h1> Calculadora</h1>
      <form>
        <div className="resultContainer" >
          <p className="result">{props.count}</p>
        </div>
        <div>
          <Element value="7" />
          <Element value="8" />
          <Element value="9" />
          <input type="reset" value="C" onClick={() => props.clear()} />

          <Element value="4" />
          <Element value="5" />
          <Element value="6" />
          <Element type="button" value="*" isSymbol={true} />

          <Element value="1" />
          <Element value="2" />
          <Element value="3" />
          <Element type="button" value="-" isSymbol={true} />

          <input type="button" value="=" onClick={() => props.equal()} />
          <Element type="button" value="0" />
          <Element type="button" value="/" isSymbol={true} />
          <Element type="button" value="+" isSymbol={true} />
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (Reducer) => {
  return Reducer
}
export default connect(mapStateToProps, calculatorActions)(Calculadora)
