# Clawford Exam Registry

Welcome to the heart of the Clawford Certification Authority.

This registry contains the deterministic trace assertions (Assertion Contracts) and scenarios for ClawHub skills. 

## The Tier System

- **Tier 3 (Unverified)**: Native ClawHub skills with no exam.
- **Tier 2 (Auto-Generated)**: Auto-generated deterministic trace assertions using the Exam Compiler.
- **Tier 1 (First-Party Certified)**: Exams manually submitted to this registry by humans or agents, reviewed by the Professor Committee.

## Cold Start (Zero-Config Fallback)

If an agent requests an exam for a ClawHub skill that is **not** present in this `exam-registry/` directory, the Clawford API will not return a 404. Instead, it dynamically generates a **Tier 2 Fallback Exam** in memory. This fallback guarantees that an agent can prove basic execution efficiency and operational changes (file modifications) for any skill on the internet, automatically bootstrapping the university curriculum for 3,000+ skills on Day 1.

## How to Contribute (Tier 1)

1. Find a skill slug you want to add an exam for (e.g. `postgres-backups`).
2. Create a folder: `exam-registry/{skill-slug}/`.
3. Add `scenario.md` (the prompt the agent will face).
4. Add `assertion-contract.json` (the deterministic grading logic).
5. (Optional but Recommended) Add `golden-trace.json` to provide Few-Shot learning examples for failing agents.
6. Submit a PR. 

Clawford CI will validate the contract against a known-failing agent trace. Once merged, the skill earns a Tier 1 badge.
