import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link, Container } from '.';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: 'transparant',
    padding: theme.spacing(5, 0, 5, 0),
    margin: 'initial',
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          CINEMA APP
          {` `}
          {`© `}
          {new Date().getFullYear()}
          {` `}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          <Link
            href="http://bmstu-kaluga.ru/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            BMSTU KALUGA
          </Link>
          {` `}
          <Link
            href="https://vk.com/eic5_kb"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            IPS
          </Link>
          {` `}
          <Link
            href="https://github.com/xreyaf"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            XREYAF
          </Link>
        </Typography>
      </Container>
    </footer>
  );
}
