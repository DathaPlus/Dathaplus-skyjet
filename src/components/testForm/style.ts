import {IContainer} from "@dathaplus/storybook/dist/interfaces/layout/container";
import {size} from "@dathaplus/storybook";
import {ITypography} from "@dathaplus/storybook/dist/interfaces/base/typograpy";

export const mainContainerStyle: IContainer = {
  styles: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    mediaQueryBreakPoints: {
      [size.tabletL]: {
        flexDirection: "row"
      }
    }
  }
}

export const leftContainerStyle: IContainer = {
  styles: {
    backgroundColor: "#e4dfd7",
    width: "100%",
    padding: "20vw 0vw 10vw 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    mediaQueryBreakPoints: {
      [size.tabletL]: {
        width: "50%",
        padding: "11vw 0",
      }
    }
  }
}

export const textOurServicesStyle: ITypography = {
  fontWeight: "bold",
  paddingLeft: "9.5vw",
  color: "#a8987e",
  textDecoration: "underline",
  entranceAnimate: "fadeIn",
  paddingBottom: "1rem"
}

export const textRequestFlightStyle: ITypography = {
  fontWeight: "500",
  fontSize: "10vw",
  lineHeight: "10vw",
  paddingLeft: "9vw",
  entranceAnimate: "fadeInDown",
  mediaQueryBreakPoints: {
    [size.tabletL]: {
      fontSize: "6vw",
      lineHeight: "6vw",
    }
  }
}

export const rightContainerStyle: IContainer = {
  styles: {
    width: "100%",
    padding: "2vw 0",
    mediaQueryBreakPoints: {
      [size.tabletL]: {
        width: "50%",
        padding: "11vw 0",
      }
    }
  }
}
