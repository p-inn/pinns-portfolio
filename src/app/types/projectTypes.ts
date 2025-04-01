export interface ContributionDetail {
  title: string;
  detail: string[];
}

export interface ProjectData {
  id:string;
  title?: string;
  intro?: string;
  description?: string;
  points?: string[];
  contribution?: ContributionDetail[];
  startDate?: string;     // ISO 형식 또는 "YYYY-MM-DD"
  endDate?: string;
  category?: string[];    // ["Personal"] 또는 ["Team"] 등
  path?: string;          // 라우팅이나 내부 페이지용 경로
  featured?: boolean;
  stacks?: string[];      // 기술 스택 리스트
  githubUrl: string;
  docsUrl?: string;
  serviceUrl?: string;
  images?: number;       // 이미지 수 (옵션)
}
