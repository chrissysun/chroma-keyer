# Introduction
Chroma-keying (a.k.a. "green screening") is a popular technique used in SFX in films, YouTube videos, and other media. Software engineers are still on the search for the ideal algorithm to extract a foreground from a certain (often single-colored) background to produce a desired photo/video mask. As an avid lover of multimedia production myself, I decided to create my own algorithm.

# Description
This chroma keyer takes in a media file (typically a video) as an input and produces a final masked version in which the green-screen background is removed. This transparent video can then be used to superimpose the subject onto different backgrounds and perform other special video effects.

# Instructions
Put your media file in the chroma-keyer directory and put the name of the file after the ./ on line 12 of index.html.
For example, if I had the video file "myAwesomeVideo.mp4", my line would look like this:
```
<video id = "video" src = "./myAwesomeVideo.mp4" controls></video>
```
The live server will contain the original media file as well as the masked version.
