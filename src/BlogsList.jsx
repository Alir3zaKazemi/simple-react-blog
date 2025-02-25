import { Link } from "react-router-dom";
const BlogsList = ({ blogs, title, handleDelete }) => {
	return (
		<div className="blog-lists">
			<h2>{title}</h2>
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<Link to={`/blogs/${blog.id}`}>
						<h2>{blog.title}</h2>
						<p>Written by : {blog.author}</p>
						{/* <button
							onClick={() => {
								handleDelete(blog.id);
							}}
						>
							Delete
						</button> */}
					</Link>
				</div>
			))}
		</div>
	);
};

export default BlogsList;
