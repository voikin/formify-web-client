import { Box, Heading } from "@chakra-ui/react";
import { FormCreator } from "./FormCreator/FormCreator";


export const FormPage = () => {
    return (
        <>
            <Heading mb={5}>Создание новой формы</Heading>
            <Box background="white" p={5} borderRadius="md" boxShadow="base">
                <FormCreator />
            </Box>
        </>
    );
};