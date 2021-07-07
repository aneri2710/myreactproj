import axios from "axios";
import { React, useState } from "react";

const Search = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([{ searchItem: "" }]);
  const [isLoading, setIsLoading] = useState(false);
  const { searchItem } = search;

  const onInputChnage = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const result = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${searchItem}`
      );
      setData(result.data.hits);
      setIsLoading(false);
      const history = JSON.stringify(searchItem);
      let searchHistory = localStorage.getItem("searchHistory");
      if (searchHistory) {
        let parseData = JSON.parse(searchHistory);
        parseData.push(searchItem);
        localStorage.setItem("searchHistory", JSON.stringify(parseData));
      } else {
        localStorage.setItem("searchHistory", JSON.stringify([searchItem]));
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="container">
        <h1>Search Keyword</h1>
        <p>
          Search any keyword which will show you the result from the HN Search API
        </p>
       
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search Keyword"
              name="searchItem"
              onChange={(e) => onInputChnage(e)}
            />
            <div className="input-group-append">
              <button className="btn btn-secondary" type="submit">
                <img
                  src="https://www.freepnglogos.com/uploads/search-png/search-icon-clip-art-clkerm-vector-clip-art-online-8.png"
                  height="20px"
                  width="auto"
                  alt="icon"
                />
              </button>
            </div>
          </div>
        </form>
        <div>
          <p></p>
        </div>
        {isLoading && (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )}
        <div>
          <p></p>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table mr-1"></i>
            API Response
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Points</th>
                    <th>Comments</th>
                    <th>Tags</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((item) => {
                    return (
                      <tr key={item._id}>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        <td>{item.points}</td>
                        <td>{item.num_comments}</td>
                        <td>{item._tags[0]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
