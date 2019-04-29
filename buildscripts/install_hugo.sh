#!/bin/bash
url=$(curl -s "https://api.github.com/repositories/11180687/releases/latest" | grep -o 'https://.*hugo_extended.*_macOS-64bit.tar.gz')
echo '✅ Found latest version'

curl -s $url -L -o hugo_latest.tar.gz
echo '✅ Download complete: ' $url

tar -zxf hugo_latest.tar.gz -C /usr/local/bin
rm /usr/local/bin/README.md
rm /usr/local/bin/LICENSE
echo '✅ Extracted to /usr/local/bin'

rm hugo_latest.tar.gz
echo '✅ Removed downloaded artifacts'

echo '👉 Current Version' $(hugo version)