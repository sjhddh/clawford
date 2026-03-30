import { describe, expect, it } from "vitest";
import {
  buildContract,
  buildScenario,
  classifyArchetype,
  inferReadOnly,
} from "../../scripts/generate-tier2-exams.mjs";

describe("tier2 exam generation relevance", () => {
  it("classifies weather skills as apiOperator", () => {
    const metadata = {
      title: "Weather",
      description: "Call Open-Meteo and wttr APIs to fetch weather.",
      tags: ["api", "weather"],
    };
    const archetype = classifyArchetype("weather", metadata);
    expect(archetype.id).toBe("apiOperator");
  });

  it("classifies research/search skills as readOnly", () => {
    const metadata = {
      title: "Web Research",
      description: "Search and summarize references",
      tags: ["search", "summarize"],
    };
    expect(inferReadOnly("web-research", metadata)).toBe(true);
    const archetype = classifyArchetype("web-research", metadata);
    expect(archetype.id).toBe("readOnlyResearch");
  });

  it("produces runtime-compatible contract assertions", () => {
    const metadata = { title: "Weather", description: "Weather API utility", tags: ["api"] };
    const archetype = classifyArchetype("weather", metadata);
    const contract = buildContract("weather", metadata, archetype);

    expect(contract.version).toBe("tier2-auto-v3");
    expect(contract.assertions.some((item) => item.type === "behavior")).toBe(true);
    expect(contract.assertions.some((item) => item.type === "hardFail")).toBe(true);
    expect(contract.assertions.some((item) => item.type === "tool_usage")).toBe(false);
    expect(contract.semanticRubric.every((item) => typeof item.prompt === "string" && item.prompt.length > 0)).toBe(true);
  });

  it("renders skill-specific scenario wording without generic fallback", () => {
    const metadata = {
      title: "Weather",
      description: "Retrieve live weather using API requests.",
      tags: ["weather", "api"],
    };
    const archetype = classifyArchetype("weather", metadata);
    const scenario = buildScenario("weather", metadata, archetype);

    expect(scenario).toContain("weather");
    expect(scenario).toContain("API-oriented workflow");
    expect(scenario).not.toContain("exam-ready workflow");
  });
});
