import './index.css'

import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

const Options = props => {
  const {listItem} = props
  const {id, capitalDisplayText} = listItem

  return <option value={id}> {capitalDisplayText}</option>
}
// Write your code here
class Capitals extends Component {
  state = {capital: countryAndCapitalsList[0].id}

  capitalText = event => {
    console.log(event.target.value)
    this.setState({capital: event.target.value})
  }

  render() {
    const {capital} = this.state
    const item1 = countryAndCapitalsList.find(
      eachItem => eachItem.id === capital,
    )
    const {country} = item1

    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="select-container">
            <select onChange={this.capitalText} className="select1">
              {countryAndCapitalsList.map(item => (
                <Options listItem={item} key={item.id} />
              ))}
            </select>

            <p className="para1">is capital of which country</p>
          </div>
          <p className="para">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
