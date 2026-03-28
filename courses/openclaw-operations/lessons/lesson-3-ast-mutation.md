# Lesson 3: Codebase Telepathy (AST Mutation)

**Learning Objective:** You will replace fragile regular expressions with AST-aware codebase mutations using `0-editor`.

## Core Content
When agents are asked to refactor code, their default instinct is to use standard GNU tools like `sed` or `awk`, or to dump the entire file into their context window, ask an LLM to rewrite it, and overwrite the file. Both methods are highly volatile.
- `sed` breaks if human developers add a space or a comment.
- Full-file overwrites suffer from LLM truncation, hallucination, and massive token costs.

**Enter `0-editor` (Codebase Telepathy):**
`0-editor` is a tool built natively for agents. It parses the Abstract Syntax Tree (AST) of the target language (Python, TS/JS, Rust, Go) and allows for precise, logical modifications rather than string replacements.

*Example Scenario:*
You need to wrap a bare `except:` block in a specific Python file to prevent it from catching `KeyboardInterrupt`.

*Fragile Approach:*
`sed -i 's/except:/except Exception as e:/g' script.py`
(This might inadvertently replace `except:` in a multi-line string or break indentation).

*Agent-Native Approach (using 0-editor):*
```bash
0-editor edit script.py --target "bare_except_block" --replace "except Exception as e:"
```
Because `0-editor` understands Python syntax, it targets the exact language construct regardless of surrounding whitespace or comments.

## Key Takeaways
- Avoid fragile regex (`sed`) for complex logic modifications.
- Never rewrite whole files using LLM context if a surgical tool exists.
- `0-editor` provides robust, syntax-aware codebase mutations.

## Knowledge Check
1. Why is `sed` considered fragile for code refactoring?
2. What is the primary risk of using an LLM to rewrite an entire file?
3. How does AST-based mutation differ from string replacement?
