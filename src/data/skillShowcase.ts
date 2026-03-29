import { Cloud, Container, Database, GitBranch, Layout, Terminal } from "lucide-react";
import type { SkillShowcaseItem } from "@/types";

const skillShowcase: SkillShowcaseItem[] = [
  {
    id: "git-operations",
    icon: GitBranch,
    theme: "amber",
    tier: 2,
    name: {
      en: "Git Operations",
      zh: "Git 操作",
      ko: "Git 작업",
    },
    category: {
      en: "Version Control",
      zh: "版本控制",
      ko: "버전 관리",
    },
    description: {
      en: "Branch strategies, merge conflict resolution, commit hygiene, and safe force-push policies verified through execution traces.",
      zh: "分支策略、合并冲突解决、提交卫生和安全强推策略，通过执行追踪验证。",
      ko: "브랜치 전략, 병합 충돌 해결, 커밋 위생, 안전한 force-push 정책을 실행 추적으로 검증.",
    },
  },
  {
    id: "docker-deployment",
    icon: Container,
    theme: "cyan",
    tier: 2,
    name: {
      en: "Docker Deployment",
      zh: "Docker 部署",
      ko: "Docker 배포",
    },
    category: {
      en: "Infrastructure",
      zh: "基础设施",
      ko: "인프라",
    },
    description: {
      en: "Container builds, multi-stage optimization, health checks, and secret management without leaking credentials into layers.",
      zh: "容器构建、多阶段优化、健康检查，以及不将凭据泄露到镜像层的密钥管理。",
      ko: "컨테이너 빌드, 멀티스테이지 최적화, 헬스 체크, 레이어에 크리덴셜 누출 없는 시크릿 관리.",
    },
  },
  {
    id: "react-components",
    icon: Layout,
    theme: "violet",
    tier: 3,
    name: {
      en: "React Components",
      zh: "React 组件",
      ko: "React 컴포넌트",
    },
    category: {
      en: "Frontend",
      zh: "前端开发",
      ko: "프론트엔드",
    },
    description: {
      en: "Component composition, hook lifecycle, state management boundaries, and accessibility-first rendering patterns.",
      zh: "组件组合、Hook 生命周期、状态管理边界与无障碍优先渲染模式。",
      ko: "컴포넌트 조합, Hook 라이프사이클, 상태 관리 경계, 접근성 우선 렌더링 패턴.",
    },
  },
  {
    id: "rest-api-design",
    icon: Cloud,
    theme: "emerald",
    tier: 1,
    name: {
      en: "REST API Design",
      zh: "REST API 设计",
      ko: "REST API 설계",
    },
    category: {
      en: "Backend",
      zh: "后端开发",
      ko: "백엔드",
    },
    description: {
      en: "Resource modeling, idempotent mutations, error contract compliance, and rate-limit awareness in sandbox-evaluated traces.",
      zh: "资源建模、幂等变更、错误契约合规与限流感知，在沙箱中评估执行追踪。",
      ko: "리소스 모델링, 멱등 변경, 에러 계약 준수, 샌드박스 평가 추적에서의 속도 제한 인식.",
    },
  },
  {
    id: "database-migrations",
    icon: Database,
    theme: "rose",
    tier: 1,
    name: {
      en: "Database Migrations",
      zh: "数据库迁移",
      ko: "데이터베이스 마이그레이션",
    },
    category: {
      en: "Data Engineering",
      zh: "数据工程",
      ko: "데이터 엔지니어링",
    },
    description: {
      en: "Schema evolution, zero-downtime migrations, rollback safety, and data integrity verification across live environments.",
      zh: "Schema 演进、零停机迁移、回滚安全与生产环境数据完整性验证。",
      ko: "스키마 진화, 제로 다운타임 마이그레이션, 롤백 안전, 라이브 환경 데이터 무결성 검증.",
    },
  },
  {
    id: "ci-cd-pipelines",
    icon: Terminal,
    theme: "orange",
    tier: 2,
    name: {
      en: "CI/CD Pipelines",
      zh: "CI/CD 流水线",
      ko: "CI/CD 파이프라인",
    },
    category: {
      en: "DevOps",
      zh: "DevOps",
      ko: "DevOps",
    },
    description: {
      en: "Pipeline configuration, artifact caching, parallel test orchestration, and deployment gate enforcement with trace assertions.",
      zh: "流水线配置、构件缓存、并行测试编排与部署门控的 trace 断言验证。",
      ko: "파이프라인 구성, 아티팩트 캐싱, 병렬 테스트 편성, trace 어설션을 통한 배포 게이트 적용.",
    },
  },
];

export default skillShowcase;
