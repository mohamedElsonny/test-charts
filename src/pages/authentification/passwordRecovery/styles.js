import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  img: {
    width: 112,
    height: 112,
  },
  fpw: {
    margin: 0,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    width: '80%',
    margin: '0 auto',
  },
  mail: {
    border: '1px solid #BDBDBD',
    padding: '9px 11px',
    borderRadius: 4,
    outline: 'none',
    width: '50%',
  },
  send: {
    width: '30%',
    height: 35,
    borderRadius: 4,
    boxShadow: '0px 3px 6px #00000029',
  },
  send_Typo: {
    fontSize: 16,
    color: 'white',
  },
  ArrowBackIcon: {
    position: 'fixed',
    top: 30,
    left: 15.5,
  },
}));

export default useStyles;
