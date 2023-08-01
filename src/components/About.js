
function About() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I Am</h2>
      <p className="section__subtitle section__subtitle--about">Front-End Developer from the Lonestar state of Texas</p>
      
      <div className="about-me__body">
          <p>I'm a web developer, designer, and gamer based out of Austin, TX. I love building apps that are creative and unique and I spend a lot of my free time learning and exploring all sorts of new things around the web.</p>
          <p>My background is in Exercise Science and Pharmacology. Growing up in a military family and traveling all over the world, I've developed a lot of very important life skills that a lot of individuals don't get to experience. I love to spend my weekends taking time for family and exploring new places with my wolfdog.</p>
      </div>
      
      <img src="public/img/zephyr-02.jpg" alt="Developer Austin Turturro" className="about-me__img" />
    </section>
  );
}

export default About;