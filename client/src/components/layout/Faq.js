import React, { Fragment } from "react";
import FadeIn from "./FadeIn";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Faq = () => {
  return (
    <Fragment>
      <Navbar />
      <FadeIn>
        <div className="container">
          <br />
          <br />

          <div className="" id="accordion">
            <div className="faqHeader">Kaksh - 1.1.2</div>
            <div className="card ">
              <div className="card-header">
                <h4 className="card-header">
                  <a
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne">
                    Is it an air purifier?
                  </a>
                </h4>
              </div>
              <div id="collapseOne" className="panel-collapse collapse in">
                <div className="card-block">
                  No it is not an air purifier. It doesn't remove Particulate
                  Matter (PM) or any other dust particles from air. It is a
                  Germicidal air supply unit which deactivates Viruses, Bacteria
                  and Fungi. This ensures the supply of disease-free air within
                  an enclosed space.
                </div>
              </div>
            </div>
            <div className="card ">
              <div className="card-header">
                <h4 className="card-header">
                  <a
                    className="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTen">
                    How does it kill the air-borne germs?
                  </a>
                </h4>
              </div>
              <div id="collapseTen" className="panel-collapse collapse">
                <div className="card-block">
                  Viruses and some other microorganisms cannot be killed, but
                  merely deactivated, such that they become unable to multiply
                  and spread disease. Kaksh unit dispenses a very heavy dosage
                  of 21.99 J/m^2 of UV-C radiation to the air it supplies. This
                  dosage is enough to deactivate most of the disease spreading
                  microorganisms, such as SARS-Cov-2 (the cause of Covid-19).
                </div>
              </div>
            </div>
            <div className="card ">
              <div className="card-header">
                <h4 className="card-header">
                  <a
                    className="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseEleven">
                    Does it remove bad odours from the room?
                  </a>
                </h4>
              </div>
              <div id="collapseEleven" className="panel-collapse collapse">
                <div className="card-block">
                  UV-C radiation, especially in the high doses that the Kaksh
                  unit dispenses, is known to break down several organic
                  molecule. Moreover, the initial test users of the unit have
                  reported a complete removel of all malodours in a short while.
                  The lab testing for the quantification of this effect of the
                  Kaksh unit is underway.
                </div>
              </div>
            </div>
            <div className="card ">
              <div className="card-header">
                <h4 className="card-header">
                  <a
                    className="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse1">
                    Where should the Kaksh unit be installed?
                  </a>
                </h4>
              </div>
              <div id="collapse1" className="panel-collapse collapse">
                <div className="card-block">
                  This unit is essential for all enclosed spaces, especially the
                  ones with limited fresh air supply. Any enclosed space that
                  welcomes multiple new people everyday is an ideal use-case for
                  this unit, since every new person could potentially carry a
                  host of air-borne disease with them. Kaksh unit in its current
                  embodiment is only suitable for enclosed spaces of up to 220
                  square feet or 20 square metres (of floor area). For any space
                  bigger than that, we recommend installing multiple units. For
                  example, in a waiting room of 55 square metres we recommend
                  installing 3 nos. of Kaksh units evenly spaced out throughout
                  the space. Divide your floor area in square metres by 20 and
                  round up to get the required nos. of Kaksh units.
                </div>
              </div>
            </div>
            <div className="card ">
              <div className="card-header">
                <h4 className="card-header">
                  <a
                    className="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse2">
                    How do I install the Kaksh unit?
                  </a>
                </h4>
              </div>
              <div id="collapse2" className="panel-collapse collapse">
                <div className="card-block">
                  Kaksh unit can be easily installed by plugging in to any
                  220-230V-AC outlet with atleast 1A rating. The unit can be
                  placed in any corner of the enclosed space, but preferably
                  closer to the occupants of the room. Any sort of air
                  circulation (such as fans and ACs) within the room aids the
                  unit in its operation by spreading out the sanitised and
                  odourized air supplied by Kaksh.
                </div>
              </div>
            </div>
            <div className="card ">
              <div className="card-header">
                <h4 className="card-header">
                  <a
                    className="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse3">
                    Does the product have any warranty?
                  </a>
                </h4>
              </div>
              <div id="collapse3" className="panel-collapse collapse">
                <div className="card-block">
                  All the components in the unit have a design life of over 9000
                  hours. We don't offer any warranty or guarantee at the moment,
                  but we will launch an AMC option very soon!
                </div>
              </div>
            </div>
            <div className="card ">
              <div className="card-header">
                <h4 className="card-header">
                  <a
                    className="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse4">
                    Is the UV-C radiation safe?
                  </a>
                </h4>
              </div>
              <div id="collapse4" className="panel-collapse collapse">
                <div className="card-block">
                  This is a very critical question and needs to be understood
                  carefully by users. Direct exposure to UV-C radiation is NOT
                  safe! However, breathing in air exposed to UV-C radiation is
                  completely safe. In fact, many of you might be reading this
                  FAQ while drinking a glass of UV-C treated water, since most
                  RO water purifiers have a UV-C treatment module.
                </div>
              </div>
            </div>
            <div className="card ">
              <div className="card-header">
                <h4 className="card-header">
                  <a
                    className="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse5">
                    How long should I run the Kaksh unit to sanitise the air and
                    kill all microbes in it?
                  </a>
                </h4>
              </div>
              <div id="collapse5" className="panel-collapse collapse">
                <div className="card-block">
                  You should run the unit as long as there are occupants in the
                  room. Any occupant can be the carrier of a lethal air-borne
                  disease and they continue to load the air with miniscule
                  infected droplets as long as they are breathing and speaking
                  in the room. Thus, it is very important to continuously run
                  the Kaksh unit so that it can provide its Real-time
                  sanitisation!
                </div>
              </div>
            </div>
            <div className="card ">
              <div className="card-header">
                <h4 className="card-header">
                  <a
                    className="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse6">
                    How to keep the unit clean?
                  </a>
                </h4>
              </div>
              <div id="collapse6" className="panel-collapse collapse">
                <div className="card-block">
                  Since this is not a filtration based unit, you don't need to
                  buy and preplace any filters for it. To retain its beautiful
                  aesthetics, just wipe it gently with a damp cloth.
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />

            <div className="faqHeader">Shwaas-1.2.1</div>
            <div className="card ">
              <div className="card-header">
                <h4 className="card-header">
                  <a
                    className="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseFour">
                    Coming Soon....
                  </a>
                </h4>
              </div>
              <div id="collapseFour" className="panel-collapse collapse">
                <div className="card-block">Coming soon.</div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
      <Footer />
    </Fragment>
  );
};

export default Faq;
