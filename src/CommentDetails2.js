import React from 'react'
import faker from 'faker'


const CommentDetails2 = (props) =>
{

return (
  <div className="comment">
  <a href="/" className="avatar">
  <img alt="avatar" src={faker.image.image()} />
  </a>
  <div className="content">
  <a href="/" className="author">{props.author}</a>
  <div className="metadata">
  <span className="date">{props.timeAgo}</span>
  </div>
  </div>
  <div className="text">{faker.address.city()}</div>
  </div>

);

};


export default CommentDetails2;
