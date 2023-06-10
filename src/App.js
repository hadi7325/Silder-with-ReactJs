import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import { useState, useEffect } from "react";
import data from "./data"
function App() {

  const [peoples, setPepoles] = useState(data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let lastIndex = peoples.length - 1;
    if (index > lastIndex) {
      setIndex(0)
    }
    if (index < 0) {
      setIndex(lastIndex)
    }

  }, [index, peoples]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return ()=>(
      clearInterval(slider)
    )
  },[index])
  return (
    <div className="App">
      <section>
        <div className="title">
          نظریات مشتریان
        </div>
        <div className="slider">
          {
            peoples.map((people, indexPepole) => {
              const { id, image, name, title, qoute } = people;
              let position = "nextSlide"
              if (indexPepole === index) {
                position = "activeSlide"
              }
              if (indexPepole === index - 1 || (index === 0 && indexPepole === peoples.length - 1)) {
                position = "lastSlide"
              }
              return (


                <article className={position} key={id}>
                  <img src={image} alt="" />
                  <div className="name">{name}</div>
                  <div className="title">{title}</div>
                  <div className="qoute">{qoute}</div>
                </article>

              )
            })
          }
          <button onClick={e => setIndex(index + 1)} className="next"><FaChevronRight /></button>
          <button onClick={e => setIndex(index - 1)} className="prev"><FaChevronLeft /></button>
        </div>
      </section>



    </div>

  );
}

export default App;
