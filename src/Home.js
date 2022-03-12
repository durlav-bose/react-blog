import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs , isLoading, isError } = useFetch("http://localhost:8000/blogs")

  return (
    <div className="home">
      {isError && <div className="isError">{ isError }</div>}
      {isLoading && <div className="loader"></div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home;