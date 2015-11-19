/*global describe, it, browser, beforeAll, expect, require */

describe('popover', function () {
    'use strict';

    beforeAll(function (done) {
        require('../common').initWebdriverCss(browser, done);
    });

    it('should take popover title screenshot', function (done) {
        var screenshotName = 'popover_title',
            pageName = screenshotName + '_full';
        browser
            .url('/popover/fixtures/test.full.html')
            .click('#screenshot-popover-title a')
            .webdrivercss(pageName, [
                {
                    name: screenshotName,
                    elem: '#screenshot-popover-title'
                }
            ], function (err, res) {
                expect(err).toBe(undefined);
                expect(res[screenshotName][0].isWithinMisMatchTolerance).toBe(true);
            }).call(done);
    });

    it('should take popover no title screenshot', function (done) {
        var screenshotName = 'popover_no_title',
            pageName = screenshotName + '_full';
        browser
            .url('/popover/fixtures/test.full.html')
            .click('#screenshot-popover-no-title a')
            .webdrivercss(pageName, [
                {
                    name: screenshotName,
                    elem: '#screenshot-popover-no-title'
                }
            ], function (err, res) {
                expect(err).toBe(undefined);
                expect(res[screenshotName][0].isWithinMisMatchTolerance).toBe(true);
            }).call(done);
    });

    it('should take popover top screenshot', function (done) {
        var screenshotName = 'popover_top',
            pageName = screenshotName + '_full';
        browser
            .url('/popover/fixtures/test.full.html')
            .click('#screenshot-popover-top button')
            .webdrivercss(pageName, [
                {
                    name: screenshotName,
                    elem: '#screenshot-popover-top'
                }
            ], function (err, res) {
                expect(err).toBe(undefined);
                expect(res[screenshotName][0].isWithinMisMatchTolerance).toBe(true);
            }).call(done);
    });

    it('should take popover bottom screenshot', function (done) {
        var screenshotName = 'popover_bottom',
            pageName = screenshotName + '_full';
        browser
            .url('/popover/fixtures/test.full.html')
            .click('#screenshot-popover-bottom button')
            .webdrivercss(pageName, [
                {
                    name: screenshotName,
                    elem: '#screenshot-popover-bottom'
                }
            ], function (err, res) {
                expect(err).toBe(undefined);
                expect(res[screenshotName][0].isWithinMisMatchTolerance).toBe(true);
            }).call(done);
    });

    it('should take popover left screenshot', function (done) {
        var screenshotName = 'popover_left',
            pageName = screenshotName + '_full';
        browser
            .url('/popover/fixtures/test.full.html')
            .click('#screenshot-popover-left button')
            .webdrivercss(pageName, [
                {
                    name: screenshotName,
                    elem: '#screenshot-popover-left'
                }
            ], function (err, res) {
                expect(err).toBe(undefined);
                expect(res[screenshotName][0].isWithinMisMatchTolerance).toBe(true);
            }).call(done);
    });

    it('should take popover right screenshot', function (done) {
        var screenshotName = 'popover_right',
            pageName = screenshotName + '_full';
        browser
            .url('/popover/fixtures/test.full.html')
            .click('#screenshot-popover-right button')
            .webdrivercss(pageName, [
                {
                    name: screenshotName,
                    elem: '#screenshot-popover-right'
                }
            ], function (err, res) {
                expect(err).toBe(undefined);
                expect(res[screenshotName][0].isWithinMisMatchTolerance).toBe(true);
            }).call(done);
    });


});
