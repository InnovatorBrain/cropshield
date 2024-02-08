import "./Insurance.css"
import React from 'react';

const DeleteCategory = ({ categories }) => {
  return (
    <div className="container">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h4 className="text-center">Delete Category</h4>
        </div>
        <table className="table table-hover table-bordered table-striped" id="dev-table">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Creation Date</th>
              <th>Delete Category</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{category.category_name}</td>
                <td>{category.creation_date}</td>
                <td>
                  <a className="btn btn-danger btn-sm" href={`delete-category/${category.id}`}>
                    <span className="fa fa-trash"></span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteCategory;
