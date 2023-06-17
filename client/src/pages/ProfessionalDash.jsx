import DashCorosal from "../components/proDash/DashCorosal";
import Procard from "../components/proDash/Procard";
import Table from "../components/proDash/Table";


export default function ProfessionalDash(){
  return <div>
    {/* <DashCorosal /> */}
    <div className="dashMain">
      <Procard/>
      <Table />
    </div>
  </div>
}