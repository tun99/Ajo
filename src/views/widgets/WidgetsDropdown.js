import React from 'react'
import { Link } from 'react-router-dom'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'

const WidgetsDropdown = () => {
  // render
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header="My Balance"
          text="$0.023"
          footerSlot={
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{height: '35px'}}
              dataPoints={[65, 59, 84, 84, 51, 55, 40]}
              pointHoverBackgroundColor="primary"
              label="My Balance"
              labels="Balance"
            />
          }
        >
         
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header="My Pay Date"
          text="10|12|2020"
          footerSlot={
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{height: '35px'}}
              dataPoints={[1, 18, 9, 17, 34, 22, 11]}
              pointHoverBackgroundColor="info"
              options={{ elements: { line: { tension: 0.00001 }}}}
              label="My Pay date"
              labels="Pay date"
            />
          }
        >
         
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3">
        <Link to="/Contributions">
        <CWidgetDropdown
          color="gradient-warning"
          header="Contribution"
          text="$230.00"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{height: '37px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="warning"
              label="Contribution"
              labels="savings"
            />
          }
        >
          
        </CWidgetDropdown>
         </Link>
      </CCol>
      
          
      <CCol sm="6" lg="3">
        <Link to="/Groups">
        <CWidgetDropdown
          color="gradient-danger"
          header="Groups"
          text="$56.09"
          footerSlot={
            <ChartBarSimple
              className="mt-3 mx-3"
              style={{height: '35px'}}
              backgroundColor="rgb(250, 152, 152)"
              label="Groups"
              labels="amount"
            />
          }
        >
          
        </CWidgetDropdown>
        </Link>
      </CCol>
      
    </CRow>
  )
}

export default WidgetsDropdown
