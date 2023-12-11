import { Link } from "react-router-dom";

const Home = () => {
  const content = (
    <section className='bg-slate-400'>
      <header>
        <h1>Welcome to NestTest</h1>
      </header>
      <main>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel modi ex
          voluptates unde in quod dolores, obcaecati, recusandae placeat eveniet
          impedit pariatur quos sunt sit nesciunt nihil repellat, corrupti
          delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quasi distinctio reprehenderit, alias nam tempore pariatur culpa
          dolores ex. Laboriosam ea pariatur eius recusandae soluta qui officiis
          amet ipsa, cum enim.
        </p>
        <address>
          Nest Test
          <br />
          555 Foo Drive
          <br />
          1132 Fooland
          <br />
          <a href='tel:+15555555555'>(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: Chadwick Chadson</p>
      </main>
      <footer>
        <Link to='/login'>Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Home;
