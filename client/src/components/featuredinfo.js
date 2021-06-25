import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

class Featureinfo extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              {/* custom button start */}
              <div>
                <svg className="pageBtn" width="50%" viewBox="0 0 175 55">
                  <a id="custombutton" href="#next">
                    <path
                      fill="dodgerblue"
                      d="M 0 0
                    L 200 0
                    L 0 200
                    L 131 125
                    L 0 125
                    Z"
                    />
                    <text
                      x="75"
                      y="28"
                      fill="white"
                      font-size="0.5em"
                      text-anchor="middle"
                      alignment-baseline="middle"
                    >
                      View All Player News
                    </text>
                  </a>
                </svg>
              </div>

              {/* custom button end */}
              <br></br>
              <h1 id="playernews">PLAYER NEWS</h1>
              <Card bg="dark" style={{ width: "28rem" }}>
                <Card.Body>
                  {/* Card sub section */}
                  <div id="subcards" className="cards">
                    <div id="infocard" className="card bg-secondary mb-3">
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img
                            src="https://media.pff.com/2020/04/Alvin-Kamara.jpg?w=956&h=538"
                            className="card-img"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <p className="card-text">
                              Matchup Preview + Week 5 Injury Analysis with Dr.
                              Seuss
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card Sub section */}
                    <div id="infocard" className="card bg-secondary mb-3">
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img
                            src="https://thefalconswire.usatoday.com/wp-content/uploads/sites/56/2020/08/USATSI_14808191.jpg?w=1000&h=600&crop=1"
                            className="card-img"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <p className="card-text">
                              Matchup Preview + Week 5 Injury Analysis with Dr.
                              Seuss
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card Sub section */}
                    <div id="infocard" className="card bg-secondary mb-3">
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img
                            src="https://sportsnaut.com/wp-content/uploads/2021/04/sean-mcvay-goff-scaled.jpg"
                            className="card-img"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            {/* <h5 className="card-title">Card title</h5> */}
                            <p className="card-text">
                              Matchup Preview + Week 5 Injury Analysis with Dr.
                              Seuss
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card Sub section */}
                    <div id="infocard" className="card bg-secondary mb-3">
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img
                            src="https://ftw.usatoday.com/wp-content/uploads/sites/90/2021/03/AP-Playing-Tag-Football-e1615301675646.jpg?w=1000&h=600&crop=1"
                            className="card-img"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            {/* <h5 className="card-title">Card title</h5> */}
                            <p className="card-text">
                              Matchup Preview + Week 5 Injury Analysis with Dr.
                              Seuss
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card Sub section */}
                    <div id="infocard" className="card bg-secondary mb-3">
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img
                            src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/LQ4Nn1YoOny-u6sqjvJDA5roGYA=/1440x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/6LZWSVWETXMTGKEGVL52TNNB7U.jpg"
                            className="card-img"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            {/* <h5 className="card-title">Card title</h5> */}
                            <p className="card-text">
                              Matchup Preview + Week 5 Injury Analysis with Dr.
                              Seuss
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <Card.Body></Card.Body>
              </Card>
            </Col>
            <Col>
              {/* custom button start */}
              <div>
                <svg className="pageBtn" width="50%" viewBox="0 0 175 55">
                  <a href="#next">
                    <path
                      fill="dodgerblue"
                      d="M 0 0
                    L 200 0
                    L 0 200
                    L 131 125
                    L 0 125
                    Z"
                    />
                    <text
                      x="75"
                      y="28"
                      fill="white"
                      font-size="0.5em"
                      text-anchor="middle"
                      alignment-baseline="middle"
                    >
                      View All Latest Articles
                    </text>
                  </a>
                </svg>
              </div>

              {/* custom button end */}
              <br></br>
              <h1 id="latestarticles">LATEST ARTICLES</h1>
              <Card bg="dark" style={{ width: "28rem" }}>
                <Card.Body>
                  <div id="subcards" className="cards">
                    {/* Card sub section */}
                    <div id="infocard" className="card bg-secondary mb-3">
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img
                            src="https://www.dailyherald.com/storyimage/da/20210414/sports/210419664/AR/0/AR-210419664.jpg&updated=202104141454&MaxW=900&maxH=900&noborder&Q=80"
                            className="card-img"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <p className="card-text">
                              Matchup Preview + Week 5 Injury Analysis with Dr.
                              Seuss
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card Sub section */}
                    <div id="infocard" className="card bg-secondary mb-3">
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img
                            src="http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_22/c_fill,f_auto,h_495,q_auto,w_880/v1/m/5/a/5a54a96ac203816fd74b6f0b66412e849a851cff/nfl-insider-thinks-russell-wilson-trade-possible.jpg"
                            className="card-img"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <p className="card-text">
                              Matchup Preview + Week 5 Injury Analysis with Dr.
                              Seuss
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card Sub section */}
                    <div id="infocard" className="card bg-secondary mb-3">
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img
                            src="https://touchdownwire.usatoday.com/wp-content/uploads/sites/59/2020/10/USATSI_15061576.jpg"
                            className="card-img"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            {/* <h5 className="card-title">Card title</h5> */}
                            <p className="card-text">
                              Matchup Preview + Week 5 Injury Analysis with Dr.
                              Seuss
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card Sub section */}
                    <div id="infocard" className="card bg-secondary mb-3">
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img
                            src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec6f8dcacbd7400065de2fb%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D291%26cropX2%3D2374%26cropY1%3D77%26cropY2%3D2160"
                            className="card-img"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            {/* <h5 className="card-title">Card title</h5> */}
                            <p className="card-text">
                              Matchup Preview + Week 5 Injury Analysis with Dr.
                              Seuss
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card Sub section */}
                    <div id="infocard" className="card bg-secondary mb-3">
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img
                            src="https://image.cnbcfm.com/api/v1/image/106863671-1617644053820-gettyimages-1295705920-ai5i2339_2021011075342536.jpeg?v=1617644192"
                            className="card-img"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            {/* <h5 className="card-title">Card title</h5> */}
                            <p className="card-text">
                              Matchup Preview + Week 5 Injury Analysis with Dr.
                              Seuss
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <Card.Body></Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Featureinfo;
