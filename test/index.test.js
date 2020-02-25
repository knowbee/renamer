const chai = require("chai");
const expect = chai.expect;
const {
  readdir,
  lstatSync
} = require('fs');
const path = require('path')
const {
  opendirs
} = require("../src/opendirs")
const dirname = path.join(__dirname + "/data")



describe("@knowbee/rename", () => {
  describe("level one deep", () => {
    it("renames jsx files to js files level one deep", () => {
      const answers = {
        'match': '.jsx',
        'replacer': '.js',
        'level': 1
      }
      readdir(dirname, (err, res) => {
        if (err) throw err;
        if (res[1].includes('.jsx')) {
          opendirs(answers, dirname).then((res) => {
            expect(res).to.be.true
          })
        }else{
          describe("level one deep", () => {
            it("renames js files to jsx files level one deep", () => {
              const answers = {
                'match': '.js',
                'replacer': '.jsx',
                'level': 1
              }
              readdir(dirname, (err, res) => {
                if (err) throw err;
                if (res[1].includes('.js')) {
                  opendirs(answers, dirname).then((res) => {
                    expect(res).to.be.true
                  })
                }
              })
            });
          })
        }
      })
    });
  })
  describe("level two deep", () => {
    it("renames jsx files to js files level two deep", () => {
      const answers = {
        'match': '.jsx',
        'replacer': '.js',
        'level': 2
      }
      readdir(dirname + '/example', (err, res) => {
        if (err) throw err;
        if (res[1].includes('.jsx')) {
          opendirs(answers, dirname).then((res) => {
            expect(res).to.be.true
          })
        }else{
          describe("level two deep", () => {
            it("renames js files to jsx files level two deep", () => {
              const answers = {
                'match': '.js',
                'replacer': '.jsx',
                'level': 2
              }
              readdir(dirname + '/example', (err, res) => {
                if (err) throw err;
                if (res[1].includes('.js')) {
                  opendirs(answers, dirname).then((res) => {
                    expect(res).to.be.true
                  })
                }
              })
            });
          })
        }
      })
    });
  })
});