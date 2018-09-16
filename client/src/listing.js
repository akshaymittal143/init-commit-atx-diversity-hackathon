import React, { Component } from 'react';
import jobDesc from './dummydata';
import { Grid, Row, Col } from 'react-bootstrap';
import './listing.css';

export default class Listing extends Component {
  render() {
    return (
      // <div className="main">
      //   <div className="heading">
      //     <h2> LANDING </h2>
      //   </div>
      //   {jobDesc.map((job, i) => {
      //     return (
      //       <Grid>
      //         <Row className="show-grid">
      //           <div key={i} className="jobListing">
      //             <Col xs={6} md={4}>
      //               {/* <code>{'<Col xs={6} md={4} />'}</code> */}
      //               <span className="title">{job.title}</span>
      //               <span className="company"> {job.organization}</span>
      //             </Col>
      //             <Col xs={6} md={4}>
      //               {/* <code>{'<Col xs={6} md={4} />'}</code> */}
      //               <span className="user"> {job.poster}</span>
      //               <span className="desc">{job.description}</span>
      //             </Col>
      //             <Col xs={6} md={4}>
      //               {/* <code>{'<Col xsHidden md={4} />'}</code> */}
      //               <button>Apply</button>
      //             </Col>
      //           </div>
      //         </Row>
      //       </Grid>
      //     );
      //   })}
      // </div>

      <div class="container-fluid text-center">
        <br />
        <br />
        <br />
        <br />
        <div class="container">
          <div class="paige-header">
            <h1>Job Listings</h1>
          </div>
          <br />
          <br />
          <div class="row">
            <div class="col-12">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Company</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Navigation Bar</td>
                    <td>Indeed</td>
                    <td>
                      The key to more success is to get a massage once a week,
                      very important, major key, cloth talk. Mogul talk. Major
                      key, don’t fall for the trap, stay focused. It’s the ones
                      closest to you that want to see you fail. The key to
                      success is to keep your head above the water, never give
                      up. Eliptical talk. Let me be clear, you have to make it
                      through the jungle to make it to paradise, that’s the key,
                      Lion! The other day the grass was brown, now it’s green
                      because I ain’t give up. Never surrender.
                    </td>
                    <td>
                      <form class="form-inline">
                        <button
                          class="btn btn-outline-success my-2 my-sm-0"
                          type="submit"
                        >
                          Apply
                        </button>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td>Image Carousel</td>
                    <td>Capital Factory</td>
                    <td>
                      Bless up. Watch your back, but more importantly when you
                      get out the shower, dry your back, it’s a cold world out
                      there. To be successful you’ve got to work hard, to make
                      history, simple, you’ve got to make it. We the best. You
                      smart, you loyal, you a genius. Lion! Eliptical talk. Put
                      it this way, it took me twenty five years to get these
                      plants, twenty five years of blood sweat and tears, and
                      I’m never giving up, I’m just getting started. To be
                      successful you’ve got to work hard, to make history,
                      simple, you’ve got to make it.
                    </td>
                    <td>
                      <form class="form-inline">
                        <button
                          class="btn btn-outline-success my-2 my-sm-0"
                          type="submit"
                        >
                          Apply
                        </button>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td>CRUD Operations Rails</td>
                    <td>Homeaway</td>
                    <td>
                      Lorem Khaled Ipsum is a major key to success. The key is
                      to drink coconut, fresh coconut, trust me. You should
                      never complain, complaining is a weak emotion, you got
                      life, we breathing, we blessed. Find peace, life is like a
                      water fall, you’ve gotta flow. Bless up. The first of the
                      month is coming, we have to get money, we have no choice.
                      It cost money to eat and they don’t want you to eat. To
                      succeed you must believe. When you believe, you will
                      succeed. Lion! How’s business? Boomin.
                    </td>
                    <td>
                      <form class="form-inline">
                        <button
                          class="btn btn-outline-success my-2 my-sm-0"
                          type="submit"
                        >
                          Apply
                        </button>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td>Mapping data third party API</td>
                    <td>Ebay</td>
                    <td>
                      The key to more success is to get a massage once a week,
                      very important, major key, cloth talk. Mogul talk. Major
                      key, don’t fall for the trap, stay focused. It’s the ones
                      closest to you that want to see you fail. The key to
                      success is to keep your head above the water, never give
                      up. Eliptical talk. Let me be clear, you have to make it
                      through the jungle to make it to paradise, that’s the key,
                      Lion! The other day the grass was brown, now it’s green
                      because I ain’t give up. Never surrender.
                    </td>
                    <td>
                      <form class="form-inline">
                        <button
                          class="btn btn-outline-success my-2 my-sm-0"
                          type="submit"
                        >
                          Apply
                        </button>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td>From creation</td>
                    <td>Glassdoor</td>
                    <td>
                      The key to more success is to get a massage once a week,
                      very important, major key, cloth talk. Mogul talk. Major
                      key, don’t fall for the trap, stay focused. It’s the ones
                      closest to you that want to see you fail. The key to
                      success is to keep your head above the water, never give
                      up. Eliptical talk. Let me be clear, you have to make it
                      through the jungle to make it to paradise, that’s the key,
                      Lion! The other day the grass was brown, now it’s green
                      because I ain’t give up. Never surrender.
                    </td>
                    <td>
                      <form class="form-inline">
                        <button
                          class="btn btn-outline-success my-2 my-sm-0"
                          type="submit"
                        >
                          Apply
                        </button>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td>RESTFUL routing</td>
                    <td>Linkedin</td>
                    <td>
                      The key to more success is to get a massage once a week,
                      very important, major key, cloth talk. Mogul talk. Major
                      key, don’t fall for the trap, stay focused. It’s the ones
                      closest to you that want to see you fail. The key to
                      success is to keep your head above the water, never give
                      up. Eliptical talk. Let me be clear, you have to make it
                      through the jungle to make it to paradise, that’s the key,
                      Lion! The other day the grass was brown, now it’s green
                      because I ain’t give up. Never surrender.
                    </td>
                    <td>
                      <form class="form-inline">
                        <button
                          class="btn btn-outline-success my-2 my-sm-0"
                          type="submit"
                        >
                          Apply
                        </button>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td>Image gallery</td>
                    <td>Trulia</td>
                    <td>
                      The key to more success is to get a massage once a week,
                      very important, major key, cloth talk. Mogul talk. Major
                      key, don’t fall for the trap, stay focused. It’s the ones
                      closest to you that want to see you fail. The key to
                      success is to keep your head above the water, never give
                      up. Eliptical talk. Let me be clear, you have to make it
                      through the jungle to make it to paradise, that’s the key,
                      Lion! The other day the grass was brown, now it’s green
                      because I ain’t give up. Never surrender.
                    </td>
                    <td>
                      <form class="form-inline">
                        <button
                          class="btn btn-outline-success my-2 my-sm-0"
                          type="submit"
                        >
                          Apply
                        </button>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td>Debugging</td>
                    <td>IBM</td>
                    <td>
                      The key to more success is to get a massage once a week,
                      very important, major key, cloth talk. Mogul talk. Major
                      key, don’t fall for the trap, stay focused. It’s the ones
                      closest to you that want to see you fail. The key to
                      success is to keep your head above the water, never give
                      up. Eliptical talk. Let me be clear, you have to make it
                      through the jungle to make it to paradise, that’s the key,
                      Lion! The other day the grass was brown, now it’s green
                      because I ain’t give up. Never surrender.
                    </td>
                    <td>
                      <form class="form-inline">
                        <button
                          class="btn btn-outline-success my-2 my-sm-0"
                          type="submit"
                        >
                          Apply
                        </button>
                      </form>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
