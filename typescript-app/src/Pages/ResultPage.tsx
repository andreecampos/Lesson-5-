import { useLocation } from "react-router-dom";

interface ResultPageProps {
    name: string;
    email: string;
  }
  
function ResultPage() {
    const location = useLocation();
    // const props: ResultPageProps = location.state;
    const props= location.state as ResultPageProps;

  return (
    <div>
    <h1>Namn: {props.name}</h1>
    <h1>Email: {props.email}</h1>
  </div>
  )
}

export default ResultPage
