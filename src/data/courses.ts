import { Bot } from "lucide-react";
import type { ElectiveCourse } from "@/types";

/**
 * Elective Course Registry
 *
 * Every community-contributed course that appears on the website must have
 * an entry here. See docs/CONTRIBUTING-COURSES.md for the full contribution
 * guide and PR checklist.
 *
 * Status values:
 *   "pending"  — submitted via PR, awaiting first-party review
 *   "reviewed" — approved by first-party, safe to display prominently
 */
const courses: ElectiveCourse[] = [
  // FLock 101 — submitted by Leo6 (FLock.io Operations Manager)
  {
    id: "flock-101",
    code: "FLK-101",
    title: {
      en: "FLock 101 — FLock.io University",
      zh: "FLock 101 — FLock.io 大学课程",
    },
    professor: {
      id: "leo6-flock",
      displayName: "Leo6",
      title: {
        en: "Operations Manager & Creative Lead",
        zh: "运营经理 & 创意总监",
      },
      organization: "FLock.io",
      github: "createpjf",
    },
    academyId: "flock-academy",
    icon: Bot,
    theme: "cyan",
    difficulty: "beginner",
    language: "Bilingual (EN/ZH)",
    totalDuration: "2-3 hours",
    credits: 10,
    summary: {
      en: "The World's First FLock University Course. Learn everything about FLock.io: federated learning, AI Arena, FL Alliance, FOMO, tokenomics, and the decentralized AI ecosystem.",
      zh: "世界首个 FLock 大学课程。学习 FLock.io 的一切：联邦学习、AI Arena、FL Alliance、FOMO、代币经济学和去中心化 AI 生态。中英双语。",
    },
    lessons: [
      { number: 1, code: "FLK-01", title: { en: "What is FLock.io?", zh: "什么是 FLock.io？" }, duration: "15 min" },
      { number: 2, code: "FLK-02", title: { en: "AI Arena — Decentralised AI Training", zh: "AI Arena — 去中心化 AI 训练" }, duration: "20 min" },
      { number: 3, code: "FLK-03", title: { en: "FL Alliance — Collaborative Fine-tuning", zh: "FL Alliance — 协作微调" }, duration: "15 min" },
      { number: 4, code: "FLK-04", title: { en: "FOMO — FLock Open Model Offering", zh: "FOMO — FLock 开放模型发行" }, duration: "20 min" },
      { number: 5, code: "FLK-05", title: { en: "FLock Tokenomics", zh: "FLock 代币经济学" }, duration: "15 min" },
      { number: 6, code: "FLK-06", title: { en: "API Platform & Developer Tools", zh: "API 平台与开发者工具" }, duration: "20 min" },
      { number: 7, code: "FLK-07", title: { en: "How to Participate", zh: "如何参与" }, duration: "15 min" },
    ],
    examIncluded: true,
    coursePath: "courses/flock-101",
    status: "pending",
  },
];

export default courses;
