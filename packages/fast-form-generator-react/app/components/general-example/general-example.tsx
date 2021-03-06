import * as React from "react";
import Array, { IArrayProps } from "../arrays/arrays";
import Objects, { IObjectsProps } from "../objects/objects";
import Theme, { IThemeProps } from "../theme/theme";

export enum GeneralExampleTags {
    button = "button",
    span = "span"
}

export interface IGeneralExampleProps {
    alignHorizontal: string;
    alignVertical: string;
    level: number;
    level2: number;
    tag: GeneralExampleTags;
    title: string;
    details: string;
    text: string;
    checkbox: boolean;
    checkbox2: boolean;
    objects: IObjectsProps;
    array: IArrayProps;
    theme: IThemeProps;
    children: any;
}

/**
 * This test components API should have:
 * - a number of required property which maps to a configuration which will organise them by weight
 */
export default class GeneralExample extends React.Component<IGeneralExampleProps, {}> {
    public render(): JSX.Element {
        return (
            <this.props.tag>
                {this.props.title}
                {this.props.alignHorizontal}
                {this.props.checkbox}
                {this.props.alignVertical}
                {this.props.checkbox2}
                {this.props.level}
                {this.props.title}
                {this.props.details}
                {this.props.tag}
                {this.props.level2}
                {this.props.text}
                {this.props.objects}
                {this.props.array}
                {this.props.theme}
                {this.props.children}
            </this.props.tag>
        );
    }
}
