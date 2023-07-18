import { createTheme  } from '@material-ui/core/styles';

const theme = createTheme({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "1em",
            },
        },
        MuiFormControl:{
            root: {
                alignItems: "center",
            },
        },
        MuiRadio: {
            root: {
              color: 'blue',
            },
            colorSecondary: {
              '&$checked': {
                color: 'blue',
              }
        }},
        MuiSwitch: {
            colorSecondary: {
              '&$checked': {
                color: 'rgb(25, 118, 210)',
              }
        },
        switchBaseold: {
          color: "white", // this is working
          "&$checked": { // this is not working
            color: "white"
          }
        },
        trackold: {
            // Controls default (unchecked) color for the track
            opacity: 0.8,
            backgroundColor: "blue",
            "$checked$checked + &": {
              // Controls checked color for the track
              opacity: 0.7,
              backgroundColor: "red"
            }
          }
    }
    },
});

export default theme;