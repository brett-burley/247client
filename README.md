## Task
### From the <Home /> component (pages/index.js) make a request to the api.

1. At the top of index.js, *import* **useEffect** and **useState** from the react module.
2. Create some new *state*; initializing it by calling *useState()* within the Home component.
   - [**info**](https://www.w3schools.com/react/react_usestate.asp)
3. Run *useEffect()* once on the initial render by calling it with an empty **dependency array**.
   - [**example**](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_useeffect_settimeout2)
4. Create, then call an asynchronous function from inside useEffect
   - ```
     useEffect(() => {
       const requestQuestions = async () => {
         console.log('make request to API here');
       }

       requestQuestions()
     }, []);
     ```
5. Import **getQuestions** into index.js, from our own *net library module*
   - path to the net lib = **'../lib/net/net'**
6. Start the **development server**
   - 1. Open a new bash
   - 2. Move up, then into the *server* directory
   - 3. Start the server with the *command*
     ```
     npm run dev
     ```

6. In the body of the async *requestQuestions* function, call *getQuestions()* and **await** the response.
   - console.log the results to verify you have received the questions for the day.


## DONE
![the kids](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a93fd322-a8d0-4ed8-892b-0fabdcf7a58a/ddkviha-c8edb2eb-12e2-4f0a-abef-d93a9bfa895d.png/v1/fill/w_400,h_400,q_80,strp/klaus___kids__color_by_nekr0ns_ddkviha-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2E5M2ZkMzIyLWE4ZDAtNGVkOC04OTJiLTBmYWJkY2Y3YTU4YVwvZGRrdmloYS1jOGVkYjJlYi0xMmUyLTRmMGEtYWJlZi1kOTNhOWJmYTg5NWQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.OxpT6hGMzoinKnC9TxuWM2mjOcbCm2UI1B8mOZwwlck)


# tailwindcss
## Core Concepts
### Utility-First Fundamentals
#### Building complex components from a constrained set of primitive utilities.
- Traditionally you write your own CSS classes and use those in your HTML.
**Why this is bad:**
1. You waste time inventing classes
2. Your css keeps growing and growing
3. Making changes can break things
- With tailwind you use *pre-existing classes*
**Why this is good**
1. You use a predefined *design system*
2. Its *responsive*
3. It has functionality for *state variants*. Things like hovering, focusing, disabiling

### Handling Hover, Focus, and Other States
#### Using utilities to style elements on hover, focus, and more.
- You can add *modifiers* to the beginning of the class name, which is applied *conditionally*

**Hovering**
- light blue=bg-sky-500, darker blue=bg-sky-700
This will change the button background dark when hovered
```
<button class="bg-sky-500 hover:bg-sky-700">
  Save changes
</button>
```
