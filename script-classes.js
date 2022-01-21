/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Phone from "./Phone.js";

const everydayPhone = new Phone(
  "black",
  10,
  5,
);

const content = `
    <main>
      <article>
        <h1>Everyday Phone</h1>
        <ul>
          <li>Color:${everydayPhone.color}</li>
          <li>Length:${everydayPhone.length}</li>
          <li>Width:${everydayPhone.width}</li>
        </ul>
      </article>
    </main>`;

document.body.innerHTML = content;
