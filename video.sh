#!/usr/bin/env bash
set -euo pipefail
ffmpeg -r 15 -pattern_type glob -i 'output/*.png' -s hd1080 -vcodec libx264 -crf 18 -preset slow timelapse.mp4
