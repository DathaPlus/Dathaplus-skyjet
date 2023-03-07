import {IContainer} from "@dathaplus/storybook/dist/interfaces/layout/container";
import {ISection} from "@dathaplus/storybook/dist/interfaces/layout/section";

export const containerUno : IContainer = {
    styles: {
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden'
    }
}

export const containerDos : IContainer = {
    styles: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2em',
        justifyContent: 'center'
    }
}

/*export const tuVariable : ISection = {
    title: {
        children: 'Our Services',
        fontWeight: 'bold',
        marginBottom: '26px',
        marginTop: '35px',
        styleTheme: 'secondary',
        textAlign: 'center',
        textDecoration: 'underline',
        textTransform: 'uppercase'
    }
}*/
