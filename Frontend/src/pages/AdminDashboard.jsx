import StatsDashboard from "../component/AdminDataAnalysis";
import CertificateIssued from "../component/CertificateIssued";
import StatsRow from "../component/StatRow";


export default function AdminDashboard() {
  return (
    <div className="mx-[4em]">
      <StatsRow/>
      <StatsDashboard/>
      <CertificateIssued/>
    </div>
  );
}
