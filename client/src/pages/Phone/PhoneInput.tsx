import { useRef, useState } from 'react'

/// Very good work overall. Right use of useState and understanding the way it works.
/// Knowing where the value of input is hidden [event.target.value] shows me how
/// well you understand, even if you searched it on google it's still very very good.
/// Functions names are clear and not compicated, exellent!
/// Good practices of writing useState in the right way, well done!
/// I gave you some feedback. This is only for improving the great work you did here,
/// so please take this as a good feedback.

//! I'm pretty sure we have a function called App. It's in App.tsx
//! Function returns something?
export default function App() {
  const [phone, setPhone] = useState('') //? Good idea! Storing the value as state is amazing!
  const [updated, setUpdated] = useState(phone) //* No idea what is the purpose of that state

  //! Function returns something?
  //! any????
  const handleChange = (event: any) => {
    setPhone(event.target.value)
  }

  //! Function returns something?
  const handleClick = () => {
    //* I'm pretty sure I asked to console.log the phone
    setUpdated(phone)
  }

  return (
    <div>
      {/* Good use of the short onChange. But thanks to that you cannot know the type */}
      <input type="text" id="phone" name="phone" onChange={handleChange} value={phone} />

      <h2>{phone}</h2>

      <h2> {updated}</h2>

      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

/// Here are two another examples of how you can improve your code.
/// Please notice all functions tells you what they return.
/// Example one uses the useRef hook which we've learnt about before
/// Example two shows a bit diffarent way to use the useState hook, this
/// way it's clearer to understand the types and what they do.
function PhoneExampleOne(): JSX.Element {
  //* I had no idea what is the type of useRef. Quick search on Google fixed it.
  const phoneRef = useRef<HTMLInputElement>(null)

  const handleClick = (): void => {
    if (phoneRef.current !== null) {
      console.log(phoneRef.current.value)
    }
  }

  return (
    <>
      <input type="text" ref={phoneRef} />
      <button onClick={handleClick}>Click me</button>
    </>
  )
}

function PhoneExampleTwo(): JSX.Element {
  //* Setting the type of this useState make sure I won't get undefined.
  const [phone, setPhone] = useState<string>('')

  //* Notice how I'm asking for a string in this function.
  const handleChange = (value: string): void => {
    setPhone(value)
  }

  const handleClick = (): void => {
    console.log(phone)
  }

  return (
    <>
      {/* I know where the value is located, so I'm sending it directely */}
      <input type="text" onChange={(e) => handleChange(e.target.value)} />
      <button onClick={handleClick}>Click me</button>
    </>
  )
}
