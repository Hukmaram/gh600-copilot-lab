# GitHub Copilot Repository Instructions

## Repository Purpose
This is a learning and experimentation repository for GitHub Copilot development practices and features. It serves as a lab environment for testing Copilot integration patterns and best practices.

## Project Structure
```
.
├── .github/
│   ├── copilot-instructions.md   (this file)
│   └── workflows/                 (GitHub Actions workflows)
├── src/                           (source code)
├── tests/                         (test suites)
├── docs/                          (documentation)
├── package.json                   (Node.js dependencies, if applicable)
└── README.md                      (project overview)
```

## Coding Conventions
- Use clear, descriptive variable and function names
- Include JSDoc/TSDoc comments for public APIs
- Follow language-specific formatting standards (Prettier for JS/TS, etc.)
- Keep functions focused and under 50 lines when possible
- Use meaningful commit messages (imperative mood, clear scope)

## Development Workflow
1. Create a feature branch from `main`: `git checkout -b feature/description`
2. Make focused, atomic commits
3. Write or update tests alongside code changes
4. Submit a pull request with a clear description
5. Ensure all CI checks pass before merging
6. Use squash merge for feature branches to keep history clean

## Build Commands
```bash
# Install dependencies
npm install

# Build project (if applicable)
npm run build

# Start development server (if applicable)
npm run dev
```

## Test Commands
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Important Architectural Conventions
- Separate concerns: keep API handlers, business logic, and data models distinct
- Use environment variables for configuration (documented in `.env.example`)
- Follow the repository's existing directory structure for new features
- Maintain backward compatibility where possible
- Document breaking changes prominently in PRs

## Expectations for Making Changes
- **Before coding:** Check existing issues and PRs to avoid duplicate work
- **During development:** Keep changes focused to a single feature or fix
- **In pull requests:** Provide context and rationale for changes
- **Code review:** Be responsive to feedback and explain design decisions
- **Testing:** Ensure new features include appropriate test coverage (aim for 80%+)
- **Documentation:** Update README or docs/ if behavior or setup changes
- **Performance:** Consider impact of changes on existing performance
- **Dependencies:** Minimize new dependencies; document the rationale if added

## Quick Links
- **Documentation:** See `docs/` directory
- **Issues:** Report bugs or request features on GitHub Issues
- **Discussions:** Use GitHub Discussions for design decisions and questions

---

*These instructions are for Copilot-assisted development. Update as the project evolves.*
