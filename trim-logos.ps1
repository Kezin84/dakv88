Add-Type -AssemblyName System.Drawing

$wc = New-Object System.Net.WebClient
$wc.DownloadFile("https://i.ibb.co/XrsMyL3b/remove-dakv.png", "c:\kiotviet\kiotvietProfile\public\raw-dakv.png")
$wc.DownloadFile("https://i.ibb.co/hFqXmMZZ/remove-kiotviet.png", "c:\kiotviet\kiotvietProfile\public\raw-kv.png")

function Trim-Transparent($inputPath, $outputPath) {
    $bmp = [System.Drawing.Bitmap]::FromFile($inputPath)
    $w = $bmp.Width
    $h = $bmp.Height

    $minX = $w; $minY = $h; $maxX = 0; $maxY = 0

    for ($y = 0; $y -lt $h; $y++) {
        for ($x = 0; $x -lt $w; $x++) {
            $pixel = $bmp.GetPixel($x, $y)
            if ($pixel.A -gt 10) {
                if ($x -lt $minX) { $minX = $x }
                if ($y -lt $minY) { $minY = $y }
                if ($x -gt $maxX) { $maxX = $x }
                if ($y -gt $maxY) { $maxY = $y }
            }
        }
    }

    $pad = 5
    $minX = [Math]::Max(0, $minX - $pad)
    $minY = [Math]::Max(0, $minY - $pad)
    $maxX = [Math]::Min($w - 1, $maxX + $pad)
    $maxY = [Math]::Min($h - 1, $maxY + $pad)

    $cropW = $maxX - $minX + 1
    $cropH = $maxY - $minY + 1

    $rect = New-Object System.Drawing.Rectangle($minX, $minY, $cropW, $cropH)
    $cropped = $bmp.Clone($rect, $bmp.PixelFormat)

    $cropped.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $cropped.Dispose()

    Write-Host "Trimmed $inputPath -> $outputPath (${cropW}x${cropH})"
}

Trim-Transparent "c:\kiotviet\kiotvietProfile\public\raw-dakv.png" "c:\kiotviet\kiotvietProfile\public\logo-dakv88.png"
Trim-Transparent "c:\kiotviet\kiotvietProfile\public\raw-kv.png" "c:\kiotviet\kiotvietProfile\public\logo-kiotviet.png"

Remove-Item "c:\kiotviet\kiotvietProfile\public\raw-dakv.png"
Remove-Item "c:\kiotviet\kiotvietProfile\public\raw-kv.png"

Write-Host "Done!"
