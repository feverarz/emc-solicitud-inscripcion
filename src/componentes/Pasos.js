import React, {useContext} from 'react'
import {Box,Stepper,Step,StepLabel,StepContent,StepButton,Button,Paper,Typography} from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'
import {Telefonos} from './Telefonos'
import {Cuatrimestre} from './Cuatrimestre'
import {Carrera} from './Carrera'
import {Modalidad} from './Modalidad'
import {Instrumento} from './Instrumento'
import {Ubicacion} from './Ubicacion'
import {DatosPersonales} from './DatosPersonales'
import {EnviarDatos} from './EnviarDatos'
import {Finalizar} from './Finalizar'

const steps = [
    {
        label: 'Seleccioná una carrera',
        description: ``,
      },
    {
      label: '¿Cuál es tu instrumento principal y tu nivel?',
      description: ``,
    },
    {
        label: '¿Cómo querés cursar?',
        description:
          '',
    },
    {
        label: '¿Cuándo querés cursar?',
        description:
          '',
    },
    {
      label: 'Ingresá los datos de tu lugar de residencia',
      description:
        '',
    },
    {
      label: 'Confirmá los datos',
      description: ``,
    },
    {
      label: 'Enviar',
      description: ``,
    },
  ];

  
export const Pasos = ()=>{
    const { datos,handleChangeCuatrimestre} = useContext(formularioContext)
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
      };

    return (
        <Box sx={{ maxWidth: 1000, bgcolor:'red' }}>
          <Stepper  nonLinear  activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
//              <Step key={step.label}>
              <Step expanded={true} key={step.label}>
                   <StepButton color="inherit" onClick={handleStep(index)}>
                         {step.label}
                    </StepButton>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{mt:4, mb:4}}>
                        <ContenidoDinamico index={index}/>
                  </Box>
               {/*   <Box sx={{ mb: 2 }}>
                        <BotonesDinamicos steps={steps} index={index} handleNext={handleNext} handleBack={handleBack}/>
              </Box>*/}
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                    Resetear
              </Button>
            </Paper>
          )}
        </Box>
      )
}

const ContenidoDinamico = ({index})=>{
    switch (index) {
        case  0 : return <div><Carrera/></div>
        case  1 : return <div><Instrumento/></div>
        case  2 : return <><Modalidad/></>
        case 3 : return <Cuatrimestre/> 
        case 4 : return <Ubicacion/> 
        case 5 : return <Finalizar/> 
        default:  return <EnviarDatos/>
    }
} 

const BotonesDinamicos = ({steps,index,handleBack,handleNext})=>{
    return <div>
        <Button
        variant="contained"
        onClick={handleNext}
        sx={{ mt: 1, mr: 1 }}
        >
            {index === steps.length - 1 ? 'Finalizar' : 'Aceptar'}
        </Button>
        <Button
        disabled={index === 0}
        onClick={handleBack}
        sx={{ mt: 1, mr: 1 }}
        >
            Volver
        </Button>
  </div>
}