import { Box, Flex } from "@chakra-ui/react";

const MainBox = (props: any) => {

    const {children} = props;

    return (
        <Box
        mt='24px'
        bg={"white"}
        p={'24px'}
        backgroundSize={'cover'}
        backgroundPosition={'left'}
        height={'auto'}
        overflow={'hidden'}
        w='60%'
        >
            {children}
        </Box>
    );
};

export default MainBox;