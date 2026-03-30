import { describe, expect, it } from "vitest";
import { planFoundationsModuleCompletion } from "../../shared/course-catalog.js";

describe("planFoundationsModuleCompletion", () => {
  it("blocks modules whose prerequisites are missing", () => {
    const plan = planFoundationsModuleCompletion(["FND-108"], []);
    expect(plan.accepted).toEqual([]);
    expect(plan.blocked).toEqual([
      {
        moduleId: "FND-108",
        missingPrerequisites: ["FND-101", "FND-102", "FND-103", "FND-104", "FND-105", "FND-106", "FND-107"],
      },
    ]);
    expect(plan.nextEligible).toEqual(["FND-101"]);
  });

  it("accepts a batch once prerequisites are satisfied in catalog order", () => {
    const plan = planFoundationsModuleCompletion(
      ["FND-108", "FND-101", "FND-103", "FND-102", "FND-107", "FND-104", "FND-105", "FND-106"],
      [],
    );
    expect(plan.accepted).toEqual(["FND-101", "FND-102", "FND-103", "FND-104", "FND-105", "FND-106", "FND-107", "FND-108"]);
    expect(plan.blocked).toEqual([]);
  });
});
