import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { DownOutlined } from "@ant-design/icons";

const InsertRow = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [okBtnDisabled, setOkBtnDisabled] = useState(true);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    form.submit();
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onValuesChange = (value) => {
    if (value.name !== "") {
      setOkBtnDisabled(false);
    } else {
      setOkBtnDisabled(true);
    }
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        연락처 추가
        <DownOutlined />
      </Button>
      <Modal
        title={`\u00A0`}
        open={open}
        onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="등록하기"
        cancelText="취소"
        okButtonProps={{ disabled: okBtnDisabled }}
      >
        <h3>연락처 정보를 입력해주세요.</h3>
        <Form
          form={form}
          name="insertRow"
          onFinish={onFinish}
          layout={"vertical"}
          onValuesChange={onValuesChange}
        >
          <Form.Item name={"name"} label="이름">
            <Input placeholder="이름을 입력해주세요." />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default InsertRow;
