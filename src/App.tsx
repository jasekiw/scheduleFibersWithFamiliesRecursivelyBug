
function range(start: number, end: number) {
  const result = []
  for (let i = start; i < end; i++) {
    result.push(i)
  }
  return result
}

const options = range(0, 5000).map((i) => `option-${i}`);

function App() {
  return (
    <>
      <p className="read-the-docs">
        Edit this text to see the error
      </p>

      <input list='options' />
      <datalist id='options'>
          {options.map((value, index) => (
            <option value={value} key={index}>{value}</option>
          ))}
      </datalist>
    </>
  )
}

export default App
