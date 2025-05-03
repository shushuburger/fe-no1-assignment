# fe-no1-assignment
카카오테크캠퍼스 1차 과제

## 필수 기능
**1. TMDB API 연동**
- TMDB API에서 데이터를 fetch API로 가져오고, API 키를 통해 데이터 요청을 처리한 다음 데이터를 받아와서 콘솔에서 출력해 확인하였습니다.
- API 키를 config.js 파일을 통해 별도로 적절히 보관하였으며, API 호출 시 정확한 경로와 파라미터를 사용하였습니다.
(config.js는 key가 들어있기에 git에 업로드하지 않았습니다.)

**2. 영화 카드 리스트 UI 구현**
- 영화 포스터, 제목, 평점, 요약 등의 정보를 포함한 영화 카드 리스트 UI를 HTML과 CSS로 구현하였습니다.
    
**3. 영화 검색 기능**
- 사용자가 입력한 검색어로 영화 목록을 필터링하는 검색 기능을 구현하였습니다.
- 검색어 입력 후 버튼 클릭으로 검색을 실행합니다.
- 검색어와 관련된 영화만 화면에 나타나도록 필터링 로직을 제대로 구현하였습니다.
    
**4. 영화 상세 모달 구현**
- 각 영화 카드를 클릭했을 때, 해당 영화의 ID로 TMDB API에서 상세 정보를 받아와 화면에 표시합니다.
- 모달로 영화 상세 정보를 표시하고, 'X' 아이콘을 통해 뒤로 가기 기능도 구현하였습니다.

## 도전 기능
**Lv1. 모듈화 및 코드 분리**
- **API 요청 로직**과 **UI 업데이트 로직**을 각각의 파일로 분리하여 **모듈화**하였습니다. (api.js, ui.js, main.js, config.js로 분리하였습니다.)

**Lv1. 영화 검색 기능**
- Enter 키로 검색을 실행해도 버튼 클릭과 동일한 결과가 나올 수 있도록 적절한 tag를 사용했습니다.

**Lv2. 로컬 저장소 활용한 ‘북마크’ 기능**
- 관심 있는 영화들을 ‘북마크’ (혹은, ‘좋아요’) 할 수 있는 기능을 구현하였습니다.
- "북마크" 버튼을 눌렀을 때, `localStorage` 에 관련 데이터를 저장하게 합니다.
- "찜리스트" 버튼을 누르면 북마크에 저장되어 있는 데이터를 카드 형식으로 확인해볼 수 있으며 북마크에서 제거도 가능합니다.

**Lv2. async/await로 API 호출 리팩터링**
- async/await 문법을 사용하여 진행행해보았습니다.

## 동작 화면
1) 시작 화면
- 인기 영화가 자동으로 렌더링됩니다.
- 영화 정보를 console.log로 출력하도록 해두었습니다.
![image](https://github.com/user-attachments/assets/c3526b68-72c1-42c7-8faf-448ff3214fad)
![image](https://github.com/user-attachments/assets/f790e9cc-8b94-416a-b2c6-70d7d6901265)

2) 검색 화면
- 검색 결과에 해당하는 영화가 자동으로 렌더링됩니다.
- 영화 정보를 console.log로 출력하도록 해두었습니다.
- 엔터와 버튼 클릭을 통해 검색이 가능합니다.
![image](https://github.com/user-attachments/assets/46cc2694-22b8-47c8-b864-3075902a6b34)

3) 상세정보 화면
- "상세정보" 버튼을 클릭하면 모듈이 열립니다.
- 영화에 대한 상세 정보를 표시합니다.
- 'x' 아이콘을 통해 뒤로 갈 수 있습니다.
![image](https://github.com/user-attachments/assets/aec92420-8d02-49c6-b811-e3c1d2f0714d)

4) 북마크 추가
- "북마크" 버튼을 누르면 alert이 뜨면서 localStorage에 저장됩니다.
- 이미 북마크에 등록되어 있을 경우 "이미 등록되었다"라는 알림이 뜹니다.
![image](https://github.com/user-attachments/assets/8e015062-1a89-4df7-a8f7-fd06a6a73027)
![image](https://github.com/user-attachments/assets/bea4735d-a392-430e-974b-d8d1784076ed)

5) 북마크 화면
- "찜리스트" 버튼을 누르면 localStorage에 저장되어 있는 영화들이 카드로 렌더링됩니다.
![image](https://github.com/user-attachments/assets/92d32ccd-b660-49f5-8eb1-f9a945ce97b8)

6) 북마크 제거
- "북마크 삭제" 버튼을 누르면 화면과 localStorage 둘 다에서 영화에 대한 정보가 사라집니다.
![image](https://github.com/user-attachments/assets/341b0308-2237-48b1-80da-7d1d3ed71805)

7) 홈으로 돌아가기
- "홈" 버튼을 누르면 제일 처음 화면인 인기 영화 화면으로 돌아가며 검색창에 입력되어 있던 글자도 사라집니다.
![image](https://github.com/user-attachments/assets/c68ae778-4f2d-4d32-ba8a-ee1bdb1c0bba)

