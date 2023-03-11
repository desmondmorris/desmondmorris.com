import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: `'Roboto Slab', serif`,
        body: `'Roboto Slab', serif`,
    },
    styles: {
        global: () => ({
            body: {
                color: '#EDF2F4',
                bg: '#202231',
            },
        }),
    },
})

export default theme