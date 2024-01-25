import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'
import styles from '../styles/home.module.css'
import { DatePicker } from 'antd';

function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}

// HI!
/*aaaaaasdasdasdasdasd
  WOW!!awdawdawd
  test commit
*/


//heyyyyyyy
function Home() {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount((v) => v + 1)
  }, [setCount])

  useEffect(() => {
    const r = setInterval(() => {
      increment()
    }, 1000)

    return () => {
      clearInterval(r)
    }
  }, [increment])

  return (
    <main className={styles.main}>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <p>
        Fast Refresh is a Next.js feature that gives you instantaneous feedback
        on edits made to your React components, without ever losing component
        state.
      </p>
      <DatePicker />
      <hr className={styles.hr} />
      <div>
        <p>
          Auto incrementing value. The counter won't reset after edits or if
          there are errors. Sup guys
        </p>
        <p>Current value: {count}</p>
      </div>
      <hr className={styles.hr} />
      <div>
        <p>Component with state.</p>
        <ClickCount />
      </div>
      <hr className={styles.hr} />
      <div>
        <p>
          The button below will throw 2 errors. You'll see the error overlay to
          let you know about the errors but it won't break the page or reset
          your state. This is a new commit from my space. Let's try this again.
          WE'RE BALLING 
        </p>
        <Button
          onClick={(e) => {
            setTimeout(() => document.parentNode(), 0)
            throwError()
          }}
        >
          Throw an Error
        </Button>
      </div>
      <hr className={styles.hr} />
      <div>
        <p>
          The button below will throw an error and reset the counter to 0. This
          is because the error is thrown in an event handler that is not wrapped
          in a useCallback hook.
        </p>
        <Button
          onClick={(e) => {
            setTimeout(() => document.parentNode(), 0)
            throwError()
          }}
        >
          Throw an Error and Reset Counter
        </Button>
      </div>
      {/* list of cool websites to visit */}
      <ul>
        <li>
          <a href="https://nextjs.org/docs/basic-features/fast-refresh">
            Next.js Fast Refresh Documentation
          </a>
        </li>
        <li>
          <a href="
          https://nextjs.org/docs/basic-features/data-fetching">
            Next.js Data Fetching Documentation
          </a>

        </li>
        <li>
          <a href="https://nextjs.org/docs/basic-features/typescript">
            Next.js TypeScript Documentation
          </a>
        </li>
        <li>
          <a href="https://nextjs.org/docs/basic-features/built-in-css-support">
            Next.js Built-in CSS Support Documentation
          </a>
        </li>
        <li>
          <a href="https://nextjs.org/docs/basic-features/built-in-css-support">
            Next.js Built-in CSS Support Documentation
          </a>
        </li>
        <li>
          <a href="https://nextjs.org/docs/basic-features/built-in-css-support">
            Next.js Built-in CSS Support Documentation
          </a>
        </li>
        <li>
          <a href="https://nextjs.org/docs/basic-features/built-in-css-support">
            Next.js Built-in CSS Support Documentation
          </a>
        </li>
        <li>
          <a href="https://nextjs.org/docs/basic-features/built-in-css-support">
            Next.js Built-in CSS Support Documentation
          </a>
        </li>
        <li>
          <a href="https://nextjs.org/docs/basic-features/built-in-css-support">
            Next.js Built-in CSS Support Documentation
          </a>
        </li>
        <li>
          <a href="https://nextjs.org/docs/basic-features/built-in-css-support">
            Next.js Built-in CSS Support Documentation
          </a>
        </li>
      </ul>
      <DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker /><DatePicker />
    </main>
  )
}

export default Home
