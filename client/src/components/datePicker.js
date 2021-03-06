//src/componets/datepicker.js

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui-next/styles'
import TextField from 'material-ui-next/TextField'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
})

function DatePicker(props) {
  const { classes,labelName, idFromProps } = props;

  return (
    <form className={classes.container} noValidate>
      <TextField
        id={idFromProps}
        label={labelName}
        type="date"
        defaultValue="2018-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  )
}

DatePicker.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DatePicker)