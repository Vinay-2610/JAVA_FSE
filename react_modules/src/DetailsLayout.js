import React from 'react';

function CourseDetails() {
  return (
    <div>
      <h2>Course Details</h2>
      <h3>Angular</h3>
      <p>4/5/2021</p>
      <h3>React</h3>
      <p>6/3/20201</p>
    </div>
  );
}

function BookDetails() {
  return (
    <div>
      <h2>Book Details</h2>
      <h3>Master React</h3>
      <p>670</p>
      <h3>Deep Dive into Angular 11</h3>
      <p>800</p>
      <h3>Mongo Essentials</h3>
      <p>450</p>
    </div>
  );
}

function BlogDetails() {
  return (
    <div>
      <h2>Blog Details</h2>
      <h3>React Learning</h3>
      <p><strong>Stephen Biz</strong></p>
      <p>Welcome to learning React!</p>
      <h3>Installation</h3>
      <p><strong>Schewzdenier</strong></p>
      <p>You can install React from npm.</p>
    </div>
  );
}

function DetailsLayout() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-around', 
      padding: '20px',
      gap: '20px'
    }}>
      <div style={{ 
        flex: 1, 
        borderRight: '3px solid green', 
        paddingRight: '20px' 
      }}>
        <CourseDetails />
      </div>
      
      <div style={{ 
        flex: 1, 
        borderRight: '3px solid green', 
        paddingRight: '20px' 
      }}>
        <BookDetails />
      </div>
      
      <div style={{ flex: 1 }}>
        <BlogDetails />
      </div>
    </div>
  );
}

export default DetailsLayout;
