
function About() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">Front-End Developer from the Lonestar state Texas</p>
      
      <div className="about-me__body">
          <p>I'm a web developer, designer, and gamer based out of Austin, TX. I love building apps that are creative and unique, and spending a lot of my free time learning and exploring all sorts of new things on the web.</p>
          <p>My background is in Exercise Science and Pharmacology while growing up in a military family and traveling all over the world. I also own an extremely silly Wolfdog</p>
      </div>
      
      <img src="img/zephyr-02.jpg" alt="Developer Austin Turturro" className="about-me__img" />
    </section>
  );
}

export default About;