import './panel.css'
import {useState} from "react";

const imgs = [
  { image : "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  title: "Explore The World" },
  { image: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  title: "Wild Forest"},
  { image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
    title: "Sunny Beach"},
  { image: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    title: "City on Winter"},
  { image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: "Mountains - Clouds"},
  ]

function PanelReact() {
  const [toggleImage, setToggleImage] = useState(false)
  const imageView = toggleImage ? 'active' : 'panel';

  return (
    <div>
      <h1>Panel</h1>
      <div className="container">
          {imgs.map(img =>
            <>
              <div className={imageView}
                style={{backgroundImage: `url(${img.image})`}}
                   onClick={() => setToggleImage(!toggleImage)}
              >
              </div>
              <div className="panel active">
                <h3>{img.title}</h3>
              </div>
            </>
          )}
        </div>

        <div className="panel"
             style="background-image: url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')">
          <h3>Wild Forest</h3>
        </div>
        <div className="panel"
             style="background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')">
          <h3>Sunny Beach</h3>
        </div>
        <div className="panel"
             style="background-image: url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')">
          <h3>City on Winter</h3>
        </div>
        <div className="panel"
             style="background-image: url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')">
          <h3>Mountains - Clouds</h3>
        </div>
      </div>
  );
}



export default PanelReact