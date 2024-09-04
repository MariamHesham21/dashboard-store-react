import React from "react";
import { MdDeleteForever } from "react-icons/md";

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
                padding: "12px",
                minWidth: "20px",
              }}
            >
              {item.id}
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                minWidth: "100px",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "80px", height: "54px", objectFit: "cover" }}
              />
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                minWidth: "100px",
              }}
            >
              {item.title}
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                minWidth: "100px",
              }}
            >
              {item.category}
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                minWidth: "100px",
              }}
            >
              {item.price}
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                minWidth: "60px",
              }}
            >
              <button className="table-button">Edit</button>
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "12px",
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
