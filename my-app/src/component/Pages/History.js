import React, { useState, useEffect } from "react";

const History = () => {
  useEffect(() => {
    try {
      let history = localStorage.getItem("searchHistory");
      if (history === null) {
        return undefined;
      }
      sethistoryResult(JSON.parse(history));
    } catch (err) {
      console.log(err);
    }
  }, []);
  const [historyResult, sethistoryResult] = useState([]);
  return (
    <div>
      <h1>History</h1>
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-table mr-1"></i>
          Display History
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
                  <th>Keyword</th>
                </tr>
              </thead>

              <tbody>
                {historyResult.map((item) => {
                  return (
                    <tr key={item}>
                      <td>{item}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
