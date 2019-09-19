import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import App from '../src/public/components/App'

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {
  it('renders', () => {
    const wrapper = shallow(<App />)
    const actual = wrapper.find('h1').text()
    const expected = 'Hello, tests!'

    expect(actual).to.be.equal(expected)
  })
})
