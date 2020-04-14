/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple, green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  green: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
  },
}));

export default function ImageAvatars(props) {
  const classes = useStyles();

  const { alt, src } = props;

  const init = alt.match(/\b(\w)/gi);

  const convert =
    init.length !== 1 ? `${init[0]}${init[init.length - 1]}` : init[0];

  return (
    <div className={classes.root}>
      {src && <Avatar src={src} className={classes.orange} />}
      {!src && (
        <Avatar className={classes.orange}>{convert.toUpperCase()}</Avatar>
      )}
    </div>
  );
}
