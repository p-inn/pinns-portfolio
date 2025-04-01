import { ProjectData } from "@/app/types/projectTypes";

export const projects: ProjectData[] = [
{
    id: "bw-table",
    title: "BW Table",
    intro: "고객과 사장님을 위한 완벽한 외식 솔루션",
    description:
      "UI 컴포넌트 개발부터 결제 시스템, 실시간 채팅까지 통합한 외식 솔루션 플랫폼. 역할 기반 구조 및 프리패칭 전략으로 성능과 유지보수성 강화.",
    points: [
      "Storybook을 활용한 UI 컴포넌트 개발 및 문서화",
      "아임포트를 활용한 결제 시스템 구축",
      "Next.js 패러럴 라우트 기반 역할별 폴더 구조 설계",
      "React Query와 서버 컴포넌트를 통한 데이터 최적화",
      "NextAuth + HttpOnly 쿠키로 인증 로직 개선",
      "SockJS와 StompJS 기반 실시간 채팅 구현"
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
    stacks: ["React",  "NextJS", "Typescript", "zustand", "react-query", "TailwindCSS", "Storybook", "msw", "react-hook-form"],
    githubUrl: "https://github.com/bw-table/bw-table-front",
    docsUrl: "https://www.notion.so/BW-Table-16e030096c0c80f29185dda32c4fe50c?pvs=21",
    serviceUrl: "",
    images: 5
  },  
  {
    id: "hoops",
    title: "HOOPS",
    intro: "1인 농구 플레이어를 위한 농구 플랫폼",
    description:
      "농구에 의한, 농구를 위한 - Hoops는 1인 플레이어를 위한 농구 플랫폼입니다. JWT 자동 갱신, 카카오 소셜 로그인, SEO 및 UI 통일성 개선을 통해 사용자 경험을 극대화했습니다.",
    points: [
      "Axios 인터셉터를 활용한 JWT 자동 갱신으로 인증 실패율 감소 및 UX 개선",
      "카카오 소셜 로그인 구현 및 콜백 URI 동기화 로직 추가로 로그인 성공률 95% 이상",
      "Next.js SSR을 활용한 SEO 최적화 및 공통 컴포넌트를 통한 UI 통일성 확보"
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
    stacks: ["react", "typescript", "zustand", "react-query", "mui", "styledComponents", "react-hook-form"],
    githubUrl: "https://github.com/hoops-project/frontend/tree/main",
    docsUrl: "https://www.notion.so/Hoops-175030096c0c804a8de4f5e74d5b885e?pvs=21",
    serviceUrl: "",
    images: 5
  },

  {
    id: "dbz-dongbanza",
    title: "DBZ",
    intro: "동네 반려동물 찾자, 동반자",
    description:
      "실종 반려동물을 쉽게 찾고, 실시간으로 소통할 수 있는 지역 기반 반려동물 보호 플랫폼.",
    points: [
      "카카오 API를 활용한 핀 기반 위치 등록 기능 개발",
      "이미지 + 게시글 동시 등록을 위한 FormData 및 객체 변환 방식 적용",
      "StompJS/SockJS 기반 채팅 구현 및 Vite 설정으로 충돌 해결",
      "UI/UX 기획 및 사용자 흐름 설계 주도",
      "Vercel 배포 오류 해결을 통한 안정적 배포"
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
    stacks: ["react", "typescript", "recoil", "react-query", "tailwindcss", "daisyUI", "react-hook-form", "msw", "firebase"],
    githubUrl: "https://github.com/SamCoMo/DBZ-Front-End",
    docsUrl: "https://www.notion.so/DBZ-113030096c0c8063b724e01e519fd98b?pvs=21",
    serviceUrl: "",
    images: 5
  },
  {
    id: "pinns-portfolio",
    title: "Pinn's portfolio",
    intro: "Next.js로 만드는 개인 포트폴리오",
    description:
      "🍒•*¨*•.¸¸♪Next.js로 만드는 pinn의 포트폴리오•*¨*•.¸¸♪🍒",
    points: [
      "Axios 인터셉터를 활용한 JWT 자동 갱신으로 인증 실패율 감소 및 UX 개선",
      "카카오 소셜 로그인 구현 및 콜백 URI 동기화 로직 추가로 로그인 성공률 95% 이상",
      "Next.js SSR을 활용한 SEO 최적화 및 공통 컴포넌트를 통한 UI 통일성 확보"
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
    endDate: "진행중",
    category: ["personal"],
    path: "/pinn-profile.png",
    featured: true,
    stacks: ["React", "Typescript", "NextJS", "vercel", "TailwindCSS"],
    githubUrl: "https://github.com/p-inn/pinns-portfolio",
    docsUrl: "",
    serviceUrl: "",
    images: 5
  },
]