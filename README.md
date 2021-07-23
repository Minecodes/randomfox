<center>
<img src="https://web-static.vercel.app/randomfox.png" style="border-radius: 100%;" />
</center>

# randomfox

This is an library to get an link to an random fox image.</br>
This is a API and now in TypeScript too. 👍😉 [![CodeFactor](https://www.codefactor.io/repository/github/minecodes/randomfox/badge)](https://www.codefactor.io/repository/github/minecodes/randomfox)

The cli version: [https://www.npmjs.com/package/foxes](https://www.npmjs.com/package/foxes)</br>
How to work with Typescript: [https://www.typescriptlang.org/docs](https://www.typescriptlang.org/docs)</br>
It work in the browser too.

## Installation ✅

Browser:
```html
<script src="https://unpkg.com/randomfox/src/browser.js">
console.log(fox());
console.log(customfox(["Floof 1", "Floof 2", "Floof 3", "Floof 4"]));
</script>
```

Browser Minified:
```html
<script src="https://unpkg.com/randomfox/src/browser.min.js">
console.log(fox());
console.log(customfox(["Floof 1", "Floof 2", "Floof 3", "Floof 4"]));
</script>
```

Console/Etc:

```bash
npm i randomfox
```

or

```bash
yarn install randomfox
```

or

```bash
npm i git+https://gitlab.com/Minecodes13/randomfox.git
```

or

```bash
yarn install git+https://gitlab.com/Minecodes13/randomfox.git
```

or

```bash
npm i git+https://github.com/Minecodes/randomfox.git
```

or

```bash
yarn install git+https://github.com/Minecodes/randomfox.git
```

## Docs 🧐🤓
### Javascript
Example

```javascript
const randomfox = require("randomfox");

console.log(fox());
```

Random fox Image

```javascript
const { fox } = require("randomfox");

console.log(fox());
```

Custom fox Images

```javascript
const { customfox } = require("../src/main");

console.log(customfox([
	"https://randomfox.ca/images/1.jpg",
	"https://randomfox.ca/images/2.jpg",
	"https://randomfox.ca/images/3.jpg"]));
```

### Typescript

Example

```typescript
import randomfox from "randomfox";

console.log(randomfox.fox());
```

Random fox image

```typescript
import { fox } from "randomfox";

console.log(fox());
```

Custom fox Images

```typescript
import { customfox } from "randomfox";

console.log(customfox([
	"https://randomfox.ca/images/1.jpg",
	"https://randomfox.ca/images/2.jpg",
	"https://randomfox.ca/images/3.jpg"]));
```
