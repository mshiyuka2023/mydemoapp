import styled from "styled-components";
import bg from "./images/bg.png"
import {MainLayout} from './Styles/Layouts'
import Orb from './Components/moveBg/Orb'
import Navigation from "./Components/Navigation/Navigation";
import  React,{ useMemo } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Incomes from "./Components/Incomes/Incomes";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./Context/globalContext";


function App() {
  const [active,setActive] = React.useState(1)

    const global = useGlobalContext()
    console.log(global);

  const diplayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Incomes />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />
           
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])
  return (
    <AppStyled  bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation  active={active}  setActive={setActive}/>
        <main>
          {diplayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}


const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${props => props.bg});
    position: relative;
    main{
      flex: 1;
      background: rgba(252, 246, 249, 0.78);
      border: 3px solid #FFFFFF;
      backdrop-filter: blur(4.5px);
      border-radius: 32px;
      overflow-x: hidden;
      &::-webkit-scrollbar{
        width: 0;
      }
    }

`;

export default App;
