# Contributing to Vytreon Ecosystem

Thank you for considering contributing to the Vytreon Ecosystem! We welcome contributions from the community.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)
- [Testing](#testing)
- [Documentation](#documentation)

## Code of Conduct

By participating in this project, you agree to:
- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

### Prerequisites

- Node.js 18.x or 20.x
- npm (comes with Node.js)
- Git

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
```bash
git clone https://github.com/YOUR_USERNAME/Vytreon-Ecosystem.git
cd Vytreon-Ecosystem
```

3. Add upstream remote:
```bash
git remote add upstream https://github.com/vytreon/Vytreon-Ecosystem.git
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:8080`

## Development Workflow

### 1. Create a Branch

Always create a new branch for your work:

```bash
# Update main branch
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/bug-description
```

### 2. Make Your Changes

- Write clean, maintainable code
- Follow the existing code style
- Add comments for complex logic
- Update documentation as needed

### 3. Test Your Changes

```bash
# Run linter
npm run lint

# Build the project
npm run build

# Preview production build
npm run preview
```

### 4. Commit Your Changes

Use conventional commits (see [Commit Messages](#commit-messages)):

```bash
git add .
git commit -m "feat: add user authentication"
```

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Open a Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill out the PR template
4. Submit the PR

## Pull Request Process

1. **Fill out the PR template** - Provide a clear description of your changes
2. **Link related issues** - Use "Closes #123" to link issues
3. **Wait for CI checks** - All checks must pass
4. **Address review comments** - Respond to feedback promptly
5. **Keep PR updated** - Rebase on main if needed
6. **Be patient** - Maintainers will review as soon as possible

### PR Requirements

- ✅ All CI checks pass
- ✅ Code follows style guidelines
- ✅ No linting errors
- ✅ Build succeeds
- ✅ Descriptive commit messages
- ✅ Documentation updated (if needed)

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types (avoid `any`)
- Use interfaces for object shapes
- Export types when needed

Example:
```typescript
interface User {
  id: string;
  name: string;
  email: string;
}

export const getUser = (id: string): User => {
  // Implementation
};
```

### React Components

- Use functional components with hooks
- Keep components small and focused
- Use proper prop types
- Extract reusable logic to custom hooks

Example:
```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  variant = 'primary' 
}) => {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
```

### Styling

- Use Tailwind CSS utility classes
- Follow the existing design system
- Keep styles consistent across components
- Use CSS variables for theme values

### File Organization

```
src/
├── components/        # Reusable components
│   ├── ui/           # UI primitives
│   ├── layout/       # Layout components
│   └── sections/     # Page sections
├── hooks/            # Custom hooks
├── lib/              # Utility functions
├── pages/            # Page components
└── types/            # TypeScript types
```

## Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/).

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style (formatting, missing semi-colons)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes
- `perf`: Performance improvements

### Examples

```bash
# Feature
git commit -m "feat(auth): add social login support"

# Bug fix
git commit -m "fix(nav): resolve mobile menu overlap issue"

# Documentation
git commit -m "docs(readme): update installation instructions"

# With body and footer
git commit -m "feat(api): add user profile endpoint

Add GET /api/user/:id endpoint to fetch user profiles.
Includes validation and error handling.

Closes #123"
```

### Scope Guidelines

Common scopes:
- `auth` - Authentication
- `ui` - User interface
- `api` - API changes
- `nav` - Navigation
- `config` - Configuration
- `deps` - Dependencies

## Testing

### Manual Testing

Before submitting a PR:

1. Test your changes in development mode
2. Test the production build
3. Test on different browsers (Chrome, Firefox, Safari)
4. Test responsive design on mobile devices
5. Check for console errors and warnings

### Linting

```bash
npm run lint
```

Fix any linting errors before committing.

## Documentation

### Code Comments

- Add comments for complex logic
- Explain "why" not "what"
- Keep comments up to date

### README Updates

Update README.md if you:
- Add new features
- Change installation steps
- Modify configuration
- Add new scripts

### Component Documentation

Document components with JSDoc:

```typescript
/**
 * Primary button component for user actions
 * 
 * @param label - The text to display on the button
 * @param onClick - Handler called when button is clicked
 * @param variant - Visual style variant (default: 'primary')
 */
```

## Questions?

- 📖 Check the [documentation](.github/CICD_SETUP.md)
- 💬 Open a [discussion](https://github.com/vytreon/discussions)
- 🐛 Report [bugs](https://github.com/vytreon/issues/new?template=bug_report.md)
- 💡 Request [features](https://github.com/vytreon/issues/new?template=feature_request.md)
- 📧 Email us at info@vytreon.com

## Recognition

Contributors will be:
- Listed in our README
- Credited in release notes
- Featured on our website (for major contributions)

Thank you for contributing to Vytreon! 🚀

