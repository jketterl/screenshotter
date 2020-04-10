# Screenshot timelapse tool

This tool opens a website and takes screenshots in regular intervals. It uses puppeteer to run headless chrome to take the screenshots, and ffmpeg to compile the actual timelapse.

Requirements: chrome, node.js and ffmpeg.

To install dependencies, run `npm install`.

You will probably need to create the folder `output` for the storage of screenshots in here, or make sure it doesn't contain old screenshots from previous runs.

The URL of the website to capture is currently configured in the code.

Run the tool: `node index.js` for as long as you'd like to take screenshots.

The script `video.sh` compiles them into an mp4 video using ffmpeg.