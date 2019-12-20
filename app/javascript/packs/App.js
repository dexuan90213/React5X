import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const clickH1 = function() { alert('h1 clicked!') }

const LangItem = ({lang}) => <li>{lang}</li>

const LangList = ({langs}) => {
  return (<ul>
    {langs.map((l, i) => <LangItem lang={l} key={i} />)}
  </ul>)
}

const LangInput = ({addLang}) => {
  let [inputText, setInputText] = useState("")
  return (
    <>
      <input type="text"
             value={inputText}
             onChange={function(evt) { setInputText(evt.target.value) }} />
      <button onClick={ () => {
        addLang(inputText)
        setInputText("")
      }}>
        Don't click!
      </button>
    </>
  )
}

const App = () => {
  let [langs, setLangs] = useState(['react', 'ruby', 'elixir', 'haskell'])

  return (
    <div>
      <h1 onClick={clickH1}> Hello from React!</h1>
      <p>hehe</p>
      <LangList langs={langs}/>
      <LangInput addLang={l => setLangs([...langs, l])} />
    </div>
    )
  }

ReactDOM.render(<App />, document.querySelector('#container'))