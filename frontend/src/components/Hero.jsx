import {
  ArrowRight,
  Play,
  Leaf,
  Droplets,
  Sun,
  TreePine,
  Recycle,
  Trophy,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background image */}
      <div className="hero-background"></div>

      {/* Professional dark overlay */}
      <div className="hero-overlay"></div>

      {/* Decorative glow */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="container hero-content">

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="hero-text">

          {/* Official label */}
          <div className="hero-official-label">

            <ShieldCheck size={16} />

            <span>
              DIGITAL ENVIRONMENTAL EDUCATION INITIATIVE
            </span>

          </div>


          {/* Main heading */}
          <h1>
            Empowering Students
            <span>to Protect Our Planet.</span>
          </h1>


          {/* Subtitle */}
          <p className="hero-subtitle">
            Learn. Play. Act. Impact.
          </p>


          {/* Description */}
          <p className="hero-description">

            EcoQuest is a digital environmental education platform
            that transforms sustainability learning into meaningful
            challenges, interactive experiences and real-world
            environmental action.

          </p>


          {/* Buttons */}
          <div className="hero-buttons">

            <button className="primary-button">

              Start Your Eco Journey

              <ArrowRight size={18} />

            </button>


            <button className="secondary-button">

              <Play size={17} />

              Explore EcoQuest

            </button>

          </div>


          {/* Trust indicators */}
          <div className="hero-trust">

            <div className="trust-item">

              <Leaf size={18} />

              <span>
                Environmental Learning
              </span>

            </div>


            <div className="trust-item">

              <Recycle size={18} />

              <span>
                Sustainable Action
              </span>

            </div>


            <div className="trust-item">

              <TreePine size={18} />

              <span>
                Measurable Impact
              </span>

            </div>

          </div>

        </div>


        {/* =================================================
            RIGHT SIDE — ECO IMPACT DASHBOARD
        ================================================= */}

        <div className="hero-visual">

          {/* Main glass dashboard */}

          <div className="eco-dashboard">

            {/* Header */}

            <div className="dashboard-header">

              <div className="dashboard-title">

                <div className="dashboard-icon">
                  <Leaf size={21} />
                </div>

                <div>

                  <span>
                    ECOQUEST PROFILE
                  </span>

                  <strong>
                    Earth Guardian
                  </strong>

                </div>

              </div>


              <div className="level-badge">
                LEVEL 04
              </div>

            </div>


            {/* Impact score */}

            <div className="impact-main">

              <div className="impact-circle">

                <div>

                  <strong>
                    78
                  </strong>

                  <span>
                    IMPACT
                  </span>

                </div>

              </div>


              <div className="impact-details">

                <h3>
                  Environmental Impact
                </h3>

                <p>
                  Your sustainability journey is growing.
                </p>


                <div className="impact-progress">

                  <div className="progress-top">

                    <span>
                      Level Progress
                    </span>

                    <strong>
                      78%
                    </strong>

                  </div>

                  <div className="progress-track">

                    <div className="progress-value"></div>

                  </div>

                </div>

              </div>

            </div>


            {/* Environmental metrics */}

            <div className="eco-metrics">

              <div className="metric">

                <div className="metric-icon">
                  <TreePine size={17} />
                </div>

                <div>

                  <strong>
                    24
                  </strong>

                  <span>
                    Trees
                  </span>

                </div>

              </div>


              <div className="metric">

                <div className="metric-icon">
                  <Droplets size={17} />
                </div>

                <div>

                  <strong>
                    1.8K L
                  </strong>

                  <span>
                    Water Saved
                  </span>

                </div>

              </div>


              <div className="metric">

                <div className="metric-icon">
                  <Recycle size={17} />
                </div>

                <div>

                  <strong>
                    42 KG
                  </strong>

                  <span>
                    Waste Recycled
                  </span>

                </div>

              </div>

            </div>


            {/* Bottom mission */}

            <div className="dashboard-mission">

              <div className="mission-icon">
                <Trophy size={18} />
              </div>

              <div>

                <span>
                  CURRENT MISSION
                </span>

                <strong>
                  Complete 5 Eco Challenges
                </strong>

              </div>

              <div className="mission-xp">
                +150 XP
              </div>

            </div>

          </div>


          {/* Floating achievement */}

          <div className="floating-card card-one">

            <div className="floating-icon">
              🌱
            </div>

            <div>

              <strong>
                +150 XP
              </strong>

              <small>
                Mission Completed
              </small>

            </div>

          </div>


          {/* Floating badge */}

          <div className="floating-card card-two">

            <div className="floating-icon">
              🏆
            </div>

            <div>

              <strong>
                New Badge
              </strong>

              <small>
                Planet Protector
              </small>

            </div>

          </div>


          {/* Floating streak */}

          <div className="floating-card card-three">

            <div className="floating-icon">
              🔥
            </div>

            <div>

              <strong>
                7 Day Streak
              </strong>

              <small>
                Keep making an impact
              </small>

            </div>

          </div>

        </div>

      </div>


      {/* Bottom scroll indicator */}

      <div className="hero-scroll">

        <span>
          EXPLORE ECOQUEST
        </span>

        <ChevronDown size={16} />

      </div>

    </section>
  );
}

export default Hero;