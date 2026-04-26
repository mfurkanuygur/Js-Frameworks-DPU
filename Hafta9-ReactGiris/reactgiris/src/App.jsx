
import './App.css'
import { Ad } from './components/Ad'
import { Button } from './components/button'

function App() {

  return (
    <>
      <p className='text-red-500 text-6xl'>hello world</p>
      <Button name={"furkan"} />
      <Button name={"furkan"} />
      <Button name={"furkan"} />
      <Button name={"furkan"} />
      <Ad ad={"sivas"}/>

      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </>
  )
}

export default App
