import React, { FormEventHandler } from "react";
import PropTypes from "prop-types";
import { allRaces } from "fantasy-name-generator";

interface Props {
  fieldValues: {
    race: string;
    cclass: string;
  };
  onChange: SelectChangeHandler;
  onSubmit: FormEventHandler;
}

export const GeneratorForm: React.FunctionComponent<Props> = props => {
  const characterClasses = ["fighter", "paladin", "ranger", "rogue", "wizard"];
  const titleize = (string: string): string =>
    string.charAt(0).toUpperCase() + string.slice(1);
  const renderOptions = (options: string[]): React.ReactElement[] => {
    return options.map(option => (
      <option key={option} value={option}>
        {titleize(option)}
      </option>
    ));
  };

  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="race">Race</label>
      <select
        id="race"
        value={props.fieldValues.race}
        onChange={props.onChange}
      >
        {renderOptions(allRaces.sorted())}
      </select>
      <label htmlFor="cclass">Class</label>
      <select
        id="cclass"
        value={props.fieldValues.cclass}
        onChange={props.onChange}
      >
        {renderOptions(characterClasses)}
      </select>
      <button type="submit">Generate</button>
    </form>
  );
};
