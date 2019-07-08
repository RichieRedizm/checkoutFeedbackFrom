import React from 'react'
import Renderer from 'react-test-renderer'
import CommentForm from './CommentForm'


describe('CommentForm', () => {
	it('Should render a list of comments with default mock data', () => {

		  const component = Renderer.create(<CommentForm />)
		  const tree = component.toJSON()

	  expect(tree).toMatchSnapshot()
	})
  })
