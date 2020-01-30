import React from "react";
import { Select } from "@ui-kitten/components";
import { RestRequestTypes } from "../../core/types/restTypes";

/**
 * @param {*} props onSelect(type), selectedType, style
 */
export default function RestRequestTypeSelect(props) {

    function handleOnSelect(type, _) {
        props.onSelect(type);
    }

    function getSelectData() {
        const types = [];
        for (const prop in RestRequestTypes) {
            if (Object.prototype.hasOwnProperty.call(RestRequestTypes, prop)) {
                types.push({ text: prop });
            }
        }
        return types;
    };

    return (
        <Select
            data={getSelectData()}
            selectedOption={{ text: props.selectedType }}
            onSelect={handleOnSelect}
            style={props.style}
        />
    );
}