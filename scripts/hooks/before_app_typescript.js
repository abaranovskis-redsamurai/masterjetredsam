/**
  Copyright (c) 2015, 2020, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
'use strict';

module.exports = function (configObj) {
  return new Promise((resolve) => {
    console.log("Running before_app_typescript hook.");
    //const { tsconfigJson } = configObj.typescript;
    resolve(configObj);
  });
};
