import React, { lazy } from 'react'
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
// const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">CASH | at end of month</h4>
              <div className="small text-muted">November 2020</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download"/>
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {
                  ['Day', 'Month', 'Year'].map(value => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'Month'}
                    >
                      {value}
                    </CButton>
                  ))
                }
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
             
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              
              
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>

      {/* <WidgetsBrand withCharts/> */}

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              User Management
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol>

                  <CRow>
                    <CCol>
                      <CCallout>
                      </CCallout>
                    </CCol>
                    <CCol>
                      <CCallout>
                      </CCallout>
                    </CCol>
                  </CRow>
                  <div className="progress-group">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Group name
                      </span>
                    </div>
                    <div className="progress-group-bars">
                     
                    </div>
                  </div>
                  <hr className="" />
                  <div className="progress-group">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Amount
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      
                    </div>
                  </div>
                  <hr className="" />
                  <div className="progress-group">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Frequency
                      </span>
                    </div>
                    <div className="progress-group-bars">
                     
                    </div>
                  </div>
                  <hr className="" />
                  <div className="progress-group">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      First pay date
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      
                    </div>
                  </div>
                  <hr className="" />
                  <div className="progress-group">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Remitta
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      
                    </div>
                  </div>
                  <hr className="" />
                  <div className="progress-group">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      code link
                      </span>
                    </div>
                    <div className="progress-group-bars">
                     
                    </div>
                  </div>
                  <hr className="" />
                  <div className="progress-group">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Savings refferal
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      
                    </div>
                  </div>
                  <hr className="" />
                  <div className="legend text-center">
                   
                  </div>
                </CCol>
                    <CCol>
                      <CCallout>

                      </CCallout>
                    </CCol>
                    <CCol >
                      <CCallout>
                      </CCallout>
                  <div className="progress-group">
                    <div className="progress-group-prepend">
                      <CIcon />
                      <span className="progress-group-text">Ajo capable</span>
                      
                    </div>
                    <div className="progress-group-bars">
                      
                    </div>
                  </div>
                  <hr className="all" />

                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon />
                      <span className="progress-group-text">$100</span>
                    </div>
                    <div className="progress-group-bars">
                      
                    </div>
                  </div>
                  <hr className="" />

                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon />
                      <span className="progress-group-text">Week/Daily</span>
                    </div>
                    <div className="progress-group-bars">
                      
                    </div>
                  </div>
                  <hr className="" />


                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon />
                      <span className="progress-group-text">Oct 1 2020</span>
                    </div>
                    <div className="progress-group-bars">
                    </div>
                  </div>
                  <hr className="" />
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon />
                      <span className="progress-group-text">Adcone</span>
                    </div>
                    <div className="progress-group-bars">
                     
                    </div>
                  </div>
                  <hr className="" />

                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon />
                      <span className="progress-group-text">Lopert</span>
                    </div>
                    <div className="progress-group-bars">
                    
                    </div>
                  </div>
                  <hr className="" />
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon />
                      <span className="progress-group-text">Admin</span>
                    </div>
                    <div className="progress-group-bars">
                    
                    </div>
                  </div>
                  <hr className="" />

                  
                </CCol>
              </CRow>

              <br />

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>User</th>
                    <th className="text-center">Payment</th>
                    <th>Amount</th>
                    <th className="text-center">Card</th>
                    <th>First Pay Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={''} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Tolani waheed</div>
                      <div className="small text-muted">
                        <span>join</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <h4>Remitta</h4>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>$100</strong>
                        </div>
                        <div className="float-right">
                          
                        </div>
                      </div>
                      
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-paypal" />
                    </td>
                    <td>
                      <div className="small text-muted"></div>
                      <strong>12|12|2020</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={''} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>Avram Toheeb</div>
                      <div className="small text-muted">

                        <span>Recurring</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <h4>Manual</h4>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>$100</strong>
                        </div>
                        <div className="float-right">
                        </div>
                      </div>
                      
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-cc-amex" />
                    </td>
                    <td>
                      <div className="small text-muted"></div>
                      <strong>5|12|2020</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={''} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-warning"></span>
                      </div>
                    </td>
                    <td>
                      <div>kolins shield</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <h4>Remitta</h4>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>$100</strong>
                        </div>
                        <div className="float-right">
                        </div>
                      </div>
                      
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-google-pay" />
                    </td>
                    <td>
                      
                      <strong>8|12|2020</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={''} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-secondary"></span>
                      </div>
                    </td>
                    <td>
                      <div>Eni Kadwo</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <h4>Remitta</h4>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>$100</strong>
                        </div>
                        <div className="float-right">
                          
                        </div>
                      </div>
                      
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-paypal" />
                    </td>
                    <td>
                      <div className="small text-muted"></div>
                      <strong>6|12|2020</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={''} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                      
                      </div>
                    </td>
                    <td>
                      <div>Ajobge tosin</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <h4>Manual</h4>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>$100</strong>
                        </div>
                        <div className="float-right">
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-cc-amex"/>
                    </td>
                    <td>
                      <div className="small text-muted"></div>
                      <strong>11|12|2020</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={''} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span></span>
                      </div>
                    </td>
                    <td>
                      <div>Fridaus Dákid</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <h4>Remitta</h4>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>$100</strong>
                        </div>
                        <div className="float-right">
                          
                        </div>
                      </div>
                      
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-paypal" />
                    </td>
                    <td>
                      <div className="small text-muted"></div>
                      <strong>10|12|2020</strong>
                    </td>
                  </tr>
                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
