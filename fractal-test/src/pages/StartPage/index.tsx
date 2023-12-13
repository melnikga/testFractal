import { Box, 
    Flex, 
    Icon, 
    Link,
    Input,
    Button, 
    useToast
} from '@chakra-ui/react';

import {ReactComponent as FolderIcon} from "../../assets/folder.svg";

import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



const StartPage = () => {
    const navigate = useNavigate();

    const toast = useToast();

    const formik = useFormik({
        initialValues: {
          phone: '',
          email: ''
        },
    
        validate: (values) => {
            let errors: any = {};

            if(!values.email){
                errors.email = "Это обязательное поле";
            }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Некорректный email';
            }
            if(!values.phone){
                errors.phone = "Это обязательное поле";
            }else if (!/^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/.test(values.phone)){
                errors.phone = 'Некорректный номер телефона';
            }
            return errors;
        },
        onSubmit: async (values) => {
          navigate('/form-page')
        },
    });

    const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    errors,
    touched
    } = formik;

    return (
        <>
            <Flex
            alignItems='center'
            gap='24px'
            borderBottom='1px'
            paddingBottom='41px'
            borderColor='#00000014'
            mb='24px'
            >
                <Flex
                w='80px'
                h='80px'
                bg={'#D5E4F7'}
                borderRadius='100%'
                justifyContent='center'
                alignItems='center'
                fontSize='36px'
                >ГМ</Flex>
                <Box>
                    <Box
                    fontSize='20px'
                    fontWeight='bold'
                    >
                        Георгий Мельник
                    </Box>
                    <Flex
                    gap='16px'
                    >
                        <Link
                        as={Flex}
                        alignItems='center'
                        gap='4px'
                        >
                            <FolderIcon/>
                            <Box
                            color='#5558FA'
                            >Telegram</Box>
                        </Link>
                        <Link
                        as={Flex}
                        alignItems='center'
                        gap='4px'
                        >
                            <FolderIcon/>
                            <Box
                            color='#5558FA'
                            >GitHub</Box>
                        </Link>
                        <Link
                        as={Flex}
                        alignItems='center'
                        gap='4px'
                        >
                            <FolderIcon/>
                            <Box
                            color='#5558FA'
                            >Резюме</Box>
                        </Link>
                    </Flex>
                </Box>
            </Flex>
            <form onSubmit={handleSubmit}>
                <Flex
                flexDirection='column'
                gap='24px'
                mb='48px'
                >
                    <Flex
                    flexDirection='column'
                    >  
                        <label htmlFor='phone'>Номер телефона</label>
                        <Input
                        mt='8px'
                        bgColor={'#F5F5F5'}
                        name='phone'
                        type='tel'
                        placeholder='+7 999 999-99-99'
                        width='50%'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                        borderColor={errors.phone && touched.phone? 'red':'inherit'}
                        required
                        />
                        {errors.phone && touched.phone? (
                            <Box
                            mt='2px'
                            color='red'
                            fontWeight='semibold'
                            >{errors.phone}</Box>
                        ): null}
                    </Flex>
                    <Flex
                    flexDirection='column'
                    >  
                        <label htmlFor='email'>Email</label>
                        <Input
                        mt='8px'
                        bgColor={'#F5F5F5'}
                        name='email'
                        placeholder='webstudio.fractal@example.com'
                        width='50%'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        borderColor={errors.email && touched.email? 'red':'inherit'}
                        required
                        />
                        {errors.email && touched.email? (
                            <Box
                            mt='2px'
                            color='red'
                            fontWeight='semibold'
                            >{errors.email}</Box>
                        ): null}
                    </Flex>
                </Flex>
                <Button
                bgColor='#5558FA'
                color='white'
                _hover={{backgroundColor: 'blue'}}
                type='submit'
                >Начать</Button>
            </form>
            
        </>

    );
};

export default StartPage;