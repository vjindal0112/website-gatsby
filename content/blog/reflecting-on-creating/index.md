---
title: REFLECTing on Creating
date: "2020-05-27T23:46:37.121Z"
spoiler: Learning how to create
---

![Reflect Chrome Extension](/reflecting-on-creating/ReflectCover.png)
The chrome extension I built

# Table of Contents
- **Creating**
- **Why Shift?**
- **My Original Project**
- **Building My Project**
- **What I Built: Reflect**

# Creating

I sit at my desk with my CS homework in front of me. My science olympiad poster that's covered with hackathon stickers was to my left, and my foam roller and my drumsticks were on the floor to my right. 

I stare at the wall. A seed was forming in my mind. I snap back to my laptop with a smile on my face. I open up my “Ideas” [Notion](https://www.notion.so/) document and begin typing. I feel a euphoric energy come over me as I press the final period. I look back to the wall next to me and bask in the happiness. Five minutes later, I am slumped at my desk once more, back to my work.

This is not an uncommon occurrence. It probably happens about once a week. The pattern goes something like this: I come upon an idea I would love to build. I imagine how awesome it would be to build, the happiness of using something I built, and the impact it could have once built. Then, the thoughts hit me like bricks. I have so much work to do. I don’t have time for this. This will be so hard. I don’t know how to do this. Then, I just end up going back to whatever I was doing before.

I never understood why I didn’t do something about my ideas. I would see other people building super cool things and say to myself, “Why don’t I do that?” I usually just blamed it on the hours I wasted on YouTube or Instagram or Snapchat. I would constantly harp on my own productivity, telling myself I would do more the next day. When I didn't meet my unrealistic goal, I set more unrealistic goals for the next day and it was a constant negative feedback loop.  

However, I've come to understand that productivity is a by-product of something else entirely. I didn't understand this until I noticed the pattern in my ideation. With every idea came the doubts. These doubts would be nearly subconscious, so I would just go back to work unfazed. However, when I realized their presence, I began to connect the dots. You can't be productive if you don't believe you can accomplish your task. I simply did nothing about my ideas because I told myself I couldn’t.

I believe that everyone wants to create at heart, but it is self-talk that pushes us away from it.

I’m learning to create by learning to believe in myself.

# Why Shift?

Coming to Michigan, I didn't really know what I wanted to do. But, I felt an attraction to the entrepreneurship community because of all the self-improvement focus that seems to permeate that community. I also liked to build [things](https://www.youtube.com/watch?v=603F7vPUbrg&list=PLGRuFnFnR1VU8ANzLoLhkkkW0HgLTlcIz). So, I walked around Festifall (UMich’s fall fest for clubs) until I came upon [Shift’s](https://shiftcreator.space/) booth. They had a cool logo that said "Creator Space" so I thought I would check it out. I walked up and saw the same guy who had pitched Shift in one of my classes. When he had come to pitch it, he exuded excitement. With every word he bounced a little. So, I was happy to take their flyer with the date of the first meeting in large bold letters on it. 

![Shift Creator Space Logo](/reflecting-on-creating/ShiftLogo.png)

So, I went to the first Shift meeting and began talking to everyone. The whole vibe felt different. Many of my friends had been to other club meetings with a powerpoint and icebreakers, but this was nothing like that. The house was fun. It wasn’t professional, it wasn’t stuck-up, it was just people hanging because they wanted to. I decided to apply and it was one of the best decisions I’ve made. After a few short-response and an interview, I was among a group of creators.

This group was really varied. There were CS majors like me, but also art majors, humanities majors, and design majors. However, they all had one thing in common: a drive to do something more than school. Whether that drive had already been fulfilled didn’t matter. Shift is dedicated to cultivating that drive. Everyone in Shift creates a project throughout the year, which they demo to everyone at the end. 
With Shift what I hoped to achieve was building something cool. I was able to do that, but what I really gained from Shift was something much more valuable. I was constantly motivated and driven because of a community of friends.

# My Original Project

My Shift project went through quite a few ups and downs throughout the year.

All the way at the beginning of the year I had a vision for a drumming app. I was certain that this app would be the one. I would work on it all year with every ounce of passion. 

I am a drummer and while I was growing up there was one thing I was never very good at: drum fills. A drum fill is any departure from the main groove of the song. They tend to be created on the spot as an expression of your creativity. They also usually mark large transitions in a song. And so, whenever I was asked to play a drum fill, I was terrified. It felt like the whole band was counting on you in your moment to keep the time consistent and play something cool.

I wanted to create something to ease the learning process of getting over that fear and becoming better at improvisation. My hypothesis was that by increasing your ‘vocabulary’ of things you can play, you will be able to conquer the fear. You would then be able to take a couple things from your vocabulary, smush them together, and then easily play a fill on the spot. My solution was an app. This app would take as input the song which you are trying to play along to, and suggest fills to learn based on the type of song. The more fills you learn, the larger your vocabulary becomes.

I talked to many drummers and learned that my hypothesis was not wrong, many drummers had the skill to play fills but feared improvisation. While I sincerely believe my app can still help drummers break the mental block, I also had to take a look at the challenges. A lot of my app revolved around having a very large library of drum fills. This library would not be easy to curate, and this year I wanted to focus on more technical challenges. I decided that this idea was cool but is something for later.

# Building My Project

I began soul searching again until [MHacks](https://staging.mhacks.org/) came along in October — the hackathon run by UMich students. Two friends and I teamed up and looked for an idea. My friend, Samay Shamdasani, had an idea to have a dashboard with all of your accounts and data from them. I really vibed with the idea.

Right around that time, I had begun journaling. I wanted a way to keep track of my progress in my journal with numbers. Unfortunately, I didn’t have the data I wanted to track. I would have loved to see a historical progression of my internet usage data, health data, or even the number of new people I had been meeting. A personal dashboard would have been perfect to refer to.

And so, our team built a small prototype of the dashboard with [React](https://reactjs.org/), [Python](https://flask.palletsprojects.com/en/1.1.x/), [Firebase](https://firebase.google.com/), and APIs. I had no clue how to use any of the technologies and got carried pretty hard. But, we ended up with a cool web page that you could log into with a bunch of your accounts:

![MHacks Reflect Page 1](/reflecting-on-creating/MHacksReflectP1.png)
![MHacks Reflect Page 2](/reflecting-on-creating/MHacksReflectP2.png)
A taste of the web page

After the hackathon, I began thinking: the web page we had created might entice people to come to it once, but would they come back? I would love the data to come to me passively… maybe as a new tab page. And so, I decided to create a chrome extension.

I had no idea how [chrome extensions](https://developer.chrome.com/extensions/overview) worked, what languages they were created in, or how to get one I create on my browser. I started small, finding examples of simple chrome extensions online that I could copy. I followed the tutorial on the chrome website and came up with this legendary chrome extension:

`youtube: [First Chrome Extension](https://www.youtube.com/watch?v=ezat0hmDAFE)`

In all honesty, I’m glad I started really small. The small wins encouraged me to keep going. This extension actually wasn’t that hard to make. It was vanilla javascript, html, and css (like a simple webpage) plus a configuration file used by Chrome.
Next I built a simple website launcher:

`youtube: [Traversy Launcher](https://www.youtube.com/watch?v=vUbrw0rRPA4)`

Built with tutorial by [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)

These mini-projects gave me an idea of how chrome extensions work and a small introduction to the things that I could do with them.
Then, I began to tackle the real thing. I started by building something that would allow me to track the time spent on each tab. It took some time, but I was able to successfully create what is shown in the following video. On the left, you will see the console to which I am sending data so I can see what’s happening. On the right is the window on which the chrome extension is active.

`youtube: [Time On Tab Chrome Extension](https://www.youtube.com/watch?v=GuTVkJf_wWI)`

You notice that the text on the left changes every time I switch tabs. The text is a list that prints every time I switch tabs. After each group of slashes begins a new list. Each item in the list is formatted as follows:

```
websiteName || tabID || secondsOnWebsite
```

Getting to this point was a pretty big challenge for me. There were a lot of events that had to be handled. Every time a user switches tabs, closes a tab, and navigates to a new website, the time has to be updated. Additionally, this was the first time I had created any classes in javascript. It was really cool. I learned that javascript stores everything as an object unlike many other languages.
This was around the time that the first semester ended. I knew I wanted to start on the front-end (the look) of my chrome extension. I’d been wanting to try out React — a fast-growing framework for javascript. I had been attempting to learn React for the past few months but hadn’t put enough focused time into it.

Over the winter break, I took to learning [React](https://reactjs.org/). I ended up creating my entire personal website with a blog in [Gatsby](https://www.gatsbyjs.org/) (a framework based on React). I finally began to understand some of the fundamental concepts of React.

After the break I learned quickly that a chrome extension in React wasn’t as easy as I thought. I eventually found some starter code to help me along. Apparently, the way React builds the files had to be customized to exclude some files that are essential to the chrome extension.
I found very specific starter code that included React and Firebase (database to store data) and was also a Chrome extension. It took a while to find. In retrospect, I probably could have saved time by just reading some documentation and using more generic starter code, but I really had no clue what I was doing.

After this, most of my time was spent figuring out Google authentication. I wanted a user to be able to log into their Google account to get Google calendar metrics like how many unique people they had met that week. Google authentication was incredibly challenging for all the wrong reasons. I will spare the details, but basically I went down a path that wouldn’t work for chrome extensions and spent a very long time trying to figure out how to make it work. Yeah… not the brightest thing to do. Eventually I settled on a way to do authentication that was known to work with chrome extensions which turned out to be [significantly easier](https://developer.chrome.com/apps/identity).

# What I built: Reflect

So, what did I build? Reflect:

Along the top are your Top Sites along with the amount of time spent on each site. On the bottom left you can put any thoughts you might have that day. On the right you can add widgets like so:

`youtube: [Widget Adding](https://www.youtube.com/watch?v=-251JScWu6I)`

These display metrics about a variety of things in your life. Currently it only shows Google Calendar data which includes how many unique people you have met during the week. The vision is that you will be able to customize the widget to show stats for Github, Gmail, Spotify, Strava, and more. Additionally, along the top, a user will be able to press the small arrow on each top site to open up a drop down with a graph of time trends for that site. Lastly, the user will be able to look through all of their past journal entries. I plan to finish this project this summer and launch it on the Chrome Web Store.

Throughout the year I ended up picking up some new skillz, so here’s a bulleted list of everything I learned through this project:

- React — how it works and how to implement a chrome extension with it
- Gatsby — how to use static queries to create a blog and personal website
- Figma — how to use it and basic design principles
- Firebase — how to set up a database with google authentication
- Javascript — how the language works and how to create classes
- Chrome — how to create an extension and handle events
- APIs — how get and post requests work and how authentication works
- Postman — how to use the software and test APIs

I certainly did not learn the content of these bullets exhaustively, but looking back on it — I learned a lot.

Throughout this project I participated in 100 Days of Code. An initiative which challenges you to create something cool by coding for 100 days straight. I started this on October 15th 2019. There have been 183 days (as of 4/15/20) since then. I am currently on day 77. While I didn’t code every day, that number means that I coded on more than 1 in 3 days on average. Honestly, I am very happy with that.

The hardest part about a project is consistently working on it. With 100 Days Of Code, I tweeted about any progress I made on the days that I coded. This kept me accountable and seeing my progress pushed me to keep a creator mindset. I believe a creator mindset is simple: just believe that you can create. Everyone wants to create on the inside. Sounds simple, but it’s really hard. There were countless days where I didn’t feel like coding because I was frustrated. It was so easy to tell myself that I have other work that I need to do, because, in college, I normally do. Keeping the creator mindset is something that I continue to work towards. I am glad that I have the Shift family to encourage and inspire me along the way.

> Thanks to [Nathan Leung](https://www.natecation.com/) for giving me some writing tips!