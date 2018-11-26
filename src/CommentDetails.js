import React from 'react'
import faker from 'faker'


const CommentDetails = (props) =>
{

return (
  <div className="comment">
  <a href="/" className="avatar">
  <img alt="avatar" src={props.avatar} />
  </a>
  <div className="content">
  <a href="/" className="author">{faker.company.companyName()}</a>
  <div className="metadata">
  <span className="date">{props.author}</span>
  </div>
  </div>
  <div className="text">{faker.address.city()}</div>
  </div>

);

};


export default CommentDetails;
