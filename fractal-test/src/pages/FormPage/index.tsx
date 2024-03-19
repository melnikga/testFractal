import React, { useEffect, useState } from 'react';
import {
  Box,
  Input,
  Step,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  useSteps,
  Stack, 
  Checkbox, 
  Flex, 
  Select, 
  Button,
  Text,
  Radio, RadioGroup, Textarea
} from '@chakra-ui/react'
import { useFormik } from "formik";
import InputRow from './InputRow';

const steps = [
    { title: 'First', description: 'Contact Info' },
    { title: 'Second', description: 'Date & Time' },
    { title: 'Third', description: 'Select Rooms' },
]



const FormPage = () => {
    const formik = useFormik({
        initialValues: {
            advantages: {

            }
        },
    
        validate: (values) => {
            let errors: any = {};
            return errors;
        },
        onSubmit: async (values) => {
        },
    });

    const {
        values,
        setValues,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        setFieldValue,
        validateForm,
        isValid,
    } = formik;

    const handleChangeRowValues = (item:any, id:any) => {
        setFieldValue(`advantages.${id}`, item);
    }

    const [inputRows, setInputRows] = useState([
        <InputRow 
        handleChangeRowValues={handleChangeRowValues}
        key={0}
        id={0}
        label={true} handleDeleteInputRow={undefined} />,
    ]);
    
    const handleAddInputRow = () => {
    setInputRows((prev) => {
        const key = Date.now();
        return [
        ...prev,
        <InputRow
            key={key}
            id={key}
            handleChangeRowValues={handleChangeRowValues}
            handleDeleteInputRow={handleDeleteInputRow}
        />,
        ];
    });
    };

    const handleDeleteInputRow = (i:any) => {
        setInputRows((prev:any) => {
            let newInputRows = [...prev];
            return newInputRows.filter((item) => item.props.id !== i);
        });
        setValues((prev:any)=> {
            if (prev && prev.data) {
                const newValues = prev;
                delete newValues?.data[i];
                return newValues;
            }else {
                return prev;
            }
        })
    };
    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
    })

    console.log(activeStep);
    return (
    <Box
    py={8}
    px='6rem'
    >
        <Stack>
            <Stepper size='sm' index={activeStep} gap={0}>
            {steps.map((step, index) => (
                <Step key={index} style={{gap: 0, display: 'flex'}}>
                <StepIndicator>
                    <StepStatus 
                    complete={<StepIcon/>}  
                    active={<Box w={'3.5px'} h={'3.5px'} bgColor='white' borderRadius='100%'></Box>}/>
                </StepIndicator>
                <StepSeparator style={{marginInlineStart: 0, height:'8px'}}/>
                </Step>
            ))}
            </Stepper>
        </Stack>
        {activeStep === 0 && 
        <Flex
        flexDirection='column'
        gap='24px'
        mb='48px'
        mt='67px'
        >
            <Flex
            flexDirection='column'
            >
                <label htmlFor='nickname'>Никнейм</label>
                <Input
                mt='8px'
                name='nickname'
                type='text'
                placeholder='Введите свой никнейм'
                width='50%'
                required
                />
                {/* {errors.phone && touched.phone? (
                    <Box
                    mt='2px'
                    color='red'
                    fontWeight='semibold'
                    >{errors.phone}</Box>
                ): null} */}
            </Flex>  
            <Flex
            flexDirection='column'
            >
                <label htmlFor='name'>Имя</label>
                <Input
                mt='8px'
                name='name'
                type='text'
                placeholder='Введите своe Имя'
                width='50%'
                required
                />
                {/* {errors.phone && touched.phone? (
                    <Box
                    mt='2px'
                    color='red'
                    fontWeight='semibold'
                    >{errors.phone}</Box>
                ): null} */}
            </Flex>
            <Flex
            flexDirection='column'
            >
                <label htmlFor='surname'>Фамилия</label>
                <Input
                mt='8px'
                name='surname'
                type='text'
                placeholder='Введите своe Имя'
                width='50%'
                required
                />
                {/* {errors.phone && touched.phone? (
                    <Box
                    mt='2px'
                    color='red'
                    fontWeight='semibold'
                    >{errors.phone}</Box>
                ): null} */}
            </Flex>
            <Flex
            flexDirection='column'
            >
                <label htmlFor='sex'>Пол</label>
                <Select
                mt='8px'
                name='sex'
                placeholder='Не выбрано'
                width='50%'
                required
                >
                    <option value='male'>Мужской</option>
                    <option value='female'>Женский</option>
                </Select>
                {/* {errors.phone && touched.phone? (
                    <Box
                    mt='2px'
                    color='red'
                    fontWeight='semibold'
                    >{errors.phone}</Box>
                ): null} */}
            </Flex>
        </Flex>}
        {activeStep === 1 &&
        <Flex
        flexDirection='column'
        mb='48px'
        mt='67px'
        >
            {inputRows}
            <Box>
            <Button onClick={handleAddInputRow}>+</Button>
            </Box>
            <Text mt='24px'>
                Checkbox группа
            </Text>
            <Stack spacing={2} direction='column'>
                <Checkbox>
                    1
                </Checkbox>
                <Checkbox>
                    2
                </Checkbox>
                <Checkbox>
                    3
                </Checkbox>
            </Stack>
            <Text mt='24px'>
                Radio группа
            </Text>
            <RadioGroup>
            <Stack direction='column'>
                <Radio value='1'>1</Radio>
                <Radio value='2'>2</Radio>
                <Radio value='3'>3</Radio>
            </Stack>
            </RadioGroup>
        </Flex>
        }
        {activeStep === 2 &&
        <Flex
        flexDirection='column'
        mb='48px'
        mt='67px'
        >
            <label htmlFor="textarea">О себе</label>
            <Textarea mt='8px' name='textarea'/>
        </Flex>
        }
        <Flex
        justifyContent='space-between'
        >
            <Button
            onClick={()=>
                setActiveStep(prev=> prev>0? prev-1 : prev)
            }
            >Назад</Button>
            <Button 
            bgColor='#5558FA'
            color='white'
            _hover={{backgroundColor: 'blue'}}
            onClick={()=>
            setActiveStep(prev=> prev<3? prev+1 : prev)
            }
            >Далее</Button>
        </Flex>
    </Box>

    )
};

export default FormPage;