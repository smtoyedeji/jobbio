import useFetch from './useFetch'
// import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'
function App() {
  const { data } = useFetch(url)
  
  console.log(data)

  const elements = data.map((element) => {
    return (
      <div key={element.id} className="section">
        <h3>{element.company}</h3>
        <h5>{element.title}</h5>
        <ol>
          <p>Duties</p>
          <li>{element.duties[0]}</li>
          <li>{element.duties[1]}</li>
          <li>{element.duties[2]}</li>
        </ol>
      </div>
    )
  })
  return (
    <div>
      {elements}
    </div>
  )
}

export default App