import {IContainer} from "@dathaplus/storybook/dist/interfaces/layout/container";
import {size} from "@dathaplus/storybook";
import {ITextField} from "@dathaplus/storybook/dist/interfaces/form/field";
import {ISelectField} from "@dathaplus/storybook/dist/interfaces/form/select";

export const containerForm: IContainer = {
  styles: {
    // @ts-ignore
    padding: "1rem 2rem"
  }
}

export const inputForm: ITextField = {
  fontFamily: "Roboto",
  width: "100%",
  margin: "1rem 0",

}

export const selectForm: ISelectField = {
  fontFamily: "Roboto",
  width: "100%"
}

export const containerState: IContainer = {
  styles: {
    display: "flex",
    flexDirection: "column",
    margin: "0.5rem 0",
    mediaQueryBreakPoints: {
      [size.tabletL]: {
        // @ts-ignore
        flexDirection: "row",
        justifyContent: "space-between",
      }
    }
  }
};
