/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['knockout', 'ojs/ojarraydataprovider', 'ojs/ojconverterutils-i18n', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojinputtext',
  'ojs/ojformlayout', 'ojs/ojlabelvalue', 'ojs/ojinputnumber', 'ojs/ojdatetimepicker',
  'ojs/ojtimezonedata'],
  function (ko, ArrayDataProvider, ConverterUtilsI18n) {

    function DynamicFormViewModel() {
      var self = this;

      let formFields = [{ fieldId: 'f1', fieldType: 'inputNumber', label: 'Employee ID', value: ko.observable(100) },
      { fieldId: 'f2', fieldType: 'inputText', label: 'First Name', value: ko.observable('Steve') },
      { fieldId: 'f3', fieldType: 'inputText', label: 'Last Name', value: ko.observable('King') },
      { fieldId: 'f4', fieldType: 'inputText', label: 'Phone Number', value: ko.observable('515.123.4567') },
      { fieldId: 'f5', fieldType: 'inputText', label: 'Email', value: ko.observable('SKING') },
      { fieldId: 'f6', fieldType: 'inputDate', label: 'Hire Date', value: ko.observable(ConverterUtilsI18n.IntlConverterUtils.dateToLocalIso(new Date(2014, 1, 1))) },
      { fieldId: 'f7', fieldType: 'inputNumber', label: 'Salary', value: ko.observable(36000) },
      { fieldId: 'f8', fieldType: 'inputNumber', label: 'Department ID', value: ko.observable(90) }];

      self.dynamicFormDataProvider = new ArrayDataProvider(formFields, { keyAttributes: 'fieldId' });

      self.applyCall = function (event) {
        formFields.forEach(function (item) {
          console.log(item.value());
        });
      }

      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      self.connected = function () {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function () {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function () {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DynamicFormViewModel();
  }
);
