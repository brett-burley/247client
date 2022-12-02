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
