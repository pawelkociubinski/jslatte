// Dependencies
import React from 'react'
import styled from 'styled-components'
// Custom
import Layout from '../layouts'


const Wrapper = styled.div`
  padding: 3rem;
  max-width: 750px;
  margin: 0 auto;

  @media (max-width: 750px) {
    width: 100%;
    padding: 1rem;
  }

  h1 {
    color: #222;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 35px;
    font-family: "PT Sans", sans-serif;
    text-transform: capitalize;
    margin: 0;
  }

  p {
    line-height: 28px;
    color: #666;
    font-family: "PT Sans", sans-serif;
  }
`

const Post = (props) => {
  return (
    <Layout>
      <Wrapper>
        test
      </Wrapper>
    </Layout>
  )
}

export default Post
