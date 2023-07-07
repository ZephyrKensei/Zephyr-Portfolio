
function Work(props) {
  return (
    <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My Projects</h2>
        <p className="section__subtitle section__subtitle--work">- A selection of my range of work -</p>
        
        <div className="portfolio">
            <a href={`props.urlSrc`}
                className="portfolio__item"
                target="_blank"
                rel="noreferrer">
            <img src={`../imgs/${props.img}`}
                alt="Responsive Website"
                className="portfolio__img" />
            </a>
        </div>
    </section>
  );
}

export default Work;