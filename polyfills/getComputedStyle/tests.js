describe('getComputedStyle()', function () {
    function toCamelCase(str) {
        return str.replace(/-([a-z])/g, function (m1, m2) {
            return m2.toUpperCase();
        });
    }

    it('adds each style as an indexed property', function () {
        var bodyStyle = getComputedStyle(document.body);

        expect(bodyStyle).to.have.property('length');

        for (var i = 0; i < bodyStyle.length; i++) {
            expect(bodyStyle[i]).to.be.a('string');
            expect(bodyStyle[i]).to.equal(bodyStyle[i].toLowerCase());
        }
    });

    it('for each indexed style, has an own property with the value', function () {
        var bodyStyle = getComputedStyle(document.body);

        for (var i = 0; i < bodyStyle.length; i++) {
            console.log(i, bodyStyle[i], toCamelCase(bodyStyle[i]));
            expect(bodyStyle).to.have.property(toCamelCase(bodyStyle[i]));
        }
    });

    it('has a fontSize style in pixels', function () {
        var bodyStyle = getComputedStyle(document.body);

        expect(bodyStyle).to.have.property('fontSize');
        expect(bodyStyle.fontSize).to.be.a('string');
        expect(bodyStyle.fontSize).to.match(/\d+\.?\d*px/);
    });

});
