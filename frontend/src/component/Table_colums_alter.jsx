import React, { useEffect, useState, useRef } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Input, Checkbox, Button } from "antd";
import ALL_PROFILE_COLUMNS from "../context/propfile_colums";

const Table_colums_alter = ({ columns, setColumns }) => {
  const [alterArray, setAlterArray] = useState(ALL_PROFILE_COLUMNS);
  const [searchValue, setSearchValue] = useState("");
  let checked = new Array(ALL_PROFILE_COLUMNS.length).fill(true);
  const [_, setIsDragging] = useState(false);
  const onDragStart = (e) => {
    setIsDragging(true);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("checkbox", e.target.id);
  };
  let dropIndex = 0;
  const onDragOver = (e) => {
    e.preventDefault();
    dropIndex = e.target.id;
  };
  const onDrop = (e) => {
    e.target.style.display = "block";
    e.preventDefault();
    setIsDragging(false);
    const movingTarget = e.dataTransfer.getData("checkbox"); // 1
    const item = alterArray.splice(movingTarget, 1);
    alterArray.splice(dropIndex, 0, item[0]);
  };
  console.log(alterArray);

  const onChange = (e) => {
    // setAlterArray(alterArray.filter((a) => a !== e.map((b) => b)));
    // let a = e.map((a) => {
    //   return {
    //     title: a,
    //     dataIndex: a,
    //     key: a,
    //   };
    // });
    // setColumns(a);
    // const a = e;
    // ALL_PROFILE_COLUMNS = e;
    // // checked[e.target.id] = !checked[e.target.id];
    // if (e.target.checked === false) {
    //   const item = ALL_PROFILE_COLUMNS.splice(e.target.id, 1);
    //   ALL_PROFILE_COLUMNS.splice(ALL_PROFILE_COLUMNS.length, 0, item[0]);
    // }
  };
  console.log(ALL_PROFILE_COLUMNS);
  useEffect(() => {
    let a = alterArray.map((a) => {
      return {
        title: a,
        dataIndex: a,
        key: a,
      };
    });
    setColumns(a);
  }, [alterArray]);
  return (
    <div>
      <Input
        placeholder="검색"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <Checkbox.Group
        onDragOver={onDragOver}
        onChange={onChange}
        style={{ display: "flex", flexDirection: "column" }}
        defaultValue={ALL_PROFILE_COLUMNS}
      >
        {ALL_PROFILE_COLUMNS.filter((item) => {
          if (searchValue === "") {
            return item;
          } else if (item.includes(searchValue)) {
            return item;
          }
        }).map((item, idx) => {
          return (
            <div
              id={idx}
              key={item}
              draggable={true}
              onDragStart={onDragStart}
              onDrop={onDrop}
              style={{ border: "solid gray 1px" }}
            >
              <Checkbox
                id={idx}
                // onChange={onChange}
                checked={checked[idx]}
                value={item}
              >
                {item}
              </Checkbox>
              {/* {checked[idx] === true ? (
                <Button type="text" icon={<MenuOutlined />}></Button>
              ) : null} */}
            </div>
          );
        })}
      </Checkbox.Group>
    </div>
  );
};

export default Table_colums_alter;
