import htmlCssJs from "../../assets/html_css_js_Slide.jpeg";
import react_jsx from "../../assets/react_jsx.webp";
import Mysql_Slide from "../../assets/Mysql_Slide.png";

function ConteudoSimples() {
  return (
    <>
      <div className="container">
        <div className="row p-3">
          {/* primeiro bloco */}
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={htmlCssJs} className="card-img-top" alt={"..."} />
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  molestiae saepe minus temporibus eligendi obcaecati sunt
                  facilis rem tempora quod omnis, beatae ipsam odit dignissimos
                  sequi officiis ab quia consectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={htmlCssJs} className="card-img-top" alt={"..."} />
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  molestiae saepe minus temporibus eligendi obcaecati sunt
                  facilis rem tempora quod omnis, beatae ipsam odit dignissimos
                  sequi officiis ab quia consectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={htmlCssJs} className="card-img-top" alt={"..."} />
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  molestiae saepe minus temporibus eligendi obcaecati sunt
                  facilis rem tempora quod omnis, beatae ipsam odit dignissimos
                  sequi officiis ab quia consectetur.
                </p>
              </div>
            </div>
          </div>
          {/* segundo bloco */}

          <div className="col-md-4 mt-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={react_jsx} className="card-img-top" alt={"..."} />
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  molestiae saepe minus temporibus eligendi obcaecati sunt
                  facilis rem tempora quod omnis, beatae ipsam odit dignissimos
                  sequi officiis ab quia consectetur.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={react_jsx} className="card-img-top" alt={"..."} />
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  molestiae saepe mi, beatae ipsam odit dignissimos sequi
                  officiis ab quia consectetur nus temporibus eligendi obcaecati
                  sunt facilis rem tempora quod omnis.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={react_jsx} className="card-img-top" alt={"..."} />
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  molestiae saepe minus temporibus eligendi obcaecati sunt
                  facilis rem tempora quod omnis, beatae ipsam odit dignissimos
                  sequi officiis ab quia consectetur.
                </p>
              </div>
            </div>
          </div>
          {/* terceiro bloco */}

          <div className="col-md-4 mt-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={Mysql_Slide} className="card-img-top" alt={"..."} />
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  molestiae saepe minus temporibus eligendi obcaecati sunt
                  facilis rem tempora quod omnis, beatae ipsam odit dignissimos
                  sequi officiis ab quia consectetur.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={Mysql_Slide} className="card-img-top" alt={"..."} />
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  molestiae saepe mi, beatae ipsam odit dignissimos sequi
                  officiis ab quia consectetur nus temporibus eligendi obcaecati
                  sunt facilis rem tempora quod omnis.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={Mysql_Slide} className="card-img-top" alt={"..."} />
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  molestiae saepe minus temporibus eligendi obcaecati sunt
                  facilis rem tempora quod omnis, beatae ipsam odit dignissimos
                  sequi officiis ab quia consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ConteudoSimples;
