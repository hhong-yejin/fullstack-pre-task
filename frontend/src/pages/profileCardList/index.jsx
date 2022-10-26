import React, { useEffect, useCallback } from "react";
import GridTable from "../../component/Table";
import useAxios from "../../context/hooks/useAxios";

import "./index.scss";

const ProfileCardList = () => {
  const { request } = useAxios();

  const fetchProfileList = useCallback(async () => {
    const response = await request({
      method: "GET",
      url: "/api/profile-card",
    });

    console.log("[response]", response);
  }, []);

  useEffect(() => {
    fetchProfileList();
  }, []);

  const onClick = useCallback(async () => {
    const response = await request({
      method: 'POST',
      url: '/api/profile-card',
      data: {
        name: 'jake',
        nickname: 'jake',
        phoneNumber: '010-1111-1111',
        email: 'jake@jober.io',
        birth: '2003-00-00',
        address: 'korea',
        gender: 'man',
      }
    });

    if (!response || response.data) return;

    console.log('[response]', response);
  }, []);

  return (
    <div className="profile-card-list">
      <h1>연락처 목록</h1>
      <p>
        <a
          href="https://jober.notion.site/fa8af8dfd86640e9aa7d375e8f91868d"
          target="_blank"
        >
          사전과제 페이지
        </a>
        <Button onClick={onClick}>저장</Button>
        에 안내된 내용대로 연락처 목록 및 연락처 상세페이지를 구현해주세요.
      </p>
      <GridTable />
    </div>
  );
};

export default ProfileCardList;
