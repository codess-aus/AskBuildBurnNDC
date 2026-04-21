#!/usr/bin/env python3
"""
Script to enhance all chapter markdown files with proper hero images and videos.
Extracts image URL from first line and video references from bottom.
"""

import os
import re
import urllib.parse
from pathlib import Path

# Video names to look for at the bottom of files
VIDEO_PATTERNS = [
    "Demo 1 - Plan v2.mp4",
    "Demo2 - Ask (smaller).mp4",
    "Demo 3 - Agent Mode (smaller).mp4",
    "Demo5 - autonomous (small).mp4",
]

def extract_hero_image_from_url(url):
    """Extract just the filename from the GitHub URL."""
    # URL format: https://github.com/codess-aus/AskBuildBurnNDC/blob/.../images/filename.png
    if "images/" in url:
        return url.split("images/")[-1]
    return None

def extract_video_from_url(url):
    """Extract video filename from GitHub URL."""
    # URL format: https://github.com/.../videos/Demo%201%20-%20Plan%20v2.mp4
    if "videos/" in url:
        filename = url.split("videos/")[-1]
        # URL decode the filename
        return urllib.parse.unquote(filename)
    return None

def extract_chapter_number(filename):
    """Extract chapter number from filename."""
    match = re.match(r"(\d+)", filename)
    if match:
        return int(match.group(1))
    return None

def enhance_chapter(filename, content):
    """Enhance chapter content with hero image and video."""
    lines = content.split('\n')
    
    chapter_num = extract_chapter_number(filename)
    hero_image = None
    video_file = None
    text_content = []
    
    # Extract hero image from first line
    # Can be either a URL or markdown image syntax
    first_line = lines[0] if lines else ""
    
    # Check if first line is a markdown image
    if first_line.startswith('!['):
        # Extract filename from markdown: ![...](../images/filename.png)
        match = re.search(r'images/([^)]+)\)', first_line)
        if match:
            hero_image = match.group(1)
            lines = lines[1:]  # Remove the line
    elif first_line.startswith('http'):
        # Extract from URL
        hero_image = extract_hero_image_from_url(first_line)
        lines = lines[1:]  # Remove the URL line
    
    # Look for video URLs at the end of the file
    remaining_text = '\n'.join(lines)
    
    # Look for GitHub video URLs
    video_url_pattern = r'https://github\.com/.*?/videos/([^/\s]+\.mp4)'
    video_match = re.search(video_url_pattern, remaining_text)
    if video_match:
        video_file = urllib.parse.unquote(video_match.group(1))
        # Remove the video URL from text
        remaining_text = re.sub(video_url_pattern, '', remaining_text)
    
    # Also check for local video file references
    if not video_file:
        for video_pattern in VIDEO_PATTERNS:
            if video_pattern.lower() in remaining_text.lower():
                video_file = video_pattern
                # Remove video references from text
                remaining_text = re.sub(
                    re.escape(video_pattern),
                    '',
                    remaining_text,
                    flags=re.IGNORECASE
                )
                break
    
    # Clean up the text (remove excess whitespace)
    text_content = remaining_text.strip()
    
    # Build enhanced content
    enhanced = ""
    
    # Add hero image section with relative path
    if hero_image:
        enhanced += f"![Chapter {chapter_num} Hero](../images/{hero_image})\n\n"
    
    # Add main text content
    enhanced += text_content
    
    # Add video section if found
    if video_file:
        enhanced += f"\n\n## Video Demonstration\n\n"
        enhanced += f"<video controls autoplay loop muted playsinline style=\"width: 100%; max-width: 800px; border-radius: 8px;\">\n"
        enhanced += f"  <source src=\"../videos/{video_file}\" type=\"video/mp4\">\n"
        enhanced += f"  Your browser does not support the video tag.\n"
        enhanced += f"</video>\n"
    
    return enhanced

def main():
    docs_dir = Path("docs")
    
    # Process each markdown file
    for md_file in sorted(docs_dir.glob("*.md")):
        if md_file.name == "index.md":
            continue
        
        chapter_num = extract_chapter_number(md_file.name)
        if chapter_num is None:
            continue
        
        print(f"Processing {md_file.name} (Chapter {chapter_num})...")
        
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        enhanced = enhance_chapter(md_file.name, content)
        
        with open(md_file, 'w', encoding='utf-8') as f:
            f.write(enhanced)
        
        print(f"  ✓ Enhanced Chapter {chapter_num}")

if __name__ == "__main__":
    main()
    print("\n✓ All chapters enhanced!")

