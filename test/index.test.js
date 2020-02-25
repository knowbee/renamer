const chai = require("chai");
const expect = chai.expect;
const path = require('path')
const {opendirs} = require("../src/opendirs")
const dirname = path.join(__dirname + "/data") 

describe("@knowbee/rename", () => {
  describe("renaming files level one deep", () => {
    it("renames jsx files to js files", () => {
      const answers = { 'match': '.js', 'replacer':'.jsx', 'level': 1 }
      opendirs(answers, dirname).then((res) =>{
        expect(res).to.be.true
      })
    });

   
  });
  describe("renaming files level two deep", () => {

    it("renames js files to jsx files", () => {
      const answers = { 'match': '.jsx', 'replacer':'.js', 'level': 2 }
      opendirs(answers, dirname).then((res) =>{
        expect(res).to.be.true
      })
    });

   
  });
});