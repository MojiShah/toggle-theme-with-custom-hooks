import './App.css';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const [theme,toggleThem] = useDarkMode();
  return (
    <div className={`App ${theme === 'light' ? 'light_bg' : 'dark_bg'}`}>
      <button className="switch_theme_btn" onClick={toggleThem}>Switch theme</button>
      <div className="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, unde velit, quidem id accusantium officia reprehenderit eligendi perferendis ullam fugiat tenetur dolore at nesciunt cumque quam. Corrupti error accusamus quisquam unde perferendis consequatur enim beatae obcaecati sapiente eum quae magni quia, reprehenderit asperiores eos, quibusdam mollitia, reiciendis esse veritatis placeat sed nesciunt. Praesentium amet vitae modi, quidem repellat at! Adipisci sint pariatur provident magnam ullam sit quo, omnis veritatis in magni obcaecati, iste ab quisquam delectus incidunt facere temporibus molestiae tempora? Quae nisi quibusdam, placeat tempora provident consequatur dolores at architecto commodi ex in modi cumque temporibus reprehenderit eos tempore?

          <br /><br />
       
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur debitis adipisci odio quia quibusdam quos repellat animi minima impedit qui delectus blanditiis, beatae veniam praesentium, aliquid corporis. Excepturi dolores cum magnam eligendi labore error? Perspiciatis architecto omnis ad unde vero dolorum, labore est magnam, culpa sunt aliquid ullam beatae vel ipsum dolorem quis possimus nam necessitatibus. Dolorum, sed. Eius quos cum ducimus excepturi minus quo eaque delectus possimus voluptatem perspiciatis! Nihil asperiores nulla exercitationem accusantium corporis ducimus? Recusandae tempora est accusantium quod veritatis, cumque nam facilis velit modi reprehenderit quisquam temporibus officiis repellat possimus quia nesciunt incidunt praesentium magni, provident aspernatur repudiandae aperiam tenetur amet. Sed, commodi voluptatem, facilis adipisci vitae vel harum corporis quas natus enim quis quae vero.
        </p>
      </div>
    </div>
  )
}

export default App
