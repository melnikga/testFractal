import React, { ReactNode } from "react";
import MainBox from "../../components/MainBox";
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";


const MainLayout = () => {

    return (
        <Flex
        justifyContent='center'
        >
            <MainBox
            >
                <Outlet/>
            </MainBox>
        </Flex>

    );
};

export default MainLayout;