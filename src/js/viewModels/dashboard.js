/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['knockout', 'ojs/ojcollectiondataprovider', 'ojs/ojpagingdataproviderview', 'viewModels/helpers/converterHelper', 
        'ojs/ojmodel', 'ojs/ojtable', 'ojs/ojpagingcontrol'],
 function(ko, CollectionDataProvider, PagingDataProvider, converterHelperModule) {

    function DashboardViewModel() {
      var self = this;

      self.converterHelper = converterHelperModule;

      self.serviceURL = 'http://138.68.79.219:7001/rsrestapp/rest/1/Employees';
      self.pagingDatasource = ko.observable();

      self.columnArray = [{
        "headerText": "Employee ID",
        "field": "EmployeeId"
      },
      {
        "headerText": "First Name",
        "field": "FirstName"
      },
      {
        "headerText": "Last Name",
        "field": "LastName"
      },
      {
        "headerText": "Phone Number",
        "field": "PhoneNumber"
      },
      {
        "headerText": "Email",
        "field": "Email"
      },
      {
        "headerText": "Hire Date",
        "field": "HireDate"
      },
      {
        "headerText": "Salary",
        "field": "Salary",
        "template": "amountTemplate"
      },
      {
        "headerText": "Department ID",
        "field": "DepartmentId"
      }];

      self.createEmployeeModel = function () {
        var EmployeeModel = oj.Model.extend({
          urlRoot: self.serviceURL,
          idAttribute: "EmployeeId"
        });

        return new EmployeeModel();
      };

      self.createEmployeesCollection = function () {
        var EmployeesCollection = oj.Collection.extend({
          url: self.serviceURL,
          fetchSize: 10,
          model: self.createEmployeeModel()
        });

        return new EmployeesCollection();
      };

      self.employeesList = self.createEmployeesCollection();
      self.datasource = new PagingDataProvider(new CollectionDataProvider(self.employeesList));

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
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
  }
);
