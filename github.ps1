# Friendly Git Push Script - Enhanced Version
Clear-Host
Write-Host "🚀 GitHub Helper Tool" -ForegroundColor Cyan
Write-Host "-----------------------"

# Check if .git folder exists
$isNewRepo = -not (Test-Path ".git")

if ($isNewRepo) {
    Write-Host "✨ New project detected!" -ForegroundColor Yellow
    $confirm = Read-Host "Do you want to initialize this as a new Git repo? (y/n)"
    
    if ($confirm -eq 'y') {
        git init
        $remoteUrl = Read-Host "🔗 Paste your GitHub Repository URL (e.g., https://github.com/user/repo.git)"
        git remote add origin $remoteUrl
        git branch -M main
        Write-Host "✅ Repository initialized and linked to origin." -ForegroundColor Green
    } else {
        Write-Host "❌ Operation cancelled." -ForegroundColor Red
        exit
    }
}

# 1. Check for changes
$status = git status --short
if (-not $status -and -not $isNewRepo) {
    Write-Host "✅ Everything is up to date!" -ForegroundColor Green
    Pause
    exit
}

# 2. Process changes
git add .

# 3. Handle First Commit vs. Regular Update
$msg = Read-Host "`n📝 Enter commit message (leave blank for 'Initial commit' or 'Update')"
if (-not $msg) { 
    $msg = $isNewRepo ? "Initial commit" : "Update $(Get-Date -Format 'yyyy-MM-dd HH:mm')" 
}

git commit -m "$msg"

# 4. Push logic
$branch = git branch --show-current
Write-Host "`n🌐 Pushing to GitHub..." -ForegroundColor Cyan

if ($isNewRepo) {
    # Set upstream for the very first push
    git push -u origin $branch
} else {
    git push origin $branch
}

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n🎉 Success! Your code is live on GitHub." -ForegroundColor Green
} else {
    Write-Host "`n❌ Push failed. Check your URL or internet connection." -ForegroundColor Red
}

Pause