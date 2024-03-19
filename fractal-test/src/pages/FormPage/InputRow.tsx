import React from 'react';
import { Flex, Input, Button } from '@chakra-ui/react';
import {ReactComponent as TrashIcon} from "../../assets/TrashIcon.svg";

const InputRow = ({ handleDeleteInputRow, id, handleChangeRowValues, label}:any) => {
    return (
        <Flex
        flexDirection='column'
        >
            {label && <label htmlFor='advantages'>Преимущества</label>}
            <Flex
            gap={2}
            alignItems='center'
            >
                <Input
                my='8px'
                name='advantages'
                type='text'
                placeholder='Введите преимущество'
                width='50%'
                required
                />
                {handleDeleteInputRow !== undefined && 
                <Button 
                variant='ghost'
                onClick={()=>handleDeleteInputRow(id)}>
                    <TrashIcon width={'20px'} height={'20px'}/>
                </Button>}
                
            </Flex>

            {/* {errors.phone && touched.phone? (
                <Box
                mt='2px'
                color='red'
                fontWeight='semibold'
                >{errors.phone}</Box>
            ): null} */}
        </Flex>
    );
};

export default InputRow;