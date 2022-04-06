import React from 'react';
import red from '@mui/material/colors/red';
import { withStyles } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { ValidatorComponent } from 'react-material-ui-form-validator';
import useClasses from '../../customClasses';


const red300 = red['500'];

const styles = theme => ({
  checkbox: {
    left: 42,
    fontSize: 12,
    color: red300,
    position: 'absolute',
    marginTop: theme.spacing()
  }
});

class CheckboxValidatorElement extends ValidatorComponent {
  renderValidatorComponent() {
    const {
      classes,
      errorMessages,
      validatorListener,
      requiredError,
      value,
      ...rest
    } = this.props;

    return (
      <div>
        <Checkbox
          {...rest}
          ref={(r) => { this.input = r; }}
        />
        {this.errorText()}
      </div>
    );
  }

  errorText() {
    const { classes } = this.props;
    const { isValid } = this.state;

    if (isValid) {
      return null;
    }

    return (
      <div className={classes.checkbox}>
        {this.getErrorMessage()}
      </div>
    );
  }
}

export default withStyles(styles)(CheckboxValidatorElement);
