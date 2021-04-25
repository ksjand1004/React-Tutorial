import { Component } from "react";
import SassComponent from "./SassComponent";
import CSSModule from "./CSSModule";
import StyledComponent from "./StyledComponent";

class App extends Component {
  render() {
    return (
      <div>
        <SassComponent />
        <CSSModule />
        <StyledComponent />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <SassComponent />
//     </div>
//   );
// }

export default App;
