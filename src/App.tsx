import React from "react";
import "./App.css";
import { GeneratorForm } from "./components/GeneratorForm";

interface Props {}

interface State {
  race: string;
  cclass: string;
}

class App extends React.Component<Props, State> {
  state = {
    race: "dwarf",
    cclass: "paladin"
  };

  handleSelectChange: SelectChangeHandler = ({ target: { value, id } }) => {
    if (id === "cclass") {
      this.setState({ cclass: value });
    } else if (id === "race") {
      this.setState({ race: value });
    }
  };

  handleFormSubmit: FormSubmitHandler = event => {
    event.preventDefault();
    console.log({ state: this.state, event });
  };

  render() {
    const { race, cclass } = this.state;
    const fieldValues = { race, cclass };
    return (
      <GeneratorForm
        fieldValues={fieldValues}
        onChange={this.handleSelectChange}
        onSubmit={this.handleFormSubmit}
      />
    );
  }
}

export default App;
