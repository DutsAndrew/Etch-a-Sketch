# Etch-a-Sketch
A functional Etch-a-Sketch that runs in the browser



My Learning Process:

There a quite a few important take-aways and one big success. This was the first project where I was able to get in a flow with JavaScript and just write code and not have to look something up every 5-15 minutes. Everything was making sense and more or less working, and if it wasn't I knew why and could fix it in less than 5 minutes. I'm super happy about that and this project definetely boosted my confidence in JavaScript.

Key Take-aways:

1. HTML code doesn't nearly have as much functionality as I thought it did. JavaScript with its ability to manipulate the DOM has opened my eyes to how important JavaScript is to what we actually use and read on the internet.

2. getElementById should be used in place of querySelector when working with dynamic and static lists. Since JS works in the DOM and targets nodes those nodelists are static and cannot change when using querySelector, but getElementById or getElementsbyClassName allows you to access a dynamic version of that list (things can be changed or added to that list). Since We are working with a function that loops through and adds divs to a container element in the HTML we need access to a dynamic list that lets us "tap" in to all of those added children to the container element.

3. This also brings me to a lot of issues that I was running into for the last 2-6 hours of working on this project. My rowAndCellBuilder() was populating cells weird after hitting the clearIt() function, I realized that every time I cleared the board and created a new one that cells were constantly changing location in the container. I googled around and found out that I was leaving children divs' attached to the container without removing them before adding new ones. And since this is all in the DOM I cannot see them in the HTML or JS. So, I ran a while loop to check for container.children and if there were any it would remove it/them before creating new ones. This alleviated a lot of my stress and misunderstanding on what was happening with my application.

4. window.onload() is a cool function that I liked learning about. I can see that being extremely useful for autopopulating things and or prioritizing what loads on a page first. In this case I wanted a 16x16 grid to autopopulate so that the user could interact with it before creating a new board.

5. I now know EXACTLY how parameters work, took me long enough haha. I felt like my ability to connect functions and have them interact was finally solidified. I also had to learn how to append things and when to do it. If you append to early or in the wrong spot the appended div may or may not show up where you want it to. So I had to play around with where I appended the cell and row divs when working inside that function.

6. The random color function was AWESOME to build! I found a super interesting StackOverflow page that went over all the different ways to select a random color and how to even alter it so that it doesn't pick super dark colors that are hard to read text through. But, since this is an Etch-a-Sketch I didn't worry about that functionality. Since colors are picked from #0000AF tags I made sure to run through a loop and randomally select a number using the color tag.

7. CSS overflow, was a life saver done the stretch. I was having so many issues with numbers over 20 or even 50 that would push out of their containers. Overflow allowed me to turn that off, so that everythign stayed nice and tidy inside the container.

8. As much as I thought I loved CSS in whe WebsiteLandingPage project, I can say that I for sure prefer JavaScript as my preferred language, I hope to get better at CSS as time goes on though.

9. My last take-away is that I absolutely love coding. Even though this project had its rough spots I was so motivated to get it done and figure out the solution to why something wasn't working and how to fix it. I'm no where near a perfect programmer, but after 2 months of coding I'm very impressed with how far I've come. On to the next project!