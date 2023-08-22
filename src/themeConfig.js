import { createTheme  } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#000', // Modifica este valor con el color que desees para el color primario
      },
      secondary: {
        main: '#ff0000',
      },
    },
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
              color: '#000000',
            },
            colorSecondary: {
              '&$checked': {
                color: '#ff0000',
              }
        }},
        MuiSwitch: {
            colorSecondary: {
              '&$checked': {
                color: '#ff0000',
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