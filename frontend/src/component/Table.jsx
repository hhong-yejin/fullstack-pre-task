import React, { useState } from "react";
import { SearchOutlined, TableOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, Table } from "antd";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import ALL_PROFILE_COLUMNS from "../context/propfile_colums";
import Table_colums_alter from "./Table_colums_alter";

const GridTable = () => {
  const [rowData, setRowData] = useState([
    { 이름: "홍예진", 닉네임: "예징이" },
  ]);
  const [columns, setColumns] = useState([
    {
      title: "이름",
      dataIndex: "이름",
      key: "이름",
    },
    {
      title: "닉네임",
      dataIndex: "닉네임",
      key: "닉네임",
    },
  ]);
  const [alterBar, setAlterBar] = useState(false);
  console.log(columns);
  return (
    <div>
      <h1>dd</h1>
      <Button
        onClick={() => setAlterBar(!alterBar)}
        type="text"
        icon={<TableOutlined />}
      >
        표 편집
      </Button>
      <Button icon={<SearchOutlined />}>Search</Button>

      <Table columns={columns} dataSource={rowData} />
      {alterBar ? (
        <Table_colums_alter columns={columns} setColumns={setColumns} />
      ) : null}
    </div>
  );
};

export default GridTable;
