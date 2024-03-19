import { extendTheme } from "@chakra-ui/react";
import { stepperTheme } from "./stepperTheme";

export const theme = extendTheme({
    components: {
        Stepper: stepperTheme,
    }
})