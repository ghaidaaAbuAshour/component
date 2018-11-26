import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import CommentDetails2 from './CommentDetails2';
import ApprovalCard from './ApprovalCard';
import ContentCard from './ContentCard';
import DocumentCard from './DocumentCard';





const App =() =>
{
return (

<div className="ui container comments">
<div className="comment">

<a href="/" className="avatar">
<img alt="avatar" />
</a>

<div className="content">
<a href="/" className="author">Ghaidaa</a>
<div className="metadata">
<span className="date">Today at 6:00PM</span>
</div>
</div>
<div className="text">Nice plog post!!</div>

</div>
</div>
);

};


const App2 =() =>
{
return (

<div className="ui container comments">
<div className="comment">

<a href="/" className="avatar">
<img alt="avatar" src={faker.image.image()} />
</a>

<div className="content">
<a href="/" className="author">Ghaidaa</a>
<div className="metadata">
<span className="date">Today at 6:00PM</span>
</div>
</div>
<div className="text">Nice plog post!!</div>

</div>
</div>
);

};



const App3 =() =>
{
return (

<div className="ui container comments">


<div className="comment">
<a href="/" className="avatar">
<img alt="avatar" src={faker.image.image()} />
</a>
<div className="content">
<a href="/" className="author">{faker.company.companyName()}</a>
<div className="metadata">
<span className="date">Today at 6:00PM</span>
</div>
</div>
<div className="text">{faker.address.city()}</div>
</div>


<div className="comment">
<a href="/" className="avatar">
<img alt="avatar" src={faker.image.image()} />
</a>
<div className="content">
<a href="/" className="author">{faker.company.companyName()}</a>
<div className="metadata">
<span className="date">Today at 6:00PM</span>
</div>
</div>
<div className="text">{faker.address.city()}</div>
</div>


<div className="comment">
<a href="/" className="avatar">
<img alt="avatar" src={faker.image.image()} />
</a>
<div className="content">
<a href="/" className="author">{faker.company.companyName()}</a>
<div className="metadata">
<span className="date">Today at 6:00PM</span>
</div>
</div>
<div className="text">{faker.address.city()}</div>
</div>

</div>
);

};


const App4 =() =>
{
return (
<div className="ui container comments">
<CommentDetails />
<CommentDetails />
<CommentDetails />
</div>
);

};

const App5 =() =>
{
return (
<div className="ui container comments">
<CommentDetails author="ghaidaa"/>
<CommentDetails author="buth"/>
<CommentDetails author="mahar"/>
</div>
);

};


const App6 =() =>
{
return (
<div className="ui container comments">
<CommentDetails2 author="ghaidaa" timeAgo="6:00" avatar={faker.image.avatar()}/>
<CommentDetails2 author="buth" timeAgo="1:00" avatar={faker.image.avatar()}/>
<CommentDetails2 author="mahar" timeAgo="2:00" avatar={faker.image.avatar()}/>
</div>
);

};



const App7 =() =>
{
return (
<div className="ui container comments">
<CommentDetails2 author="ghaidaa" timeAgo="6:00" avatar={faker.image.avatar()}/>
<ApprovalCard /> <div>hiiiii</div>
<CommentDetails2 author="buth" timeAgo="1:00" avatar={faker.image.avatar()}/>
<ApprovalCard />

<CommentDetails2 author="mahar" timeAgo="2:00" avatar={faker.image.avatar()}/>
<ApprovalCard />

</div>
);

};



const App8 =() =>
{
return (
<div className="ui container comments">
<ApprovalCard>
<CommentDetails2 author="ghaidaa" timeAgo="6:00" avatar={faker.image.avatar()}/>
</ApprovalCard>

<ApprovalCard>
<CommentDetails2 author="buth" timeAgo="1:00" avatar={faker.image.avatar()}/>
</ApprovalCard>

<ApprovalCard>
<CommentDetails2 author="mahar" timeAgo="2:00" avatar={faker.image.avatar()}/>
</ApprovalCard>

</div>
);

};


const App9 =() =>
{
return (
<div className="ui container comments">

<ApprovalCard>Are you sure you want to do this?</ApprovalCard>


<ApprovalCard>
<CommentDetails2 author="ghaidaa" timeAgo="6:00" avatar={faker.image.avatar()}/>
</ApprovalCard>

<ApprovalCard>
<CommentDetails2 author="buth" timeAgo="1:00" avatar={faker.image.avatar()}/>
</ApprovalCard>

<ApprovalCard>
<CommentDetails2 author="mahar" timeAgo="2:00" avatar={faker.image.avatar()}/>
</ApprovalCard>

</div>
);

};

const App10 =() =>
{
return (
<ContentCard />
);

};


const App11 =() =>
{
return (
<DocumentCard />
);

};




ReactDOM.render(

<App11 />,document.querySelector("#root")

);
