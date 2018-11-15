import React from 'react'
import { Card, Skeleton } from 'antd'

const PostCard = ({active, post, openModal}) => (
  <Card className="post-card mt-2" onClick={openModal}>
    {
      active ? <Skeleton active={active} />
      : <React.Fragment>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </React.Fragment>
    }
  </Card>
)

export default PostCard
