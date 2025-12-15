#!/bin/bash
#dfdf:
# Define variables for input and output directories
VIDEO_DIR="public/videos"
THUMBNAIL_DIR="public/images/thumbnails"

# Ensure the thumbnail directory exists
mkdir -p "$THUMBNAIL_DIR"

# Loop through all video files in the input directory
for video in "$VIDEO_DIR"/*; do
    # Generate a mid-size optimized thumbnail using ffmpeg
    echo "Generating optimized thumbnail for $video"
    ffmpeg -i "$video" -ss 00:00:01 -vframes 1 -vf "scale=640:-1" -q:v 75 "$THUMBNAIL_DIR/$(basename "${video%.*}").webp"
done
