import React from 'react';
import AuthorImg  from './author.png';



const Portfolio = () => {
  window.open(
              "https://nirit.website", "_blank");
}


export function Tutorial() {
  return (
    <div>
    <h3>Add styles</h3>
    <p>
    We know that we can add inline styles directly or use variables but...what if we want to do both??
    For that, our lovely Spread Syntax comes to the rescue!
    </p>
    <p>
    In the example below, we are creating an object contain set of styles, this object is being assigned to a variable
    called 'theJoyStyle'.
    </p>
            <pre>
        <code>
        {`const theJoyStyle = {
            content: 'o( ❛ᴗ❛ )o',
            color: pink,
            textAlign: 'center'
          }
          `}
          </code>
        </pre>

    <p>
    <br />
    We then assigned this variable to our first div, but wait, look what we are doing in the second div
    - here we adding not only the set of styles attached to the variable, but also additional custom inline style (fontSize: 22).
    </p>


<pre>
<code>
{`<div style={ theJoyStyle }> I'm having all the styles from theJoyStyle! </div>
  <div style={{ ...theJoyStyle, fontSize: 22 }}> Spread theJoyStyle! </div>`}
          </code>
          </pre>
        <p>
        <br />
        Neat, ah? and what if we want to use multiple variables? no problem! here is how:
        </p>

        <pre>
        <code>
        {`<div style={ ...theJoyStyle1, ...theJoyStyle2 }>٩(◕‿◕)۶</div>`}
        </code>
        </pre>
        <p>
        <br />
        Let's have one more fun.. this time with Nested Variable, check this out:
        </p>

        <pre>
        <code>
        {`const theJoyStyle = {
          ...nestedVariable,
        content: 'o( ❛ᴗ❛ )o',
        color: pink,
        textAlign: 'center'
        }
        `}
        </code>
        </pre>

            </div>
          )
        }

export function Author() {
  return (
    <div className="author-container">
      <div>
      <img src={AuthorImg} alt="Autor" />
      <p>Creative & Code:)
      <br /><a href="https://nirit.website" target="_blank">nirit.website</a>
      </p>
      </div>
      <button onClick={Portfolio}>Portfolio</button>
    </div>
  )
}
