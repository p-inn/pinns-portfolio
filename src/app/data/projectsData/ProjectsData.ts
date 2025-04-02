import { ProjectData } from "@/app/types/projectTypes";

export const projects: ProjectData[] = [
{
    id: "bw-table",
    title: "BW Table",
    intro: "고객과 사장님을 위한 완벽한 외식 솔루션",
    description:
      `BW Table은 외식 문화를 더 스마트하게 만들기 위해 기획된 실시간 예약 및 고객 맞춤형 외식 플랫폼입니다.
    고객은 실시간으로 예약 가능 여부를 확인하고, 해시태그나 메뉴 기반으로 원하는 식당을 쉽게 탐색할 수 있으며,
    사장님은 예약 내역을 손쉽게 관리하고, 실시간 채팅을 통해 고객 요청에 빠르게 대응할 수 있도록 설계하였습니다.`,
    points: [
      "실시간 예약 현황 확인 및 예약 일정 관리",
      "업종, 메뉴, 해시태그를 기반으로 식당 검색 및 추천",
      "실제 고객만 리뷰를 작성할 수 있는 클린 리뷰 시스템",
      "예약 고객에 한해 고객-사장님 간 1:1 실시간 채팅 가능",
      "아임포트를 활용한 예약금 결제 시스템을 도입하여 노쇼 방지",
    ],
    contribution: [
      {
        title: "컴포넌트 개발 및 문서화",
        detail: ["공통 UI 요소를 Storybook으로 개발 및 정리"]
      },
      {
        title: "결제 시스템 구현",
        detail: ["아임포트 연동 및 결제 상태 관리"]
      },
      {
        title: "사용자 그룹별 폴더 구조 설계",
        detail: ["Next.js의 레이아웃 및 패러럴 라우트 사용"]
      },
      {
        title: "데이터 최적화 및 인증",
        detail: [
          "정적/준정적 데이터 분리 및 프리패칭",
          "NextAuth + Axios 인터셉터로 인증 개선"
        ]
      },
      {
        title: "실시간 채팅 구현",
        detail: ["SockJS와 StompJS를 활용"]
      }
    ],
    startDate: "2024-10-17",
    endDate: "2024-12-31",
    category: ["Team"],
    path: "/images/bw-table.png",
    featured: true,
    stacks: ["React",  "NextJS", "Typescript", "vercel",  "zustand", "react-query", "TailwindCSS", "Storybook", "msw", "react-hook-form"],
    githubUrl: "https://github.com/bw-table/bw-table-front",
    docsUrl: "https://www.notion.so/BW-Table-16e030096c0c80f29185dda32c4fe50c?pvs=21",
    serviceUrl: "",
    images: [
      "/images/BWT/흑백테이블1.png",
      "/images/BWT/흑백테이블2.png",
      "/images/BWT/흑백테이블3.png",
      "/images/BWT/흑백테이블4.png",
      "/images/BWT/흑백테이블5.png",
      "/images/BWT/흑백테이블6.png",
      "/images/BWT/흑백테이블7.png",

    ]
  },  
  {
    id: "hoops",
    title: "HOOPS",
    intro: "1인 농구 플레이어를 위한 농구 플랫폼",
    description:
      `혼자 농구를 즐기는 사람들을 위한 매칭 플랫폼입니다.
    사용자들이 지도에서 가까운 농구장을 확인하고, 함께할 팀원을 모집해 손쉽게 경기 일정을 생성할 수 있으며
    실시간 채팅과 팀원 평가 시스템을 통해 신뢰도 높은 소통 환경을 조성하고, 즐거운 농구 커뮤니티 문화를 형성합니다.`,
    points: [
      "원하는 시간과 장소에 맞춰 농구 경기를 생성하고 참여자를 모집할 수 있는 경기 주최 기능",
      "경기장을 직접 방문하지 않아도 참여자를 손쉽게 모집할 수 있는 비대면 매칭 시스템",
      "친구 추가 기능을 통한 커뮤니티 기반의 소셜 네트워킹 강화",
      "비매너 사용자 제한 및 신고 기능을 통한 신뢰 기반의 클린 매칭 환경 조성",
      "경기 세부 정보를 미리 고지하여 효율적인 경기 운영 유도"
    ],
    contribution: [
      {
        title: "JWT 토큰 자동 갱신",
        detail: [
          "Axios 인터셉터로 모든 요청에 JWT 자동 첨부",
          "401 에러 시 토큰 갱신 로직 구현"
        ]
      },
      {
        title: "카카오 소셜 로그인",
        detail: [
          "OAuth 인증 후 URI 불일치 문제 해결",
          "동기화 및 재요청 로직 구현으로 로그인 성공률 향상"
        ]
      },
      {
        title: "SEO 및 UI 개선",
        detail: [
          "SSR 적용으로 메타 태그 설정",
          "공통 컴포넌트 설계로 디자인 일관성 유지"
        ]
      }
    ],
    startDate: "2024-04-18",
    endDate: "2024-05-30",
    category: ["Team"],
    path: "/images/hoops.png",
    featured: true,
    stacks: ["react", "typescript", "vercel", "zustand", "react-query", "mui", "styledComponents", "react-hook-form"],
    githubUrl: "https://github.com/hoops-project/frontend/tree/main",
    docsUrl: "https://www.notion.so/Hoops-175030096c0c804a8de4f5e74d5b885e?pvs=21",
    serviceUrl: "",
    images: [
      "/images/HOOPS/hoops.png",
      "/images/HOOPS/hoops1.png",
      "/images/HOOPS/hoops2.png",
      "/images/HOOPS/hoops3.png",
      "/images/HOOPS/hoops4.png",
    ]
  },

  {
    id: "dbz-dongbanza",
    title: "DBZ",
    intro: "동네 반려동물 찾자, 동반자",
    description:
      `DBZ는 실종된 반려동물을 빠르게 찾을 수 있도록 돕는 지역 기반 플랫폼입니다. 사용자는 실종 위치를 등록하고, 주변 사용자들은 목격 정보를 지도에 핀으로 남겨 실시간으로 공유할 수 있습니다. 사진과 글을 포함한 목격 핀 기능, 채팅을 통한 소통으로 효과적인 정보 공유가 가능합니다. UI/UX 설계부터 프론트엔드 전반을 주도하였고 프로젝트 종료 후 Firebase 기반으로 프로젝트를 마무리하였습니다.`,
    points: [
      "반려동물 실종 게시물 작성",
      "반려동물 실종 게시물 내 사진과 목격담을 포함하는 지도 핀 등록 가능",
      "반려동물이 실종된 장소 기반 정보 공유 가능",
      "실시간 채팅을 통해 사용자간 빠른 소통",
    ],
    contribution: [
      {
        title: "지도 기반 기능 구현",
        detail: [
          "카카오 API를 활용한 위치 핀 등록",
          "FormData + 객체 변환으로 이미지 & 데이터 동시 전송 구현"
        ]
      },
      {
        title: "실시간 채팅 구현",
        detail: [
          "SockJS + StompJS 채팅 시스템 구현",
          "Vite 설정 변경으로 전역 객체 충돌 해결"
        ]
      },
      {
        title: "UI/UX 설계 및 협업",
        detail: [
          "기획 주도, 사용자 흐름 설계 및 프로젝트 방향성 설정",
          "배포 오류 해결 및 효율적 개발 환경 구축"
        ]
      }
    ],
    startDate: "2024-02-19",
    endDate: "2024-04-30",
    category: ["Team"],
    path: "/images/DBZ.png",
    featured: true,
    stacks: ["react", "typescript", "recoil", "react-query", "tailwindcss", "daisyUI", "vercel", "msw", "firebase"],
    githubUrl: "https://github.com/SamCoMo/DBZ-Front-End",
    docsUrl: "https://www.notion.so/DBZ-113030096c0c8063b724e01e519fd98b?pvs=21",
    serviceUrl: "",
    images: [
      "/images/DBZ/동반자1.png",
      "/images/DBZ/동반자2.png",
      "/images/DBZ/동반자3.png",
      "/images/DBZ/동반자4.png",
      "/images/DBZ/동반자5.png",
      "/images/DBZ/동반자6.png",

    ]
  },
  {
    id: "pinns-portfolio",
    title: "Pinn's portfolio",
    intro: "Next.js로 만드는 개인 포트폴리오",
    description:
      `프론트엔드 개발자를 준비하면서 나만의 색을 드러낼 수 있으면 좋겠다는 생각에 포트폴리오 사이트를 제작하게 되었습니다.
    진행했던 프로젝트, 프론트엔드 개발 스택 등을 한번에 편리하게 확인할 수 있도록 설계하였습니다. 전체적으로 깔끔하고 간결하게 보이도록 디자인을 구상하였고 , UX와 내용 구성을 신경쓰며 진행했습니다.`,
    points: [
      "다양한 기기나 화면의 크기에 따라 자동으로 맞춤 렌더링이 되도록 반응형 웹 디자인을 구현함.",

    ],
    contribution: [],
    startDate: "2024-04-18",
    endDate: "진행중",
    category: ["personal"],
    path: "/pinn-profile.png",
    featured: true,
    stacks: ["React", "Typescript", "NextJS", "vercel", "TailwindCSS"],
    githubUrl: "https://github.com/p-inn/pinns-portfolio",
    docsUrl: "",
    serviceUrl: "",
    images: []
  },
]