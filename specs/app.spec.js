import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import MultipleRoutes from '../src/public/components/MultipleRoutes'

Enzyme.configure({ adapter: new Adapter() })

describe('<MultipleRoutes />', () => {
  it('renders', () => {
    const wrapper = shallow(<MultipleRoutes />)
    const actual = wrapper.find('h1').text()
    const expected = 'Hello, tests!'

    expect(actual).to.be.equal(expected)
  })
})
