define(['ojs/ojvalidation-base', 'ojs/ojvalidation-number'],
    function (ValidationBase) {

        function ConverterHelperViewModel() {
            var self = this;

            self.constructNumberConverter = function () {
                var options = {
                    style: 'decimal',
                    roundDuringParse: true,
                    separators: {
                        decimal: ".",
                        group: ","
                    },
                    maximumFractionDigits: 2,
                    useGrouping: true
                };

                return ValidationBase.Validation.converterFactory("number").createConverter(options);
            };

            self.numberConverter = self.constructNumberConverter();

            self.convertNumericValue = function (val) {
                return self.numberConverter.format(val);
            }
        }

        return new ConverterHelperViewModel();
    }
);
