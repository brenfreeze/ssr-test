import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col } from 'antd'
import PostCard from './PostCard'
import PostModal from './PostModal'
import { getAllPosts } from '../Store/actions/posts'

class Home extends React.Component {
  constructor(){
    super()

    let posts = []

    if(__isBrowser__){
      posts = window.__INITIAL_DATA__

      delete window.__INITIAL_DATA__
    }

    this.state = {
      posts,
      modalState: false,
      currentPost: {
        id: 0,
        userId: 0,
        title: "",
        body: ""
      }
    }
  }

  openModal = post => {
    console.log('here', post)
    this.setState({
      currentPost: {
        ...post
      },
      modalState: true
    })
  }

  closeModal = () => {
    this.setState({
      modalState: false
    })
  }

  renderPosts = () => {
    let { posts } = this.state

    if(posts.length){
      posts = posts.map((post, index) => {
        return((
          <Col sm={24} lg={6} key={index}>
            <PostCard active={false} post={post} openModal={this.openModal.bind(this, post)}/>
          </Col>
        ))
      })
    } else {
      for(var i = 0; i < 12; i++){
        posts.push((
          <Col sm={24} lg={6} key={i}>
            <PostCard active/>
          </Col>
        ))
      }
    }

    return posts
  }

  render(){
    let { modalState, currentPost } = this.state

    return(
      <React.Fragment>
        <Row gutter={8}>
          {this.renderPosts()}
        </Row>
        <PostModal currentPost={currentPost} closeModal={this.closeModal.bind(this)} modalState={modalState} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    ...posts
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getAllPosts
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
