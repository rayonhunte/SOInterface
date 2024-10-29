import React from 'react';
import { SOButton } from '../../src/';
var ButtonPage = function () {
    return (<div>
            <SOButton variant="default" size="default">Click me</SOButton>
            <SOButton variant="destructive" size="sm">Click me</SOButton>
            <SOButton variant="outline" size="lg">Click me</SOButton>
        </div>);
};
export default ButtonPage;
