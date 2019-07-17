import React from 'react'
import Renderer from 'react-test-renderer'
import CommentList from './CommentList'
import Data from '../data'


describe('CommentList', () => {
  it('Should render a list of comments with default mock data', () => {

		const component = Renderer.create(<CommentList {...Data} />)
		const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})

