import React from 'react'
import { Modal, Input } from 'antd'

const { TextArea } = Input

const PostModal = ({modalState, closeModal, currentPost}) => (
  <Modal key={currentPost.id} className="post-modal" visible={modalState} onOk={closeModal} onCancel={closeModal} width={600} footer={null}>
    <TextArea autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" autosize={true} className="post-modal-title" defaultValue={currentPost.title} />
    <TextArea autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" rows={15} className="post-modal-body" defaultValue={currentPost.body} />
  </Modal>
)

export default PostModal
