import ReactDOM from 'react-dom'
import './Title.css'
import Logo from '../../assets/logo.svg'




function Title() {
  return (
    <div className="container">
      <div className="logo"><img src={Logo} alt="" /></div>
      <h1>We are launching <strong>soon!</strong></h1>
      <p>Subscribe and get notified</p>
    </div>
  )
}

export default Title