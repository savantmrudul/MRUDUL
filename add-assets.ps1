# ─────────────────────────────────────────────────────────────
# add-assets.ps1
# Run this once to copy your photo and resume into the project.
# Usage:
#   .\add-assets.ps1 -Photo "C:\path\to\your-photo.jpg" -Resume "C:\path\to\resume.pdf"
# ─────────────────────────────────────────────────────────────

param(
    [string]$Photo  = "",
    [string]$Resume = ""
)

$assetsDir = "$PSScriptRoot\public\assets"
New-Item -ItemType Directory -Force -Path $assetsDir | Out-Null

if ($Photo -ne "" -and (Test-Path $Photo)) {
    Copy-Item -Path $Photo -Destination "$assetsDir\mrudul-profile.jpg" -Force
    Write-Host "✓ Profile photo copied to public/assets/mrudul-profile.jpg" -ForegroundColor Cyan
} else {
    Write-Host "⚠  No photo provided or file not found. Pass -Photo <path>" -ForegroundColor Yellow
}

if ($Resume -ne "" -and (Test-Path $Resume)) {
    Copy-Item -Path $Resume -Destination "$assetsDir\Mrudul_Milind_Savant_Resume.pdf" -Force
    Write-Host "✓ Resume PDF copied to public/assets/Mrudul_Milind_Savant_Resume.pdf" -ForegroundColor Cyan
} else {
    Write-Host "⚠  No resume provided or file not found. Pass -Resume <path>" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Done. Run 'npm run build' to rebuild with the new assets." -ForegroundColor Green
