import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        midnight: '#202231',
        orange: 'orange',
        white: '#EDF2F4',
        blue: '#337ab7'
    },
    fonts: {
        heading: `'Roboto Slab', serif`,
        body: `'Roboto Slab', serif`,
    },
    styles: {
        global: () => ({
            body: {
                color: 'white',
                bg: 'midnight',
            },
        }),
    },
    components: {
        Link: {
            baseStyle: {
                color: 'blue',
                _hover: {
                    textDecoration: 'none',
                    color: 'orange',
                },
            }
        }
    }
})

export default theme