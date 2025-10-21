# CI/CD Setup Guide for Vytreon Ecosystem

This guide will help you configure GitHub Actions for continuous integration and deployment.

## Overview

We've set up three main workflows:

1. **CI (Continuous Integration)** - Runs on every push and pull request
2. **Deploy** - Automatically deploys to GitHub Pages on push to main
3. **CodeQL** - Security scanning for vulnerabilities

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages** (in the left sidebar)
3. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
4. Save your changes

### 2. Repository Secrets (Optional)

If you need to deploy to other services or use environment variables, add secrets:

1. Go to **Settings** > **Secrets and variables** > **Actions**
2. Click **New repository secret**
3. Add any required secrets (e.g., `VERCEL_TOKEN`, `NETLIFY_AUTH_TOKEN`, etc.)

### 3. Branch Protection Rules (Recommended)

To enforce CI checks before merging:

1. Go to **Settings** > **Branches**
2. Click **Add rule**
3. Branch name pattern: `main`
4. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass before merging
   - Select: `build-and-test` (from CI workflow)
5. Save changes

## Workflows Explained

### CI Workflow (`.github/workflows/ci.yml`)

**Triggers:**
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

**What it does:**
- Tests on Node.js 18.x and 20.x
- Installs dependencies
- Runs linter (`npm run lint`)
- Builds the project (`npm run build`)
- Uploads build artifacts for review

### Deploy Workflow (`.github/workflows/deploy.yml`)

**Triggers:**
- Push to `main` branch
- Manual trigger via GitHub UI (workflow_dispatch)

**What it does:**
- Builds the production version
- Deploys to GitHub Pages
- Your site will be available at: `https://<username>.github.io/Vytreon-Ecosystem/`

### CodeQL Workflow (`.github/workflows/codeql.yml`)

**Triggers:**
- Push to `main` branch
- Pull requests to `main` branch
- Weekly schedule (Mondays at midnight)

**What it does:**
- Scans code for security vulnerabilities
- Analyzes JavaScript/TypeScript code
- Reports findings in the Security tab

## Dependabot Configuration

Dependabot is configured to:
- Check npm dependencies weekly (Mondays)
- Check GitHub Actions monthly
- Automatically create PRs for updates
- Limit to 10 open PRs at a time

## Environment Variables

The build is configured to use environment-specific settings:

- **Development:** Base URL is `/`
- **Production:** Base URL is `/Vytreon-Ecosystem/`

To add more environment variables:
1. Add them to `.github/workflows/deploy.yml` under the `env:` section
2. Create a `.env.production` file in the root (git ignored)

## Local Testing

Before pushing, test the build locally:

```bash
# Install dependencies
npm install

# Run linter
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## Monitoring Workflows

1. Go to the **Actions** tab in your repository
2. View running and completed workflows
3. Click on any workflow to see detailed logs
4. Failed workflows will show error messages

## Deployment URL

Once deployed, your site will be available at:
- **GitHub Pages:** `https://<your-username>.github.io/Vytreon-Ecosystem/`

## Troubleshooting

### Build Fails
- Check the Actions tab for error logs
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

### Pages Not Deploying
- Verify Pages is enabled in Settings
- Check that workflow has Pages permissions
- Ensure `deploy.yml` workflow completed successfully

### Linter Errors
- Run `npm run lint` locally
- Fix any reported issues
- Commit and push fixes

## Alternative Deployment Options

If you prefer other hosting services:

### Vercel
```yaml
# Add to .github/workflows/deploy.yml
- name: Deploy to Vercel
  uses: amondnet/vercel-action@v25
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN }}
    vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
    vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

### Netlify
```yaml
# Add to .github/workflows/deploy.yml
- name: Deploy to Netlify
  uses: nwtgck/actions-netlify@v2
  with:
    publish-dir: './dist'
    production-branch: main
    github-token: ${{ secrets.GITHUB_TOKEN }}
    deploy-message: "Deploy from GitHub Actions"
  env:
    NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
    NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [CodeQL Documentation](https://codeql.github.com/docs/)

## Support

For issues or questions:
1. Check the Actions logs for error messages
2. Review this documentation
3. Create an issue in the repository

