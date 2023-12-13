import React, { useEffect } from 'react';
import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Progress,
  Stepper,
  useSteps,
  Stack, Text
} from '@chakra-ui/react'

const steps = [
    { title: 'First', description: 'Contact Info' },
    { title: 'Second', description: 'Date & Time' },
    { title: 'Third', description: 'Select Rooms' },
]

const FormPage = () => {

    const { activeStep, setActiveStep } = useSteps({
        index: 1,
        count: steps.length,
    })

    return (
    <Stack>
        <Stepper size='sm' index={activeStep} gap={0}>
        {steps.map((step, index) => (
            <Step key={index} style={{gap: 0, display: 'flex'}}>
            <StepIndicator>
                <StepStatus complete={<StepIcon />} incomplete={<div>ds</div>} active={<div>1</div>}/>
            </StepIndicator>
            <StepSeparator style={{marginInlineStart: 0, height:'5px'}}/>
            </Step>
        ))}
        </Stepper>
    </Stack>
    )
};

export default FormPage;