# fullstack-pre-task
자버 풀스택엔지니어의 사전과제용 repository 입니다.
상세 과제 내용은 [링크](https://www.notion.so/jober/fa8af8dfd86640e9aa7d375e8f91868d#aaf770489c7c4d2cafa97689840071e7)를 통해 확인 할 수 있습니다.

- 실행방법 (root 디렉토리에서)
  - `docker compose -p fullstack-pre-task -f docker-compose.yml up --build`
- 종료 방법
  - 컨테이너가 실행중인 터미널에서 `ctl + c` 명령어를 통해 컨테이너 종료
- 컨테이너 삭제
  - /scripts 하위의 sql 파일이 업데이트 되면 도커 볼륨을 제거 후 다시 마운팅 해야 하므로 docker compose down 으로 컨테이너를 내리고 다시 실행시켜 주세요.  
  - `docker compose -p fullstack-pre-task down`
