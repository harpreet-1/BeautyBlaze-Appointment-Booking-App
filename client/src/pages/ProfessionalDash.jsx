import DashCorosal from "../components/proDash/DashCorosal";
import Procard from "../components/proDash/Procard";
import Table from "../components/proDash/Table";
import "../Styling/ProDash.css"


export default function ProfessionalDash() {
  return <div className="bodyDiv">
    <Procard />
    <div className="dashMain">
      <DashCorosal />
      <Table />
    </div>
  </div>
}