// import DashCorosal from "../components/proDash/DashCorosal";
import Portfoliocard from "../components/proDash/portfoliocard";
import Procard from "../components/proDash/Procard";
import Table from "../components/proDash/Table";
import "../Styling/ProDash.css"


export default function ProfessionalDash() {
  return <div className="bodyDiv">
    <div className="profileDet">
    <Procard />
    </div>
    <div className="dashMain">
      {/* <DashCorosal /> */}
      <Table />
      <Portfoliocard/>
    </div>
  </div>
}