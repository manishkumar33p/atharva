import React, { useEffect, useState } from "react";
import "./Home.css";

const heroSlides = [
  {
    eyebrow: "PHYSIOTHERAPY • REHABILITATION • WELLNESS",
    title: "Move with",
    accent: "confidence.",
    text: "Personalised physiotherapy and rehabilitation care designed to help you move better, recover stronger and live with greater confidence.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    label: "PAIN RELIEF",
    cardTitle: "Move beyond pain.",
  },
  {
    eyebrow: "RECOVERY • MOBILITY • STRENGTH",
    title: "Recover with",
    accent: "purpose.",
    text: "Thoughtful rehabilitation focused on movement, strength, mobility and a clear path towards functional recovery.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85",
    label: "REHABILITATION",
    cardTitle: "Recovery starts with movement.",
  },
  {
    eyebrow: "SPORTS • PERFORMANCE • RECOVERY",
    title: "Return",
    accent: "stronger.",
    text: "Progressive rehabilitation for active individuals and sports-related injuries, built around safe and purposeful movement.",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=85",
    label: "SPORTS RECOVERY",
    cardTitle: "Stronger starts here.",
  },
];

const therapies = [
  {
    no: "01",
    title: "Pain Management",
    text: "Personalised care for back pain, neck pain, joint pain, stiffness and movement-related concerns.",
  },
  {
    no: "02",
    title: "Orthopaedic Rehabilitation",
    text: "Structured rehabilitation for musculoskeletal conditions, injuries and post-operative recovery.",
  },
  {
    no: "03",
    title: "Sports Rehabilitation",
    text: "Progressive rehabilitation designed to support recovery and a safe return to activity.",
  },
  {
    no: "04",
    title: "Neurological Rehabilitation",
    text: "Support focused on mobility, balance, coordination and functional independence.",
  },
  {
    no: "05",
    title: "Post-Surgical Rehabilitation",
    text: "Guided recovery to restore movement, strength, confidence and everyday function.",
  },
  {
    no: "06",
    title: "Geriatric Physiotherapy",
    text: "Gentle and structured care supporting mobility, balance, strength and independence.",
  },
];

const treatments = [
  "Back & Neck Pain",
  "Shoulder Pain",
  "Knee Pain",
  "Arthritis",
  "Sports Injuries",
  "Muscle & Joint Pain",
  "Posture Problems",
  "Balance & Mobility",
  "Post-Surgical Recovery",
  "Stroke Rehabilitation",
  "Muscle Weakness",
  "Movement Difficulties",
];

const benefits = [
  {
    no: "01",
    title: "Personalised Assessment",
    text: "Understanding your symptoms, movement and recovery goals before planning your care.",
  },
  {
    no: "02",
    title: "Individual Treatment",
    text: "A treatment approach structured around your condition, lifestyle and rehabilitation needs.",
  },
  {
    no: "03",
    title: "Progressive Care",
    text: "Your rehabilitation evolves as your mobility, strength and confidence improve.",
  },
  {
    no: "04",
    title: "Patient-Centred",
    text: "Clear, comfortable and purposeful care throughout your rehabilitation journey.",
  },
];

const testimonials = [
  {
    quote:
      "A calm and personalised approach can make the rehabilitation journey feel much more manageable.",
    name: "Patient Experience",
    type: "PHYSIOTHERAPY CARE",
  },
  {
    quote:
      "Understanding the movement problem and having a structured plan can bring greater confidence to recovery.",
    name: "Patient Experience",
    type: "REHABILITATION CARE",
  },
  {
    quote:
      "Every small improvement matters when recovery is approached with patience, consistency and guidance.",
    name: "Patient Experience",
    type: "RECOVERY JOURNEY",
  },
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [testimonial, setTestimonial] = useState(0);

  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonial((current) => (current + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileMenu(false);
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const nextTestimonial = () => {
    setTestimonial((current) => (current + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setTestimonial(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <main className="atharva-site">

      {/* ================= NAVBAR ================= */}

      <header className="atharva-navbar">

        <button
          className="atharva-logo"
          onClick={() => scrollTo("home")}
          aria-label="Go to home"
        >
          <span className="logo-symbol">A</span>

          <span className="logo-copy">
            <strong>ATHARVA</strong>
            <small>PHYSIO & REHAB CENTER</small>
          </span>
        </button>

        <nav className={`desktop-nav ${mobileMenu ? "mobile-open" : ""}`}>

          <button onClick={() => scrollTo("home")}>
            Home
          </button>

          <button onClick={() => scrollTo("about")}>
            About
          </button>

          <button onClick={() => scrollTo("therapies")}>
            Therapies
          </button>

          <button onClick={() => scrollTo("treatments")}>
            Treatments
          </button>

          <button onClick={() => scrollTo("why-us")}>
            Why Us
          </button>

          <button onClick={() => scrollTo("contact")}>
            Contact
          </button>

        </nav>

        <button
          className="nav-book"
          onClick={() => scrollTo("contact")}
        >
          Book Appointment
          <span>↗</span>
        </button>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </header>

      {/* ================= HERO CAROUSEL ================= */}

      <section id="home" className="hero-section">

        <div className="hero-background-number">
          0{activeSlide + 1}
        </div>

        <div className="hero-content">

          <div className="hero-eyebrow">
            <span></span>
            {slide.eyebrow}
          </div>

          <div className="hero-title-wrap" key={activeSlide}>

            <h1>
              {slide.title}
              <br />
              <em>{slide.accent}</em>
            </h1>

            <p>{slide.text}</p>

          </div>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={() => scrollTo("contact")}
            >
              Book an Appointment
              <span>↗</span>
            </button>

            <button
              className="hero-text-button"
              onClick={() => scrollTo("therapies")}
            >
              Explore Therapies
              <span>↓</span>
            </button>

          </div>

          <div className="hero-bottom">

            <div className="hero-features">

              <div>
                <strong>01</strong>
                <span>
                  Personalised
                  <br />
                  Care
                </span>
              </div>

              <div>
                <strong>02</strong>
                <span>
                  Modern
                  <br />
                  Rehabilitation
                </span>
              </div>

              <div>
                <strong>03</strong>
                <span>
                  Patient
                  <br />
                  Focused
                </span>
              </div>

            </div>

            <div className="carousel-controls">

              <button onClick={previousSlide} aria-label="Previous slide">
                ←
              </button>

              <div className="carousel-dots">

                {heroSlides.map((item, index) => (
                  <button
                    key={item.label}
                    className={index === activeSlide ? "active" : ""}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}

              </div>

              <button onClick={nextSlide} aria-label="Next slide">
                →
              </button>

            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div
            className="hero-photo"
            key={activeSlide}
            style={{
              backgroundImage: `url("${slide.image}")`,
            }}
          />

          <div className="hero-photo-border"></div>

          <div className="hero-info-card">

            <span>{slide.label}</span>

            <strong>
              {slide.cardTitle}
            </strong>

            <button onClick={() => scrollTo("contact")}>
              Discover More ↗
            </button>

          </div>

          <div className="hero-badge">
            <span>ATHARVA</span>
            <small>PHYSIO • REHAB • CARE</small>
          </div>

        </div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="intro-section">

        <div className="section-label">
          01 / THE ATHARVA EXPERIENCE
        </div>

        <div className="intro-grid">

          <h2>
            A more personal way
            <br />
            to experience <em>recovery.</em>
          </h2>

          <p>
            Physiotherapy is more than treating pain. It is about
            understanding your body, improving movement and helping
            you return to the activities that matter in everyday life.
          </p>

        </div>

        <div className="intro-line"></div>

      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="about-section">

        <div className="about-visual">

          <div className="about-photo"></div>

          <div className="about-small-card">
            <span>ATHARVA</span>
            <strong>
              Care with
              <br />
              purpose.
            </strong>
          </div>

        </div>

        <div className="about-content">

          <div className="section-label">
            02 / ABOUT ATHARVA
          </div>

          <h2>
            Care that looks
            <br />
            beyond <em>pain.</em>
          </h2>

          <p>
            Atharva Physio & Rehab Center is built around a simple
            philosophy — rehabilitation should be personalised,
            progressive and centred around the individual.
          </p>

          <p>
            From assessment through rehabilitation, our approach
            focuses on understanding movement challenges, improving
            function and building confidence.
          </p>

          <button
            className="outline-button"
            onClick={() => scrollTo("why-us")}
          >
            Discover Our Approach
            <span>↗</span>
          </button>

        </div>

      </section>

      {/* ================= THERAPIES ================= */}

      <section id="therapies" className="therapies-section">

        <div className="section-heading">

          <div>

            <div className="section-label">
              03 / SPECIALISED CARE
            </div>

            <h2>
              Therapies designed
              <br />
              around <em>you.</em>
            </h2>

          </div>

          <p>
            Focused physiotherapy and rehabilitation approaches
            supporting pain management, mobility, recovery and
            functional improvement.
          </p>

        </div>

        <div className="therapy-grid">

          {therapies.map((therapy) => (
            <article className="therapy-card" key={therapy.no}>

              <div className="therapy-card-top">

                <span>{therapy.no}</span>

                <button
                  onClick={() => scrollTo("contact")}
                  aria-label={`Enquire about ${therapy.title}`}
                >
                  ↗
                </button>

              </div>

              <div className="therapy-icon">
                ✦
              </div>

              <h3>{therapy.title}</h3>

              <p>{therapy.text}</p>

              <button
                className="therapy-link"
                onClick={() => scrollTo("contact")}
              >
                Enquire About Therapy
                <span>↗</span>
              </button>

            </article>
          ))}

        </div>

      </section>

      {/* ================= TREATMENTS ================= */}

      <section id="treatments" className="treatments-section">

        <div className="treatment-content">

          <div className="section-label">
            04 / CONDITIONS WE SUPPORT
          </div>

          <h2>
            Focused care for
            <br />
            everyday <em>movement.</em>
          </h2>

          <p>
            Physiotherapy can support a wide range of pain,
            musculoskeletal, mobility and rehabilitation needs.
          </p>

          <button
            className="outline-button"
            onClick={() => scrollTo("contact")}
          >
            Discuss Your Requirement
            <span>↗</span>
          </button>

        </div>

        <div className="treatment-list">

          {treatments.map((item, index) => (
            <button
              className="treatment-item"
              key={item}
              onClick={() => scrollTo("contact")}
            >

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{item}</strong>

              <i>↗</i>

            </button>
          ))}

        </div>

      </section>

      {/* ================= RECOVERY JOURNEY ================= */}

      <section className="journey-section">

        <div className="journey-heading">

          <div className="section-label">
            05 / YOUR RECOVERY JOURNEY
          </div>

          <h2>
            Understand.
            <br />
            Treat.
            <br />
            <em>Progress.</em>
          </h2>

          <p>
            A thoughtful rehabilitation process begins with
            understanding where you are today and creating a
            practical path towards where you want to be.
          </p>

        </div>

        <div className="journey-list">

          <div className="journey-item">
            <span>01</span>

            <div>
              <h3>Assessment</h3>
              <p>
                Understand your symptoms, movement and functional needs.
              </p>
            </div>

            <b>↗</b>
          </div>

          <div className="journey-item">
            <span>02</span>

            <div>
              <h3>Treatment</h3>
              <p>
                Build a personalised treatment approach around your needs.
              </p>
            </div>

            <b>↗</b>
          </div>

          <div className="journey-item">
            <span>03</span>

            <div>
              <h3>Rehabilitation</h3>
              <p>
                Progress through guided exercises, movement and recovery.
              </p>
            </div>

            <b>↗</b>
          </div>

          <div className="journey-item">
            <span>04</span>

            <div>
              <h3>Progress</h3>
              <p>
                Work towards improved mobility, confidence and function.
              </p>
            </div>

            <b>↗</b>
          </div>

        </div>

      </section>

      {/* ================= WHY US ================= */}

      <section id="why-us" className="why-section">

        <div className="why-header">

          <div>
            <div className="section-label">
              06 / WHY ATHARVA
            </div>

            <h2>
              Thoughtful care.
              <br />
              <em>Meaningful progress.</em>
            </h2>
          </div>

          <p>
            A patient-centred approach that combines careful
            assessment, structured treatment and progressive
            rehabilitation.
          </p>

        </div>

        <div className="benefit-grid">

          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.no}>

              <span>{benefit.no}</span>

              <div className="benefit-line"></div>

              <h3>{benefit.title}</h3>

              <p>{benefit.text}</p>

            </article>
          ))}

        </div>

      </section>

      {/* ================= TESTIMONIAL CAROUSEL ================= */}

      <section className="testimonial-section">

        <div className="testimonial-decoration">
          “
        </div>

        <div className="section-label">
          07 / THE RECOVERY EXPERIENCE
        </div>

        <div className="testimonial-content" key={testimonial}>

          <blockquote>
            {testimonials[testimonial].quote}
          </blockquote>

          <div className="testimonial-author">

            <span></span>

            <div>
              <strong>
                {testimonials[testimonial].name}
              </strong>

              <small>
                {testimonials[testimonial].type}
              </small>
            </div>

          </div>

        </div>

        <div className="testimonial-controls">

          <button
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <div>

            {testimonials.map((item, index) => (
              <button
                key={item.type}
                className={index === testimonial ? "active" : ""}
                onClick={() => setTestimonial(index)}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}

          </div>

          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            →
          </button>

        </div>

      </section>

      {/* ================= APPOINTMENT ================= */}

      <section className="appointment-section">

        <div>

          <div className="section-label">
            08 / APPOINTMENT
          </div>

          <h2>
            Your next step
            <br />
            starts <em>here.</em>
          </h2>

          <p>
            Begin your rehabilitation journey with a personalised
            consultation at Atharva.
          </p>

        </div>

        <button
          className="large-book-button"
          onClick={() => scrollTo("contact")}
        >
          Book an Appointment
          <span>↗</span>
        </button>

      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact-section">

        <div className="contact-heading">

          <div className="section-label">
            09 / CONTACT ATHARVA
          </div>

          <h2>
            Let's talk about
            <br />
            your <em>recovery.</em>
          </h2>

          <p>
            Have a question or want to schedule an appointment?
            Share your details and the clinic team can get in touch.
          </p>

        </div>

        <div className="contact-box">

          <div className="contact-information">

            <div className="contact-brand-mark">
              A
            </div>

            <h3>
              ATHARVA
              <br />
              <em>PHYSIO & REHAB CENTER</em>
            </h3>

            <p>
              Personalised physiotherapy.
              <br />
              Purposeful rehabilitation.
            </p>

            <div className="contact-detail">

              <span>PHONE</span>

              <strong>
                Clinic Contact Number
              </strong>

            </div>

            <div className="contact-detail">

              <span>EMAIL</span>

              <strong>
                Clinic Email Address
              </strong>

            </div>

            <div className="contact-detail">

              <span>LOCATION</span>

              <strong>
                Clinic Address
              </strong>

            </div>

          </div>

          <form
            className="appointment-form"
            onSubmit={(event) => event.preventDefault()}
          >

            <div className="form-title">
              <span>APPOINTMENT REQUEST</span>

              <h3>
                Tell us how we can
                <br />
                help.
              </h3>
            </div>

            <div className="form-row">

              <input
                type="text"
                placeholder="Your Name"
                aria-label="Your Name"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                aria-label="Phone Number"
              />

            </div>

            <input
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
            />

            <select
              defaultValue=""
              aria-label="Select Service"
            >
              <option value="" disabled>
                Select Therapy
              </option>

              {therapies.map((therapy) => (
                <option key={therapy.no}>
                  {therapy.title}
                </option>
              ))}
            </select>

            <textarea
              rows="5"
              placeholder="Tell us briefly about your requirement"
              aria-label="Requirement"
            />

            <button
              type="submit"
              className="form-submit"
            >
              Request Appointment
              <span>↗</span>
            </button>

          </form>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="atharva-footer">

        <div className="footer-main">

          <div className="footer-brand">

            <button
              className="footer-logo"
              onClick={() => scrollTo("home")}
            >
              <span>A</span>

              <div>
                <strong>ATHARVA</strong>
                <small>PHYSIO & REHAB CENTER</small>
              </div>

            </button>

            <p>
              Personalised physiotherapy.
              <br />
              Purposeful rehabilitation.
            </p>

          </div>

          <div className="footer-navigation">

            <div>
              <span>EXPLORE</span>

              <button onClick={() => scrollTo("about")}>
                About
              </button>

              <button onClick={() => scrollTo("therapies")}>
                Therapies
              </button>

              <button onClick={() => scrollTo("treatments")}>
                Treatments
              </button>
            </div>

            <div>
              <span>CLINIC</span>

              <button onClick={() => scrollTo("why-us")}>
                Why Atharva
              </button>

              <button onClick={() => scrollTo("contact")}>
                Contact
              </button>

              <button onClick={() => scrollTo("contact")}>
                Appointment
              </button>
            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Atharva Physio & Rehab Center
          </span>

          <span>
            PHYSIOTHERAPY • REHABILITATION • WELLNESS
          </span>

        </div>

      </footer>

      {/* FLOATING APPOINTMENT BUTTON */}

      <button
        className="floating-appointment"
        onClick={() => scrollTo("contact")}
        aria-label="Book Appointment"
      >
        <span>BOOK</span>
        <strong>↗</strong>
      </button>

    </main>
  );
}

export default Home;