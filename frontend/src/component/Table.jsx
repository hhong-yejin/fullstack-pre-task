import React, { useState } from "react";
import { SearchOutlined, TableOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, Table } from "antd";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import ALL_PROFILE_COLUMNS from "../context/propfile_colums";
import Table_colums_alter from "./Table_colums_alter";
import InsertRow from "./InsertRow";

const GridTable = ({ response }) => {
  const [rowData, setRowData] = useState([
    { 이름: "홍예진", 닉네임: "예징이", 전화번호: "010-9347-3877" },
    { 이름: "ㅇㅇㅇ", 닉네임: "ㅇㅇㅇ" },
  ]);
  const [columns, setColumns] = useState(
    ALL_PROFILE_COLUMNS.map((a) => {
      return { title: a, dataIndex: a, key: a };
    })
  );
  const [alterBar, setAlterBar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  // 검색란부터 만들기
  return (
    <div>
      <InsertRow />
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
