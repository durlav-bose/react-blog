const BlogList = ({ blogs, title }) => {
  
  return (
    <div className="blog">
      <h1 className="blog__title--main">{title}</h1>
      {blogs.map((blog) => (
        <div className="blog__preview" key={blog.id}>
          <h1 className="blog__title">{blog.title}</h1>
          <p className="blog__text">{blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;