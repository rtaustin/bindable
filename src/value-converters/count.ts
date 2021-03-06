/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class CountValueConverter {
    public static transform(value) {
        if (value) {
            return value.length;
        }

        return 0;
    }
    public toView(value) {
        return CountValueConverter.transform(value);
    }
}
