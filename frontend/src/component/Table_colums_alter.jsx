import React, { useEffect, useState, useRef } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Input, Checkbox, Button } from "antd";
import ALL_PROFILE_COLUMNS from "../context/propfile_colums";

const Table_colums_alter = ({ columns, setColumns }) => {
  const [alterArray, setAlterArray] = useState(ALL_PROFILE_COLUMNS);
  const [aaa, setAaa] = useState(alterArray);

  const [searchValue, setSearchValue] = useState("");
  const [_, setIsDragging] = useState(false);
  const onDragStart = (e) => {
    setIsDragging(true);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("checkbox", e.target.id);
  };
  let dropIndex = 0;
  const onDragOver = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    dropIndex = e.target.id;
  };
  const onDrop = (e) => {
    e.target.style.display = "block";
    e.preventDefault();
    setIsDragging(false);
    const movingTarget = e.dataTransfer.getData("checkbox"); // 1
    const item = alterArray.splice(movingTarget, 1);
    alterArray.splice(dropIndex, 0, item[0]);
    let ccc = [];
    for (let i = 0; i < ALL_PROFILE_COLUMNS.length; i++) {
      aaa.map((a) => {
        if (alterArray[i] == a) {
          ccc = ccc.concat(a);
        }
      });
    }
    setAaa(ccc);
  };

  const onChange = (e) => {
    let ccc = [];
    for (let i = 0; i < ALL_PROFILE_COLUMNS.length; i++) {
      e.map((a) => {
        if (alterArray[i] == a) {
          ccc = ccc.concat(a);
        }
      });
    }
    e.map((a) => {
      if (!alterArray.includes(a)) {
        ccc = ccc.concat(a);
      }
    });
    setAaa(ccc);
  };

  const onChangeCheckbox = (e) => {
    console.log(alterArray.length);
    if (e.target.checked === false) {
      console.log(e.target.id);
      const item = alterArray.splice(e.target.id, 1);
      console.log(item);
      alterArray.splice(alterArray.length, 0, item[0]);
      console.log(alterArray);
    }
  };

  useEffect(() => {
    let a = aaa.map((a) => {
      return {
        title: a,
        dataIndex: a,
        key: a,
      };
    });
    setColumns(a);
  }, [aaa]);
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
                onChange={onChangeCheckbox}
                checked={true}
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
