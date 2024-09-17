import React from "react";
import { Link } from "react-router-dom";

const defaultImage = "https://via.placeholder.com/80x60?text=80 X 60";

const headerOfTable = [
  { label: "ID", value: "id" },
  { label: "Image", value: "image" },
  { label: "Name", value: "name" },
  { label: "Category", value: "category" },
  { label: "Price", value: "price" },
  { label: "Edit Btn", value: "" },
  { label: "Delete Btn", value: "" },
];

const Table = ({ data, deleteHandle }) => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          {headerOfTable.map((header, index) => (
            <th
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                color: "#284359",
                textAlign: "left",
                textTransform: "capitalize",
              }}
            >
              {header.value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "7px 12px",
                minWidth: "20px",
              }}
            >
              {item.id}
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "7px 14px",
                minWidth: "100px",
                display:"flex",
                justifyContent:"center"
              }}
            >
              <img
                src={item.image || defaultImage}
                alt={item.title}
                style={{ width: "80px", height: "60px"}}
              />
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "7px 12px",
                minWidth: "100px",
              }}
            >
              {item.title}
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "7px 12px",
                minWidth: "100px",
              }}
            >
              {item.category}
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "7px 12px",
                minWidth: "100px",
              }}
            >
              {item.price}
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "7px 12px",
                minWidth: "60px",
              }}
            >
              <Link to={`/edit/${item.id}`} className="table-button">Edit</Link>
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "7px 12px",
                minWidth: "60px",
              }}
            >
              <button
                onClick={() => {
                  deleteHandle(item.id);
                }}
                className="table-button delete-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

