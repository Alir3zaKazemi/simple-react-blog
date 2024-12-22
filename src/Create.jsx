const Create = () => {
	return (
		<div className="create">
			<h2>Add new blog</h2>
			<form>
				<label>Blog title: </label>
				<input type="text" required />
				<label>Blog body: </label>
				<textarea required></textarea>
				<label>Blog author: </label>
				<select>
					<option value="alireza">alireza</option>
					<option value="abol">abol</option>
				</select>
				<button>Add Blog</button>
			</form>
		</div>
	);
};

export default Create;
